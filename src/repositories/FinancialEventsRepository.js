import connection from "../database.js";

const insertValue = ({ UserId, value, type }) => {
  return connection.query(
    `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
    [UserId, value, type]
  );
};
const event = ({ UserId }) => {
  return connection.query(
    `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
    [UserId]
  );
};

export const financialRepository = { insertValue, event };
