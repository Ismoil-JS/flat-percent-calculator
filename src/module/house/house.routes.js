import { Router } from "express";
import HouseController from "./house.controller.js";
import VerifyAccessMiddleware from "../../middleware/id-verify.middleware.js";


const router = Router();
export const HouseRouter = router
    .get("/companies", HouseController.getCompanies)
    .post("/company", VerifyAccessMiddleware, HouseController.createCompany)
    .patch("/company/:id", VerifyAccessMiddleware, HouseController.updateCompany)
    .delete("/company/:id", VerifyAccessMiddleware, HouseController.deleteCompany)
    // THIS PART IS FOR BRANCHES
    .get("/branches", HouseController.getBranches)
    .post("/branch", VerifyAccessMiddleware, HouseController.createBranch)
    .patch("/branch/:id", VerifyAccessMiddleware, HouseController.updateBranch)
    .delete("/branch/:id", VerifyAccessMiddleware, HouseController.deleteBranch)
    // THIS PART IS FOR ROOMS
    .get("/rooms", HouseController.getRooms)
    .post("/room", VerifyAccessMiddleware, HouseController.createRoom)
    .patch("/room/:id", VerifyAccessMiddleware, HouseController.updateRoom)
    .delete("/room/:id", VerifyAccessMiddleware, HouseController.deleteRoom)                    

  