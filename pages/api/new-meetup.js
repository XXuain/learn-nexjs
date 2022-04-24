/** @format */

import { MongoClient } from 'mongodb';
// api/new-meetup

function handler(req, res) {
  if (req.method !== 'POST') return;
  const data = req.body;
  // insert
  const client = await MongoClient.connect('mongodb+srv://xxxx');
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const result = await meetupsCollection.insertOne(data);
  console.log(result);
  client.close();

  res.status(201).json({ message: 'success' });
}
