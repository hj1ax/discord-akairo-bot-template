import { resolve } from 'path';

import { Client } from './core/client';

const client = new Client(resolve(__dirname, 'commands'));
client.login(process.env.TOKEN);
