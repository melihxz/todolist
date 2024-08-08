// src/components/TaskItem.tsx
import React from 'react';
import '../styles/TaskItem.css';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h4 onClick={() => toggleTask(task.id)}>{task.title}</h4>
      <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
    </div>
  );
};

export default TaskItem;
