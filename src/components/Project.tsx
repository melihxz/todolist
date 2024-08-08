// src/components/Project.tsx
import React, { useState } from 'react';
import TaskList from './TaskList';

interface List {
  id: number;
  name: string;
}

const Project: React.FC = () => {
  const [lists, setLists] = useState<List[]>([]);
  const [newListName, setNewListName] = useState('');

  const addList = () => {
    if (newListName.trim() === '') return;
    
    const newList: List = {
      id: Date.now(),
      name: newListName,
    };
    setLists([...lists, newList]);
    setNewListName('');
  };

  const updateListName = (id: number, newName: string) => {
    setLists(lists.map(list =>
      list.id === id ? { ...list, name: newName } : list
    ));
  };

  return (
    <div>
      <input
        type="text"
        value={newListName}
        onChange={(e) => setNewListName(e.target.value)}
        placeholder="Add new list"
      />
      <button onClick={addList}>+ Add New List</button>
      <div className="list-container">
        {lists.map((list) => (
          <div key={list.id} className="list-item">
            <input
              type="text"
              value={list.name}
              onChange={(e) => updateListName(list.id, e.target.value)}
            />
            <TaskList />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
