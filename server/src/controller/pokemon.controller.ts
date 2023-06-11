import axios from "axios";
import { Request, Response } from "express";
import { ResponsePokedex } from "../interface/pokedex.interface";
import { ResponsePokemon } from "../interface/pokemon.interface";

const urlPokedex = "https://pokeapi.co/api/v2/pokemon";

export const getPokemon = async (req: Request, res: Response) => {
  try {
    const response = await axios.get<ResponsePokedex>(
      `${urlPokedex}?offset=${(Number(req.query.page) - 1) * 5}&limit=5`
    );
    const pokemonsDetails = await Promise.all(
      response.data.results.map(({ url }) => axios.get<ResponsePokemon>(url))
    );
    const result = pokemonsDetails.map(
      ({
        data: {
          name,
          sprites: { front_default },
          types,
          weight,
          stats,
        },
      }) => ({
        name,
        front_default,
        types: types.map(({ type: { name } }) => name).join(),
        weight,
        stats: stats.map((item) => ({
          stats_name: item.stat.name,
          basic_stat: item.base_stat,
        })),
      })
    );
    return res
      .status(200)
      .json({ results: result, totalPage: Math.ceil(response.data.count / 5) });
  } catch (error) {
    console.log("GAY HAI CAUSATO UN ERRORE", error);
  }
};

export const getPokemonByName = async (req: Request, res: Response) => {
  const pokemonName = req.params.name;
  try {
    const response = await axios.get<ResponsePokemon>(
      `${urlPokedex}/${pokemonName}`
    );
    if (response) {
      const pokemon = {
        name: response.data.name,
        sprites: response.data.sprites.front_default,
        types: response.data.types.map(({ type: { name } }) => name).join(),
        weight: response.data.weight,
        stats: response.data.stats.map((item) => ({
          stats_name: item.stat.name,
          basic_stat: item.base_stat,
        })),
      };
      return res.status(200).json({ result: pokemon, id: response.data.id });
    }
  } catch (error) {
    return res.status(404).json({ message: "Pokemon non found" });
  }
};
