import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { ArrowUpRight, Cpu, Zap, Globe } from 'lucide-react';

const exportData = [
  { year: '2019', value: 1120 },
  { year: '2020', value: 1350 },
  { year: '2021', value: 1680 },
  { year: '2022', value: 1850 },
  { year: '2023', value: 1760 },
  { year: '2024 (E)', value: 2050 },
];

const sectorData = [
  { name: '半導體', value: 65, growth: 22 },
  { name: '電腦周邊', value: 45, growth: 12 },
  { name: '光電', value: 20, growth: -5 },
  { name: '通訊', value: 30, growth: 8 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: '半導體產值', value: '$4.8T TWD', change: '+18.5%', icon: Cpu, color: 'blue' },
          { title: '電子零組件出口', value: '$180B USD', change: '+12.3%', icon: Globe, color: 'indigo' },
          { title: 'AI 伺服器市占', value: '90%+', change: 'Global #1', icon: Zap, color: 'purple' },
          { title: '產業成長率', value: '14.2%', change: 'YoY', icon: ArrowUpRight, color: 'emerald' },
        ].map((card, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500">{card.title}</p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{card.value}</h3>
              </div>
              <div className={`p-2 bg-${card.color}-50 rounded-lg text-${card.color}-600`}>
                <card.icon size={20} />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-emerald-600 font-medium flex items-center">
                {card.change}
              </span>
              <span className="text-slate-400 ml-2">vs last year</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4">電子零組件出口趨勢 (億美元)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={exportData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  cursor={{ stroke: '#94a3b8', strokeWidth: 1 }}
                />
                <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4">主要次產業表現 vs 成長率</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sectorData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                   cursor={{fill: '#f1f5f9'}}
                />
                <Legend />
                <Bar yAxisId="left" dataKey="value" name="產值佔比" fill="#6366f1" radius={[4, 4, 0, 0]} />
                <Bar yAxisId="right" dataKey="growth" name="成長率 (%)" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};