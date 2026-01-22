import React, { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { SwotAnalysis } from './components/SwotAnalysis';
import { FiveForces } from './components/FiveForces';
import { LifeCycle } from './components/LifeCycle';
import { AIAnalyst } from './components/AIAnalyst';
import { TechTrends } from './components/TechTrends';
import { FinanceAnalysis } from './components/FinanceAnalysis';
import { AnalysisTab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AnalysisTab>(AnalysisTab.DASHBOARD);

  const renderContent = () => {
    switch (activeTab) {
      case AnalysisTab.DASHBOARD:
        return <Dashboard />;
      case AnalysisTab.TECH_TRENDS:
        return <TechTrends />;
      case AnalysisTab.FINANCE:
        return <FinanceAnalysis />;
      case AnalysisTab.SWOT:
        return <SwotAnalysis />;
      case AnalysisTab.FIVE_FORCES:
        return <FiveForces />;
      case AnalysisTab.LIFE_CYCLE:
        return <LifeCycle />;
      case AnalysisTab.AI_INSIGHTS:
        return <AIAnalyst />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      <footer className="bg-white border-t border-slate-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Taiwan Insights. Taiwan Industry Analysis Platform.</p>
          <p className="mt-2">Data sourced from MOEA, FSC, and Market Reports.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;