import { Router } from "express";
import bankController from "./bank.controller.js";
import VerifyAccessMiddleware from "../../middleware/id-verify.middleware.js";

const router = Router();

export const bankRouter = router
    .get("/banks", bankController.getBanks)
    .post("/bank", VerifyAccessMiddleware, bankController.createBank)
    .patch("/bank/:id", VerifyAccessMiddleware, bankController.updateBank)
    .delete("/bank/:id", VerifyAccessMiddleware, bankController.deleteBank);

