export type CommandDefinition<T> = {
	name: string;
	aliases?: string[];
	desc?: string;
	// args?: ArgumentDefinition<unknown>[];
	exec: (context: T) => Promise<void> | void;
};

export type ArgumentDefinition<T> = {
	name?: string;
	desc?: string;
	type: TypeDefinition<T>;
};

export type TypeDefinition<T> = {
	name: string;
	transform: (value: unknown) => T;
	validate: (value: unknown) => value is T;
};

export type ContextCreator<Context> = (player: Player) => Promise<Context> | Context

export type ExecutionRequest = {
	name: string;
	args: unknown[];
}