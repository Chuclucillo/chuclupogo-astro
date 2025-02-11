import { pgTable, varchar, serial, integer, real, index } from 'drizzle-orm/pg-core'

//ENTITY POKEMON
export const pokemon = pgTable(
    'pokemon',
    {
        id:             serial('id').primaryKey(),
        dexNumber:      integer('dex_number').notNull(),
        generation:     integer('generation').default(1),
        name:           varchar('name',{ length: 50 }).notNull(),

        //Base Stats
        hp:             integer('hp').default(1),
        attack:         integer('attack').default(1),
        defense:        integer('defense').default(1),
        specialAttack:  integer('special_attack').default(1),
        specialDefense: integer('special_defense').default(1),
        speed:          integer('speed').default(1),

        //extra
        variant:        varchar('variant', {length: 20}).default('normal'),  //
        rarity:         varchar('rarity',{ length: 20 }).default('regular'), //Legendary, Mythic, Ultra beast
        gender:         real('gender').default(0.5),
        candyDistance:  integer('candy_distance').default(1),
    },
    (table) => ({
        numberIdx:      index("number_idx").on(table.dexNumber),
    })
)