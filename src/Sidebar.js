import React from 'react';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import ImageIcon from '@mui/icons-material/Image';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import HistoryIcon from '@mui/icons-material/History';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';

const sidebarItems = [
  {
    label: 'Chat',
    icon: <ChatBubbleOutlineIcon sx={{ color: '#5f6368' }} fontSize="medium" />, 
    active: true,
  },
  {
    label: 'Stream',
    icon: <GraphicEqIcon sx={{ color: '#5f6368' }} fontSize="medium" />, 
  },
  {
    label: 'Generate Media',
    icon: <ImageIcon sx={{ color: '#5f6368' }} fontSize="medium" />, 
  },
  {
    label: 'Build',
    icon: <BuildOutlinedIcon sx={{ color: '#5f6368' }} fontSize="medium" />, 
  },
  {
    label: 'History',
    icon: <HistoryIcon sx={{ color: '#5f6368' }} fontSize="medium" />, 
    sub: {
      label: 'Enable saving',
      icon: <AddToDriveIcon sx={{ color: '#5f6368' }} fontSize="small" />,
    },
  },
];

export default function Sidebar({ collapsed, onCollapse }) {
  return (
    <aside className={`flex flex-col justify-between h-[calc(100vh-64px)] bg-[#f7f9fa] border-[#ececec] transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'} min-w-[64px]`}>
      <nav className="mt-4 flex flex-col gap-1">
        {sidebarItems.map((item) => (
          <React.Fragment key={item.label}>
            <button
              className={`flex items-center gap-3 px-4 py-2 mx-2 rounded-full transition-colors text-gray-700 font-medium ${item.active ? 'bg-[#eceffc] text-[#174ea6] font-bold' : 'hover:bg-gray-100'} ${collapsed ? 'justify-center px-0' : ''}`}
              style={item.active ? { fontWeight: 600 } : {}}
            >
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </button>
            {/* Sub-item for History */}
            {item.sub && !collapsed && (
              <button className="flex items-center gap-2 pl-12 pr-4 py-2 mx-2 rounded-full transition-colors text-gray-600 text-sm font-normal hover:bg-gray-100">
                {item.sub.icon}
                <span>{item.sub.label}</span>
              </button>
            )}
          </React.Fragment>
        ))}
      </nav>
      <div className="flex flex-col items-center px-4 pb-4 w-full">
        {!collapsed && (
          <div className="text-xs text-gray-500 mb-4 text-left w-full">
            <svg className="inline mr-1 mb-0.5 text-gray-400" width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fbbc04" strokeWidth="2"/><path d="M12 8v4l3 3" stroke="#fbbc04" strokeWidth="2" strokeLinecap="round"/></svg>
            This model is not stable and may<br />not be suitable for production use. <a href="#" className="text-blue-600 underline">Learn more.</a>
          </div>
        )}
      </div>
    </aside>
  );
} 