import {AkairoClient, CommandHandler } from "discord-akairo";

export class Client extends AkairoClient {

    private commandHandler: CommandHandler;

    public constructor(commandsFolder: string) {
        super();
        this.commandHandler = new CommandHandler(this, {
            directory: commandsFolder,
            prefix: ';',
            commandUtil: true
        });
        this.commandHandler.loadAll();
    }
    public reloadCommand(id: string) {
        this.commandHandler.reload(id);
    }
}