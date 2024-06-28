import { CommandDefinition, ContextCreator, ExecutionRequest } from "..";

type LambdaServerOptions<T> = {
	createContext: ContextCreator<T>;
}

export const defaultContext: ContextCreator<{player: Player}> = async (player) => ({player})

export class LambdaServer<Context>{
	private readonly commands: CommandDefinition<Context>[] = []
	private readonly contextCreator: ContextCreator<Context>

	constructor(opts: LambdaServerOptions<Context>) {
		this.contextCreator = opts.createContext
	}

	private resolveCommand(name: string) {
		return this.commands.find(c => typeIs(c.name, 'string') ? c.name === name : c.name.includes(name))
	}

	private async createContext(player: Player) {
		try {
			return await this.contextCreator(player)
		} catch (e) {
			return undefined
		}
	}

	addCommand(definition: CommandDefinition<Context>) {
		// TODO: Check for conflicts
		this.commands.push(definition)
	}

	async execute(player: Player, request: ExecutionRequest) {
		const context = await this.createContext(player)
		if (!context) return { success: false }

		const command = this.resolveCommand(request.name)
		if (!command) return { success: false }

		// TODO: validate args

		return command.exec(context as Context)
	}
}