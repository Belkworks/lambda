import { CommandDefinition } from "./types";

export class Registry<Context> {
	private readonly commands: CommandDefinition<Context>[] = []

	add(definition: CommandDefinition<Context>) {}

	resolve(name: string) {
		return this.commands.find(c => c.name === name || c.aliases?.includes(name))
	}
}