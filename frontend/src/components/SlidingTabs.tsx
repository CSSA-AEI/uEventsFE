import React, { useState } from 'react';
import './slidingtabs.css';

const SlidingTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Home', 'Events', 'Socials', 'Team'];

  return (
    <div className="tabs-header">
      {tabs.map((label, index) => (
        <div
          key={index}
          className={`tab-item ${index === activeTab ? 'active' : ''}`}
          onClick={() => setActiveTab(index)}
        >
          {label}
        </div>
      ))}
      <div
        className="tab-underline"
        style={{
          left: `${(activeTab * 100) / tabs.length}%`,
          width: `${100 / tabs.length}%`,
        }}
      />
    </div>
  );
};

export default SlidingTabs;
