import express from "express";
import {PORT,dbconnection} from "./config.js";

const app = express();

app.listen(5555,() => {

    console.log("port : 5555")
})

