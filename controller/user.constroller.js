const { ResponseTemplate } = require("../helper/template.helper");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function test(req, res) {
  let resp = ResponseTemplate(null, "Hello World!", null, 200);
  res.json(resp);
}

async function create(req, res) {
  const { name, email, password } = req.body;
  console.log(req.body);
  const payload = {
    name,
    email,
    password,
  };

  // let objResp = {
  //     payload
  // }
  // let resp = ResponseTemplate(objResp, "success", null, 200);
  // res.json(resp);
  // return;

  try {
    const user = await prisma.users.create({
      data: payload,
    });
    let resp = ResponseTemplate(user, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

async function getAll(req, res) {
  const user = await prisma.users.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
    },
  });
  let resp = ResponseTemplate(user, "success", null, 200);
  res.json(resp);
  return;
}

async function getById(req, res) {
  const { id } = req.params;

  try {
    const user = await prisma.users.findUnique({
      where: {
        id: Number(id),
      },
    });
    let resp = ResponseTemplate(user, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

async function update(req, res) {
  const { name, email, password } = req.body;
  const { id } = req.params;

  const payload = {};

  if (!name && !email && !password) {
    let resp = ResponseTemplate(null, "bad request", null, 400);
    res.json(resp);
    return;
  }

  if (name) {
    payload.name = name;
  }

  if (email) {
    payload.email = email;
  }

  if (password) {
    payload.address = password;
  }

  try {
    const user = await prisma.users.update({
      where: {
        id: Number(id),
      },
      data: payload,
    });

    let resp = ResponseTemplate(user, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

module.exports = {
  test,
  create,
  getAll,
  getById,
  update
};
