import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import PromptBar from "./PromptBar";
import WhatsNewCards from "./WhatsNewCards";
import RightSidebar from "./RightSidebar";
import CardNavBar from "./CardNavBar";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [mobileRightSidebarOpen, setMobileRightSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#f7f9fa] font-sans">
      <Header 
        onHamburgerClick={() => setMobileSidebarOpen(true)} 
        onMixerClick={() => setMobileRightSidebarOpen(true)}
      />
      <div className="flex flex-1 w-full gap-x-2">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex">
          <Sidebar collapsed={sidebarCollapsed} onCollapse={() => setSidebarCollapsed((v) => !v)} />
        </div>
        {/* Mobile Left Sidebar Overlay */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex md:hidden" onClick={() => setMobileSidebarOpen(false)}>
            <div className="bg-white h-full w-64 shadow-lg" onClick={e => e.stopPropagation()}>
              <Sidebar collapsed={false} onCollapse={() => setMobileSidebarOpen(false)} />
            </div>
          </div>
        )}
        {/* Main Content */}
        <div className="flex-1 h-[calc(100vh-64px)] flex flex-col relative items-center justify-center px-2 md:px-0">
          <div className="flex-1 h-full w-full bg-white rounded-l-2xl rounded-r-2xl shadow-lg flex flex-col p-4 md:p-8 max-w-full md:max-w-none mx-auto">
            <CardNavBar />
            <div className="flex-1 flex flex-col justify-center items-center w-full">
              <div className="w-full max-w-3xl text-center">
                <h1 className="text-4xl md:text-5xl font-normal text-[#174ea6] mb-10">Welcome to AI Studio</h1>
                <PromptBar />
              </div>
              <WhatsNewCards />
            </div>
          </div>
          <button
            className="hidden md:flex absolute -left-4 bottom-8 w-8 h-8 items-center justify-center rounded-full bg-white border border-gray-200 shadow hover:bg-gray-100 transition z-40"
            onClick={() => setSidebarCollapsed((v) => !v)}
          >
            {sidebarCollapsed ? (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="#5f6368" strokeWidth="2" strokeLinecap="round"/></svg>
            ) : (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#5f6368" strokeWidth="2" strokeLinecap="round"/></svg>
            )}
          </button>
        </div>
        {/* Desktop Right Sidebar */}
        <div className="hidden md:flex h-[calc(100vh-64px)] bg-white rounded-2xl shadow-lg flex-col p-0">
          <RightSidebar isOpen={true} onClose={() => {}} />
        </div>
        {/* Mobile Right Sidebar Overlay */}
        {mobileRightSidebarOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex md:hidden" onClick={() => setMobileRightSidebarOpen(false)}>
            <div className="absolute right-0 h-full w-full md:w-[340px] bg-white shadow-lg" onClick={e => e.stopPropagation()}>
              <RightSidebar isOpen={true} onClose={() => setMobileRightSidebarOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
