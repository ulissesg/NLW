import "reflect-metadata"; 
import express from "express";
import {router} from "./routers";

import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, ()=> console.log("server ir running NLW"));