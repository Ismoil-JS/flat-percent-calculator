import { Router } from "express";
import { HouseRouter } from "../module/house/house.routes.js";
import { UserRouter } from "../module/user/user.routes.js";
import { bankRouter } from "../module/banks/bank.routes.js";
import { CalculationRouter } from "../module/calculation/calculation.routes.js";

export const router = Router()
 .use(HouseRouter)
 .use(UserRouter)
 .use(bankRouter)
 .use(CalculationRouter)