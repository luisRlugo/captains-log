const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// const Logs = require("./models/logs");
const methodOverride = require("method-override");
const logsController = require("./controllers/logsController");
const db = require("./config/database");

// View Engine Middleware Configure
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
app.set("view engine", "jsx");
app.set("views", "./views");
// Custom Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Routes
app.use("/logs", logsController);

// app.get("/logs/seed", async (req, res) => {
//   try {
//     await Fruit.create([
//       {
//         title: "Log 1",
//         entry: "This is the first log entry.",
//         shipIsBroken: false,
//       },
//       {
//         title: "Log 2",
//         entry: "This is the second log entry.",
//         shipIsBroken: true,
//       },
//     ]);
//     res.redirect("/logs");
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });
// // I.N.D.U.C.E.S
// // ==============

// // Index route
// app.get("/logs", async (req, res) => {
//   try {
//     const foundLogs = await Logs.find({});
//     res.status(200).render("Index", { logs: foundLogs });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// // New route
// app.get("/logs/new", (req, res) => {
//   res.render("New");
// });

// // Delete route
// app.delete("/logs/:id", async (req, res) => {
//   try {
//     await Logs.findByIdAndDelete(req.params.id);
//     res.redirect("/logs");
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// // Update route
// app.put("/logs/:id", async (req, res) => {
//   try {
//     req.body.shipIsBroken = req.body.shipIsBroken === "on";
//     const updatedLog = await Logs.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.redirect(`/logs/${req.params.id}`);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });
// // Create route
// app.post("/logs", async (req, res) => {
//   try {
//     req.body.shipIsBroken = req.body.shipIsBroken === "on";
//     const newLog = await Logs.create(req.body);
//     res.redirect("/logs");
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// // Edit route
// app.get("/logs/:id/edit", async (req, res) => {
//   try {
//     const foundLog = await Logs.findById(req.params.id);
//     res.render("logs/Edit", { log: foundLog });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// // Show route
// app.get("/logs/:id", async (req, res) => {
//   try {
//     const foundLog = await Logs.findById(req.params.id);
//     res.render("logs/Show", { log: foundLog });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });
app.get("/*", (req, res) => {
  res.redirect("/logs");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
