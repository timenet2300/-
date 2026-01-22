export enum AnalysisTab {
  DASHBOARD = 'DASHBOARD',
  TECH_TRENDS = 'TECH_TRENDS',
  FINANCE = 'FINANCE',
  SWOT = 'SWOT',
  FIVE_FORCES = 'FIVE_FORCES',
  LIFE_CYCLE = 'LIFE_CYCLE',
  AI_INSIGHTS = 'AI_INSIGHTS'
}

export interface SwotItem {
  id: string;
  text: string;
  category: 'strength' | 'weakness' | 'opportunity' | 'threat';
}

export interface FiveForcesData {
  subject: string;
  A: number;
  fullMark: number;
}

export interface LifeCycleData {
  stage: string;
  value: number;
  description: string;
  sectors: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
  timestamp: number;
}