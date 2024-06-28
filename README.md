# λ Lambda
A command console for Roblox.

## Installation
**1.** Add Belkworks to your `.npmrc`
```ini
@belkworks:registry=https://npm.pkg.github.com
```
**2.** Install the package:
```sh
pnpm add @belkworks/lambda
```
**3.** Add `node_modules/@belkworks` to `typeRoots` in `tsconfig.json`:
```json
"compilerOptions": {
	"typeRoots": ["node_modules/@rbxts", "node_modules/@belkworks"]
}
```
**4.** Add `node_modules/@belkworks` to your Rojo `project.json`:
```json
"node_modules": {
	"@rbxts": {
		"$path": "node_modules/@rbxts"
	},
	"@belkworks": {
		"$path": "node_modules/@belkworks"
	}
}
```

## Usage

```ts
import Lambda from '@belkworks/lambda'
```

## Inspiration
The reason for the project is to provide an alternative to [Cmdr](https://github.com/evaera/Cmdr), which has a monopoly on command consoles.
[Zircon](https://github.com/roblox-aurora/zircon) was a promising candidate, but is no longer maintained.