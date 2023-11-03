const { ResponseTemplate } = require("../helper/template.helper");
const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

async function create(req, res) {
  const { source_account_id, destination_account_id, amount } = req.body;
  // const {user_id} = req.user.id

  // Pastikan Anda memiliki akses ke 'prisma' dan telah menginisialisasinya sebelumnya
  // const prisma = new PrismaClient();

  const payload = {
    source_account_id,
    destination_account_id,
    amount,
  };

  try {
    const transaction = await prisma.transaction.create({
      data: payload,
      select: {
        source
      },
    });

    let resp = ResponseTemplate(bank_account, "success", null, 200);
    res.json(resp);
  } catch (error) {
    console.error(error); // Cetak pesan kesalahan untuk debug
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
  }
}



module.exports = {
  create
}