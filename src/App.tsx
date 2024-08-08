// src/App.tsx
import React from 'react';
import ThemeToggleButton from './components/ThemeToggleButton';
import SettingsButton from './components/SettingsButton';
import Sidebar from './components/Sidebar';
import Project from './components/Project'; // Projeyi gösteren bileşeni buraya ekleyin
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <header className="header">
          <h1>To-Do List Uygulaması</h1>
          <ThemeToggleButton />
          <SettingsButton />
        </header>
        <Project /> {/* Projeleri gösteren bileşeni burada kullanın */}
      </div>
    </div>
  );
};

export default App;
