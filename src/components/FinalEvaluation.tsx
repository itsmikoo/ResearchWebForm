import { useState } from 'react';
import type { GroupType } from '../App';

interface FinalProps {
  group: GroupType;
  onSubmit: (helpfulnessRating: number | null) => void;
}

export default function FinalEvaluation({ group, onSubmit }: FinalProps) {
  const [helpfulness, setHelpfulness] = useState<number>(0);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (group !== 'control' && helpfulness === 0) {
      setError("Please provide a rating before submitting.");
      return;
    }
    onSubmit(group === 'control' ? null : helpfulness);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col my-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
        Final Evaluation 📋
      </h2>
      <p className="text-slate-500 text-sm md:text-base mb-8">
        Thank you for completing all the questions. Please answer this final question to submit your data.
      </p>

      {group !== 'control' ? (
        <div className="flex flex-col gap-4 mb-8 bg-slate-50 border border-slate-100 rounded-xl p-5 shadow-inner">
          <label className="text-slate-800 font-bold text-base md:text-lg">
            Overall, how helpful was the AI highlight assistance across all the questions you solved?
          </label>
          <div className="flex justify-between items-center gap-2 mt-4 max-w-md mx-auto w-full">
            <span className="text-xs font-semibold text-slate-400 w-14 text-left">Not Helpful</span>
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => { setHelpfulness(num); setError(""); }}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full font-black text-sm sm:text-base transition-all border ${
                  helpfulness === num 
                    ? 'bg-amber-500 border-amber-600 text-white shadow-md transform scale-105' 
                    : 'bg-white border-gray-200 text-slate-600 hover:bg-gray-100'
                }`}
              >
                {num}
              </button>
            ))}
            <span className="text-xs font-semibold text-slate-400 w-14 text-right">Extremely Helpful</span>
          </div>
        </div>
      ) : (
        <p className="text-slate-600 font-medium mb-6">
          You are in the control group. Press the button below to save your final results.
        </p>
      )}

      <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col items-center gap-3">
        {error && <p className="text-red-500 text-sm font-bold">⚠️ {error}</p>}
        <button
          onClick={handleSubmit}
          className="w-full sm:w-auto px-10 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-colors shadow-md text-base"
        >
          Submit Results & Finish 🏁
        </button>
      </div>
    </div>
  );
}