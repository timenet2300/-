import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Industry } from '../types';

// Mock curve data for visualization (shared)
const curveData = [
  { x: 0, y: 0 },
  { x: 20, y: 15 },
  { x: 40, y: 50 },
  { x: 60, y: 85 },
  { x: 80, y: 95 },
  { x: 100, y: 70 },
];

interface LifeCycleProps {
  industry: Industry;
}

export const LifeCycle: React.FC<LifeCycleProps> = ({ industry }) => {
  return (
    <div className="animate-fade-in space-y-8">
      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            {industry === Industry.FINANCE ? '金融產品生命週期' : '電子產業生命週期'}
          </h2>
          <p className="text-slate-500">產業發展階段定位</p>
        </div>

        <div className="h-[400px] w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={curveData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis type="number" dataKey="x" hide domain={[0, 100]} />
              <YAxis type="number" dataKey="y" hide domain={[0, 100]} />
              <Line 
                type="monotone" 
                dataKey="y" 
                stroke={industry === Industry.FINANCE ? "#eab308" : "#3b82f6"} 
                strokeWidth={4} 
                dot={false}
              />
              <ReferenceLine x={20} stroke="#cbd5e1" strokeDasharray="3 3" label={{ position: 'top', value: '導入期', fill: '#64748b' }} />
              <ReferenceLine x={45} stroke="#cbd5e1" strokeDasharray="3 3" label={{ position: 'top', value: '成長期', fill: '#64748b' }} />
              <ReferenceLine x={70} stroke="#cbd5e1" strokeDasharray="3 3" label={{ position: 'top', value: '成熟期', fill: '#64748b' }} />
            </LineChart>
          </ResponsiveContainer>

          {/* Markers */}
          {industry === Industry.ELECTRONICS ? (
            <>
              <div className="absolute top-[75%] left-[20%] transform -translate-x-1/2 flex flex-col items-center group cursor-pointer">
                <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-md"></div>
                <span className="mt-2 text-sm font-bold text-slate-700 bg-white/80 px-2 rounded">化合物半導體</span>
              </div>
              <div className="absolute top-[40%] left-[45%] transform -translate-x-1/2 flex flex-col items-center group cursor-pointer">
                <div className="w-5 h-5 bg-green-500 rounded-full border-4 border-white shadow-md animate-pulse"></div>
                <span className="mt-2 text-sm font-bold text-slate-700 bg-white/80 px-2 rounded">AI 伺服器</span>
              </div>
              <div className="absolute top-[15%] left-[65%] transform -translate-x-1/2 flex flex-col items-center group cursor-pointer">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>
                <span className="mt-2 text-sm font-bold text-slate-700 bg-white/80 px-2 rounded">晶圓代工</span>
              </div>
            </>
          ) : (
            <>
              <div className="absolute top-[80%] left-[15%] transform -translate-x-1/2 flex flex-col items-center group cursor-pointer">
                <div className="w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow-md"></div>
                <span className="mt-2 text-sm font-bold text-slate-700 bg-white/80 px-2 rounded">碳權交易/DeFi</span>
              </div>
              <div className="absolute top-[45%] left-[40%] transform -translate-x-1/2 flex flex-col items-center group cursor-pointer">
                <div className="w-5 h-5 bg-red-500 rounded-full border-4 border-white shadow-md animate-pulse"></div>
                <span className="mt-2 text-sm font-bold text-slate-700 bg-white/80 px-2 rounded">純網銀/電子支付</span>
              </div>
               <div className="absolute top-[30%] left-[55%] transform -translate-x-1/2 flex flex-col items-center group cursor-pointer">
                <div className="w-5 h-5 bg-emerald-500 rounded-full border-4 border-white shadow-md"></div>
                <span className="mt-2 text-sm font-bold text-slate-700 bg-white/80 px-2 rounded">ETF/財富管理</span>
              </div>
              <div className="absolute top-[15%] left-[70%] transform -translate-x-1/2 flex flex-col items-center group cursor-pointer">
                <div className="w-4 h-4 bg-yellow-600 rounded-full border-4 border-white shadow-md"></div>
                <span className="mt-2 text-sm font-bold text-slate-700 bg-white/80 px-2 rounded">傳統存放款</span>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {industry === Industry.ELECTRONICS ? (
          <>
            <div className="bg-white p-6 rounded-xl border-t-4 border-green-500 shadow-sm">
              <h3 className="font-bold text-lg mb-2">成長期焦點：AI</h3>
              <p className="text-slate-600 text-sm">AI 伺服器供應鏈（散熱、電源）處於高速成長期，享高本益比。</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-t-4 border-blue-500 shadow-sm">
              <h3 className="font-bold text-lg mb-2">成熟期轉型：半導體</h3>
              <p className="text-slate-600 text-sm">透過先進封裝與 2nm 技術突破，延續 S-Curve 避免衰退。</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-t-4 border-orange-500 shadow-sm">
              <h3 className="font-bold text-lg mb-2">成熟期挑戰：消費電</h3>
              <p className="text-slate-600 text-sm">手機與 PC 市場飽和，期待 AI PC 換機潮。</p>
            </div>
          </>
        ) : (
          <>
             <div className="bg-white p-6 rounded-xl border-t-4 border-red-500 shadow-sm">
              <h3 className="font-bold text-lg mb-2">成長期焦點：數位金融</h3>
              <p className="text-slate-600 text-sm">純網銀與電子支付用戶數快速增長，但獲利模式仍需驗證。</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-t-4 border-emerald-500 shadow-sm">
              <h3 className="font-bold text-lg mb-2">成長/成熟：財富管理</h3>
              <p className="text-slate-600 text-sm">被動元件投資(ETF)大爆發，高資產財管成為銀行新藍海。</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-t-4 border-yellow-500 shadow-sm">
              <h3 className="font-bold text-lg mb-2">成熟期：傳統銀行</h3>
              <p className="text-slate-600 text-sm">傳統存放款利差業務極度成熟，需靠數位化降低成本維持獲利。</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};