import crypto from "crypto";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const csrfToken = req.headers["x-csrf-token"];

  if (csrfToken !== "lab-csrf-token-123") {
    return res.status(403).json({
      error: "Invalid CSRF token"
    });
  }

  const { email } = req.body || {};

  if (!email) {
    return res.status(400).json({
      error: "Email required"
    });
  }

  res.status(200).json({
    success: true,
    message: "Email changed",
    newEmail: email
  });
}
