import { Router } from "express";
import { addEmployee, getEmployee, updateEmployee, removeEmployee, getsingleEmployee } from "../controller/employeeController.js";

const router = Router();

router.get("/all", getEmployee);
router.post("/", addEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", removeEmployee);
router.get("/:id", getsingleEmployee);

export default router;

