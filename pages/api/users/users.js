import { getAllUsers } from "../../../models/userModel";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const users = await getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
