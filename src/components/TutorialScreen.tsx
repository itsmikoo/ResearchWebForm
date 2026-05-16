import { useState } from 'react';
import LimeEmailViewer from './LimeEmailViewer';
import { limeExampleData } from '../data/emails';

interface TutorialProps {
  onFinish: () => void;
}

export default function TutorialScreen({ onFinish }: TutorialProps) {
  const [step, setStep] = useState(1);
  const TOTAL_STEPS = 4;

  const nextStep = () => {
    if (step < TOTAL_STEPS) setStep(step + 1);
    else onFinish();
  };

  const panelPosition = step === 4 
    ? "top-0 md:top-4 right-0 md:-right-4" 
    : "bottom-0 md:bottom-4 right-0 md:-right-4"; 

  const isEmailHighlighted = step === 2 || step === 3;

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col flex-1 relative">
      
      {/* 1. OVERLAY GELAP */}
      <div className="absolute -inset-[500px] bg-slate-900/60 z-40 pointer-events-none transition-opacity duration-300"></div>

      {/* 2. FLOATING TUTORIAL PANEL - Warna diubah ke Amber */}
      <div className={`absolute z-[60] w-full sm:w-[340px] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] p-5 border border-amber-100 flex flex-col transition-all duration-500 ease-in-out ${panelPosition}`}>
        <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-3">
            <h3 className="font-bold text-amber-600 flex items-center gap-2">
              <span className="bg-amber-100 text-amber-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">
                {step}
              </span>
              Tutorial Guide
            </h3>
            <span className="text-xs font-semibold text-slate-400">Step {step} of {TOTAL_STEPS}</span>
        </div>
        
        {/* Penjelasan Full English */}
        <div className="text-slate-600 text-sm leading-relaxed min-h-[5rem] mb-4">
          {step === 1 && "⏱️ Watch your question progress and the timer. Time runs automatically, but don't panic—go at your own comfortable pace."}
          {step === 2 && "🔎 This is the email content. Read the context carefully to understand the message."}
          {step === 3 && (
            <span>
              ✨ <strong>AI Assistant:</strong> Words highlighted in <span className="text-green-600 font-semibold">Green</span> indicate safe patterns, while <span className="text-red-600 font-semibold">Red</span> indicates phishing.<br/><br/>
              <em>Tip: Darker colors mean stronger AI confidence. Try hovering over the highlighted words!</em>
            </span>
          )}
          {step === 4 && "👆 Once you've made up your mind, click one of these buttons to submit your decision and proceed."}
        </div>
        
        {/* Tombol Panel jadi Amber */}
        <button 
          onClick={nextStep} 
          className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors flex justify-center items-center gap-2 shadow-sm"
        >
          {step === 4 ? "Start Real Test 🚀" : "Next"}
          {step < 4 && <span>→</span>}
        </button>
      </div>

      {/* --- MOCK UI --- */}

      {/* Mock UI 1: Progress & Timer - Ring Senter diubah ke Amber */}
      <div className={`transition-all duration-300 ${step === 1 ? 'relative z-50 bg-white ring-4 ring-amber-500 shadow-2xl rounded-xl p-4 -mx-4' : 'relative z-30 p-4 -mx-4 mb-2'}`}>
        <div className="flex gap-1 sm:gap-2 mb-6">
          {[...Array(10)].map((_, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full ${i === 0 ? 'bg-amber-400' : 'bg-gray-200'}`}></div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-amber-500 font-bold text-[10px] sm:text-xs tracking-widest uppercase mb-2">
            Tutorial / 10
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Is this email dangerous?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-medium">
            Time spent: <span className="text-amber-500">3.2s</span>
          </p>
        </div>
      </div>

      {/* Mock UI 2 & 3: Email Area with LIME - Ring Senter diubah ke Amber */}
      <div className={`transition-all duration-300 mb-8 sm:mb-10 rounded-xl ${isEmailHighlighted ? 'relative z-50 ring-4 ring-amber-500 shadow-2xl' : 'relative z-30 opacity-40'}`}>
        <LimeEmailViewer 
          text={limeExampleData.text} 
          highlights={limeExampleData.highlights} 
        />
      </div>
      
      {/* Mock UI 4: Action Buttons - Ring Senter diubah ke Amber */}
      <div className={`transition-all duration-300 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full mt-auto ${step === 4 ? 'relative z-50 bg-white ring-4 ring-amber-500 shadow-2xl rounded-xl p-4 -mx-4' : 'relative z-30 p-4 -mx-4 opacity-40'}`}>
        <div className="flex-1 py-3 sm:py-4 px-4 bg-gray-50 border border-gray-200 rounded-full font-medium text-center text-slate-400">
          Yes, it's Phishing
        </div>
        <div className="flex-1 py-3 sm:py-4 px-4 bg-gray-50 border border-gray-200 rounded-full font-medium text-center text-slate-400">
          No, it's Safe
        </div>
      </div>

    </div>
  );
}