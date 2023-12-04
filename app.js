import express from "express"
import router from "./routes/router.js";
import { config } from "./config/config.js";
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use("/api", router);

app.listen(config.serverPort, () => {
    console.log("El servidor esta funcionando")
});