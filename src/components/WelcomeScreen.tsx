interface WelcomeProps {
  onNext: () => void;
  setName: (name: string) => void;
}

export default function WelcomeScreen({ onNext, setName }: WelcomeProps) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 text-center w-full max-w-2xl mx-auto">
      <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-4 md:mb-6 text-2xl md:text-3xl shadow-sm">
        👋
      </div>
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
        Welcome to the Email Safety Study
      </h1>
      
      <div className="text-slate-600 mb-6 md:mb-8 w-full text-left bg-gray-50 p-5 md:p-8 rounded-xl border border-gray-100 shadow-sm leading-relaxed">
        <p className="mb-4 text-sm sm:text-base md:text-lg">
          We need your help! You will be shown <strong>10 different emails</strong>. Your goal is simply to review each one and guess if it's a dangerous "Phishing" scam or a "Safe" message.
        </p>
        
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-5 rounded-r-lg">
          <h3 className="font-bold text-amber-800 flex items-center gap-2 mb-1 text-base md:text-lg">
            ⏱️ Why is there a timer?
          </h3>
          <p className="text-amber-700 text-xs sm:text-sm md:text-base">
            Don't panic! We are simply measuring <strong>how long it naturally takes</strong> for people to process these emails. There is no time limit and no need to rush. Just read at your normal, comfortable pace and make your best guess.
          </p>
        </div>

        <ul className="space-y-3 text-xs sm:text-sm md:text-base">
          <li className="flex items-start gap-3">
            <span className="text-blue-500 text-base md:text-lg">🔍</span>
            <span><strong>Read carefully:</strong> Take a look at the context of the email before making your decision.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 text-base md:text-lg">🛡️</span>
            <span><strong>Anonymous & Safe:</strong> Your name and responses are kept strictly confidential and will only be used for academic research purposes.</span>
          </li>
        </ul>
      </div>
      
      <input 
        type="text" 
        placeholder="Enter your name to begin..." 
        onChange={(e) => setName(e.target.value)}
        className="w-full px-5 py-3 md:px-6 md:py-4 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 mb-6 md:mb-8 text-center text-base md:text-lg shadow-sm transition-all"
      />
      
      <button 
        onClick={onNext} 
        className="w-full sm:w-auto px-8 py-3 md:px-10 md:py-4 bg-[#0080ff] hover:bg-blue-600 text-white rounded-full font-semibold text-base md:text-lg transition-colors shadow-md hover:shadow-lg"
      >
        Start Survey →
      </button>
    </div>
  );
}