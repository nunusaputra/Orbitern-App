const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const adminRouter = require("./router/adminRouter");
const mitraRouter = require("./router/mitraRouter");
const mahasiswaRouter = require("./router/mahasiswaRouter");
const dotenv = require("dotenv");

dotenv.config();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(adminRouter);
app.use(mitraRouter);
app.use(mahasiswaRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});
