import DatabaseManager from '@db/index';
import {eq} from "drizzle-orm";
import {options} from '@db/schema/options';
import {pokemon} from "@db/schema/pokemon.ts";

interface AssociativeArray {
    [key: string]: string
}

class pokemonGoApi{
    static baseurl:string = 'https://pokemon-go-api.github.io/pokemon-go-api/api'

    static async checkLastImportedVersion(section:string):Promise<{check: boolean, version: string}>{
        const dbManager = DatabaseManager.getInstance();

        const localVersion = await dbManager.query(async (db) => {
            return await db.select({version: options.value}).from(options).where(eq(options.key , 'Version-PokemonGoApi-'+section)).limit(1);
        });
        const response:Response = await fetch(this.baseurl + '/hashes.json', { cache: 'no-store' });
        const serverVersion:{sha512:AssociativeArray} = await response.json();
        if(1!==localVersion.length) return {check: false, version: serverVersion.sha512[section]}

        return {check: localVersion[0].version===serverVersion.sha512[section], version: serverVersion.sha512[section]}
    }
    static async updateLocalVersion(section: string, version: string){
        const dbManager = DatabaseManager.getInstance();
        return await dbManager.query(async (db) => {
            console.log('Updating local version');
            return await db.insert(options).values({
                key: 'Version-PokemonGoApi-' + section,
                value: version
            }).onConflictDoUpdate({
                target: options.key,
                set: {value: version}
            })
        });
    }

    static async getPokedex():Promise<Array<object>>{
        const response:Response = await fetch(this.baseurl + '/pokedex.json', { cache: 'no-store' });
        return await response.json()
    }

    static async importPokedex():Promise<string>{
        console.log('importPokedex');
        const apicheck = await this.checkLastImportedVersion('pokedex.json')
        if( apicheck.check ){
            return 'No new data in pokedex'
        } else {
            // pokedex.forEach((pokedexItem) => {
            //     const entry = new pokemon();
            // })
            this.updateLocalVersion('pokedex.json', apicheck.version)
            return 'data imported'
        }
    }
}

export default pokemonGoApi