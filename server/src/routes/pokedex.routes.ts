import express from "express";

import { getPokemon, getPokemonByName } from "../controller/pokemon.controller";

const router = express.Router();
router.use(express.json());

router.get("/", getPokemon);
router.get(":name", getPokemonByName);
export default router;
