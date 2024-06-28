export type CommandDefinition = {
	name: string | string[];
	desc?: string;
	args?: ArgumentDefinition<unknown>[];
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
