import { Router } from "express";
import { authorizationToken } from "../middlewares/AuthorizationMiddleware.js";
import {
  financialEvent,
  financialEventConsult,
  financialEventSum,
} from "../controllers/FinancialEventsController.js";
const financialEvents = Router();

financialEvents.post("/financial-events", authorizationToken, financialEvent);
financialEvents.get(
  "/financial-events",
  authorizationToken,
  financialEventConsult
);
financialEvents.get(
  "/financial-events/sum",
  authorizationToken,
  financialEventSum
);
export default financialEvents;
