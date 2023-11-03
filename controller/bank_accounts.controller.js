const { ResponseTemplate } = require("../helper/template.helper");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function create(req, res) {
  const { user_id, bank_name, bank_account_number, balance } = req.body;
  // const {user_id} = req.user.id

  // Pastikan Anda memiliki akses ke 'prisma' dan telah menginisialisasinya sebelumnya
  // const prisma = new PrismaClient();

  try {
    const bank_account = await prisma.bankAccount.create({
      data: {
        user_id: parseInt(user_id),
        bank_name,
        bank_account_number: parseInt(bank_account_number),
        balance: parseInt(balance),
        // user: {
        //   connect: {
        //     id: user_id, // Menggunakan user_id, // Menggunakan user_id dari req.body
        //     // name: name,
        //   },
        // },
      },
      select: {
        id: true,
        user_id: true,
        bank_name: true,
        bank_account_number: true,
        balance: true,
      },
    });

    // let resp = ResponseTemplate(bank_account, "success", null, 200);
    // res.json(resp);
  } catch (error) {
    console.error(error); // Cetak pesan kesalahan untuk debug
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
  }
}

async function getAll(req, res) {
  const bank_account = await prisma.bankAccount.findMany({
    select: {
      id: true,
      user_id: true,
      bank_name: true,
      bank_account_number: true,
      balance: true,
    },
  });
  let resp = ResponseTemplate(bank_account, "success", null, 200);
  res.json(resp);
  return;
}

async function getById(req, res) {
  const { id } = req.params;
  const bank_account = await prisma.bankAccount.findUnique({
    where: {
      id: parseInt(id),
    },
    select: {
      id: true,
      user_id: true,
      bank_name: true,
      bank_account_number: true,
      balance: true,
    },
  });
  if (!bank_account) {
    let resp = ResponseTemplate(null, "data not found", null, 404);
    res.json(resp);
    return;
  }
  let resp = ResponseTemplate(bank_account, "success", null, 200);
  res.json(resp);
  return;
}

async function updateById(req, res) {
  console.log(req.body);
  const { id } = req.params;
  const { user_id, bank_name, bank_account_number, balance } = req.body;

  const payload = {
    user_id: parseInt(user_id),
    bank_name,
    bank_account_number: parseInt(bank_account_number),
    balance: parseInt(balance),
  };

  if ( !payload.user_id || !payload.bank_name || !payload.bank_account_number || !payload.balance) {
    let resp = ResponseTemplate(null, "bad request", null, 400);
    res.json(resp);
    return;
  }

  try {
    const user = await prisma.bankAccount.update({
      where: {
        id: Number(id),
      },
      data: payload,
      select: {
        user_id: true,
        bank_name: true,
        bank_account_number: true,
        balance: true,
        created_at: true,
        updated_at: true,
        deleted_at: true,
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

async function deleteById(req, res) {
  const { id } = req.params;

  // try {
  // await prisma.profiles.delete({
  //   where: {
  //     user_id: Number(id),
  //   },
  // });
  await prisma.bankAccount.delete({
    where: {
      id: Number(id),
    },
  });
  let resp = ResponseTemplate(null, "delete success", null, 200);
  res.json(resp);
  return;
  // } catch (error) {
  //   let resp = ResponseTemplate(null, "internal server error", error, 500);
  //   res.json(resp);
  //   return;
  //   // if (error instanceof Prisma.PrismaClientKnownRequestError) {
  //   //   // your code
  //   //   if (error.code == "P2003") {
  //   //     let resp = ResponseTemplate(null, "data not found", null, 404);
  //   //     res.json(resp);
  //   //     return;
  //   //   }
  //   // }
  // }
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById
};
