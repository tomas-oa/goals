const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const { errorHandler } = require("./middleware/error.middleware");
const connectDB = require("./config/db");
const routes = require("./routes/index");
const cors = require("cors");

connectDB();

app.use(express.json());
app.use(cors());
app.use("/api", routes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`running on  port ${port}`);
});
