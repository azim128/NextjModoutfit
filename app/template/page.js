'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Import the JSON data
import templatesData from '../data.json';

const Template = () => {
  const [templates, setTemplates] = useState([]);
  const [filteredTemplates, setFilteredTemplates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Set the templates and filteredTemplates with the data from the JSON file
    setTemplates(templatesData);
    setFilteredTemplates(templatesData);
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = templates.filter((template) =>
      template.image.toLowerCase().includes(term)
    );
    setFilteredTemplates(filtered);
  };

  

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800">Templates</h1>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Search by template name...."
          className="border border-gray-300 rounded py-2 px-4 w-full outline-none"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTemplates.map((template, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow overflow-hidden"
          >
            <Image
              src={template.image}
              alt={template.image}
              width={400}
              height={300}
              className="rounded-t-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Use this template
              </button>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Template;
