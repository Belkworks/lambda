import { CommandDefinition } from "../common/types";

type ExecutionContext = {}

export type ServerCommandDefinition = CommandDefinition & {
	execute: (ctx: ExecutionContext) => void |Promise<void>
}