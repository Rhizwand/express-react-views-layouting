import express from "express";
import { createEngine } from "express-react-views";
import { index } from "./routes/index.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3000;
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
const option = {
  beautify: true,
  presets: [
    "@babel/preset-react",
    ["@babel/preset-env", { targets: { node: "current" } }],
  ],
};
app.engine("jsx", createEngine(option));

app.get("/", index);

app.listen(port, () => {
  console.log(`port listening at http://localhost:${port}`);
});
