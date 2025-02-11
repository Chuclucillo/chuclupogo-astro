import { pgTable, integer, varchar } from 'drizzle-orm/pg-core';

export const types = pgTable('types', {
    id: integer('id').primaryKey(),
    name: varchar('name', { length: 50 }).notNull().unique(),
});