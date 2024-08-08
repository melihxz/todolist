// src/components/SettingsButton.tsx
import React from 'react';

const SettingsButton: React.FC = () => {
  const handleSettingsClick = () => {
    alert('Settings button clicked!');
    // Buraya ayarlar sayfasını açma veya modal gösterme kodları eklenebilir
  };

  return (
    <button onClick={handleSettingsClick}>
      Settings
    </button>
  );
};

export default SettingsButton;
