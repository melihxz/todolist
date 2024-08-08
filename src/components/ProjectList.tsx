// src/components/ProjectList.tsx
import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import Project from './Project';

interface ProjectData {
  id: number;
  name: string;
  bgColor: string;
}

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [showModal, setShowModal] = useState(false);

  const addProject = (name: string, bgColor: string) => {
    const newProject: ProjectData = {
      id: Date.now(),
      name,
      bgColor,
    };
    setProjects([...projects, newProject]);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Add New Project</button>
      {showModal && (
        <ProjectModal
          onClose={() => setShowModal(false)}
          onCreate={addProject}
        />
      )}
      <div className="project-list">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item"
            style={{ backgroundColor: project.bgColor }}
            onClick={() => {/* Projeyi gösterme işlevini buraya ekleyin */}}
          >
            <h3>{project.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
