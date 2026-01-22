import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const lifeCycleData = [
  { stage: '導入期', label: '量子電腦', value: 10 },
  { stage: '成長期', label: 'AI 伺服器/HPC', value: 65 },
  { stage: '成熟期', label: '智慧型手機/PC', value: 90 },
  { stage: '衰退期', label: '傳統功能手機', value: 30 },
];

// Mock curve data for visualization
const curveData = [
  { x: 0, y: 0, name: 'Start' },
  { x: 20, y: 15, name: 'Introduction' },
  { x: 40, y: 50, name: 'Growth' },
  { x: 60, y: 85, name: 'Maturity' },
  { x: 80, y: 95, name: 'Saturation' },
  { x: 100, y: 70, name: 'Decline' },
];

export const LifeCycle: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-8">
      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900">產業生命週期曲線 (Industry Life Cycle)</h2>
          <p className="text-slate-500">台灣主要電子次產業定位</p>
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
                stroke="#3b82f6" 
                strokeWidth={4} 
                dot={false}
              />
              {/* Annotations */}
              <ReferenceLine x={20} stroke="#cbd5e1" strokeDasharray="3 3" label={{ position: 'top', value: '導入期', fill: '#64748b' }} />
              <ReferenceLine x={45} stroke="#cbd5e1" strokeDasharray="3 3" label={{ position: 'top', value: '成長期', fill: '#64748b' }} />
              <ReferenceLine x={70} stroke="#cbd5e1" strokeDasharray="3 3" label={{ position: 'top', value: '成熟期', fill: '#64748b' }} />
              
              {/* Custom dots for specific industries */}
            </LineChart>
          </ResponsiveContainer>

          {/* Absolute positioned markers for better control over UI than simple chart dots */}
          <div className="absolute top-[75%] left-[20%] transform -translate-x-1/2">
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-md group-hover:scale-125 transition-transform"></div>
              <span className="mt-2 text-sm font-bold text-slate-700 bg-white/80 px-2 rounded backdrop-blur-sm">化合物半導體 (GaN/SiC)</span>
            </div>
          </div>

          <div className="absolute top-[40%] left-[45%] transform -translate-x-1/2">
             <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-5 h-5 bg-green-500 rounded-full border-4 border-white shadow-md group-hover:scale-125 transition-transform animate-pulse"></div>
              <span className="mt-2 text-sm font-bold text-slate-700 bg-white/80 px-2 rounded backdrop-blur-sm">AI 伺服器 & HPC</span>
            </div>
          </div>

          <div className="absolute top-[15%] left-[65%] transform -translate-x-1/2">
             <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md group-hover:scale-125 transition-transform"></div>
              <span className="mt-2 text-sm font-bold text-slate-700 bg-white/80 px-2 rounded backdrop-blur-sm">晶圓代工 (先進製程)</span>
            </div>
          </div>

          <div className="absolute top-[20%] left-[75%] transform -translate-x-1/2">
             <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-md group-hover:scale-125 transition-transform"></div>
              <span className="mt-2 text-sm font-bold text-slate-700 bg-white/80 px-2 rounded backdrop-blur-sm">PC / NB / 面板</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border-t-4 border-green-500 shadow-sm">
          <h3 className="font-bold text-lg mb-2">成長期焦點：AI 與車用</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            AI 伺服器供應鏈（散熱、電源、組裝）正處於高速成長期，營收與獲利同步爆發。這也是目前資本市場給予最高本益比的板塊。
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl border-t-4 border-blue-500 shadow-sm">
          <h3 className="font-bold text-lg mb-2">成熟期轉型：半導體</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            雖然晶圓代工已屬成熟產業，但透過「先進封裝 (CoWoS)」與 2nm 以下製程技術的突破，成功延續了成長曲線（S-Curve），避免進入衰退。
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl border-t-4 border-orange-500 shadow-sm">
          <h3 className="font-bold text-lg mb-2">成熟期挑戰：消費性電子</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            筆電、手機與面板產業已高度成熟，市場趨於飽和。未來的機會在於「AI PC」帶來的換機潮是否能重啟成長動能。
          </p>
        </div>
      </div>
    </div>
  );
};