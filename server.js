const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api-routes/items");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Connect to mongoose
mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/MERN_shopping")
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

// Use Routes
app.use("/api/items", items);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));

