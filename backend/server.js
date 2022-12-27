const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/goals", require("./routes/goal.route"));

app.listen(port, () => {
  console.log(`running on  port ${port}`);
});
