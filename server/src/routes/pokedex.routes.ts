import express from "express";

import { getPokemon } from "../controller/pokemon.controller";

const router = express.Router();
router.use(express.json());

router.get("/", getPokemon);

export default router;
