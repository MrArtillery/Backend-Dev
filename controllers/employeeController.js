import employees from "../data/employees.js";
import { calculateSalary } from "../services/payrollService.js";


// CREATE
export const addEmployee = async (req, res, next) => {
    try {
        const employee = req.body;

        employees.push(employee);

        res.status(201).json({
            success: true,
            data: employee
        });

    } catch (error) {
        next(error);
    }
};


// READ ALL
export const getEmployees = async (req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            data: employees
        });

    } catch (error) {
        next(error);
    }
};


// READ ONE
export const getEmployeeById = async (req, res, next) => {
    try {
        const employee = employees.find(emp => emp.id == req.params.id);

        if (!employee) {
            const err = new Error("Employee not found");
            err.status = 404;
            throw err;
        }

        res.status(200).json({
            success: true,
            data: employee
        });

    } catch (error) {
        next(error);
    }
};


// UPDATE
export const updateEmployee = async (req, res, next) => {
    try {
        const index = employees.findIndex(emp => emp.id == req.params.id);

        if (index === -1) {
            const err = new Error("Employee not found");
            err.status = 404;
            throw err;
        }

        employees[index] = { ...employees[index], ...req.body };

        res.status(200).json({
            success: true,
            data: employees[index]
        });

    } catch (error) {
        next(error);
    }
};


// DELETE
export const deleteEmployee = async (req, res, next) => {
    try {
        const index = employees.findIndex(emp => emp.id == req.params.id);

        if (index === -1) {
            const err = new Error("Employee not found");
            err.status = 404;
            throw err;
        }

        const deleted = employees.splice(index, 1);

        res.status(200).json({
            success: true,
            data: deleted
        });

    } catch (error) {
        next(error);
    }
};


// PAYROLL
export const getPayroll = async (req, res, next) => {
    try {
        const employee = employees.find(emp => emp.id == req.params.id);

        if (!employee) {
            const err = new Error("Employee not found");
            err.status = 404;
            throw err;
        }

        const salaryDetails = calculateSalary(employee.basicSalary);

        res.status(200).json({
            success: true,
            employee: employee.name,
            salaryDetails
        });

    } catch (error) {
        next(error);
    }
};
