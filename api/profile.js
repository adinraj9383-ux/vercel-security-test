export default function handler(req, res) {
  const loggedInUser = req.query.user;
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

  // Simulated authentication
  if (!loggedInUser) {
    return res.status(401).json({
      error: "Not authenticated"
    });
  }

  // Authorization check
  if (loggedInUser !== requestedProfile) {
    return res.status(403).json({
      error: "You are not allowed to access this profile"
    });
  }

  const profile = profiles[requestedProfile];

  if (!profile) {
    return res.status(404).json({
      error: "User not found"
    });
  }

  res.status(200).json(profile);
}
