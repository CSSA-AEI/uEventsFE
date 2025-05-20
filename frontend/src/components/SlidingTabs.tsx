import React, { useState } from 'react';
import './slidingtabs.css';

export interface TabsProps {
    tabs: string[];
    currentTab: (newValue: number) => void;
}
const SlidingTabs: React.FC<TabsProps> = ({tabs, currentTab}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs-header">
      {tabs.map((label, index) => (
        <div
          key={index}
          className={`tab-item ${index === activeTab ? 'active' : ''}`}
          onClick={() => {
            setActiveTab(index);
            currentTab?.(index)
          }}
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
