const express = require('express');
const app = express();
const sequelize = require('./database')
const RecipeRoutes = require("./src/routes/RecipeRoutes");

sequelize.sync().then(() => console.log("db is ready"))

app.use(express.json());

app.listen(8080, () => {
    console.log("app is running");
});

app.use("/api", RecipeRoutes);
