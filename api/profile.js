export default function handler(req, res) {
  const requestedProfile = req.query.id;

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

  // Simulated server-side authenticated identity.
  // In a real application this would come from a validated session.
  const authenticatedUser = "1001";

  if (!profiles[requestedProfile]) {
    return res.status(404).json({
      error: "User not found"
    });
  }

  if (requestedProfile !== authenticatedUser) {
    return res.status(403).json({
      error: "You are not allowed to access this profile"
    });
  }

  res.status(200).json(profiles[requestedProfile]);
}
