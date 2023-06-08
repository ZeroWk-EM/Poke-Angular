import express from "express";
import {
  loginUser,
  registerUser,
  validateUser,
} from "../controller/auth.controller";
import {
  checkBodyValid,
  checkErrors,
  credentialsValidation,
  emailUnique,
  userValidation,
} from "../middleware/auth.middleware";
import { check } from "express-validator";

const router = express.Router();
router.use(express.json());

router.post(
  "/register",
  checkBodyValid,
  userValidation,
  emailUnique,
  checkErrors,
  registerUser
);

router.post("/login", credentialsValidation, checkErrors, loginUser);

router.get(
  "/validate/:verifytoken",
  check("verifytoken").isString().notEmpty(),
  checkErrors,
  validateUser
);

router.get("validate/:verifytoken", validateUser);
export default router;
