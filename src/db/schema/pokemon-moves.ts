import {pgTable, integer, serial, unique} from 'drizzle-orm/pg-core';
import { pokemon } from './pokemon';
import { moves } from './moves.ts';

export const pokemonMoves = pgTable('pokemon_moves',
    {
        id: serial('id').primaryKey(),
        pokemonId: integer('pokemon_id').references(() => pokemon.id).notNull(),
        moveId: integer('move_id').references(() => moves.id).notNull(),
    },
    (table) => ({
        constraints: {
            ctrPokemonMove: unique('ctrPokemonMove').on(table.pokemonId, table.moveId),
        }
    })
);