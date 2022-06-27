const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const uuid4 = require("uuid4");
const argon2 = require("argon2");

const calculateToken = (email = "") => {
  return crypto
    .createHash("md5")
    .update(email + process.env.JWT_AUTH_SECRET)
    .digest("hex");
};

const calculateJWTToken = (user) => {
  return jwt.sign(
    { email: user.email, id: user.id },
    process.env.JWT_AUTH_SECRET
  );
};

const decodeUserFromJWT = (token) => {
  return jwt.decode(token);
};

function jwtVerify(token) {
  return jwt.verify(token, process.env.JWT_AUTH_SECRET);
}

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

function jwtSign(payload, options = {}) {
  return jwt.sign(payload, process.env.JWT_AUTH_SECRET, options);
}

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

async function passwordVerify(hashedPassword, plainPassword) {
  return argon2.verify(hashedPassword, plainPassword, hashingOptions);
}

const uuid = () => {
  const id = uuid4();
  uuid4.valid(id);
  return id;
};

function Authorization(req, res, next) {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const data = jwtVerify(token);
    req.userId = data.id;
    req.useremail = data.email;
    return next();
  } catch {
    return res.sendStatus(401);
  }
}

module.exports = {
  calculateToken,
  calculateJWTToken,
  decodeUserFromJWT,
  hashPassword,
  passwordVerify,
  uuid,
  create,
  jwtVerify,
  jwtSign,
  Authorization,
};
