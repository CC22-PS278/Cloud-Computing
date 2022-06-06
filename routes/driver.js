const router = require("express").Router();
const Driver = require("../models/Driver");
const verified = require("./verify");

//GET | req ke user -> provide skema user
//POST | dpt req dari user/client

//UPDATE data driver
router.put("/:driverId", verified, async (req, res) => {
  try {
    const updateDataDriver = await Driver.findByIdAndUpdate(req.params.driverId, { $set: req.body }, { new: true });
    res.status(200).json(updateDataDriver);
  } catch (err) {
    res.status(500).json({ message: "ubah data driver!" });
  }
});

//GET all driver
router.get("/", verified, async (req, res) => {
  try {
    const allDriver = await Driver.find();
    res.json(allDriver);
  } catch (err) {
    res.json({ message: "not found" });
  }
});

//GET driver by id
router.get("/:driverId", verified, async (req, res) => {
  try {
    const getDriver = await Driver.findById(req.params.driverId);
    res.status(200).json(getDriver);
  } catch (err) {
    res.status(500).json({ message: "input id driver!" });
  }
});

//DELETE driver by id
router.delete("/:driverId", verified, async (req, res) => {
  try {
    const delDriver = await Driver.deleteOne({ _id: req.params.driverId });
    res.json(delDriver);
  } catch (err) {
    res.status(500).json({ message: "input id driver!" });
  }
});

module.exports = router;
