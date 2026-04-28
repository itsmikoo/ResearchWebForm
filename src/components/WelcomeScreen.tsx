interface WelcomeProps {
  onNext: () => void;
  setName: (name: string) => void;
}

export default function WelcomeScreen({ onNext, setName }: WelcomeProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        Welcome to the Phishing Detection Study
      </h1>
      <p className="text-slate-500 mb-8 max-w-md">
        Please enter your name below to begin. You will be timed on how fast you can identify dangerous emails.
      </p>
      
      <input 
        type="text" 
        placeholder="Enter your name..." 
        onChange={(e) => setName(e.target.value)}
        className="w-full max-w-sm px-6 py-4 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 mb-8 text-center text-lg"
      />
      
      <button 
        onClick={onNext} 
        className="px-8 py-3 bg-[#0080ff] hover:bg-blue-600 text-white rounded-full font-medium transition-colors"
      >
        Start Survey →
      </button>
    </div>
  );
}