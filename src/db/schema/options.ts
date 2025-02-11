import { pgTable, varchar } from "drizzle-orm/pg-core";

//ENTITY POKEMON
export const options = pgTable(
    'options',
    {
        key:    varchar('key', {length: 100}).primaryKey(),
        value:  varchar('value', {length: 250}),
    }
)