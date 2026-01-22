import React from 'react';
import { Cpu, Layers, Network, Zap, Brain, Rocket, Microchip, TrendingUp } from 'lucide-react';

export const TechTrends: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-10">
      
      {/* Section 1: Critical Technologies */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Rocket className="text-blue-600" />
            未來 3-5 年關鍵技術預測
          </h2>
          <p className="text-slate-500 mt-1">決定台灣電子產業下一個十年的核心競爭力</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tech 1 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu size={100} className="text-blue-600" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">埃米級製程 (Angstrom Era)</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">2nm / A16</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">GAAFET / CFET</span>
              </div>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                從 FinFET 轉向 GAA (環繞閘極) 架構是物理極限的突破。TSMC 2nm 預計 2025 量產，將決定 AI 運算晶片的能效天花板。
              </p>
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                <h4 className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-1">市場影響</h4>
                <p className="text-blue-900 text-sm">鞏固台灣在 HPC (高效能運算) 領域的絕對壟斷地位。</p>
              </div>
            </div>
          </div>

          {/* Tech 2 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Layers size={100} className="text-purple-600" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">3D 異質整合 (CoWoS/SoIC)</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">Advanced Packaging</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">Chiplet</span>
              </div>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                摩爾定律放緩後，透過封裝將 HBM (高頻寬記憶體) 與 GPU 整合成為算力關鍵。產能擴充速度直接決定 AI Server 出貨量。
              </p>
              <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                <h4 className="text-xs font-bold text-purple-700 uppercase tracking-wide mb-1">市場影響</h4>
                <p className="text-purple-900 text-sm">封測廠 (OSAT) 價值重估，設備供應鏈國產化機會大增。</p>
              </div>
            </div>
          </div>

          {/* Tech 3 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Network size={100} className="text-cyan-600" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4 text-cyan-600">
                <Network size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">矽光子 (Silicon Photonics/CPO)</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">CPO</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">Optical I/O</span>
              </div>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                解決資料中心「銅退光進」的傳輸瓶頸。將光電轉換元件與運算晶片封裝在一起 (CPO)，大幅降低能耗與延遲。
              </p>
              <div className="bg-cyan-50 p-3 rounded-lg border border-cyan-100">
                <h4 className="text-xs font-bold text-cyan-700 uppercase tracking-wide mb-1">市場影響</h4>
                <p className="text-cyan-900 text-sm">改變 PCB 與連接器產業生態，創造全新光電元件供應鏈。</p>
              </div>
            </div>
          </div>

          {/* Tech 4 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-