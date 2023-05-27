import morgan from "morgan";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser"
import * as dotenv from "dotenv"
import mongoose from "mongoose";
import { postRouter } from "./routes/post.mjs";

dotenv.config()

const app = express();

app.use(morgan.dev());
app.use(bodyParser());
app.use(cors());

app.use('/api/', postRouter);

if(process.env.NODE_ENV === "production"){
    app.use(express.static('../client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, '../client', 'build','index.html')));
}

const port = process.env.PORT || 8080;

mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true}).then(
    app.listen(port, ()=>{
    console.log(`listening on ${process.env.PORT}`);
}));
