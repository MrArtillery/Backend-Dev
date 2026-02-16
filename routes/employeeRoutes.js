import express from "express";
import {
    addEmployee,
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
    getPayroll
} from "../controllers/employeeController.js";

const router = express.Router();

router.post("/", addEmployee);
router.get("/", getEmployees);
router.get("/:id", getEmployeeById);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);
router.get("/payroll/:id", getPayroll);

export default router;
