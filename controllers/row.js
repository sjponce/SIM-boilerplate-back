//File: controllers/rows.js
var mongoose = require('mongoose');
var Row = mongoose.model('row');

//GET - Return all rows in the DB
exports.findAll = async function(req, res) {
	const { limit, skip } = req.query;
    const rows = await Row.find().limit(limit).skip(skip);
    res.status(200).send(rows);
};

//GET - Return all rows in the DB
exports.generate = async function(req, res) {
    await Row.deleteMany({});
	const { n } = req.query;

    for (let i = 0; i < n; i++) {
        const doc = {name:"asd", i};
        await Row.insertMany([doc])
    }
    res.status(200).send(true);
};
