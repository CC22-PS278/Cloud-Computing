const Driver = require("../models/Driver");
const router = require("express").Router();
//const bcrypt = require("bcrypt");
const jsonToken = require("jsonwebtoken");
const crypthash = require("crypto-js");

//REGISTER

router.post("/register", async (req, res) => {
  //HASH PASSWORD
  const hashedPass = crypthash.AES.encrypt(req.body.password, process.env.key_crypto).toString();

  //regist
  const driverRegist = new Driver({
    username: req.body.username,
    email: req.body.email,
    password: hashedPass,
  });

  try {
    const saved = await driverRegist.save();
    res.status(200).json(saved);
  } catch (err) {
    res.status(400).json(err);
  }
});

//LOGIN;
router.post("/login", async (req, res) => {
  const driver = await Driver.findOne({ email: req.body.email });
  if (!driver) return res.status(400).send("Email is not valid");

  const hashedPass = crypthash.AES.decrypt(driver.password, process.env.key_crypto);
  const passwordAwal = hashedPass.toString(crypthash.enc.Utf8);

  if (passwordAwal !== req.body.password) return res.status(400).send("password yang diinput salah");

  ///create token
  const jwt = jsonToken.sign({ _id: driver._id }, process.env.key_JWT);

  const { password, ...dataDriver } = driver._doc;
  res.status(200).json({ ...dataDriver, jwt });
});

module.exports = router;
