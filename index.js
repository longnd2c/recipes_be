const express = require('express');
const app = express();
const sequelize = require('./database')
const RecipeRoutes = require("./src/routes/RecipeRoutes");
const cors = require('cors');
require('dotenv').config();

app.use(express.json());

sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
    console.log("app is running");
});

app.use(cors({
    origin: '*'
}));

app.use("/api", RecipeRoutes);
