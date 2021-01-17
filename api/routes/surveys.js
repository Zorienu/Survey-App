const express = require("express");
const mongoose = require("mongoose");
const Surveys = require("../models/Surveys.js");

const router = express.Router();

router.get("/", (req, res) => {
  Surveys.find()
    .exec()
    .then((x) => res.status(200).send(x));
});

router.get("/:id", (req, res) => {
  Surveys.findById(req.params.id)
    .exec()
    .then((x) => res.status(200).send(x));
});

router.post("/", (req, res) => {
  Surveys.create(req.body).then((x) => res.status(201).send(x));
});

router.put("/:id", (req, res) => {
  Surveys.findByIdAndUpdate(req.params.id, req.body)
    .exec()
    .then(() => res.sendStatus(204));
});

router.delete("/:id", (req, res) => {
  Surveys.findByIdAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204));
});

module.exports = router;
