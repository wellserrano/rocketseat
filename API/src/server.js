//imports
require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations")
const express = require("express");
const routes = require("./routes");
const AppError = require("./utils/AppError");

//initializing
const app = express();
app.use(express.json());

//initializing database
migrationsRun();

//defining routes
app.use(routes);

//error handling
app.use( ( error, request, response, next ) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    };

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });

});


const PORT = 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))