import React, { useRef } from 'react';

export default function PromptBar() {
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the uploaded file here
      console.log('File uploaded:', file);
    }
  };

  const handlePlusClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="fixed md:static bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:border-none md:bg-transparent p-3 md:p-0 md:mb-10 w-full max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 justify-center w-full">
        <div className="flex-1 relative w-full">
          <input
            type="text"
            placeholder="'Item: Apple, Price: $1'. Extract name, price to JSON."
            className="flex-1 px-4 md:px-6 py-2.5 md:py-4 rounded-full border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#174ea6] transition w-full text-sm md:text-lg shadow-sm placeholder-[#888] font-sans pr-32 md:pr-40"
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
            accept=".txt,.json,.csv"
          />
          <div className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 md:gap-2">
            <button 
              onClick={handlePlusClick}
              className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-[#f1f4fa] text-[#174ea6] hover:bg-[#e6eaf3] transition"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="md:w-5 md:h-5"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
            <button className="flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-1.5 md:py-2 bg-[#ececec] text-[#888] rounded-full font-semibold shadow-none cursor-not-allowed select-none text-xs md:text-base">
              <span>Run</span>
              <span className="hidden md:inline">Ctrl ⏎</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 