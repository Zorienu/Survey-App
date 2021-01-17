const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const surveys = require("./routes/surveys");
const answers = require("./routes/answers");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const MONGO_URI =
  "mongodb://zorienu:java1094@cluster0-shard-00-00.w3vb3.mongodb.net:27017,cluster0-shard-00-01.w3vb3.mongodb.net:27017,cluster0-shard-00-02.w3vb3.mongodb.net:27017/surveyApp-db?ssl=true&replicaSet=atlas-g4fd07-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use("/api/surveys", surveys);
app.use("/api/answers", answers);

port = process.env.port || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
