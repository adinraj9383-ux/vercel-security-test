export default function handler(req, res) {
  const user = req.query.user || "Guest";

  res.status(200).send(`
    <html>
      <body>
        <h1>Hello ${user}</h1>
      </body>
    </html>
  `);
}
