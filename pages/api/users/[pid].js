import { dbConnect } from "@/db";

export default async function handler(req, res) {
  const { pid } = req.query;
  if (req.method === "GET") {
    const result = await dbConnect.query(
      `SELECT * FROM users WHERE id = ${pid}`
    );
    res.status(200).json(result.rows[0]);
  } else {
    res.status(404).json({ error: "Not found" });
  }
}
