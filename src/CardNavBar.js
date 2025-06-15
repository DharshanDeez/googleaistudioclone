import React, { useState, useRef, useEffect } from 'react';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CodeIcon from '@mui/icons-material/Code';
import ShareIcon from '@mui/icons-material/Share';
import SaveIcon from '@mui/icons-material/Save';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';

export default function CardNavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { icon: <ShareIcon fontSize="small" />, text: 'Share prompt' },
    { icon: <SaveIcon fontSize="small" />, text: 'No changes to save' },
    { icon: <ClearIcon fontSize="small" />, text: 'Clear chat' },
    { icon: <ContentCopyIcon fontSize="small" />, text: 'Make a copy' },
    { icon: <DeleteIcon fontSize="small" />, text: 'Delete prompt' }
  ];

  return (
    <div className="flex items-center justify-between w-full mb-6 border-b border-[#ececec] pb-3">
      <span className="text-base font-medium text-[#222]">Chat Prompt</span>
      <div className="flex items-center gap-5 text-gray-500">
        {/* Paste Content */}
        <button className="hover:text-black"><ContentPasteIcon fontSize="small" /></button>
        {/* Code */}
        <button className="hover:text-black"><CodeIcon fontSize="small" /></button>
        {/* Share */}
        <button className="hidden md:block hover:text-black"><ShareIcon fontSize="small" /></button>
        {/* Save (disabled) */}
        <button className="hidden md:block text-gray-300 cursor-not-allowed"><SaveIcon fontSize="small" /></button>
        {/* SyncAlt (instead of Send) */}
        <button className="hidden md:block hover:text-black"><SyncAltIcon fontSize="small" /></button>
        {/* Refresh (disabled) */}
        <button className="hidden md:block text-gray-300 cursor-not-allowed"><RefreshIcon fontSize="small" /></button>
        {/* More/vertical dots with dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={toggleDropdown}
            className="hover:text-black"
          >
            <MoreVertIcon fontSize="small" />
          </button>
          
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                >
                  <span className="text-gray-500">{item.icon}</span>
                  <span>{item.text}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 