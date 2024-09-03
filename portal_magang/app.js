const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const adminRouter = require("./router/adminRouter");
const mitraRouter = require("./router/mitraRouter");
const mahasiswaRouter = require("./router/mahasiswaRouter");
const dotenv = require("dotenv");

dotenv.config();

const allowedOrigins = [
  "https://orbitern-app-wisnu-saputras-projects.vercel.app",
  "https://orbitern-app-git-master-wisnu-saputras-projects.vercel.app",
  "https://orbitern-app.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Jika menggunakan cookies atau session
  })
);

app.options("*", cors());

app.use(cookieParser());
app.use(express.json());
app.use(adminRouter);
app.use(mitraRouter);
app.use(mahasiswaRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});
