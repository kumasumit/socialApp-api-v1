const express = require("express");
const format = require("date-format");
const app = express();
//swagger docs related
const swaggerUi = require("swagger-ui-express");
//yaml docs related, here we are using yaml to load the swagger docs
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//ask rahul >> why ??
// 5000|| process.env.port was throwing an error in production mode
const port = process.env.PORT || 5000;

//api to get the root of the app.
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World by Kumar Sumit to railways from node-express app!",
    date: format.asString("dd-MM-yyyy", new Date()),
  });
});

// api to get instragram data
app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "sumit@kumar",
    followers: "100",
    follows: "10",
    date: format.asString("dd-MM-yyyy", new Date()),
  };
  res.status(200).json(instaSocial);
});
// api to get facebook data
app.get("/api/v1/facebook", (req, res) => {
  const facebookSocial = {
    username: "kumar@sumit",
    followers: "1001",
    follows: "19",
    date: format.asString("dd-MM-yyyy", new Date()),
  };
  res.status(200).json(facebookSocial);
});

// api to get linkedIn data
app.get("/api/v1/linkedIn", (req, res) => {
  const linkedInSocial = {
    username: "kumar@sumit11",
    followers: "10011",
    follows: "191",
    date: format.asString("dd-MM-yyyy", new Date()),
  };
  res.status(200).json(linkedInSocial);
});
//this api will get whatever comes after v1
//rahul why >>> ????
//this api must always be at the bottom ask
app.get("/api/v1/:token", (req, res) => {
  // anything that comes after token will come in req.params.token
  console.log(req.params.token);
  res.status(200).json({
    urlParams: req.params.token,
    date: format.asString("dd-MM-yyyy", new Date()),
  });
});

app.listen(port, () => {
  console.log(`Social-Node-Express App listening on port ${port}`);
});
