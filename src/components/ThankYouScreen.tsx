export default function ThankYouScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
      <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6 text-4xl">
        ✓
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        Thank You!
      </h1>
      <p className="text-slate-500 max-w-md text-lg">
        Your responses and response times have been successfully recorded. You may now close this tab.
      </p>
    </div>
  );
}