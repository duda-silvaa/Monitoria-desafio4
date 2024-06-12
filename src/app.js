import cors from "cors" // Grosseiramente, ele vai habilitar as APIs no navegador
import express, { json } from "express" // Framework que nos permite criar APIs no node de forma mais rápida
import authRouter from "./routers/authRouter.js";

const app = express();
app.use(json());
app.use(cors());
app.use(authRouter)

export default app;