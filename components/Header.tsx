import React from 'react';
import { LayoutDashboard, Target, Users, Activity, Bot, Lightbulb, Landmark } from 'lucide-react';
import { AnalysisTab } from '../types';

interface HeaderProps {
  activeTab: AnalysisTab;
  setActiveTab: (tab: AnalysisTab) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: AnalysisTab.DASHBOARD, label: '電子總覽', icon: LayoutDashboard },
    { id: AnalysisTab.TECH_TRENDS, label: '關鍵技術', icon: Lightbulb },
    { id: AnalysisTab.FINANCE, label: '金融保險', icon: Landmark },
    { id: AnalysisTab.SWOT, label: '電子 SWOT', icon: Target },
    { id: AnalysisTab.FIVE_FORCES, label: '五力分析', icon: Users },
    { id: AnalysisTab.LIFE_CYCLE, label: '生命週期', icon: Activity },
    { id: AnalysisTab.AI_INSIGHTS, label: 'AI 顧問', icon: Bot },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="font-bold text-xl text-slate-800 tracking-tight">Taiwan Insights</span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${
                        activeTab === item.id
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <Icon size={16} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Mobile menu button could go here */}
        </div>
      </div>
      
      {/* Mobile Navigation (Simple version) */}
      <div className="md:hidden border-t border-slate-100 overflow-x-auto">
        <div className="flex px-4 py-2 space-x-4">
           {navItems.map((item) => (
             <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`whitespace-nowrap px-3 py-2 rounded-md text-xs font-medium ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600'
                }`}
             >
               {item.label}
             </button>
           ))}
        </div>
      </div>
    </header>
  );
};