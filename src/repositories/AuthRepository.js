import connection from "../database.js";

const existingUsers = ({ email }) => {
  return connection.query(`SELECT * FROM "users" WHERE "email"=$1`, [email]);
};
const insertUsers = ({ name, email, hashedPassword }) => {
  connection.query(
    `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
    [name, email, hashedPassword]
  );
};

const findByEmail = ({ email }) => {
  return connection.query(`SELECT * FROM "users" WHERE "email"=$1`, [email]);
};
export const authRepository = {
  existingUsers,
  insertUsers,
  findByEmail,
};
