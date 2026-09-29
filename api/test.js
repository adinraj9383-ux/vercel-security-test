export default function handler(req, res) {
  const user = req.query.user || "Guest";

  const safeUser = user
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  res.status(200).send(`
    <html>
      <body>
        <h1>Hello ${safeUser}</h1>
      </body>
    </html>
  `);
}
