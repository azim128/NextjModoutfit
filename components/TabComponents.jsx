'use client'
import React, { useState } from 'react';

const Tab = () => {
  const tabs = ['Product', 'Add Image', 'Add Text','Save','Order'];
  const [activeTab, setActiveTab] = useState('Product');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    if (activeTab === 'Product') {
      return <MyComponent />;
    } else if (activeTab === 'Add Image') {
      return <MyComponent2 />;
    } else if (activeTab === 'Add Text') {
      return <MyComponent3 />;
    }
    else if (activeTab === 'Save') {
      return <MyComponent2 />;
    }
    else if (activeTab === 'Order') {
      return <MyComponent />;
    }
    return null;
  };

  const MyComponent = () => {
    return <div className='h-96 w-full border'>Item One</div>;
  };
  const MyComponent2 = () => {
    return <div className='h-96 w-full border'>Item Two</div>;
  };
  const MyComponent3 = () => {
    return <div className='h-96 w-full border'>Item Three</div>;
  };

  return (
    <div className=" px-4 py-6 w-full">
      <div className="flex w-full">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`px-4 py-2 cursor-pointer ${
              activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => handleTabClick(tab)}
          >
            🧿 {tab}
          </div>
        ))}
      </div>
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default Tab;