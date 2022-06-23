const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const uuid4 = require("uuid4");
const argon2 = require("argon2");

const PRIVATE_KEY = "superSecretStringNowoneShouldKnowOrTheCanGenerateTokens";

const calculateToken = (email = "") => {
  return crypto
    .createHash("md5")
    .update(email + PRIVATE_KEY)
    .digest("hex");
};

const calculateJWTToken = (user) => {
  return jwt.sign({ email: user.email, id: user.id }, PRIVATE_KEY);
};

const decodeUserFromJWT = (token) => {
  return jwt.decode(token);
};

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOptions);
};

const create = ({ password }) => {
  return hashPassword(password).then((hashedPassword) => {
    return {
      hashedPassword,
    };
  });
};

const verifyPassword = (plainPassword, hashedPassword) => {
  return argon2.verify(hashedPassword, plainPassword, hashingOptions);
};

const uuid = () => {
  const id = uuid4();
  uuid4.valid(id);
  return id;
};

module.exports = {
  calculateToken,
  calculateJWTToken,
  decodeUserFromJWT,
  hashPassword,
  verifyPassword,
  uuid,
  create,
};
