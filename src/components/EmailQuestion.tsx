import { useTimer } from '../hooks/useTimer';

interface EmailProps {
  pageNumber: number;
  onAnswer: (isPhishing: boolean, responseTime: number) => void;
}

export default function EmailQuestion({ pageNumber, onAnswer }: EmailProps) {
  const timeMs = useTimer();
  const displayTime = (timeMs / 1000).toFixed(1);
  
  const currentQuestionIndex = pageNumber - 1;
  const completedQuestions = currentQuestionIndex - 1; // Logika baru: menghitung yang sudah selesai
  const totalQuestions = 10;
  
  const dummyEmail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col h-full min-h-[500px]">
      {/* Top Progress Bar */}
      <div className="flex gap-2 mb-10">
        {[...Array(totalQuestions)].map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 flex-1 rounded-full ${i < completedQuestions ? 'bg-amber-400' : 'bg-gray-100'}`}
          ></div>
        ))}
      </div>

      <div className="text-center mb-8">
        <p className="text-amber-500 font-bold text-xs tracking-widest uppercase mb-3">
          Question {currentQuestionIndex} / {totalQuestions}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
          Is this email dangerous?
        </h2>
        <p className="text-slate-400 text-sm font-medium">
          Time spent: <span className="text-amber-500">{displayTime}s</span>
        </p>
      </div>

      {/* Email Text Area */}
      <div className="bg-gray-50 border border-gray-100 p-6 rounded-lg mb-10 text-slate-600 text-sm md:text-base leading-relaxed">
        <p>{dummyEmail}</p>
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-col gap-4 max-w-lg mx-auto w-full mt-auto">
        <button 
          onClick={() => onAnswer(true, timeMs)} 
          className="w-full py-4 px-6 bg-gray-50 hover:bg-red-50 hover:text-red-700 hover:border-red-200 border border-transparent rounded-full transition-all text-slate-700 font-medium text-center shadow-sm"
        >
          Yes, it's Phishing
        </button>
        
        <button 
          onClick={() => onAnswer(false, timeMs)} 
          className="w-full py-4 px-6 bg-gray-50 hover:bg-green-50 hover:text-green-700 hover:border-green-200 border border-transparent rounded-full transition-all text-slate-700 font-medium text-center shadow-sm"
        >
          No, it's Safe
        </button>
      </div>
    </div>
  );
}