const express = require("express");
const bodyParser = require("body-parser");
const routerApi = require("./route/index.js");
const path = require("path");
const cors = require("cors");


const app = express();
const port = 3000;


app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb" }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use("/api", routerApi);

app.listen(port, () => {
    console.log(`running port ${port}`);
})

