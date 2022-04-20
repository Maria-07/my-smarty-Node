const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("My over personal Smarty Smarty Node auto restart");
});

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Leanne Gr",
    username: "Bret",
    email: "Sincer@april.biz",
  },
  {
    id: 3,
    name: "Lee Graham",
    username: "Bret",
    email: "Sincre@april.biz",
  },
  {
    id: 4,
    name: "LeanGraham",
    username: "Bret",
    email: "Sin@april.biz",
  },
  {
    id: 5,
    name: "Lne Graham",
    username: "Bret",
    email: "Sre@april.biz",
  },
  {
    id: 6,
    name: "Leanne ",
    username: "Bret",
    email: "Sincf@april.biz",
  },
  {
    id: 7,
    name: "fe Graham",
    username: "Bret",
    email: "Sincef@april.biz",
  },
];

app.get("/users", (req, res) => {
  //filter by query
  console.log("query", req.query);
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const match = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(match);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
