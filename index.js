const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");

app.use(expressLayouts);
app.use(express.static("public"));

app.use("/", require("./routes/first"));
app.use("/project", require("./routes/project"));
app.use("/resume", require("./routes/resume"));

app.listen(process.env.PORT || 3000, () => console.log("API running now"));
