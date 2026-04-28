interface WelcomeProps {
  onNext: () => void;
  setName: (name: string) => void;
}

export default function WelcomeScreen({ onNext, setName }: WelcomeProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[500px] text-center px-4">
      {/* Icon greeting ramah */}
      <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-4 text-3xl shadow-sm">
        👋
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
        Welcome to the Email Safety Study
      </h1>
      
      <div className="text-slate-600 mb-8 max-w-2xl text-left bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm leading-relaxed">
        <p className="mb-5 text-base md:text-lg">
          We need your help! You will be shown <strong>10 different emails</strong>. Your goal is simply to review each one and guess if it's a dangerous "Phishing" scam or a "Safe" message.
        </p>
        
        {/* Kotak khusus untuk menjelaskan timer dengan nada menenangkan */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 md:p-5 mb-6 rounded-r-lg">
          <h3 className="font-bold text-amber-800 flex items-center gap-2 mb-2 text-lg">
            ⏱️ Why is there a timer?
          </h3>
          <p className="text-amber-700 text-sm md:text-base">
            Don't panic! We are simply measuring <strong>how long it naturally takes</strong> for people to process these emails. There is no time limit and no need to rush. Just read at your normal, comfortable pace and make your best guess.
          </p>
        </div>

        <ul className="space-y-4 text-sm md:text-base">
          <li className="flex items-start gap-3">
            <span className="text-blue-500 text-lg">🔍</span>
            <span><strong>Read carefully:</strong> Take a look at the context of the email before making your decision.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 text-lg">🛡️</span>
            <span><strong>Anonymous & Safe:</strong> Your name and responses are kept strictly confidential and will only be used for academic research purposes.</span>
          </li>
        </ul>
      </div>
      
      <input 
        type="text" 
        placeholder="Enter your name to begin..." 
        onChange={(e) => setName(e.target.value)}
        className="w-full max-w-sm px-6 py-4 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 mb-8 text-center text-lg shadow-sm transition-all"
      />
      
      <button 
        onClick={onNext} 
        className="px-10 py-4 bg-[#0080ff] hover:bg-blue-600 text-white rounded-full font-semibold text-lg transition-colors shadow-md hover:shadow-lg"
      >
        Start Survey →
      </button>
    </div>
  );
}