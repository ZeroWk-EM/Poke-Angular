import express, { response } from "express";

import axios from "axios";
import { ResponsePokedex } from "../interface/pokedex.interface";
import { ResponsePokemon } from "../interface/pokemon.interface";
import { isAuth } from "../middleware/auth.middleware";

const urlPokedex = "https://pokeapi.co/api/v2/pokemon";

const router = express.Router();
router.use(express.json());

router.get("/", async (req, res) => {
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
        },
      }) => ({
        name,
        front_default,
        types: types.map(({ type: { name } }) => name).join(),
        weight,
      })
    );
    res
      .status(200)
      .json({ results: result, totalPage: Math.ceil(response.data.count / 5) });
  } catch (error) {}
});

export default router;
