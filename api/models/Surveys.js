const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Survey = new Schema({
  title: { type: String, default: "Survey title" },
  user_email: String,
  code: Number,
  questions: [
    {
      code: Number,
      question: String,
      answers: Array,
      question_type: String, // 'checkbox', 'radio' or 'text'
    },
  ],
  creation_date: { type: Date, default: Date.now },
  public: { type: Boolean, default: true },
});

const Surveys = mongoose.model("Survey", Survey);
module.exports = Surveys;
