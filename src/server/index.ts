import { CommandDefinition, ContextCreator, ExecutionRequest } from "../common/types";
import { Registry } from "../common/registry";

type LambdaServerOptions<T> = {
	createContext: ContextCreator<T>;
}

export const defaultContext: ContextCreator<{player: Player}> = (player) => ({player})

export class LambdaServer<Context> {
	private readonly contextCreator: ContextCreator<Context>
	private readonly registry = new Registry<Context>()

	constructor(opts: LambdaServerOptions<Context>) {
		this.contextCreator = opts.createContext
	}

	private async createContext(player: Player) {
		try {
			return await this.contextCreator(player)
		} catch (e) {
			return undefined
		}
	}

	addCommand(definition: CommandDefinition<Context>) {
		this.registry.add(definition)
	}

	async execute(player: Player, request: ExecutionRequest) {
		const command = this.registry.resolve(request.name)
		if (!command) return { success: false }

		const context = await this.createContext(player)
		if (!context) return { success: false }

		// TODO: validate args

		return command.exec(context as Context)
	}
}
