const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const surveys = require("./routes/surveys");
const answers = require("./routes/answers");
const auth = require("./routes/auth");

const app = express();

app.use(cors());
app.use(bodyParser.json());

console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/api/surveys", surveys);
app.use("/api/answers", answers);
app.use("/api/auth", auth);

port = process.env.port || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
module.exports = app;
