import React, { useState, useRef, useEffect } from 'react';
import { generateIndustryInsight } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';

export const AIAnalyst: React.FC = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      content: '你好！我是台灣電子產業 AI 分析師。您可以問我關於台積電的競爭優勢、AI 對伺服器供應鏈的影響，或是最新的產業趨勢分析。', 
      timestamp: Date.now() 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: query, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    setIsLoading(true);

    try {
      const response = await generateIndustryInsight(userMsg.content);
      const botMsg: ChatMessage = { role: 'model', content: response, timestamp: Date.now() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', content: "抱歉，分析時發生錯誤，請稍後再試。", timestamp: Date.now() }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQueries = [
    "分析台積電 2nm 製程的競爭優勢",
    "AI PC 對台灣供應鏈的影響是什麼？",
    "台灣散熱模組產業的前景分析",
    "地緣政治如何影響台灣電子業？"
  ];

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden animate-fade-in">
      {/* Header */}
      <div className="bg-indigo-600 p-4 text-white flex items-center gap-3">
        <div className="bg-white/20 p-2 rounded-lg">
          <Sparkles size={20} className="text-yellow-300" />
        </div>
        <div>
          <h2 className="font-bold text-lg">AI 產業顧問</h2>
          <p className="text-indigo-200 text-xs">Powered by Gemini 3</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-slate-700' : 'bg-indigo-600'}`}>
              {msg.role === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
            </div>
            <div className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${msg.role === 'user' ? 'bg-slate-800 text-white' : 'bg-white text-slate-800 border border-slate-200'}`}>
              <div className="prose prose-sm max-w-none whitespace-pre-wrap leading-relaxed">
                {msg.content}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
              <Loader2 size={16} className="text-white animate-spin" />
            </div>
            <div className="bg-white text-slate-500 px-4 py-3 rounded-2xl border border-slate-200 text-sm">
              正在分析數據中...
            </div>
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-200">
        {messages.length < 3 && (
           <div className="mb-4 flex flex-wrap gap-2">
             {suggestedQueries.map((q, i) => (
               <button 
                key={i}
                onClick={() => setQuery(q)}
                className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full hover:bg-indigo-100 transition-colors"
               >
                 {q}
               </button>
             ))}
           </div>
        )}
        
        <div className="relative">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="請輸入您想了解的電子產業議題..."
            className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all"
            rows={2}
          />
          <button
            onClick={handleSend}
            disabled={!query.trim() || isLoading}
            className="absolute right-2 bottom-2 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};