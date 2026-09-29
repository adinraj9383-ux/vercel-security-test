export default function handler(req, res) {
  const { username, password } = req.query;

  if (username === "adin" && password === "test123") {
    return res.status(200).json({
      success: true,
      message: "Login successful"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid username or password"
  });
}
