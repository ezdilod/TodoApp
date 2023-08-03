import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let todoArray = [];
let todoArrayWork = [];

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    todoArray: todoArray,
  });
});

app.post("/", (req, res) => {
  let userInput = req.body["newItem"];
  todoArray.push(userInput);
  //   console.log(userInput);
  //   console.log(todoArray);
  res.render("index.ejs", {
    todoArray: todoArray,
  });
});

app.get("/work", (req, res) => {
  res.render("work.ejs", {
    todoArrayWork: todoArrayWork,
  });
});

app.post("/work", (req, res) => {
  let userInput = req.body["newItem"];
  todoArrayWork.push(userInput);
  //   console.log(userInput);
  //   console.log(todoArrayWork);
  res.render("work.ejs", {
    todoArrayWork: todoArrayWork,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
