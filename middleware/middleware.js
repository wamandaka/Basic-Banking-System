const { ResponseTemplate } = require("../helper/template.helper");
const Joi = require("joi");
function PrintSuccess(req, res, next) {
    // const { } = req.params.id
    console.log(` SELALU BERHASIL AKSES`)
    next()
}

function CheckPostReq(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().max(255).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    let respErr = ResponseTemplate(
      null,
      "invalid request",
      error.details[0].message,
      400
    );
    res.json(respErr);
    return;
  }

  next();
}

module.exports = {
    PrintSuccess,
    CheckPostReq
}
