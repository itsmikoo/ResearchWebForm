import { useTimer } from '../hooks/useTimer';

interface EmailProps {
  pageNumber: number;
  onAnswer: (isPhishing: boolean, responseTime: number) => void;
}

export default function EmailQuestion({ pageNumber, onAnswer }: EmailProps) {
  const timeMs = useTimer();
  const displayTime = (timeMs / 1000).toFixed(1);
  
  const currentQuestionIndex = pageNumber - 1;
  const completedQuestions = currentQuestionIndex - 1; 
  const totalQuestions = 10;
  
  const dummyEmail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col flex-1">
      {/* Top Progress Bar */}
      <div className="flex gap-1 sm:gap-2 mb-6 sm:mb-10">
        {[...Array(totalQuestions)].map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 flex-1 rounded-full ${i < completedQuestions ? 'bg-amber-400' : 'bg-gray-100'}`}
          ></div>
        ))}
      </div>

      <div className="text-center mb-6 sm:mb-8">
        <p className="text-amber-500 font-bold text-[10px] sm:text-xs tracking-widest uppercase mb-2 sm:mb-3">
          Question {currentQuestionIndex} / {totalQuestions}
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1 sm:mb-2 leading-tight">
          Is this email dangerous?
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm font-medium">
          Time spent: <span className="text-amber-500">{displayTime}s</span>
        </p>
      </div>

      {/* Email Text Area */}
      <div className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-lg mb-8 sm:mb-10 text-slate-600 text-sm sm:text-base leading-relaxed overflow-y-auto max-h-[40vh] sm:max-h-none shadow-inner">
        <p>{dummyEmail}</p>
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full mt-auto">
        <button 
          onClick={() => onAnswer(true, timeMs)} 
          className="flex-1 py-3 sm:py-4 px-4 sm:px-6 bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-gray-200 hover:border-red-200 rounded-full transition-all font-medium text-center shadow-sm text-sm sm:text-base"
        >
          Yes, it's Phishing
        </button>
        
        <button 
          onClick={() => onAnswer(false, timeMs)} 
          className="flex-1 py-3 sm:py-4 px-4 sm:px-6 bg-white hover:bg-green-50 text-slate-700 hover:text-green-700 border border-gray-200 hover:border-green-200 rounded-full transition-all font-medium text-center shadow-sm text-sm sm:text-base"
        >
          No, it's Safe
        </button>
      </div>
    </div>
  );
}