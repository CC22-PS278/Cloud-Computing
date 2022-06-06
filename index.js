const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const swagger = require("swagger-ui-express");
dotenv.config();

// test
app.get("/", (req, res) => {
  res.send("Hello from Tanya!");
});

// swagger
const apiDocs = require("./tanyaDocs.json");
app.use("/tanyaDocs", swagger.serve, swagger.setup(apiDocs));

//connect DB
mongoose.connect(process.env.access_db, () => console.log("check database"));

//import route
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const tiketRoute = require("./routes/Tiket");
const transaksiRoute = require("./routes/transaksi");
const busConditionRoute = require("./routes/busCondition");
//driver and staff route
const authdriverRoute = require("./routes/authDriver");
const driverRoute = require("./routes/driver");

//middleware | run when hits routes
app.use(express.json());

//route middleware
app.use("/tanya/user", userRoute);
app.use("/tanya/auth", authRoute);
app.use("/tanya/tiket", tiketRoute);
app.use("/tanya/transaksi", transaksiRoute);
app.use("/tanya/busCondition", busConditionRoute);
app.use("/tanya/authDriver", authdriverRoute);
app.use("/tanya/driver", driverRoute);

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
