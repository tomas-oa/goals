const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const { errorHandler } = require("./middleware/error.middleware");
const connectDB = require("./config/db");

connectDB();

app.use(express.json());
app.use("/api/goals", require("./routes/goal.route"));
app.use("/api/users", require("./routes/user.route"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`running on  port ${port}`);
});
