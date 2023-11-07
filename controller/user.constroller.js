// const { func } = require("joi");
const { ResponseTemplate } = require("../helper/template.helper");
const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

function test(req, res) {
  let resp = ResponseTemplate(null, "Hello World!", null, 200);
  res.json(resp);
}

async function create(req, res) {
  const { name, email, password, identity_type, identity_number, address } =
    req.body;
  // console.log(req.body);
  const payload = {
    name,
    email,
    password,
    profile: {
      create: {
        identity_type,
        identity_number: parseInt(identity_number),
        address,
      },
    },
  };

  try {
    const user = await prisma.users.create({
      data: payload,
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
        profile: {
          select: {
            id: false,
            identity_type: true,
            identity_number: true,
            address: true,
          },
        },
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

async function getAll(req, res) {
  const user = await prisma.users.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      profile: {
        select: {
          id: false,
          identity_type: true,
          identity_number: true,
          address: true,
        },
      },
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
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
        created_at: true,
        updated_at: true,
        deleted_at: true,
        profile: {
          select: {
            id: false,
            identity_type: true,
            identity_number: true,
            address: true,
          },
        },
      },
    });

    if (user) {
      let resp = ResponseTemplate(user, "success", null, 200);
      res.json(resp);
      return;
    } else {
      let resp = ResponseTemplate(
        null,
        "bad request/data user not found",
        null,
        404
      );
      res.json(resp);
      return;
    }
  } catch (error) {
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

async function updateById(req, res) {
  const { name, email, password, identity_type, identity_number, address } = req.body;
  const { id } = req.params;
  console.log(req.body);

  const payload = {
    name,
    email,
    password,
    profile: {
      update: {
        where: {
          user_id: Number(id),
        },
        data: {
          identity_type,
          identity_number: parseInt(identity_number),
          address,
        },
      },
    },
  };

  if (!name && !email && !password) {
    let resp = ResponseTemplate(null, "bad request", null, 400);
    res.json(resp);
    return;
  }

  try {
    const user = await prisma.users.update({
      where: {
        id: Number(id),
      },
      data: payload,
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
        profile: {
          select: {
            id: false,
            identity_type: true,
            identity_number: true,
            address: true,
          },
        },
        created_at: true,
        updated_at: true,
        deleted_at: true,
      },
    });

    let resp = ResponseTemplate(user, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    // let resp = ResponseTemplate(null, "internal server error", error, 500);
    // res.json(resp);
    console.log(error);
    return;
  }
}

async function deleteById(req, res) {
  const { id } = req.params;

  try {
  await prisma.profiles.delete({
    where: {
      user_id: Number(id),
    },
  });
  await prisma.users.delete({
    where: {
      id: Number(id),
    },
  });
  let resp = ResponseTemplate(null, "delete success", null, 200);
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
  updateById,
  deleteById,
};
