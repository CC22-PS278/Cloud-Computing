const router = require("express").Router();
const req = require("express/lib/request");
const res = require("express/lib/response");
const tiket = require("../models/tiket");
const verified = require("./verify");

//ADD tiket
router.post("/", verified, async (req, res) => {
  const addTiket = new tiket(req.body);

  try {
    const Tiket = await addTiket.save();
    res.status(200).json(Tiket);
  } catch (err) {
    res.status(500).json({ message: "input data tiket BUSSS!" });
  }
});

//UPDATE tiket
router.put("/:tiketId", verified, async (req, res) => {
  try {
    const ubahTiket = await tiket.findByIdAndUpdate(req.params.tiketId, { $set: req.body }, { new: true });
    res.status(200).json(ubahTiket);
  } catch (err) {
    res.status(500).json({ message: "ubah data tiket!" });
  }
});

//GET all tiket
router.get("/", verified, async (req, res) => {
  try {
    const tickets = await tiket.find();
    res.json(tickets);
  } catch (err) {
    res.json({ message: "not found" });
  }
});

//GET tiket by id
router.get("/:tiketId", verified, async (req, res) => {
  try {
    const getTiket = await tiket.findById(req.params.tiketId);
    res.status(200).json(getTiket);
  } catch (err) {
    res.status(500).json({ message: "input id tiket!" });
  }
});

//DELETE tiket by id
router.delete("/:tiketId", verified, async (req, res) => {
  try {
    const delTiket = await tiket.deleteOne({ _id: req.params.tiketId });
    res.json(delTiket);
  } catch (err) {
    res.status(500).json({ message: "input id tiket!" });
  }
});

module.exports = router;
