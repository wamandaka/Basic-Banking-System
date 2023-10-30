const { ResponseTemplate } = require("../helper/template.helper");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function create(req, res) {
  const {user_id,  bank_name, bank_account_number, balance } = req.body;
  // const {user_id} = req.user.id

  // Pastikan Anda memiliki akses ke 'prisma' dan telah menginisialisasinya sebelumnya
  const prisma = new PrismaClient();

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
      // include: {
      //   user: true,
      // },
    });

    let resp = ResponseTemplate(bank_account, "success", null, 200);
    res.json(resp);
  } catch (error) {
    console.error(error); // Cetak pesan kesalahan untuk debug
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
  } finally {
    await prisma.$disconnect(); // Tutup koneksi Prisma
  }
}


module.exports = {
  create,
};
