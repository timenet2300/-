import React, { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { SwotAnalysis } from './components/SwotAnalysis';
import { FiveForces } from './components/FiveForces';
import { LifeCycle } from './components/LifeCycle';
import { AIAnalyst } from './components/AIAnalyst';
import { TechTrends } from './components/TechTrends';
import { FinanceAnalysis } from './components/FinanceAnalysis';
import { Industry, AnalysisView } from './types';

const App: React.FC = () => {
  const [currentIndustry, setIndustry] = useState<Industry>(Industry.ELECTRONICS);
  const [currentView, setView] = useState<AnalysisView>(AnalysisView.DASHBOARD);

  const renderContent = () => {
    // Top Level: AI Agent
    if (currentIndustry === Industry.AI_AGENT) {
      return <AIAnalyst />;
    }

    // Top Level: Industries (Electronics / Finance)
    switch (currentView) {
      case AnalysisView.DASHBOARD:
        return currentIndustry === Industry.ELECTRONICS ? <Dashboard /> : <FinanceAnalysis />;
      case AnalysisView.TRENDS:
        // Finance doesn't have a specific Trends tab designed yet, could be added later
        // Defaulting to TechTrends for Electronics
        return currentIndustry === Industry.ELECTRONICS ? <TechTrends /> : <FinanceAnalysis />;
      case AnalysisView.SWOT:
        return <SwotAnalysis industry={currentIndustry} />;
      case AnalysisView.FIVE_FORCES:
        return <FiveForces industry={currentIndustry} />;
      case AnalysisView.LIFE_CYCLE:
        return <LifeCycle industry={currentIndustry} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header 
        currentIndustry={currentIndustry} 
        setIndustry={setIndustry}
        currentView={currentView}
        setView={setView}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      <footer className="bg-white border-t border-slate-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Taiwan Insights. Industry Analysis Platform.</p>
          <p className="mt-2">Data sourced from MOEA, FSC, and Market Reports.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;