import React, { useState } from 'react';
import { SwotItem } from '../types';
import { PlusCircle, Shield, AlertTriangle, Zap, TrendingUp } from 'lucide-react';

const initialSwotData: SwotItem[] = [
  { id: 's1', text: '完整的半導體垂直分工產業鏈 (IC設計-製造-封測)', category: 'strength' },
  { id: 's2', text: '先進製程技術全球領先 (TSMC)', category: 'strength' },
  { id: 's3', text: 'AI 伺服器製造能力與供應鏈彈性 (ODM)', category: 'strength' },
  { id: 'w1', text: '水電資源供應吃緊，綠電比例不足', category: 'weakness' },
  { id: 'w2', text: '理工人才短缺，少子化衝擊', category: 'weakness' },
  { id: 'w3', text: '過度集中於少數大型企業', category: 'weakness' },
  { id: 'o1', text: '生成式 AI 帶動的高效能運算需求', category: 'opportunity' },
  { id: 'o2', text: '電動車 (EV) 電子化趨勢', category: 'opportunity' },
  { id: 'o3', text: '邊緣運算 (Edge AI) 裝置換機潮', category: 'opportunity' },
  { id: 't1', text: '地緣政治風險與供應鏈去台化壓力', category: 'threat' },
  { id: 't2', text: '各國晶片法案補貼帶來的競爭', category: 'threat' },
  { id: 't3', text: '全球經濟衰退影響終端消費需求', category: 'threat' },
];

export const SwotAnalysis: React.FC = () => {
  const [items] = useState<SwotItem[]>(initialSwotData);

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
        <h2 className="text-2xl font-bold text-slate-900">SWOT 分析矩陣</h2>
        <p className="text-slate-500 mt-1">深度解析台灣電子產業的內部優劣與外部機會威脅</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderSection('Strengths 優勢', 'strength', Shield, 'text-blue-600', 'bg-blue-50 border-blue-100')}
        {renderSection('Weaknesses 劣勢', 'weakness', AlertTriangle, 'text-orange-600', 'bg-orange-50 border-orange-100')}
        {renderSection('Opportunities 機會', 'opportunity', Zap, 'text-emerald-600', 'bg-emerald-50 border-emerald-100')}
        {renderSection('Threats 威脅', 'threat', TrendingUp, 'text-rose-600', 'bg-rose-50 border-rose-100')}
      </div>

      <div className="mt-8 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-2">策略總結</h3>
        <p className="text-slate-600 leading-relaxed">
          台灣電子產業目前處於「強勢防禦」階段。核心競爭力（半導體製造與供應鏈整合）極強，是掌握 AI 時代運算算力的關鍵。
          然而，地緣政治風險是最大變數，促使產業必須進行全球化佈局（Global Footprint）。
          未來的關鍵在於能否利用 AI 機會，彌補人才與資源的結構性劣勢，並成功將硬體優勢延伸至系統整合與解決方案。
        </p>
      </div>
    </div>
  );
};