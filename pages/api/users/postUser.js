import { addUser } from "../../../models/userModel"; // Cập nhật tên hàm thành addUser

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
      allowedMethods: ["POST"]
    });
  }

  try {
    let userData = req.body;
    if (typeof userData === 'string') {
      try {
        userData = JSON.parse(userData);
      } catch (parseError) {
        return res.status(400).json({
          message: "Invalid JSON format",
          error: parseError.message
        });
      }
    }

    const missingFields = [];
    
    if (!userData.username) missingFields.push("username");
    if (!userData.email) missingFields.push("email");
    if (!userData.password) missingFields.push("password");

    if (missingFields.length > 0) {
      return res.status(400).json({
        message: "Missing required fields",
        missingFields
      });
    }

    // Validate field lengths
    if (userData.username.length > 100) {
      return res.status(400).json({
        message: "Username too long",
        detail: "Username must not exceed 100 characters"
      });
    }

    if (userData.email.length > 255) {
      return res.status(400).json({
        message: "Email too long",
        detail: "Email must not exceed 255 characters"
      });
    }

    if (userData.password.length > 255) {
      return res.status(400).json({
        message: "Password too long",
        detail: "Password must not exceed 255 characters"
      });
    }

    if (userData.role && userData.role.length > 20) {
      return res.status(400).json({
        message: "Role too long",
        detail: "Role must not exceed 20 characters"
      });
    }

    // Sử dụng addUser thay vì postUser
    const newUser = await addUser(userData);

    return res.status(201).json({
      message: "User created successfully",
      user: newUser
    });

  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({
      message: "Failed to create user",
      error: error.message
    });
  }
}
