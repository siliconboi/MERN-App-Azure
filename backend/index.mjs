import morgan from "morgan";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser"
import * as dotenv from "dotenv"
import fetch from "node-fetch";

dotenv.config()

const app = express();

app.use(morgan('dev'));
app.use(bodyParser());
app.use(cors());

app.get('/api', async(req,res)=>{
    const url = req.query.url+`&appid=ebaa7c546d35fc00f448466579bbd215`
const result = await fetch(url,
    {
    method:"GET",
    mode: "cors",
    headers:{
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    }
    })
console.log(url)
return res.json(result)
});

if(process.env.NODE_ENV === "production"){
    app.use(express.static('../client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, '../client', 'build','index.html')));
}

const port = process.env.PORT || 8080;

    app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}`);
});
