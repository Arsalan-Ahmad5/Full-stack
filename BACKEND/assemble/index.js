import express from "express";
import student from "./routes/student.js";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/student", student);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});