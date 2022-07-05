import jwt from "jsonwebtoken";
import connection from "../database.js";
import { financialRepository } from "../repositories/FinancialEventsRepository.js";
export const financialEvent = async (req, res) => {
  try {
    const { value, type } = req.body;

    if (!value || !type) {
      return res.sendStatus(422);
    }

    const financialTypes = ["INCOME", "OUTCOME"];
    if (!financialTypes.includes(type)) {
      return res.sendStatus(422);
    }

    if (value < 0) {
      return res.sendStatus(422);
    }
    const UserId = user.id;
    await financialRepository.insertValue(UserId, value, type);

    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export const financialEventConsult = async (req, res) => {
  try {
    const UserId = user.id;
    const events = await financialRepository.event(UserId);

    res.send(events.rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export const financialEventSum = async (req, res) => {
  try {
    const UserId = user.id;
    const events = await financialRepository.event(UserId);

    const sum = events.rows.reduce(
      (total, event) =>
        event.type === "INCOME" ? total + event.value : total - event.value,
      0
    );

    res.send({ sum });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
