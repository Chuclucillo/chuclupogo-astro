import type { APIRoute } from 'astro';
import pokemonGoAPI from "@/src/lib/externalAPI/pokemonGoAPI";

export const GET: APIRoute = async ({ params, request }) => {
    const headers = new Headers({
        "Content-Type": "application/json; charset=utf-8",
    })
    const response = await pokemonGoAPI.importPokedex();
    return new Response(
        JSON.stringify({
            success: true,
            message: "Import completed successfully",
            debug: response,
        }),
        {
            headers,
            status: 200
        }
    )
}