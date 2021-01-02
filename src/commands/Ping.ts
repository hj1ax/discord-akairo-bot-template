import { Command } from "discord-akairo";
import { Message } from "discord.js";
import { Public } from "../utils";

@Public("ping")
export default class PingCommand extends Command {
	public exec(message: Message) {
		message.util.send(`Hi, my ping for now is ${this.client.ws.ping}ms. `);
	}
};
