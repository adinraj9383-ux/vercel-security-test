export default function handler(req, res) {
  const user = req.query.user || "Guest";

  res.status(200).json({
    message: "Hello!",
    user: user
  });
}
