import connectToDatabase from '../../../lib/mongodb';
import Task from '../../../model/Task';

export default async function handler(req, res) {
  const { id } = req.query;
  await connectToDatabase();

  if (req.method === 'PUT') {
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedTask) return res.status(404).json({ error: 'Task not found' });
    return res.status(200).json(updatedTask);
  }

  if (req.method === 'DELETE') {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) return res.status(404).json({ error: 'Task not found' });
    return res.status(200).json({ message: 'Task deleted successfully', deletedTask });
  }

  res.setHeader('Allow', ['PUT', 'DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
