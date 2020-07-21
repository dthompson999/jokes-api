console.log("jokes.routes.js");

const Jokes = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes", Jokes.getAll);
    app.post("/api/jokes/new", Jokes.create);
    app.get("/api/jokes/:_id", Jokes.getOne);
    app.put("/api/jokes/update/:_id", Jokes.update);
    app.delete("/api/jokes/delete/:_id", Jokes.delete);
}