// src/components/ProjectModal.tsx
import React, { useState } from 'react';

interface ProjectModalProps {
  onClose: () => void;
  onCreate: (name: string, bgColor: string) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ onClose, onCreate }) => {
  const [projectName, setProjectName] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');

  const handleCreate = () => {
    onCreate(projectName, bgColor);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create New Project</h2>
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
        <button onClick={handleCreate}>Create Project</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default ProjectModal;
