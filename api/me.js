export default function handler(req, res) {
  const auth = req.headers.authorization;

  if (auth !== "Bearer lab-token-adin-123") {
    return res.status(401).json({
      error: "Unauthorized"
    });
  }

  res.status(200).json({
    name: "Adin",
    email: "adin@test.local"
  });
}
