const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./database')
const RecipeRoutes = require("./src/routes/RecipeRoutes");

sequelize.sync().then(() => console.log("db is ready"))

app.use(express.json());

app.listen(8000, () => {
    console.log("app is running");
});

app.use(cors({
    origin: '*'
}));

app.use("/api", RecipeRoutes);
