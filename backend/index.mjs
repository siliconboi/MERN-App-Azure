import morgan from "morgan";
import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(cors());

app.get("/api", cors(), async (req, res) => {
  const url = req.query.url + `&lon=${req.query.lon}` + process.env.API_KEY;
  const result = await fetch(url);
  const data = await result.json();
  return res.json(data);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"))
  );
}

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
