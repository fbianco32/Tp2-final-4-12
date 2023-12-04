import { Router } from "express";
import VotoController from "../controllers/VotoController.js";
import votoValidationMiddleware from "../middlewares/votoValidator.js";

const votoRoutes = Router()
const votoController = new VotoController()

//CRUD ROLES
votoRoutes.post("", votoValidationMiddleware,  votoController.createVoto)
votoRoutes.get("/byZona", votoController.getAllVotosByZona)

export default votoRoutes