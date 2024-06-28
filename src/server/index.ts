import { ServerCommandDefinition } from "./types";

let commands = new Array<ServerCommandDefinition>();

export namespace LambdaServer {
	export function createCommand(cmd: ServerCommandDefinition) {
		// TODO: check for conflicts
		commands.push(cmd);
	}
}