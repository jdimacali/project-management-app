const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const colors = require("colors");
const connectDB = require("./config/db");
const cors = require("cors");

var app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
