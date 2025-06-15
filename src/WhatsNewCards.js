import React from 'react';

const whatsNew = [
  {
    title: 'Native speech generation',
    desc: 'Generate high quality text to speech with Gemini',
    tag: 'New',
    icon: (
      <div className="w-10 h-10 bg-[#23272f] rounded-lg flex items-center justify-center">
        <img src="https://cdn-icons-png.flaticon.com/512/727/727240.png" alt="speech" className="w-6 h-6" />
      </div>
    ),
  },
  {
    title: 'Live audio-to-audio dialog',
    desc: "Try Gemini's natural, real-time dialog with audio and video inputs",
    tag: 'New',
    icon: (
      <div className="w-10 h-10 bg-[#23272f] rounded-lg flex items-center justify-center">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="14" fill="#3B82F6"/></svg>
      </div>
    ),
  },
  {
    title: 'Native image generation',
    desc: 'Interleaved text-and-image generation with the new Gemini 2.0 Flash',
    tag: '',
    icon: (
      <div className="w-10 h-10 bg-[#23272f] rounded-lg flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=48&h=48" alt="horse" className="object-cover w-full h-full" />
      </div>
    ),
  },
  {
    title: 'Explore and co-develop apps',
    desc: 'See Gemini in action with interactive, open source examples',
    tag: '',
    icon: (
      <div className="w-10 h-10 bg-[#23272f] rounded-lg flex items-center justify-center overflow-hidden">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png" alt="Google" className="object-contain w-8 h-8" />
      </div>
    ),
  },
];

export default function WhatsNewCards() {
  return (
    <section className="w-full max-w-4xl font-sans">
      <h2 className="text-lg font-medium text-[#444] mb-4 text-left">What's new</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {whatsNew.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-4 p-4 bg-[#e9f0fa] rounded-2xl shadow-none border-none relative"
          >
            {item.icon}
            <div className="flex-1">
              <div className="flex items-center mb-1 justify-between w-full">
                <span className="font-semibold text-[#1a1a1a] text-base">{item.title}</span>
                {item.tag && (
                  <span className="flex items-center justify-center px-2 py-1 text-xs rounded-full" style={{borderRadius: '50px', background: '#2563eb', color: 'white', fontWeight: 500}}>{item.tag}</span>
                )}
              </div>
              <p className="text-[#444] text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 