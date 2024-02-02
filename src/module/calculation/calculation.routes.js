import { Router } from "express";
import calculationController from "./calculation.controller.js";

const router = Router();
 
export const CalculationRouter = router
  .post("/calculate", calculationController.Calculate)