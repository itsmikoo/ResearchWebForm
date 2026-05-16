import { useTimer } from '../hooks/useTimer';
import LimeEmailViewer from './LimeEmailViewer';
import { emailData } from '../data/emails';
import type { GroupType } from '../App';

interface EmailProps {
  pageNumber: number;
  group: GroupType;
  onAnswer: (isPhishing: boolean, responseTime: number) => void;
}

export default function EmailQuestion({ pageNumber, group, onAnswer }: EmailProps) {
  const timeMs = useTimer();
  const displayTime = (timeMs / 1000).toFixed(1);
  const completedQuestions = pageNumber - 1; 
  const currentEmail = emailData[completedQuestions];

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col flex-1">
      {/* (Bagian Header / Progress Bar Tetap Sama) */}
      <div className="flex gap-1 sm:gap-2 mb-6 sm:mb-10">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`h-1.5 flex-1 rounded-full ${i < completedQuestions ? 'bg-amber-400' : 'bg-gray-100'}`}></div>
        ))}
      </div>

      <div className="text-center mb-6 sm:mb-8">
        <p className="text-amber-500 font-bold text-[10px] sm:text-xs tracking-widest uppercase mb-2 sm:mb-3">
          Question {pageNumber} / 10
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1 sm:mb-2 leading-tight">
          Is this email dangerous?
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm font-medium">
          Time spent: <span className="text-amber-500">{displayTime}s</span>
        </p>
      </div>

      {/* RENDER BERSYARAT BERDASARKAN GRUP */}
      <div className="mb-8 sm:mb-10 overflow-y-auto max-h-[50vh] sm:max-h-none rounded-xl">
        
        {group === 'control' && (
          <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl text-slate-800 leading-relaxed font-serif tracking-wide shadow-inner">
            {currentEmail.text}
          </div>
        )}

        {group === 'lime' && (
          <LimeEmailViewer text={currentEmail.text} highlights={currentEmail.highlights} />
        )}

        {group === 'word2vec' && (
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl text-blue-900 text-center font-bold">
            UI Word2Vec akan dirender di sini nanti!
          </div>
        )}

      </div>
      
      {/* (Bagian Tombol Bawah Tetap Sama) */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full mt-auto">
        <button onClick={() => onAnswer(true, timeMs)} className="flex-1 py-3 sm:py-4 px-4 sm:px-6 bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-gray-200 hover:border-red-200 rounded-full transition-all font-medium text-center shadow-sm text-sm sm:text-base">
          Yes, it's Phishing
        </button>
        <button onClick={() => onAnswer(false, timeMs)} className="flex-1 py-3 sm:py-4 px-4 sm:px-6 bg-white hover:bg-green-50 text-slate-700 hover:text-green-700 border border-gray-200 hover:border-green-200 rounded-full transition-all font-medium text-center shadow-sm text-sm sm:text-base">
          No, it's Safe
        </button>
      </div>
    </div>
  );
}