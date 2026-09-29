export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const { username, password } = req.body || {};

  if (username !== "adin" || password !== "test123") {
    return res.status(401).json({
      error: "Invalid username or password"
    });
  }

  // Generate a random value for this lab session.
  const token =
    crypto.randomUUID() + "-" + crypto.randomUUID();

  res.status(200).json({
    success: true,
    token
  });
}
