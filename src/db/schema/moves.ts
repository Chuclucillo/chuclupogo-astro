import { pgTable, varchar, serial, integer, boolean } from 'drizzle-orm/pg-core'

export const moves = pgTable(
    'moves',
    {
        id:             serial('id').primaryKey(),
        name:           varchar('name',{ length: 50 }).notNull(),
        typeId:         integer('type_id',).notNull(),
        quickMove:      boolean('quick_move').default(true),
        energy:         integer('energy').default(0),
        power:          integer('power').default(0),
        duration:       integer('duration').default(0),
        elite:          boolean('elite').default(false),
    }
)
