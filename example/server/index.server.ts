import { LambdaServer, defaultContext } from "../../src"

const server = new LambdaServer({ createContext: defaultContext })

server.addCommand({
	name: 'test',
	exec: context => print(`Hello, ${context.player.Name}!`)
})
