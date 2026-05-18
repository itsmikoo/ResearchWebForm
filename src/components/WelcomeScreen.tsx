import { useState } from 'react';

interface WelcomeProps {
  onNext: () => void;
  setName: (name: string) => void;
}

export default function WelcomeScreen({ onNext, setName }: WelcomeProps) {
  const [localName, setLocalName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah halaman reload saat tombol ditekan (atau saat di-Enter)
    
    const trimmedName = localName.trim();
    
    // Validasi: Jika nama kosong
    if (!trimmedName) {
      setError("Please enter your name to begin.");
      return; 
    }

    // Jika aman, set nama dan lanjut
    setName(trimmedName);
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1 text-center w-full max-w-2xl mx-auto">
      {/* Icon berganti warna ke Amber agar senada */}
      <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mb-4 md:mb-6 text-2xl md:text-3xl shadow-sm">
        👋
      </div>
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
        Welcome to the Email Safety Study
      </h1>
      
      {/* Deskripsi tetap utuh seperti buatanmu */}
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
            <span className="text-amber-500 text-base md:text-lg">🔍</span>
            <span><strong>Read carefully:</strong> Take a look at the context of the email before making your decision.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 text-base md:text-lg">🛡️</span>
            <span><strong>Anonymous & Safe:</strong> Your name and responses are kept strictly confidential and will only be used for academic research purposes.</span>
          </li>
        </ul>
      </div>
      
      {/* Form untuk Validasi (Bisa di-Enter) */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
        <div className="w-full">
          <input 
            type="text" 
            value={localName}
            placeholder="Enter your name to begin..." 
            onChange={(e) => {
              setLocalName(e.target.value);
              if (error) setError(""); // Hilangkan error merah kalau partisipan mulai ngetik
            }}
            className={`w-full px-5 py-3 md:px-6 md:py-4 bg-white border rounded-full focus:outline-none focus:ring-2 text-center text-base md:text-lg shadow-sm transition-all ${
              error ? 'border-red-500 bg-red-50 focus:ring-red-200' : 'border-gray-300 focus:border-amber-500 focus:ring-amber-200'
            }`}
          />
          {/* Area Pesan Error */}
          <div className="h-6 mt-1 mb-2">
            {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}
          </div>
        </div>
        
        {/* Tombol berganti warna ke Amber agar senada */}
        <button 
          type="submit" 
          className="w-full sm:w-auto px-8 py-3 md:px-10 md:py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-semibold text-base md:text-lg transition-colors shadow-md hover:shadow-lg"
        >
          Start Survey →
        </button>
      </form>
    </div>
  );
}