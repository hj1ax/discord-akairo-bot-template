import { Command, CommandOptions } from 'discord-akairo';

/**
 * Configures a public command
 */
export const Public = (id: string, options: CommandOptions = {}) => {
	options.ownerOnly = false;
	setAliases(id, options);
	return <T extends new (...args: any[]) => Command>(target: T): T => {
		return class extends target {
			constructor(...args: any[]) {
				super(id, options);
				void args;
			}
		};
	};
};

/**
 * Configures a private command
 */
export const Private = (id: string, options: CommandOptions = {}) => {
	options.ownerOnly = true;
	setAliases(id, options);
	return <T extends new (...args: any[]) => Command>(target: T): T => {
		return class extends target {
			constructor(...args: any[]) {
				super(id, options);
				void args;
			}
		};
	};
};

const setAliases = (id: string, options: CommandOptions) => {
	if (options.aliases && !(id in options.aliases)) {
		options.aliases.unshift(id);
	} else {
		options.aliases = [id];
	}
};
