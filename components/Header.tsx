import React from 'react';
import { LayoutDashboard, Target, Users, Activity, Bot, Lightbulb, Landmark, ChevronRight } from 'lucide-react';
import { Industry, AnalysisView } from '../types';

interface HeaderProps {
  currentIndustry: Industry;
  setIndustry: (ind: Industry) => void;
  currentView: AnalysisView;
  setView: (view: AnalysisView) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentIndustry, setIndustry, currentView, setView }) => {
  
  const industries = [
    { id: Industry.ELECTRONICS, label: '電子產業', icon: Lightbulb },
    { id: Industry.FINANCE, label: '金融產業', icon: Landmark },
    { id: Industry.AI_AGENT, label: 'AI 顧問', icon: Bot },
  ];

  const views = [
    { id: AnalysisView.DASHBOARD, label: '總覽 Dashboard', icon: LayoutDashboard },
    { id: AnalysisView.TRENDS, label: '關鍵技術 Trends', icon: Activity, hidden: currentIndustry === Industry.FINANCE },
    { id: AnalysisView.SWOT, label: 'SWOT 分析', icon: Target },
    { id: AnalysisView.FIVE_FORCES, label: '五力分析', icon: Users },
    { id: AnalysisView.LIFE_CYCLE, label: '生命週期', icon: Activity },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center h-auto md:h-16 py-2 md:py-0 gap-4 md:gap-0">
          
          {/* Logo & Industry Selector */}
          <div className="flex items-center justify-between md:justify-start w-full md:w-auto">
            <div className="flex items-center gap-2 cursor-pointer mr-8" onClick={() => setIndustry(Industry.ELECTRONICS)}>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-xl text-slate-800 tracking-tight hidden sm:block">Taiwan Insights</span>
            </div>

            {/* Mobile View Toggle could go here, but using flex wrapping for now */}
            <div className="flex bg-slate-100 p-1 rounded-lg">
              {industries.map((ind) => {
                const Icon = ind.icon;
                const isActive = currentIndustry === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => {
                      setIndustry(ind.id);
                      // Reset view to dashboard when switching industry, unless it's AI Agent
                      if (ind.id !== Industry.AI_AGENT) {
                        setView(AnalysisView.DASHBOARD);
                      }
                    }}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-white text-blue-700 shadow-sm'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="hidden sm:inline">{ind.label}</span>
                    <span className="sm:hidden">{ind.label.slice(0, 2)}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block h-6 w-px bg-slate-200 mx-6"></div>

          {/* Sub-Navigation (Views) - Only visible if not AI Agent */}
          {currentIndustry !== Industry.AI_AGENT && (
            <div className="flex overflow-x-auto no-scrollbar pb-1 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 gap-1">
              {views.filter(v => !v.hidden).map((view) => {
                const isActive = currentView === view.id;
                return (
                  <button
                    key={view.id}
                    onClick={() => setView(view.id)}
                    className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium border transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {/* View Label */}
                    {view.label.split(' ')[0]} 
                    {/* English subtitle/icon could be optional */}
                  </button>
                );
              })}
            </div>
          )}

        </div>
      </div>
    </header>
  );
};