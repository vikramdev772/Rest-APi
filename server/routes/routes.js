const r = require("express").Router();

let errorCount = 0;
let requestCount = 0;
let numberofrequest = {};

setInterval(() => {
    numberofrequest = {};
}, 1000);

r.use(function(req, res, next) {
    requestCount = requestCount + 1;
    next();
});

r.get("/user", (req, res) => {
    res.status(200).json({ name: "john" });
});

r.get("/v1", (req, res) => {
    throw new Error("User not found");
    res.status(200).json({ name: "Mark" });
});

r.get("/v", (req, res) => {
    let a; // undefined
    let b = a.length;
    res.status(200).json({ msg: 'created' });
});

r.get("/requestCount", function(req, res) {
    res.status(200).json({ requestCount });
});

r.get("/errorcount", (req, res) => {
    res.status(200).json({ errorCount });
});

r.use(function(err, req, res, next) {
    errorCount = errorCount + 1;
    res.status(404).send({});
});

module.exports = r;
