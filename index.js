require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const session = require("express-session");
const flash = require("express-flash");
const router = require("./routes/route");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const swaggerDef = require("./helper/swagger_template.helper");
// const swaggerJSON = require("./swagger.json");

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

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
// app.use("/docs", swaggerUI.serve, swaggerUI.setup(require("./swagger.json")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

const passport = require("./lib/passport");
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

const authRouter = require("./routes/auth.routes");
app.use(authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
