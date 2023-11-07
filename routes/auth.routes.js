const express = require("express");
const router = express.Router();
const { register } = require("../controller/auth.controller");

router.get("/register", (req, res) => {
  res.render("register.ejs");
});

router.post("/register", register);

router.get("/login", (req, res) => {
  res.render("login.ejs");
});
const passport = require("../lib/passport");
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  })
);

const { dashboard } = require("../controller/auth.controller");
router.get("/dashboard", dashboard);

module.exports = router;
