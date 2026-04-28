export default function ThankYouScreen() {
  const totalQuestions = 10;

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col flex-1">
      {/* Top Progress Bar - 100% Completed */}
      <div className="flex gap-1 sm:gap-2 mb-6 sm:mb-10">
        {[...Array(totalQuestions)].map((_, i) => (
          <div 
            key={i} 
            className="h-1.5 flex-1 rounded-full bg-amber-400"
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center flex-1 text-center pb-8 px-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 text-3xl sm:text-4xl mx-auto shadow-sm">
          ✓
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
          Thank You!
        </h1>
        <p className="text-slate-500 text-sm sm:text-base md:text-lg max-w-md mx-auto leading-relaxed">
          Your responses and response times have been successfully recorded. You may now close this tab.
        </p>
      </div>
    </div>
  );
}