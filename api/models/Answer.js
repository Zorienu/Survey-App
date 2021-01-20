const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Answer = new Schema({
  survey_code: Number,
  answers: [
    {
      code: Number,
      answer: String,
    },
  ],
  user_name: String,
  user_email: String,
});

const Answers = mongoose.model("Answer", Answer);
module.exports = Answers;
