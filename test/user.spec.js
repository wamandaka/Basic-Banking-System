// const { create, test } = require("../controller/user.controller");

const base = require("../controller/auth.controller");
const mockRequest = (body = {}) => ({ body });
const mockResponse = () => {
  const res = {};
  res.json = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  return res;
};
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const { ComparePassword, HashPassword } = require("../helper/hash_pass.helper");

describe("login controller", () => {
  test("internal server error 500", async () => {
    const req = mockRequest();
    const res = mockResponse();

    const mockUser = { id: 1, email: "fadhil@mail.com", password: "password" };

    req.body.password = mockUser.password;
    req.body.email = mockUser.email;

    prisma.users.findFirst = jest.fn().mockResolvedValue(true);
    // const ComparePassword = jest.fn().mockReturnValue(true);
    jwt.sign = jest.fn().mockReturnValue(true);

    await base.authUser(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    // expect(res.json).toHaveBeenCalledWith({
    //     status: 500,
    //     message: 'internal server error',

    // });
  });

  test("200", async () => {
    const req = mockRequest();
    const res = mockResponse();

    const mockUser = { id: 1, email: "fadhil@mail.com", password: "password" };

    req.body.password = mockUser.password;
    req.body.email = mockUser.email;

    const hashPass = await HashPassword(req.body.password);

    prisma.users.findFirst = jest.fn().mockResolvedValue(true);
    const ComparePassword = jest.fn().mockReturnValue(true);
    jwt.sign = jest.fn().mockReturnValue(true);

    await base.authUser(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    // expect(res.json).toHaveBeenCalledWith({
    //     status: 500,
    //     message: 'internal server error',

    // });
  });

  test("", async () => {
    const req = mockRequest();
    const res = mockResponse();

    const mockUser = { id: 1, email: "fadhil@mail.com", password: "password" };

    req.body.password = mockUser.password;
    req.body.email = mockUser.email;

    const hashPass = await HashPassword(req.body.password);

    prisma.users.findFirst = jest.fn().mockResolvedValue(true);
    const ComparePassword = jest.fn().mockReturnValue(true);
    jwt.sign = jest.fn().mockReturnValue(true);

    await base.authUser(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    // expect(res.json).toHaveBeenCalledWith({
    //     status: 500,
    //     message: 'internal server error',

    // });
  });

  // test('return user not found, 400', done => {
  //     const req = mockRequest()
  //     const res = mockResponse()
  // })
});


// describe("Insert function", () => {
//   const mockRequest = (body) => ({ body });
//   const mockResponse = () => {
//     const res = {};
//     res.json = jest.fn().mockReturnValue(res);
//     res.status = jest.fn().mockReturnValue(res);
//     return res;
//   };

//   test("create: email already exists", async () => {
//     const req = mockRequest({
//       name: "John Doe",
//       email: "klee@gmail.com", // Mock email that already exists
//       password: "asd",
//       identity_type: "ktp",
//       identity_number: "1234567890",
//       address: "123 Main St",
//     });

//     const res = mockResponse();

//     await create(req, res);

//     expect(res.json).toHaveBeenCalledWith({
//       data: null,
//       message: "Email already exist",
//       error: null,
//       status: 404,
//     });
//   });

//   // it("create: create user", async () => {
//   //   const req = mockRequest({
//   //     name: "Fischl",
//   //     email: "Fischl@gmail.com", // Mock email that doesn't exist
//   //     password: "ehe",
//   //     identity_type: "ktp",
//   //     identity_number: "1234567890",
//   //     address: "Mondstadt",
//   //   });
//   //   const res = mockResponse();

//   //   await create(req, res);

//   //   expect(res.json).toHaveBeenCalledWith({
//   //     data: expect.any(Object), // User data
//   //     message: "success",
//   //     error: null,
//   //     status: 200,
//   //   });
//   // });
// });
