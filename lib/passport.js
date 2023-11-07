const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { PrismaClient } = require("@prisma/client");
const { authUser } = require("../controller/auth.controller");
const prisma = new PrismaClient();

passport.serializeUser((users, done) => {
  done(null, users.id); // Menggunakan done untuk menyelesaikan fungsi
});

passport.deserializeUser(async (id, done) => {
  const user = await prisma.users.findUnique({
    // Menggunakan prisma.user (bukan prisma.users)
    where: {
      id: id,
    },
  });
  done(null, user); // Menggunakan done untuk menyelesaikan fungsi
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    authUser
  )
);

module.exports = passport;
