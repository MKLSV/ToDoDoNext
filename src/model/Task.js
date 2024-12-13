import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  text: String,
  owner: String,
  type: String,
  dueDate: Number,
  repeat: Boolean,
  createdAt: { type: Number, default: Date.now },
  isCompleted: { type: Boolean, default: false },
});

export default mongoose.models.Task || mongoose.model('Task', TaskSchema);
