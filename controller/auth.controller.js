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
  authUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const checkUser = await prisma.users.findFirst({
        where: {
          email: email,
        },
      });

      if (user == null) {
        res.status(400).json({
          data: null,
          status: 400,
          message: "email is not found or incorrect",
        });
      }

      const checkPassword = await ComparePassword(password, checkUser.password);

      if (!checkPassword) {
        res.status(400).json({
          data: null,
          status: 400,
          message: "password is not correct",
        });
        return;
      }

      const token = jwt.sign(
        { email: checkUser.email, user_id: checkUser.id },
        process.env.SECRET_KEY
      );

      res.status(200).json({
        status: 200,
        message: "success",
        data: {
          token,
        },
      });
      return;
    } catch (error) {
      res.status(500).json({
        data: error.message,
        status: 500,
        message: "internal server error",
      });
    }
  },
  // authUser: async (email, password, done) => {
  //   try {
  //     const user = await prisma.users.findFirst({
  //       where: {
  //         email: email,
  //       },
  //     });

  //     // const pass = !(await bcrypt.compare(password, user.password));

  //     if (!user || !(await bcrypt.compare(password, user.password))) {
  //       return done(null, false, { message: "invalid email or password" });
  //     }
  //     // return res.redirect("/dashboard");
  //     return done(null, user);
  //   } catch (error) {
  //     return done(null, false, { message: error.message });
  //   }
  // },
  dashboard: async (req, res, next) => {
    res.render("dashboard.ejs", { user: req.user });
  },

  Oauth2: async (req, res) => {
    let token = jwt.sign(
      { ...req.user, password: null },
      process.env.SECRET_KEY
    );

    return res.status(200).json({
      status: "success",
      message: " OK",
      data: {
        token,
      },
    });
  },
};
