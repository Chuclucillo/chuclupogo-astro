import {pgTable, integer, serial, unique} from 'drizzle-orm/pg-core';
import { pokemon } from './pokemon';
import { types } from './types.ts';

export const pokemonTypes = pgTable('pokemon_types',
    {
        id: serial('id').primaryKey(),
        pokemonId: integer('pokemon_id').references(() => pokemon.id).notNull(),
        typeId: integer('type_id').references(() => types.id).notNull(),
    },
    (table) => ({
        constraints: {
            ctrPokemonType: unique('ctrPokemonType').on(table.pokemonId, table.typeId),
        }
    })
);