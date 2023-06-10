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
        stats: stats.map((item) => ({[item.stat.name]:item.base_stat}))
      })
    );
    res
      .status(200)
      .json({ results: result, totalPage: Math.ceil(response.data.count / 5) });
  } catch (error) {}
};
