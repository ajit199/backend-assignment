require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const xss = require("xss-clean");
const hpp = require("hpp");
const { specs, swaggerUi } = require("./middlewares/swagger.middleware");

const authRoutes = require("./routes/user.route");
const categoryRoutes = require("./routes/category.route");

const app = express();

//Enable CORS
app.use(
  cors({
    origin: "*",
  })
);

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// parse cookie for auth
app.use(cookieParser());

// request logging
app.use(morgan("dev"));

// Prevent http param pollution
app.use(hpp());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Routes
// const dataRoutes = require("./routes/data.route");
// const secureRoutes = require("./routes/protected.route");

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
// app.use("/api/v1/secure", secureRoutes);

module.exports = app;
