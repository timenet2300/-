import React from 'react';
import { SwotItem, Industry } from '../types';
import { Shield, AlertTriangle, Zap, TrendingUp, Landmark } from 'lucide-react';

const electronicsSwot: SwotItem[] = [
  { id: 'es1', text: '完整的半導體垂直分工產業鏈 (IC設計-製造-封測)', category: 'strength' },
  { id: 'es2', text: '先進製程技術全球領先 (TSMC)', category: 'strength' },
  { id: 'es3', text: 'AI 伺服器製造能力與供應鏈彈性 (ODM)', category: 'strength' },
  { id: 'ew1', text: '水電資源供應吃緊，綠電比例不足', category: 'weakness' },
  { id: 'ew2', text: '理工人才短缺，少子化衝擊', category: 'weakness' },
  { id: 'ew3', text: '過度集中於少數大型企業', category: 'weakness' },
  { id: 'eo1', text: '生成式 AI 帶動的高效能運算需求', category: 'opportunity' },
  { id: 'eo2', text: '電動車 (EV) 電子化趨勢', category: 'opportunity' },
  { id: 'eo3', text: '邊緣運算 (Edge AI) 裝置換機潮', category: 'opportunity' },
  { id: 'et1', text: '地緣政治風險與供應鏈去台化壓力', category: 'threat' },
  { id: 'et2', text: '各國晶片法案補貼帶來的競爭', category: 'threat' },
  { id: 'et3', text: '全球經濟衰退影響終端消費需求', category: 'threat' },
];

const financeSwot: SwotItem[] = [
  { id: 'fs1', text: '國內超額儲蓄率高，資金動能充沛', category: 'strength' },
  { id: 'fs2', text: '金融股具高殖利率特性 (4-5%)，吸引長線資金', category: 'strength' },
  { id: 'fs3', text: '數位帳戶與行動支付滲透率高，數位轉型有成', category: 'strength' },
  { id: 'fw1', text: '市場過度飽和 (Over-banking)，殺價競爭嚴重', category: 'weakness' },
  { id: 'fw2', text: '國際化程度不足，主要獲利仍依賴國內市場', category: 'weakness' },
  { id: 'fw3', text: '淨值與獲利受資本市場波動影響大 (壽險業)', category: 'weakness' },
  { id: 'fo1', text: '政府推動亞洲資產管理中心，釋放高資產財管商機', category: 'opportunity' },
  { id: 'fo2', text: '生成式 AI 優化風控、客服與理賠效率', category: 'opportunity' },
  { id: 'fo3', text: 'ETF 被動投資熱潮，帶動手續費與管理費成長', category: 'opportunity' },
  { id: 'ft1', text: '資安攻擊頻傳，駭客勒索風險增加', category: 'threat' },
  { id: 'ft2', text: '2026 接軌 IFRS17 與 ICS，增資壓力大', category: 'threat' },
  { id: 'ft3', text: '地緣政治風險影響海外投資部位評價', category: 'threat' },
];

interface SwotAnalysisProps {
  industry: Industry;
}

export const SwotAnalysis: React.FC<SwotAnalysisProps> = ({ industry }) => {
  const items = industry === Industry.FINANCE ? financeSwot : electronicsSwot;
  const title = industry === Industry.FINANCE ? '金融保險業 SWOT 分析' : '電子產業 SWOT 分析';
  const description = industry === Industry.FINANCE 
    ? '解析台灣金控與銀行保險業的競爭優勢與轉型挑戰' 
    : '深度解析台灣電子產業的內部優劣與外部機會威脅';

  const renderSection = (title: string, category: SwotItem['category'], icon: React.ElementType, colorClass: string, bgClass: string) => {
    const sectionItems = items.filter(i => i.category === category);
    
    return (
      <div className={`p-6 rounded-xl border ${bgClass} h-full flex flex-col`}>
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-lg ${colorClass} bg-white bg-opacity-80 shadow-sm`}>
            {React.createElement(icon, { size: 24 })}
          </div>
          <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        </div>
        <ul className="space-y-3 flex-1">
          {sectionItems.map((item) => (
            <li key={item.id} className="flex items-start gap-3 bg-white bg-opacity-60 p-3 rounded-lg border border-white/50 shadow-sm hover:shadow-md transition-all">
              <span className={`mt-1.5 w-2 h-2 rounded-full ${colorClass.replace('text-', 'bg-')}`}></span>
              <span className="text-slate-700 font-medium leading-relaxed">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            {industry === Industry.FINANCE && <Landmark className="text-indigo-600" />}
            {title}
        </h2>
        <p className="text-slate-500 mt-1">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderSection('Strengths 優勢', 'strength', Shield, 'text-blue-600', 'bg-blue-50 border-blue-100')}
        {renderSection('Weaknesses 劣勢', 'weakness', AlertTriangle, 'text-orange-600', 'bg-orange-50 border-orange-100')}
        {renderSection('Opportunities 機會', 'opportunity', Zap, 'text-emerald-600', 'bg-emerald-50 border-emerald-100')}
        {renderSection('Threats 威脅', 'threat', TrendingUp, 'text-rose-600', 'bg-rose-50 border-rose-100')}
      </div>

      <div className="mt-8 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-2">策略觀點</h3>
        <p className="text-slate-600 leading-relaxed">
          {industry === Industry.FINANCE 
            ? '台灣金融業正處於「數位轉型」與「資產膨脹」的雙重紅利期。優勢在於龐大的內資基礎與穩定的殖利率，但過度競爭(Over-banking)始終是結構性硬傷。未來的勝負關鍵在於誰能透過 AI 降低營運成本，並在財富管理領域搶下高資產客戶。'
            : '台灣電子產業目前處於「強勢防禦」階段。核心競爭力（半導體製造與供應鏈整合）極強，是掌握 AI 時代運算算力的關鍵。然而，地緣政治風險是最大變數，促使產業必須進行全球化佈局（Global Footprint）。'
          }
        </p>
      </div>
    </div>
  );
};