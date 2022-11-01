/** @format */

export default function handler(req, res) {
  const { id } = req.query;
  console.log('id', id);
  res.status(200).json({ productId: id });
}
