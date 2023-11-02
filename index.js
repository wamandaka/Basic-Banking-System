const express = require("express");
const app = express();
const router = require("./routes/route");
require("dotenv").config();
const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerJSON = require("./swagger.json");
const swaggerUI = require("swagger-ui-express");
const swaggerDef = require("./helper/swagger_template.helper");

const port = process.env.PORT || 3000;

// const swaggerOptions = {
//   swaggerDefinition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Testing FGA Issue",
//       version: "1.0.0",
//       description: "Your API description",
//     },
//     servers: [
//       {
//         url: "http://localhost:8080",
//       },
//       {
//         url: "http://localhost:3000",
//       },
//     ],
//   },
//   apis: ["./routes/user.route.js", "./routes/bank_accounts.route.js"],
// };
const swaggerSpec = swaggerJsDoc(swaggerDef);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
// app.use("/docs", swaggerUI.serve, swaggerUI.setup(require("./swagger.json")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
