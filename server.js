const express = require("express");
const mongo = require("mongoose");
const logger = require("morgan");

const app = express();

// const logger = morgan('combined')

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(logger("dev"))
app.use(logger("combined"));

//Add Mongoose.connect
mongo.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//routes
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});



