const asyncHandler = require("../utils/asyncHandler.js");
const ApiError = require("../utils/ApiError.js");
const User = require("../models/user.model.js");
const { hashPassword, comparePassword } = require("../utils/passwordUtils.js");
const generateAccessToken = require("../utils/generateAccessToken.js");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // check required fields
  if ([name, email, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    where: {
      email,
    },
  });

  // check if user already exists.
  if (existedUser) {
    throw new ApiError(409, "User with this email already exists");
  }

  const hashedPassword = await hashPassword(password);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // check if user has been created.
  if (!user.dataValues) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res.status(201).json({ user: createdUser });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // check required field.
  if (!email || !password) {
    throw new ApiError(400, "email or password is required.");
  }

  const user = await User.findOne({
    where: {
      email,
    },
  });

  // check if user exists.
  if (!user.dataValues?.id) {
    throw new ApiError(404, "User does not exists.");
  }

  // check if password is correct.
  const isPasswordValid = await comparePassword(
    password,
    user?.dataValues?.password
  );

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid credentials");
  }

  const { accessToken } = await generateAccessToken(user);

  const options = {
    httpOnly: true,
    secure: true,
  };

  // set access token in the cookie.
  return res.status(200).cookie("accessToken", accessToken, options).json({
    accessToken,
  });
});

const logoutUser = asyncHandler(async (req, res) => {
  const options = {
    httpOnly: true,
    secure: true,
  };

  // unset access token in the cookie.
  return res
    .status(200)
    .clearCookie("accessToken", options)
    .json({ message: "User logged Out" });
});

module.exports = { registerUser, loginUser, logoutUser };
