const express = require("express");
const router = express.Router();
const Logs = require("../models/logs");

router.get("/seed", async (req, res) => {
  try {
    await Logs.create([
      {
        title: "Log 1",
        entry: "This is the first log entry.",
        shipIsBroken: false,
      },
      {
        title: "Log 2",
        entry: "This is the second log entry.",
        shipIsBroken: true,
      },
    ]);
    res.redirect("/logs");
  } catch (err) {
    res.status(400).send(err);
  }
});
// I.N.D.U.C.E.S
// ==============

// Index route
router.get("/", async (req, res) => {
  try {
    const foundLogs = await Logs.find({});
    res.status(200).render("Index", { logs: foundLogs });
  } catch (err) {
    res.status(400).send(err);
  }
});

// New route
router.get("/new", (req, res) => {
  res.render("New");
});

// Delete route
router.delete("/:id", async (req, res) => {
  try {
    await Logs.findByIdAndDelete(req.params.id);
    res.redirect("/logs");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update route
router.put("/:id", async (req, res) => {
  try {
    req.body.shipIsBroken = req.body.shipIsBroken === "on";
    const updatedLog = await Logs.findByIdAndUpdate(
      req.params.id,
      req.body,
      { $set: req.body },
      { new: true }
    );
    res.redirect("/logs");
  } catch (err) {
    res.status(400).send(err);
  }
});
// Create route
router.post("/", async (req, res) => {
  try {
    req.body.shipIsBroken = req.body.shipIsBroken === "on";
    const newLog = await Logs.create(req.body);
    res.redirect("/logs");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Edit route
router.get("/:id/edit", async (req, res) => {
  try {
    const foundLog = await Logs.findById(req.params.id);
    res.render("Edit", { log: foundLog });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Show route
router.get("/:id", async (req, res) => {
  try {
    const foundLog = await Logs.findById(req.params.id);
    res.render("Show", { log: foundLog });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
