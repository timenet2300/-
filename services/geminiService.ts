import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a top-tier industry analyst specializing in Taiwan's electronics and semiconductor supply chain.
Your goal is to provide deep, data-driven, and strategic insights into the Taiwan Electronics Industry.
Focus on:
1. Semiconductors (TSMC, MediaTek, ASE, etc.)
2. AI Servers & Hardware (Quanta, Foxconn, Wistron)
3. PC/Laptop Supply Chain
4. Components (PCB, Passive components)

When answering:
- Use professional financial and technical terminology (in Traditional Chinese).
- Structure your answers with clear headings and bullet points.
- Provide SWOT or Strategic analysis when asked.
- Be concise but insightful.
`;

export const generateIndustryInsight = async (prompt: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "⚠️ API Key not found. Please ensure process.env.API_KEY is set.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "❌ 分析生成失敗，請稍後再試。";
  }
};