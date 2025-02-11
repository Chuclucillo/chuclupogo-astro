import { drizzle } from 'drizzle-orm/node-postgres';
import { XataClient } from '../xata';
import pg from 'pg';
import { configDotenv } from "dotenv";
configDotenv();

const Client = pg.Client;
const xata = new XataClient({
    apiKey: process.env.XATA_API_KEY,
    branch: process.env.XATA_BRANCH,
});
export const client = new Client({ connectionString: xata.sql.connectionString });
export const db = drizzle(client);