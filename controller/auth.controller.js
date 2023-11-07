const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

module.exports = {
  register: async (req, res, next) => {
    try {
      let { name, email, password, identity_type, identity_number, address } =
        req.body;
      // let existUser = await prisma.users.findUnique({
      //   where: {
      //     email: email,
      //   },
      // })

      // if (existUser) {
      //   req.flash("error", "Email already exist");
      //   return res.redirect("/register");
      // }

      let encryptedPassword = await bcrypt.hash(password, 10);
      await prisma.users.create({
        data: {
          name: name,
          email: email,
          password: encryptedPassword,
          profile: {
            create: {
              identity_type,
              identity_number: parseInt(identity_number),
              address,
            },
          },
        },
      });
      return res.redirect("/login");
    } catch (error) {
      next(error);
    }
  },
  authUser: async (email, password, done) => {
    try {
      const user = await prisma.users.findFirst({
        where: {
          email: email,
        },
      });

      const pass = !(await bcrypt.compare(password, user.password));

      if (!user || pass) {
        return done(null, false, { message: "invalid email or password" });
      }
      // return res.redirect("/dashboard");
      return done(null, user);
    } catch (error) {
      return done(null, false, { message: error.message });
    }
  },
  dashboard: async (req, res, next) => {
    res.render("dashboard.ejs", { user: req.user });
  },
};
