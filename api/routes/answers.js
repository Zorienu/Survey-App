const express = require("express");
const mongoose = require("mongoose");
const Answers = require("../models/Answer");

const router = express.Router();

router.get("/", (req, res) => {
  Answers.find()
    .exec()
    .then((x) => res.status(200).send(x));
});

// obtain all the answers with the specified code
router.get("/:code", (req, res) => {
  Answers.find({ survey_code: req.params.code })
    .exec()
    .then((x) => res.status(200).send(x));
});

router.post("/", (req, res) => {
  Answers.create(req.body).then((x) => res.status(201).send(x));
});

router.put("/:id", (req, res) => {
  Answers.findByIdAndUpdate(req.params.id, req.body)
    .exec()
    .then(() => res.sendStatus(204));
});

router.delete("/:id", (req, res) => {
  Answers.findByIdAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204));
});

module.exports = router;
