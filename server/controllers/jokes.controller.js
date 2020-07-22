console.log("jokes.controller.js")

const Joke = require("../models/jokes.model");

class JokesController {

    create(req, res) {
        const newJoke = new Joke(req.body);
        newJoke.save()
            .then( () => res.json(newJoke) )
            .catch( errors => res.json(errors) );
    }

    getAll(req, res) {
        Joke.find()
            .then( joke => res.json(joke) )
            .catch( errors => res.json(errors) );
    }

    getOne(req, res) {
        Joke.find( {_id: req.params._id} )
            .then( oneJoke => res.json( {joke: oneJoke} ))
            .catch( errors => res.json(errors) );
    }

    update(req, res) {
        Joke.findByIdAndUpdate( {_id: req.params._id}, req.body)
            .then( updatedJoke => res.json( {joke: updatedJoke} ))
            .catch( errors => res.json(errors));
    }

    delete(req, res) {
        Joke.findByIdAndDelete( {_id: req.params._id} )
        .then( result => res.json( {result: result} ))
        .catch( errors => res.json(errors));
    }
}

module.exports = new JokesController();