import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { FiveForcesData, Industry } from '../types';

const electronicsData: FiveForcesData[] = [
  { subject: '現有競爭者', A: 85, fullMark: 100 },
  { subject: '供應商議價', A: 70, fullMark: 100 },
  { subject: '購買者議價', A: 60, fullMark: 100 },
  { subject: '潛在進入者', A: 40, fullMark: 100 },
  { subject: '替代品威脅', A: 55, fullMark: 100 },
];

const financeData: FiveForcesData[] = [
  { subject: '現有競爭者', A: 90, fullMark: 100 },
  { subject: '供應商議價', A: 40, fullMark: 100 },
  { subject: '購買者議價', A: 65, fullMark: 100 },
  { subject: '潛在進入者', A: 30, fullMark: 100 },
  { subject: '替代品威脅', A: 60, fullMark: 100 },
];

interface FiveForcesProps {
  industry: Industry;
}

export const FiveForces: React.FC<FiveForcesProps> = ({ industry }) => {
  const data = industry === Industry.FINANCE ? financeData : electronicsData;
  const title = industry === Industry.FINANCE ? '金融業波特五力分析' : '電子業波特五力分析';

  return (
    <div className="animate-fade-in flex flex-col lg:flex-row gap-8">
      {/* Chart Section */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm min-h-[500px] flex flex-col">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">{title}</h2>
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
                stroke={industry === Industry.FINANCE ? "#eab308" : "#6366f1"}
                strokeWidth={3}
                fill={industry === Industry.FINANCE ? "#eab308" : "#6366f1"}
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
        {industry === Industry.ELECTRONICS ? (
          // Electronics Explanations
          <>
            <div className="bg-white p-5 rounded-xl border border-l-4 border-slate-200 border-l-indigo-500 shadow-sm">
              <h3 className="font-bold text-slate-800 flex justify-between">
                現有競爭者
                <span className="text-indigo-600">極高 (85/100)</span>
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                產品生命週期短，毛利競爭激烈。代工廠需規模經濟，IC設計廠需不斷創新。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-l-4 border-slate-200 border-l-blue-500 shadow-sm">
              <h3 className="font-bold text-slate-800 flex justify-between">
                供應商議價
                <span className="text-blue-600">高 (70/100)</span>
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                關鍵設備(ASML)與材料(日本)掌握在少數外商手中。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-l-4 border-slate-200 border-l-cyan-500 shadow-sm">
               <h3 className="font-bold text-slate-800 flex justify-between">
                購買者議價
                <span className="text-cyan-600">中 (60/100)</span>
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                國際大廠(Apple, Nvidia)有砍價權，但先進產能稀缺時賣方佔優。
              </p>
            </div>
          </>
        ) : (
          // Finance Explanations
          <>
            <div className="bg-white p-5 rounded-xl border border-l-4 border-slate-200 border-l-yellow-500 shadow-sm">
              <h3 className="font-bold text-slate-800 flex justify-between">
                現有競爭者
                <span className="text-yellow-600">極高 (90/100)</span>
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                台灣銀行家數過多 (Over-banking)，產品同質性高，殺價競爭(如房貸利率)常態化。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-l-4 border-slate-200 border-l-green-500 shadow-sm">
              <h3 className="font-bold text-slate-800 flex justify-between">
                供應商議價
                <span className="text-green-600">低 (40/100)</span>
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                資金主要來自大眾存款，資金供給充沛，供應商(存戶)議價能力低。但核心系統 IT 廠商有一定議價權。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-l-4 border-slate-200 border-l-orange-500 shadow-sm">
               <h3 className="font-bold text-slate-800 flex justify-between">
                購買者議價
                <span className="text-orange-600">中高 (65/100)</span>
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                企業客戶議價能力強。零售端客戶雖然單一議價力低，但轉換成本低(數位帳戶)，容易逐高利而居。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-l-4 border-slate-200 border-l-slate-400 shadow-sm">
               <h3 className="font-bold text-slate-800 flex justify-between">
                潛在進入者
                <span className="text-slate-600">低 (30/100)</span>
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                特許行業法規嚴格，資本額門檻極高。純網銀開放後暫無新執照發放計畫。
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-l-4 border-slate-200 border-l-rose-400 shadow-sm">
               <h3 className="font-bold text-slate-800 flex justify-between">
                替代品威脅
                <span className="text-rose-600">中高 (60/100)</span>
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                非金融業支付(LinePay, 街口)、P2P借貸、虛擬貨幣(Crypto)與 DeFi 正在侵蝕傳統支付與匯兌業務。
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};