console.log("server.js");

const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();
const db_name = "jokes_db";

app.use(cors());
app.use(express.json());

require("./config/mongoose")(db_name);
require("./routes/jokes.routes")(app);


app.listen(port, () => console.log(`Listening on port ${port}`));