const { create, test } = require("../controller/user.controller");

describe("Insert function", () => {
  const mockRequest = (body) => ({ body });
  const mockResponse = () => {
    const res = {};
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  test("create: email already exists", async () => {
    const req = mockRequest({
      name: "John Doe",
      email: "klee@gmail.com", // Mock email that already exists
      password: "asd",
      identity_type: "ktp",
      identity_number: "1234567890",
      address: "123 Main St",
    });

    const res = mockResponse();

    await create(req, res);

    expect(res.json).toHaveBeenCalledWith({
      data: null,
      message: "Email already exist",
      error: null,
      status: 404,
    });
  });

  // it("create: create user", async () => {
  //   const req = mockRequest({
  //     name: "Fischl",
  //     email: "Fischl@gmail.com", // Mock email that doesn't exist
  //     password: "ehe",
  //     identity_type: "ktp",
  //     identity_number: "1234567890",
  //     address: "Mondstadt",
  //   });
  //   const res = mockResponse();

  //   await create(req, res);

  //   expect(res.json).toHaveBeenCalledWith({
  //     data: expect.any(Object), // User data
  //     message: "success",
  //     error: null,
  //     status: 200,
  //   });
  // });
});
