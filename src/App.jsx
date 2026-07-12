import React, { useState } from 'react';
import { Bell, ArrowLeft, HeartPulse, Activity, BarChart3 } from 'lucide-react';
import Module1 from './Module1';
import Module2 from './Module2';
import Module3 from './Module3';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('mod1'); // mod1, mod2, mod3
  const [isAfter, setIsAfter] = useState(false);

  const renderModule = () => {
    switch (activeTab) {
      case 'mod1': return <Module1 isAfter={isAfter} />;
      case 'mod2': return <Module2 isAfter={isAfter} />;
      case 'mod3': return <Module3 isAfter={isAfter} />;
      default: return null;
    }
  };

  const isMobile = activeTab === 'mod1' || activeTab === 'mod2';

  return (
    <div className="app-container">
      <div className={`transition-all duration-500 ease-in-out bg-white shadow-xl ${isMobile ? 'mobile-frame' : 'full-width-frame'}`}>
        
        {/* Top Navigation */}
        <div className="flex items-center justify-between p-4 bg-white border-b border-[var(--color-border)] sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <ArrowLeft size={24} className="text-[var(--color-charcoal)] cursor-pointer" />
            <div className="flex items-center gap-2 font-bold text-xl text-[var(--color-charcoal)]">
              <div className="w-8 h-8 bg-[var(--color-teal)] text-white rounded-md flex items-center justify-center font-black text-lg">
                H
              </div>
              Hinge Health
            </div>
          </div>
          <Bell size={24} className="text-[var(--color-charcoal)] cursor-pointer" />
        </div>

        {/* Top Tab Bar */}
        <div className="flex border-b border-[var(--color-border)] bg-white sticky top-[73px] z-40 overflow-x-auto scrollbar-hide">
          <button 
            className={`flex-1 min-w-[120px] py-4 text-sm font-bold flex flex-col items-center gap-2 transition-colors relative ${activeTab === 'mod1' ? 'text-[var(--color-charcoal)]' : 'text-meta hover:text-[var(--color-charcoal)]'}`}
            onClick={() => { setActiveTab('mod1'); setIsAfter(false); }}
          >
            <HeartPulse size={20} className={activeTab === 'mod1' ? 'text-[var(--color-teal)]' : ''} />
            <span className="whitespace-nowrap">🏥 Complexity Flag</span>
            {activeTab === 'mod1' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-teal)] rounded-t-md slide-up"></div>}
          </button>
          <button 
            className={`flex-1 min-w-[120px] py-4 text-sm font-bold flex flex-col items-center gap-2 transition-colors relative ${activeTab === 'mod2' ? 'text-[var(--color-charcoal)]' : 'text-meta hover:text-[var(--color-charcoal)]'}`}
            onClick={() => { setActiveTab('mod2'); setIsAfter(false); }}
          >
            <Activity size={20} className={activeTab === 'mod2' ? 'text-[var(--color-teal)]' : ''} />
            <span className="whitespace-nowrap">🛡️ Eligibility Score</span>
            {activeTab === 'mod2' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-teal)] rounded-t-md slide-up"></div>}
          </button>
          <button 
            className={`flex-1 min-w-[120px] py-4 text-sm font-bold flex flex-col items-center gap-2 transition-colors relative ${activeTab === 'mod3' ? 'text-[var(--color-charcoal)]' : 'text-meta hover:text-[var(--color-charcoal)]'}`}
            onClick={() => { setActiveTab('mod3'); setIsAfter(false); }}
          >
            <BarChart3 size={20} className={activeTab === 'mod3' ? 'text-[var(--color-teal)]' : ''} />
            <span className="whitespace-nowrap">📊 MSK Risk Index</span>
            {activeTab === 'mod3' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-teal)] rounded-t-md slide-up"></div>}
          </button>
        </div>

        {/* Global Before/After Toggle */}
        <div className="toggle-wrapper">
          <div className="pill-toggle">
            <div className={`toggle-indicator ${isAfter ? 'right' : ''}`}></div>
            <div 
              className={`toggle-option ${!isAfter ? 'active' : ''}`}
              onClick={() => setIsAfter(false)}
            >
              <div className={`status-dot ${!isAfter ? 'red' : 'bg-[var(--color-grey-light)]'}`}></div>
              Current Experience
            </div>
            <div 
              className={`toggle-option ${isAfter ? 'active' : ''}`}
              onClick={() => setIsAfter(true)}
            >
              <div className={`status-dot ${isAfter ? 'green' : 'bg-[var(--color-grey-light)]'}`}></div>
              Proposed Experience
            </div>
          </div>
        </div>

        {/* Module Content */}
        <div className="bg-[var(--color-card-bg)] min-h-[calc(100vh-200px)]">
          {renderModule()}
        </div>

      </div>
    </div>
  );
}

export default App;
