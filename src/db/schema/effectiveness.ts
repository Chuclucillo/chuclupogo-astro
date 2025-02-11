import {pgTable, decimal, integer, index, serial, unique} from 'drizzle-orm/pg-core';
import { types } from './types.ts';

export const effectiveness = pgTable('effectiveness', {
    id: serial('id').primaryKey(),
    attackingTypeId: integer('attacking_type_id')
        .references(() => types.id)
        .notNull(),
    defendingTypeId: integer('defending_type_id')
        .references(() => types.id)
        .notNull(),
    multiplier: decimal('multiplier', { precision: 4, scale: 3 })
        .notNull()
        .default('1.0'),
}, (table) => ({
    constraints: {
        ctrAttDef: unique('ctrAttDef').on(table.attackingTypeId, table.defendingTypeId),
    },
    indexes: {
        attackingTypeIdx: index('attacking_type_idx').on(table.attackingTypeId),
        defendingTypeIdx: index('defending_type_idx').on(table.defendingTypeId),
    }
}));