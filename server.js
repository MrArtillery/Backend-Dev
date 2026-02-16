import express from "express";
import employeeRoutes from "./routes/employeeRoutes.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use(logger);

app.use("/employees", employeeRoutes);

app.use(errorHandler);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});