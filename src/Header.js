import React, { useState } from 'react';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EditIcon from '@mui/icons-material/Edit';
import TuneIcon from '@mui/icons-material/Tune';

export default function Header({ onHamburgerClick, onMixerClick }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState('Gemini Pro');

  const models = [
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
    <header className="w-full flex items-center justify-between px-3 md:px-8 py-2 md:py-3 bg-[#f7f9fa] border-[#ececec] font-sans">
      <div className="flex items-center gap-1 md:gap-2">
        <button className="md:hidden p-1.5 rounded hover:bg-[#ececec] transition" onClick={onHamburgerClick}>
          <MenuIcon style={{ fontSize: 24 }} />
        </button>
        <div className="hidden md:flex items-center gap-2">
          <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="Google" className="h-6" />
          <span className="text-xl font-medium text-[#1a1a1a]">AI Studio</span>
        </div>
        {/* Mobile Model Selector */}
        <div className="md:hidden relative">
          <button 
            onClick={toggleDropdown}
            className="flex items-center gap-0.5 bg-white px-2 py-1 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
          >
            <span className="text-xs font-medium text-[#1a1a1a]">{selectedModel}</span>
            <ArrowDropDownIcon style={{ color: '#5f6368', fontSize: 16 }} />
          </button>
          
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-36 bg-white rounded-lg shadow-lg border border-gray-200 py-0.5 z-50">
              {models.map((model) => (
                <button
                  key={model}
                  onClick={() => selectModel(model)}
                  className={`w-full text-left px-2 py-1.5 text-xs hover:bg-gray-50 transition ${
                    selectedModel === model ? 'text-[#174ea6] font-medium' : 'text-[#1a1a1a]'
                  }`}
                >
                  {model}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-3 md:gap-6">
        <button className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-[#f1f4fa] text-[#1a1a1a] rounded-full font-medium text-sm hover:bg-[#e6eaf3] transition">
          <VpnKeyIcon style={{ color: '#174ea6', fontSize: 20 }} />
          Get API key
        </button>
        <span className="hidden md:inline font-semibold text-[#1a1a1a]">Studio</span>
        <span className="hidden md:inline text-[#444] hover:text-black cursor-pointer">Dashboard</span>
        {/* Mobile Edit and Mixer Icons */}
        <div className="flex md:hidden items-center gap-2">
          <button className="p-1.5 rounded-full hover:bg-[#ececec] transition">
            <EditIcon style={{ color: '#5f6368', fontSize: 20 }} />
          </button>
          <button 
            onClick={onMixerClick}
            className="p-1.5 rounded-full hover:bg-[#ececec] transition"
          >
            <TuneIcon style={{ color: '#5f6368', fontSize: 20 }} />
          </button>
        </div>
        {/* Desktop Open in New Icon */}
        <button className="hidden md:flex text-[#444] hover:text-black cursor-pointer items-center gap-1">
          <OpenInNewIcon style={{ color: '#174ea6', fontSize: 16 }} />
        </button>
        <button className="p-1.5 md:p-2 rounded-full hover:bg-[#ececec] transition">
          <SettingsIcon style={{ color: '#5f6368', fontSize: 20 }} />
        </button>
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover" />
      </div>
    </header>
  );
} 