import express from "express";

import { getPokemon, getPokemonByName } from "../controller/pokemon.controller";
import { isAuth } from "../middleware/auth.middleware";

const router = express.Router();
router.use(express.json());

router.get("/", isAuth, getPokemon);
router.get("/:name", isAuth, getPokemonByName);
export default router;
