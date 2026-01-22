import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';
import { TrendingUp, Landmark, ShieldCheck, Wallet, PieChart, ArrowRight } from 'lucide-react';

const profitData = [
  { name: '富邦金', profit: 660, year: '2023' },
  { name: '國泰金', profit: 510, year: '2023' },
  { name: '中信金', profit: 560, year: '2023' },
  { name: '兆豐金', profit: 332, year: '2023' },
  { name: '元大金', profit: 265, year: '2023' },
];

const etfData = [
  { year: '2019', size: 1.5, label: '1.5兆' },
  { year: '2020', size: 1.7, label: '1.7兆' },
  { year: '2021', size: 2.1, label: '2.1兆' },
  { year: '2022', size: 2.5, label: '2.5兆' },
  { year: '2023', size: 3.8, label: '3.8兆' },
  { year: '2024(E)', size: 5.2, label: '5.2兆' },
];

export const FinanceAnalysis: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-8">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-start justify-between flex-col md:flex-row gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-yellow-500/20 p-2 rounded-lg">
                <Landmark className="text-yellow-400" size={24} />
              </div>
              <h2 className="text-2xl font-bold">台灣金融保險業分析</h2>
            </div>
            <p className="text-slate-300 max-w-2xl leading-relaxed">
              聚焦台灣 14 家金控 (Financial Holdings) 營運表現。
              在經歷防疫保單風暴後，2024 年迎來獲利爆發。高資產財富管理、ETF 狂熱與 AI 數位轉型成為新成長引擎。
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm text-center">
              <p className="text-slate-400 text-xs uppercase font-semibold">金控總獲利 (YoY)</p>
              <p className="text-2xl font-bold text-green-400 mt-1">+50%</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm text-center">
              <p className="text-slate-400 text-xs uppercase font-semibold">台股 ETF 規模</p>
              <p className="text-2xl font-bold text-yellow-400 mt-1">5 兆+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Analysis Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Banking Sector */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
              <Wallet size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-800">銀行業 (Banking)</h3>
          </div>
          <div className="space-y-4">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-xs font-bold text-blue-600 uppercase">關鍵趨勢</span>
              <p className="text-sm text-slate-700 mt-1 font-medium">利差 (NIM) 維持高檔 & 手續費收入</p>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              受惠於高利率環境，銀行的淨利息收入 (NII) 穩健。且隨著股市熱絡，財富管理手續費收入大幅成長。
            </p>
            <ul className="text-sm text-slate-500 space-y-2 list-disc pl-4">
              <li>海外分行獲利貢獻提升 (Ex: 中信、兆豐)</li>
              <li>數位帳戶滲透率突破 40%</li>
            </ul>
          </div>
        </div>

        {/* Insurance Sector */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 group-hover:scale-110 transition-transform">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-800">壽險業 (Insurance)</h3>
          </div>
          <div className="space-y-4">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-xs font-bold text-rose-600 uppercase">關鍵挑戰</span>
              <p className="text-sm text-slate-700 mt-1 font-medium">避險成本 & ICS 2.0 接軌</p>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              台美利差擴大導致傳統避險成本高昂。2026 年將接軌 ICS (新清償能力指標)，迫使壽險業調整商品結構，轉向投資型保單。
            </p>
            <ul className="text-sm text-slate-500 space-y-2 list-disc pl-4">
              <li>防疫保單理賠影響已結束</li>
              <li>自有資本適足率 (RBC) 壓力</li>
            </ul>
          </div>
        </div>

        {/* Securities Sector */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
              <TrendingUp size={20} />
            </div>
            <h3 className="text-lg font-bold text-slate-800">證券業 (Securities)</h3>
          </div>
          <div className="space-y-4">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-xs font-bold text-emerald-600 uppercase">成長引擎</span>
              <p className="text-sm text-slate-700 mt-1 font-medium">台股量能 & ETF 規模爆發</p>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              台股日均量 (ADT) 提升帶動經紀手續費。高股息 ETF (如 00940, 00878) 吸金效應顯著，推升投信管理費收入。
            </p>
            <ul className="text-sm text-slate-500 space-y-2 list-disc pl-4">
              <li>複委託 (Sub-brokerage) 交易量創新高</li>
              <li>年輕族群開戶數大增</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top FHC Profit Chart */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-800">主要金控年度獲利 (億元 TWD)</h3>
            <p className="text-slate-500 text-sm">獲利能力前段班表現</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={profitData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#475569', fontWeight: 500}} width={60} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="profit" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ETF Growth Trend */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
           <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-800">台灣 ETF 市場規模成長 (兆元)</h3>
            <p className="text-slate-500 text-sm">被動式投資與存股風氣盛行</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={etfData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} domain={[0, 6]} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Line type="monotone" dataKey="size" stroke="#eab308" strokeWidth={3} dot={{ r: 4, fill: '#eab308', strokeWidth: 2, stroke: '#fff' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* SWOT & Future Summary */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100">
           <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
             <PieChart size={20} className="text-indigo-600" />
             金融業綜合 SWOT 分析
           </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="p-6">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-3">Strengths 優勢</span>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• 高儲蓄率提供充沛資金</li>
              <li>• 穩定的高殖利率特性 (4-5%)</li>
              <li>• 數位轉型滲透率高</li>
            </ul>
          </div>
          <div className="p-6">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold mb-3">Weaknesses 劣勢</span>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Over-banking 競爭激烈</li>
              <li>• 國際化程度落後星港</li>
              <li>• 獲利過度依賴資本市場波動</li>
            </ul>
          </div>
          <div className="p-6">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold mb-3">Opportunities 機會</span>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• 高資產財富管理中心政策</li>
              <li>• 生成式 AI 優化客服與風控</li>
              <li>• 綠色金融與碳權交易</li>
            </ul>
          </div>
          <div className="p-6">
            <span className="inline-block px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-xs font-bold mb-3">Threats 威脅</span>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• 駭客攻擊與資安風險</li>
              <li>• 地緣政治影響海外資產評價</li>
              <li>• 法規監管成本上升 (ESG/法遵)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};