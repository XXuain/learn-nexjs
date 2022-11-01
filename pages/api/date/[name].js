/** @format */

// test url: api/date/birthday
export default function handler(req, res) {
  const { name } = req.query;
  res.status(200).json({ name });
}
