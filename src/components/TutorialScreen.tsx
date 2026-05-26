import { useState } from 'react';
import LimeEmailViewer from './LimeEmailViewer';
import IGEmailViewer from './IGEmailViewer';
import ControlEmailViewer from './ControlEmailViewer';
import { tutorialEmailData } from '../data/emails'; 
import { tutorialW2VData } from '../data/word2vecEmails';
import type { GroupType } from '../App';

interface TutorialProps {
  group: GroupType;
  onFinish: () => void;
}

export default function TutorialScreen({ group, onFinish }: TutorialProps) {
  const [step, setStep] = useState(1);
  
  // Perubahan: Tambah 1 step ekstra untuk simulasi Fase Evaluasi (Confidence)
  // Control: 4 langkah. AI: 5 langkah.
  const TOTAL_STEPS = group === 'control' ? 4 : 5;

  const nextStep = () => {
    if (step < TOTAL_STEPS) setStep(step + 1);
    else onFinish();
  };

  // Helper untuk menentukan kita sedang di step mana
  const isAIStep = group !== 'control' && step === 3;
  const isButtonStep = step === (group === 'control' ? 3 : 4);
  const isEvalStep = step === TOTAL_STEPS; // Step paling akhir selalu evaluasi
  
  // Posisi panel otomatis pindah ke atas saat berada di area bawah (tombol / evaluasi)
  const isBottomAreaStep = isButtonStep || isEvalStep;
  const panelPosition = isBottomAreaStep 
    ? "top-0 md:top-4 right-0 md:-right-4" 
    : "bottom-0 md:bottom-4 right-0 md:-right-4"; 

  // Deteksi kapan area Email harus disorot oleh senter/flashlight
  const isEmailHighlighted = step === 2 || isAIStep;

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col flex-1 relative">
      
      {/* 1. OVERLAY GELAP (FLASHLIGHT EFFECT) */}
      <div className="absolute -inset-[500px] bg-slate-900/60 z-40 pointer-events-none transition-opacity duration-300"></div>

      {/* 2. FLOATING TUTORIAL PANEL */}
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
        
        {/* Deskripsi Instruksi */}
        <div className="text-slate-600 text-sm leading-relaxed min-h-[5rem] mb-4">
          {step === 1 && "⏱️ Watch your question progress and the timer. Time runs automatically, but don't panic—go at your own comfortable pace."}
          
          {step === 2 && "🔎 This is the email content area. Read the context and details carefully to understand the message."}
          
          {isAIStep && (
            <span>
              ✨ <strong>AI Assistant:</strong> Words highlighted in <span className="text-green-600 font-semibold">Green</span> indicate safe patterns, while <span className="text-red-600 font-semibold">Red</span> indicates phishing.<br/><br/>
              <em>Tip: Darker colors mean stronger AI confidence. Try hovering over the highlighted words!</em>
            </span>
          )}
          
          {isButtonStep && "👆 Once you've made up your mind, click one of these buttons to submit your decision."}

          {/* Instruksi Tambahan Khusus Fase Evaluasi */}
          {isEvalStep && "📊 After deciding, the timer will pause. You must rate how confident you are with your answer before moving to the next question."}
        </div>
        
        <button 
          onClick={nextStep} 
          className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors flex justify-center items-center gap-2 shadow-sm"
        >
          {isEvalStep ? "Start Real Test 🚀" : "Next"}
          {!isEvalStep && <span>→</span>}
        </button>
      </div>


      {/* --- MOCK UI (AREA YANG DISOROT) --- */}

      {/* Mock UI 1: Progress & Timer */}
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

      {/* Mock UI 2 & 3: Email Area */}
      <div className={`transition-all duration-300 mb-8 sm:mb-10 rounded-xl ${isEmailHighlighted ? 'relative z-50 ring-4 ring-amber-500 shadow-2xl' : 'relative z-30 opacity-40'}`}>
        {group === 'control' && (
          <ControlEmailViewer text={tutorialEmailData.text} />
        )}
        
        {group === 'lime' && (
          <LimeEmailViewer 
            text={tutorialEmailData.text} 
            highlights={tutorialEmailData.highlights} 
          />
        )}

        {group === 'word2vec' && (
          <IGEmailViewer 
            tokens={tutorialW2VData.tokens} 
            explainingTowards={tutorialW2VData.explainingTowards} 
          />
        )}
      </div>
      
      {/* Mock UI 4: Action Area (Berubah otomatis antara Tombol vs Evaluasi) */}
      {!isEvalStep ? (
        /* Tampilan Tombol Phishing/Safe */
        <div className={`transition-all duration-300 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full mt-auto ${isButtonStep ? 'relative z-50 bg-white ring-4 ring-amber-500 shadow-2xl rounded-xl p-4 -mx-4' : 'relative z-30 p-4 -mx-4 opacity-40'}`}>
          <div className="flex-1 py-3 sm:py-4 px-4 bg-gray-50 border border-gray-200 rounded-full font-medium text-center text-slate-400">
            Yes, it's Phishing
          </div>
          <div className="flex-1 py-3 sm:py-4 px-4 bg-gray-50 border border-gray-200 rounded-full font-medium text-center text-slate-400">
            No, it's Safe
          </div>
        </div>
      ) : (
        /* Tampilan Panel Evaluasi Confidence */
        <div className={`transition-all duration-300 w-full mt-auto ${isEvalStep ? 'relative z-50 bg-slate-50 ring-4 ring-amber-500 shadow-2xl rounded-2xl p-5 md:p-6 -mx-4' : 'hidden'}`}>
          <div className="text-sm font-semibold text-slate-500 border-b border-slate-200 pb-2 mb-4">
            Your Answer: <span className="text-red-600">🔴 Phishing</span> <span className="text-xs font-normal italic text-slate-400">(Example)</span>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-slate-800 font-semibold text-sm md:text-base">
              How confident are you with your decision?
            </label>
            <div className="flex justify-between items-center gap-1 sm:gap-2 mt-1">
              <span className="text-xs font-medium text-slate-400 w-12 text-left">Not at all</span>
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full font-bold text-sm sm:text-base flex items-center justify-center border transition-all ${
                    num === 4 
                      ? 'bg-amber-500 border-amber-600 text-white shadow-md transform scale-105' 
                      : 'bg-white border-gray-200 text-slate-600'
                  }`}
                >
                  {num}
                </div>
              ))}
              <span className="text-xs font-medium text-slate-400 w-12 text-right">Extremely</span>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-3 mt-5 flex justify-end">
            <div className="px-6 py-2.5 bg-slate-900 text-white font-semibold rounded-xl text-sm opacity-50 flex items-center gap-2">
              Next Question →
            </div>
          </div>
        </div>
      )}

    </div>
  );
}