import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { FiveForcesData } from '../types';

const data: FiveForcesData[] = [
  { subject: '現有競爭者', A: 85, fullMark: 100 },
  { subject: '供應商議價', A: 70, fullMark: 100 },
  { subject: '購買者議價', A: 60, fullMark: 100 },
  { subject: '潛在進入者', A: 40, fullMark: 100 },
  { subject: '替代品威脅', A: 55, fullMark: 100 },
];

export const FiveForces: React.FC = () => {
  return (
    <div className="animate-fade-in flex flex-col lg:flex-row gap-8">
      {/* Chart Section */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm min-h-[500px] flex flex-col">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">波特五力分析</h2>
        <p className="text-slate-500 mb-6">競爭強度量化指標 (越高代表壓力越大)</p>
        
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 14, fontWeight: 500 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="競爭壓力"
                dataKey="A"
                stroke="#6366f1"
                strokeWidth={3}
                fill="#6366f1"
                fillOpacity={0.4}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full lg:w-1/2 space-y-4">
        <div className="bg-white p-5 rounded-xl border border-l-4 border-slate-200 border-l-indigo-500 shadow-sm">
          <h3 className="font-bold text-slate-800 flex justify-between">
            現有競爭者的競爭程度
            <span className="text-indigo-600">極高 (85/100)</span>
          </h3>
          <p className="text-sm text-slate-600 mt-2">
            電子產業技術迭代快，產品生命週期短。台灣廠商（如代工五哥）在毛利率上競爭激烈，必須透過規模經濟與自動化來維持獲利。半導體領域雖然 TSMC 獨大，但在成熟製程與 IC 設計領域競爭依然白熱化。
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-l-4 border-slate-200 border-l-blue-500 shadow-sm">
          <h3 className="font-bold text-slate-800 flex justify-between">
            供應商的議價能力
            <span className="text-blue-600">高 (70/100)</span>
          </h3>
          <p className="text-sm text-slate-600 mt-2">
            關鍵設備（如 ASML 的 EUV）、特用化學品（主要來自日本）、EDA 軟體（美國）掌握在少數外國大廠手中，台灣廠商對上游依賴度高，議價空間有限。
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-l-4 border-slate-200 border-l-cyan-500 shadow-sm">
          <h3 className="font-bold text-slate-800 flex justify-between">
            購買者的議價能力
            <span className="text-cyan-600">中 (60/100)</span>
          </h3>
          <p className="text-sm text-slate-600 mt-2">
            國際品牌大廠 (Apple, Nvidia, AMD) 訂單量大，具有議價權。但對於先進製程晶片或高階 AI 伺服器，由於產能稀缺，賣方 (台灣廠商) 目前掌握較大話語權。
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-l-4 border-slate-200 border-l-emerald-500 shadow-sm">
          <h3 className="font-bold text-slate-800 flex justify-between">
            替代品的威脅
            <span className="text-emerald-600">中 (55/100)</span>
          </h3>
          <p className="text-sm text-slate-600 mt-2">
            短期內矽基半導體無替代品。但光學運算、量子電腦等新技術在長期可能構成威脅。目前主要的威脅來自技術路徑的改變（如封裝技術取代部分製程微縮需求）。
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-l-4 border-slate-200 border-l-slate-400 shadow-sm">
          <h3 className="font-bold text-slate-800 flex justify-between">
            潛在進入者的威脅
            <span className="text-slate-600">低 (40/100)</span>
          </h3>
          <p className="text-sm text-slate-600 mt-2">
            電子業（特別是半導體）資本支出極大 (Capex)、技術門檻極高。建立生態系需數十年積累，新進者難以在短期內撼動台灣地位。
          </p>
        </div>
      </div>
    </div>
  );
};