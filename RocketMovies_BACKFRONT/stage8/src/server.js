require("express-async-errors");
require("dotenv/config")

const express = require("express");

const routes = require("./routes");

const uploadConfig = require("./configs/upload")
const database = require("./database/sqlite")
const AppError = require("./utils/AppError")
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

database();

app.use( (error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  };

  console.error('ERR:', error);

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  });
});


const PORT = process.env.SERVER_PORT ?? 3000;

app.listen(PORT, () => console.log(`🔥 Server is running on port ${PORT}`));