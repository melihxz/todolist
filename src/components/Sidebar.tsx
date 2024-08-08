// src/components/Sidebar.tsx
import React from 'react';
import ProjectList from './ProjectList';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>Projects</h2>
      <ProjectList /> {/* Proje listesi bileşeni */}
    </div>
  );
};

export default Sidebar;
