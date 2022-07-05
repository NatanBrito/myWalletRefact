import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
  connectionString: process.env.DATABASE_URL,
});
console.log("DB TA ON PAPAI");
export default connection;
