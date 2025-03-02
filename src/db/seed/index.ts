import {options} from "@db/schema/options.ts";

export const pokemonTypes = [
    { id: 1, name: 'Normal' },    // id: 1
    { id: 2, name: 'Fire' },      // id: 2
    { id: 3, name: 'Water' },     // id: 3
    { id: 4, name: 'Electric' },  // id: 4
    { id: 5, name: 'Grass' },     // id: 5
    { id: 6, name: 'Ice' },       // id: 6
    { id: 7, name: 'Fighting' },  // id: 7
    { id: 8, name: 'Poison' },    // id: 8
    { id: 9, name: 'Ground' },    // id: 9
    { id: 10, name: 'Flying' },    // id: 10
    { id: 11, name: 'Psychic' },   // id: 11
    { id: 12, name: 'Bug' },       // id: 12
    { id: 13, name: 'Rock' },      // id: 13
    { id: 14, name: 'Ghost' },     // id: 14
    { id: 15, name: 'Dragon' },    // id: 15
    { id: 16, name: 'Dark' },      // id: 16
    { id: 17, name: 'Steel' },     // id: 17
    { id: 18, name: 'Fairy' },     // id: 18
];
const typeEffectiveness = [
    { attackingTypeId: 1, defendingTypeId: 13, multiplier: 0.625 },
    { attackingTypeId: 1, defendingTypeId: 14, multiplier: 0.390625 },
    { attackingTypeId: 1, defendingTypeId: 17, multiplier: 0.625 },
    { attackingTypeId: 2, defendingTypeId: 2, multiplier: 0.625 },
    { attackingTypeId: 2, defendingTypeId: 3, multiplier: 0.625 },
    { attackingTypeId: 2, defendingTypeId: 5, multiplier: 1.6 },
    { attackingTypeId: 2, defendingTypeId: 6, multiplier: 1.6 },
    { attackingTypeId: 2, defendingTypeId: 12, multiplier: 1.6 },
    { attackingTypeId: 2, defendingTypeId: 13, multiplier: 0.625 },
    { attackingTypeId: 2, defendingTypeId: 15, multiplier: 0.625 },
    { attackingTypeId: 2, defendingTypeId: 17, multiplier: 1.6 },
    { attackingTypeId: 3, defendingTypeId: 2, multiplier: 1.6 },
    { attackingTypeId: 3, defendingTypeId: 3, multiplier: 0.625 },
    { attackingTypeId: 3, defendingTypeId: 5, multiplier: 0.625 },
    { attackingTypeId: 3, defendingTypeId: 9, multiplier: 1.6 },
    { attackingTypeId: 3, defendingTypeId: 13, multiplier: 1.6 },
    { attackingTypeId: 3, defendingTypeId: 15, multiplier: 0.625 },
    { attackingTypeId: 4, defendingTypeId: 3, multiplier: 1.6 },
    { attackingTypeId: 4, defendingTypeId: 4, multiplier: 0.625 },
    { attackingTypeId: 4, defendingTypeId: 5, multiplier: 0.625 },
    { attackingTypeId: 4, defendingTypeId: 9, multiplier: 0.390625 },
    { attackingTypeId: 4, defendingTypeId: 10, multiplier: 1.6 },
    { attackingTypeId: 4, defendingTypeId: 15, multiplier: 0.625 },
    { attackingTypeId: 5, defendingTypeId: 2, multiplier: 0.625 },
    { attackingTypeId: 5, defendingTypeId: 3, multiplier: 1.6 },
    { attackingTypeId: 5, defendingTypeId: 5, multiplier: 0.625 },
    { attackingTypeId: 5, defendingTypeId: 9, multiplier: 1.6 },
    { attackingTypeId: 5, defendingTypeId: 10, multiplier: 0.625 },
    { attackingTypeId: 5, defendingTypeId: 12, multiplier: 0.625 },
    { attackingTypeId: 5, defendingTypeId: 13, multiplier: 1.6 },
    { attackingTypeId: 5, defendingTypeId: 15, multiplier: 0.625 },
    { attackingTypeId: 5, defendingTypeId: 17, multiplier: 0.625 },
    { attackingTypeId: 6, defendingTypeId: 2, multiplier: 0.625 },
    { attackingTypeId: 6, defendingTypeId: 3, multiplier: 0.625 },
    { attackingTypeId: 6, defendingTypeId: 5, multiplier: 1.6 },
    { attackingTypeId: 6, defendingTypeId: 6, multiplier: 0.625 },
    { attackingTypeId: 6, defendingTypeId: 9, multiplier: 1.6 },
    { attackingTypeId: 6, defendingTypeId: 10, multiplier: 1.6 },
    { attackingTypeId: 6, defendingTypeId: 15, multiplier: 1.6 },
    { attackingTypeId: 6, defendingTypeId: 17, multiplier: 0.625 },
    { attackingTypeId: 7, defendingTypeId: 1, multiplier: 1.6 },
    { attackingTypeId: 7, defendingTypeId: 6, multiplier: 1.6 },
    { attackingTypeId: 7, defendingTypeId: 10, multiplier: 0.625 },
    { attackingTypeId: 7, defendingTypeId: 11, multiplier: 0.625 },
    { attackingTypeId: 7, defendingTypeId: 12, multiplier: 0.625 },
    { attackingTypeId: 7, defendingTypeId: 13, multiplier: 1.6 },
    { attackingTypeId: 7, defendingTypeId: 14, multiplier: 0.390625 },
    { attackingTypeId: 7, defendingTypeId: 16, multiplier: 1.6 },
    { attackingTypeId: 7, defendingTypeId: 17, multiplier: 1.6 },
    { attackingTypeId: 7, defendingTypeId: 18, multiplier: 0.625 },
    { attackingTypeId: 8, defendingTypeId: 5, multiplier: 1.6 },
    { attackingTypeId: 8, defendingTypeId: 8, multiplier: 0.625 },
    { attackingTypeId: 8, defendingTypeId: 9, multiplier: 0.625 },
    { attackingTypeId: 8, defendingTypeId: 13, multiplier: 0.625 },
    { attackingTypeId: 8, defendingTypeId: 14, multiplier: 0.625 },
    { attackingTypeId: 8, defendingTypeId: 17, multiplier: 0.390625 },
    { attackingTypeId: 8, defendingTypeId: 18, multiplier: 1.6 },
    { attackingTypeId: 9, defendingTypeId: 2, multiplier: 1.6 },
    { attackingTypeId: 9, defendingTypeId: 4, multiplier: 1.6 },
    { attackingTypeId: 9, defendingTypeId: 5, multiplier: 0.625 },
    { attackingTypeId: 9, defendingTypeId: 8, multiplier: 1.6 },
    { attackingTypeId: 9, defendingTypeId: 10, multiplier: 0.390625 },
    { attackingTypeId: 9, defendingTypeId: 12, multiplier: 0.625 },
    { attackingTypeId: 9, defendingTypeId: 13, multiplier: 1.6 },
    { attackingTypeId: 9, defendingTypeId: 17, multiplier: 1.6 },
    { attackingTypeId: 10, defendingTypeId: 4, multiplier: 0.625 },
    { attackingTypeId: 10, defendingTypeId: 5, multiplier: 1.6 },
    { attackingTypeId: 10, defendingTypeId: 7, multiplier: 1.6 },
    { attackingTypeId: 10, defendingTypeId: 12, multiplier: 1.6 },
    { attackingTypeId: 10, defendingTypeId: 13, multiplier: 0.625 },
    { attackingTypeId: 10, defendingTypeId: 17, multiplier: 0.625 },
    { attackingTypeId: 11, defendingTypeId: 7, multiplier: 1.6 },
    { attackingTypeId: 11, defendingTypeId: 8, multiplier: 1.6 },
    { attackingTypeId: 11, defendingTypeId: 11, multiplier: 0.625 },
    { attackingTypeId: 11, defendingTypeId: 16, multiplier: 0.390625 },
    { attackingTypeId: 11, defendingTypeId: 17, multiplier: 0.625 },
    { attackingTypeId: 12, defendingTypeId: 2, multiplier: 0.625 },
    { attackingTypeId: 12, defendingTypeId: 5, multiplier: 1.6 },
    { attackingTypeId: 12, defendingTypeId: 7, multiplier: 0.625 },
    { attackingTypeId: 12, defendingTypeId: 8, multiplier: 0.625 },
    { attackingTypeId: 12, defendingTypeId: 10, multiplier: 0.625 },
    { attackingTypeId: 12, defendingTypeId: 11, multiplier: 1.6 },
    { attackingTypeId: 12, defendingTypeId: 14, multiplier: 0.625 },
    { attackingTypeId: 12, defendingTypeId: 16, multiplier: 1.6 },
    { attackingTypeId: 12, defendingTypeId: 17, multiplier: 0.625 },
    { attackingTypeId: 12, defendingTypeId: 18, multiplier: 0.625 },
    { attackingTypeId: 13, defendingTypeId: 2, multiplier: 1.6 },
    { attackingTypeId: 13, defendingTypeId: 6, multiplier: 1.6 },
    { attackingTypeId: 13, defendingTypeId: 7, multiplier: 0.625 },
    { attackingTypeId: 13, defendingTypeId: 9, multiplier: 0.625 },
    { attackingTypeId: 13, defendingTypeId: 10, multiplier: 1.6 },
    { attackingTypeId: 13, defendingTypeId: 12, multiplier: 1.6 },
    { attackingTypeId: 13, defendingTypeId: 17, multiplier: 0.625 },
    { attackingTypeId: 14, defendingTypeId: 1, multiplier: 0.390625 },
    { attackingTypeId: 14, defendingTypeId: 11, multiplier: 1.6 },
    { attackingTypeId: 14, defendingTypeId: 14, multiplier: 1.6 },
    { attackingTypeId: 14, defendingTypeId: 16, multiplier: 0.625 },
    { attackingTypeId: 15, defendingTypeId: 15, multiplier: 1.6 },
    { attackingTypeId: 15, defendingTypeId: 17, multiplier: 0.625 },
    { attackingTypeId: 15, defendingTypeId: 18, multiplier: 0.390625 },
    { attackingTypeId: 16, defendingTypeId: 7, multiplier: 0.625 },
    { attackingTypeId: 16, defendingTypeId: 11, multiplier: 1.6 },
    { attackingTypeId: 16, defendingTypeId: 14, multiplier: 1.6 },
    { attackingTypeId: 16, defendingTypeId: 16, multiplier: 0.625 },
    { attackingTypeId: 16, defendingTypeId: 18, multiplier: 0.625 },
    { attackingTypeId: 17, defendingTypeId: 2, multiplier: 0.625 },
    { attackingTypeId: 17, defendingTypeId: 3, multiplier: 0.625 },
    { attackingTypeId: 17, defendingTypeId: 4, multiplier: 0.625 },
    { attackingTypeId: 17, defendingTypeId: 6, multiplier: 1.6 },
    { attackingTypeId: 17, defendingTypeId: 13, multiplier: 1.6 },
    { attackingTypeId: 17, defendingTypeId: 17, multiplier: 0.625 },
    { attackingTypeId: 17, defendingTypeId: 18, multiplier: 1.6 },
    { attackingTypeId: 18, defendingTypeId: 2, multiplier: 0.625 },
    { attackingTypeId: 18, defendingTypeId: 7, multiplier: 1.6 },
    { attackingTypeId: 18, defendingTypeId: 8, multiplier: 0.625 },
    { attackingTypeId: 18, defendingTypeId: 15, multiplier: 1.6 },
    { attackingTypeId: 18, defendingTypeId: 16, multiplier: 1.6 },
    { attackingTypeId: 18, defendingTypeId: 17, multiplier: 0.625 }
];
import DatabaseManager from '@db/index';
import { types } from '@db/schema/types.ts';
import { effectiveness} from "@db/schema/effectiveness.ts";
import {eq} from "drizzle-orm";

async function seed() {
    const dbManager = DatabaseManager.getInstance();
    // 1. Insertar tipos Pokémon
    console.log('Seeding types...');
    await dbManager.query(async (db) => {
        await db.delete(types);
        await db.insert(types).values(pokemonTypes);
    });

    // 2. Insertar efectividades
    console.log('Seeding types effectiveness...');
    await dbManager.query(async (db) => {
        await db.delete(effectiveness);
        await db.insert(effectiveness).values(typeEffectiveness);
    });
    console.log('Seeding completed!');
}

seed().catch((err) => {
    console.error('Seeding error:', err);
    process.exit(1);
});