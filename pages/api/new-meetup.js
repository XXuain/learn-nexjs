/** @format */

// api/new-meetup

function handler(req, res) {
  if (req.method !== 'POST') return;
  const data = req.body;
  console.log(data);
  // set to db
  res.status(201).json({ message: 'success' });
}
