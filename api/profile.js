export default function handler(req, res) {
  const userId = req.query.id;

  const profiles = {
    "1001": {
      name: "Adin",
      email: "adin@test.local"
    },
    "1002": {
      name: "TestUser",
      email: "testuser@test.local"
    }
  };

  const profile = profiles[userId];

  if (!profile) {
    return res.status(404).json({
      error: "User not found"
    });
  }

  res.status(200).json(profile);
}
