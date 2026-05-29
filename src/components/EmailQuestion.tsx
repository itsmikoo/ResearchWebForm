import { useState, useEffect } from "react";
import { useTimer } from "../hooks/useTimer";
import LimeEmailViewer from "./LimeEmailViewer";
import IGEmailViewer from "./IGEmailViewer";
import ControlEmailViewer from "./ControlEmailViewer";
import { emailData } from "../data/emails";
import { word2vecData } from "../data/word2vecEmails";
import type { GroupType } from "../App";

interface EmailProps {
  pageNumber: number;
  group: GroupType;
  // Menghapus helpfulness dari payload per pertanyaan
  onAnswer: (data: {
    isPhishing: boolean;
    responseTime: number;
    confidence: number;
  }) => void;
}

export default function EmailQuestion({
  pageNumber,
  group,
  onAnswer,
}: EmailProps) {
  const timeMs = useTimer();
  const completedQuestions = pageNumber - 1;
  const totalQuestions = 10;

  const [isEvaluationPhase, setIsEvaluationPhase] = useState(false);
  const [mainDecision, setMainDecision] = useState<boolean | null>(null);
  const [frozenTime, setFrozenTime] = useState<number>(0);
  const [confidence, setConfidence] = useState<number>(0);
  const [error, setError] = useState("");

  const currentEmail = emailData[completedQuestions];
  const currentW2VEmail = word2vecData[completedQuestions];

  useEffect(() => {
    setIsEvaluationPhase(false);
    setMainDecision(null);
    setFrozenTime(0);
    setConfidence(0);
    setError("");
  }, [pageNumber]);

  const handleMainDecision = (decision: boolean) => {
    setMainDecision(decision);
    setFrozenTime(timeMs);
    setIsEvaluationPhase(true);
  };

  const handleNextSubmit = () => {
    if (confidence === 0) {
      setError("Please select your confidence level.");
      return;
    }

    onAnswer({
      isPhishing: mainDecision!,
      responseTime: frozenTime,
      confidence: confidence,
    });
  };

  const displayTime = (
    isEvaluationPhase ? frozenTime / 1000 : timeMs / 1000
  ).toFixed(1);

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col flex-1">
      {/* Top Progress Bar */}
      <div className="flex gap-1 sm:gap-2 mb-6 sm:mb-10">
        {[...Array(totalQuestions)].map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full ${i < completedQuestions ? "bg-amber-400" : "bg-gray-100"}`}
          ></div>
        ))}
      </div>

      <div className="text-center mb-6 sm:mb-8">
        <p className="text-amber-500 font-bold text-[10px] sm:text-xs tracking-widest uppercase mb-2 sm:mb-3">
          Question {pageNumber} / {totalQuestions}
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1 sm:mb-2 leading-tight">
          Is this email dangerous?
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm font-medium">
          Time spent: <span className="text-amber-500">{displayTime}s</span>
        </p>
      </div>

      {/* EMAIL CONTENT AREA */}
      <div className="mb-8 sm:mb-10 overflow-y-auto max-h-[50vh] sm:max-h-none rounded-xl">
        {group === "control" && <ControlEmailViewer text={currentEmail.text} />}

        {group === "lime" && (
          <LimeEmailViewer
            text={currentEmail.text}
            highlights={currentEmail.highlights}
          />
        )}

        {group === "word2vec" && currentW2VEmail && (
          <IGEmailViewer
            text={currentW2VEmail.text}
            tokens={currentW2VEmail.tokens}
            explainingTowards={currentW2VEmail.explainingTowards}
          />
        )}
      </div>

      {/* ACTION AREA */}
      {!isEvaluationPhase ? (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full mt-auto">
          <button
            onClick={() => handleMainDecision(true)}
            className="flex-1 py-3 sm:py-4 px-4 sm:px-6 bg-white hover:bg-red-50 text-slate-700 hover:text-red-700 border border-gray-200 hover:border-red-200 rounded-full transition-all font-medium text-center shadow-sm text-sm sm:text-base"
          >
            Yes, it's Phishing
          </button>
          <button
            onClick={() => handleMainDecision(false)}
            className="flex-1 py-3 sm:py-4 px-4 sm:px-6 bg-white hover:bg-green-50 text-slate-700 hover:text-green-700 border border-gray-200 hover:border-green-200 rounded-full transition-all font-medium text-center shadow-sm text-sm sm:text-base"
          >
            No, it's Safe
          </button>
        </div>
      ) : (
        <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 md:p-6 mt-auto shadow-inner flex flex-col gap-5 animate-fadeIn">
          <div className="text-sm font-semibold text-slate-500 border-b border-slate-200 pb-2">
            Your Answer:{" "}
            <span className={mainDecision ? "text-red-600" : "text-green-600"}>
              {mainDecision ? "🔴 Phishing" : "🟢 Safe"}
            </span>
          </div>

          {/* PERTANYAAN: CONFIDENCE LEVEL */}
          <div className="flex flex-col gap-2">
            <label className="text-slate-800 font-semibold text-sm md:text-base">
              How confident are you with your decision?
            </label>
            <div className="flex justify-between items-center gap-1 sm:gap-2 mt-1">
              <span className="text-xs font-medium text-slate-400 w-12 text-left">
                Not at all
              </span>
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => {
                    setConfidence(num);
                    setError("");
                  }}
                  className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full font-bold text-sm sm:text-base transition-all border ${
                    confidence === num
                      ? "bg-amber-500 border-amber-600 text-white shadow-md transform scale-105"
                      : "bg-white border-gray-200 text-slate-600 hover:bg-gray-100"
                  }`}
                >
                  {num}
                </button>
              ))}
              <span className="text-xs font-medium text-slate-400 w-12 text-right">
                Extremely
              </span>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="h-5 text-center sm:text-left">
              {error && (
                <p className="text-red-500 text-xs sm:text-sm font-bold">
                  ⚠️ {error}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={handleNextSubmit}
              className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm md:text-base transition-colors shadow flex items-center justify-center gap-2"
            >
              {pageNumber === totalQuestions
                ? "Go to Final Evaluation 📋"
                : "Next Question →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
