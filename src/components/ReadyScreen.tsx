interface ReadyProps {
  onStart: () => void;
}

export default function ReadyScreen({ onStart }: ReadyProps) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 text-center px-4 w-full max-w-2xl mx-auto">
      {/* Icon berganti warna ke Amber */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mb-6 sm:mb-8 text-4xl sm:text-5xl shadow-sm">
        🎉
      </div>
      
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
        Alright, let's get started!
      </h1>
      
      <p className="text-slate-600 mb-10 text-base md:text-lg leading-relaxed max-w-md">
        The tutorial is complete. Take a deep breath... you will now face 10 real emails. Answer as accurately as you can!
      </p>
      
      {/* Tombol berganti warna ke Amber */}
      <button 
        onClick={onStart} 
        className="w-full sm:w-auto px-10 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-bold text-lg transition-colors shadow-md hover:shadow-lg hover:-translate-y-1 transform duration-200"
      >
        Start Survey 🚀
      </button>
    </div>
  );
}