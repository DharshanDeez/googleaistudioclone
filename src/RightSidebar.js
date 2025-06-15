import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function RightSidebar({ isOpen, onClose }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState('Gemini 2.5 Pro Preview');

  const models = [
    'Gemini 2.5 Pro Preview',
    'Gemini Pro',
    'Gemini Pro Vision',
    'Gemini Ultra',
    'PaLM 2'
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectModel = (model) => {
    setSelectedModel(model);
    setIsDropdownOpen(false);
  };

  return (
    <aside className={`fixed md:relative top-0 right-0 w-full md:w-[340px] h-full md:h-auto flex flex-col z-30 bg-white md:bg-transparent transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#ececec]">
        <span className="font-medium text-lg">Run settings</span>
        <button 
          onClick={onClose}
          className="p-1.5 rounded hover:bg-gray-100 md:hidden"
        >
          <CloseIcon sx={{ color: '#5f6368', fontSize: 20 }} />
        </button>
      </div>
      <div className="flex-1 px-5 py-4 flex flex-col gap-6 overflow-y-auto">
        {/* Model Dropdown */}
        <div className="relative">
          <label className="block text-xs text-gray-500 mb-1">Model</label>
          <button 
            onClick={toggleDropdown}
            className="w-full flex items-center justify-between px-3 py-2 border border-gray-200 rounded-lg bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 transition"
          >
            <span>{selectedModel}</span>
            <ArrowDropDownIcon sx={{ color: '#5f6368', fontSize: 18 }} />
          </button>
          
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
              {models.map((model) => (
                <button
                  key={model}
                  onClick={() => selectModel(model)}
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition ${
                    selectedModel === model ? 'text-[#174ea6] font-medium' : 'text-gray-900'
                  }`}
                >
                  {model}
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Token count */}
        <div className="flex items-center justify-between text-sm text-gray-700">
          <span>Token count</span>
          <span>0 / 1,048,576</span>
        </div>
        {/* Temperature */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-700">Temperature</span>
            <span className="text-base border border-gray-200 rounded px-2 py-0.5">1</span>
          </div>
          <input type="range" min="0" max="2" step="0.1" defaultValue="1" className="w-full accent-blue-600" />
        </div>
        <hr className="my-2 border-[#ececec]" />
        {/* Thinking */}
        <div>
          <div className="font-medium text-[#222] mb-3">Thinking</div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-700">Thinking mode</span>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-10 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
              <div className="absolute ml-1 w-4 h-4 bg-white border border-gray-300 rounded-full shadow -translate-x-0.5 peer-checked:translate-x-4 transition-all"></div>
            </label>
          </div>
        </div>
        <hr className="my-2 border-[#ececec]" />
        {/* Tools */}
        <div>
          <div className="flex items-center justify-between cursor-pointer select-none mb-2">
            <span className="font-medium text-[#222]">Tools</span>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </div>
          <div className="flex flex-col gap-3">
            {/* Tool Row */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Structured output <span className="text-xs text-gray-400 ml-1">Edit</span></span>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-8 h-5 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
                <div className="absolute ml-1 w-3.5 h-3.5 bg-white border border-gray-300 rounded-full shadow -translate-x-0.5 peer-checked:translate-x-3 transition-all"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Code execution</span>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-8 h-5 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
                <div className="absolute ml-1 w-3.5 h-3.5 bg-white border border-gray-300 rounded-full shadow -translate-x-0.5 peer-checked:translate-x-3 transition-all"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Function calling <span className="text-xs text-gray-400 ml-1">Edit</span></span>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-8 h-5 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
                <div className="absolute ml-1 w-3.5 h-3.5 bg-white border border-gray-300 rounded-full shadow -translate-x-0.5 peer-checked:translate-x-3 transition-all"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Grounding with Google Search</span>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-8 h-5 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
                <div className="absolute ml-1 w-3.5 h-3.5 bg-white border border-gray-300 rounded-full shadow -translate-x-0.5 peer-checked:translate-x-3 transition-all"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">URL context</span>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-8 h-5 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
                <div className="absolute ml-1 w-3.5 h-3.5 bg-white border border-gray-300 rounded-full shadow -translate-x-0.5 peer-checked:translate-x-3 transition-all"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
} 