const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

// api to get instragram data
app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "sumit@kumar",
    followers: "100",
    follows: "10",
    date: "",
  };
  res.status(200).json(instaSocial);
});
// api to get facebook data
app.get("/api/v1/facebook", (req, res) => {
  const facebookSocial = {
    username: "kumar@sumit",
    followers: "1001",
    follows: "19",
    date: "",
  };
  res.status(200).json(facebookSocial);
});

// api to get linkedIn data
app.get("/api/v1/linkedIn", (req, res) => {
  const linkedInSocial = {
    username: "kumar@sumit11",
    followers: "10011",
    follows: "191",
    date: "",
  };
  res.status(200).json(linkedInSocial);
});
//this api will get whatever comes after v1
//rahul why >>> ????
//this api must always be at the bottom ask
app.get("/api/v1/:token", (req, res) => {
  // anything that comes after token will come in req.params.token
  console.log(req.params.token);
  res.status(200).json({ urlParams: req.params.token });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
