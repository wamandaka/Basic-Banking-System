const { ResponseTemplate } = require("../helper/template.helper");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function create(req,res) {
  const {user_id,bank_name, bank_account_number} = req.body
  const payload = {
    user_id: parseInt(user_id),
    bank_name,
    bank_account_number
  }
  try {
    const bank_account = await prisma.bankAccount.create({
      data: payload,
    });
    let resp = ResponseTemplate(bank_account, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    let resp = ResponseTemplate(null, "internal server error", error, 500);
    res.json(resp);
    return;
  }
}

module.exports = {
  create
}