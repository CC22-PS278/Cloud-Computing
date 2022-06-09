const router = require("express").Router();
const req = require("express/lib/request");
const res = require("express/lib/response");
const prediksi = require("../models/Prediksi");
const verified = require("./verify");

//POST prediksi
router.post("/", verified, async (req, res) => {
  const addPrediksi = new prediksi(req.body);

  try {
    const Prediksi = await addPrediksi.save();
    res.status(200).json(Prediksi);
  } catch (err) {
    res.status(500).json({ message: "input data transaksi!" });
  }
});

//UPDATE prediksi
router.put("/:uniqueId", verified, async (req, res) => {
  try {
    const updateKondisi = await prediksi.findByIdAndUpdate(req.params.uniqueId, { $set: req.body }, { new: true });
    res.status(200).json(updateKondisi);
  } catch (err) {
    res.status(500).json({ message: "update kondisi bus!" });
  }
});

//GET prediksi by id
router.get("/:uniqueId", verified, async (req, res) => {
  try {
    const getPrediksi = await prediksi.findById(req.params.uniqueId);
    res.status(200).json(getPrediksi);
  } catch (err) {
    res.status(500).json({ message: "input id!" });
  }
});

//GET all transaksi
router.get("/", verified, async (req, res) => {
  try {
    const allKondisi = await prediksi.find();
    res.json(allKondisi);
  } catch (err) {
    res.json({ message: "not found" });
  }
});

module.exports = router;
