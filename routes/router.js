import { Router } from "express";
import votoRoutes from "./votoRoutes.js";

const router = Router();

router.use("/voto", votoRoutes);

export default router