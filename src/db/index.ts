import { drizzle } from 'drizzle-orm/node-postgres';
import { XataClient } from '@/src/xata';
import pg from 'pg';
import { XATA_API_KEY, XATA_BRANCH } from "astro:env/server";

const xata = new XataClient({
    apiKey: XATA_API_KEY,
    branch: XATA_BRANCH,
});
// export const client = new Client({ connectionString: xata.sql.connectionString });
// export const db = drizzle(client);

class DatabaseManager {
    private static instance: DatabaseManager;
    private readonly pool: pg.Pool;
    private readonly db: ReturnType<typeof drizzle>;

    private constructor() {
        this.pool = new pg.Pool({
            connectionString: xata.sql.connectionString
        });

        this.db = drizzle(this.pool);
    }

    public static getInstance(): DatabaseManager {
        if (!DatabaseManager.instance) {
            DatabaseManager.instance = new DatabaseManager();
        }
        return DatabaseManager.instance;
    }

    public async query<T>(callback: (db: ReturnType<typeof drizzle>) => Promise<T>): Promise<T> {
        try {
            return await callback(this.db);
        } catch (error) {
            console.error('Error executing query:', error);
            throw error;
        }
    }

    public async closeConnection(): Promise<void> {
        await this.pool.end();
    }
}

export default DatabaseManager;