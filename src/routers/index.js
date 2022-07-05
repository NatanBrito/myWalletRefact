import { Router } from "express";

import authRouter from "./AuthRoute.js";
import financialEvents from "./FinancialEventRouter.js";
const router = Router();

router.use(authRouter);
router.use(financialEvents);

export default router;
