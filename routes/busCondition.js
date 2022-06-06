const router = require("express").Router();
const req = require("express/lib/request");
const res = require("express/lib/response");
const busCondition = require("../models/BusCondition");
const verified = require("./verify");

//ADD kondisi bus
router.post("/", verified, async (req, res) => {
  const addCondition = new busCondition(req.body);

  try {
    const Condition = await addCondition.save();
    res.status(200).json(Condition);
  } catch (err) {
    res.status(500).json({ message: "input kondisi bus!" });
  }
});

//UPDATE kondisi bus
router.put("/:conditionId", verified, async (req, res) => {
  try {
    const updateCondition = await busCondition.findByIdAndUpdate(req.params.conditionId, { $set: req.body }, { new: true });
    res.status(200).json(updateCondition);
  } catch (err) {
    res.status(500).json({ message: "update condition!" });
  }
});

//GET all kondisi bus
router.get("/", verified, async (req, res) => {
  try {
    const allCondition = await busCondition.find();
    res.json(allCondition);
  } catch (err) {
    res.json({ message: "not found" });
  }
});

//GET kondisi by id
router.get("/:conditionId", verified, async (req, res) => {
  try {
    const getCondition = await busCondition.findById(req.params.conditionId);
    res.status(200).json(getCondition);
  } catch (err) {
    res.status(500).json({ message: "input id BusCondition!" });
  }
});

//DELETE kondisi by id
router.delete("/:conditionId", verified, async (req, res) => {
  try {
    const delCondition = await busCondition.deleteOne({ _id: req.params.conditionId });
    res.json(delCondition);
  } catch (err) {
    res.status(500).json({ message: "input id BusCondition!" });
  }
});

module.exports = router;
