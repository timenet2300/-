export enum Industry {
  ELECTRONICS = 'ELECTRONICS',
  FINANCE = 'FINANCE',
  AI_AGENT = 'AI_AGENT'
}

export enum AnalysisView {
  DASHBOARD = 'DASHBOARD',
  TRENDS = 'TRENDS',
  SWOT = 'SWOT',
  FIVE_FORCES = 'FIVE_FORCES',
  LIFE_CYCLE = 'LIFE_CYCLE'
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