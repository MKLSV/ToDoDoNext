import connectToDatabase from '../../../lib/mongodb';
import Task from '../../../model/Task';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    console.log('heheh')
    const tasks = await Task.find();
    return res.status(200).json(tasks);
  }

  if (req.method === 'POST') {
    const newTask = new Task(req.body);
    await newTask.save();
    return res.status(201).json(newTask);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
