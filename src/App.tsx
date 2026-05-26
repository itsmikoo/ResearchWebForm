import { useState, useEffect } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import TutorialScreen from "./components/TutorialScreen";
import ReadyScreen from "./components/ReadyScreen";
import EmailQuestion from "./components/EmailQuestion";
import FinalEvaluation from "./components/FinalEvaluation"; // <-- IMPORT BARU
import ThankYouScreen from "./components/ThankYouScreen";
import { submitSurveyData } from './services/api';

interface ResponseData {
  email_id: number;
  is_phishing: boolean;
  response_time_ms: number;
  confidence_level: number; // <-- TAMBAHAN: Menyimpan tingkat keyakinan per soal
}

// Perubahan: Menambahkan state "evaluation" ke dalam alur aplikasi
type AppState = "welcome" | "tutorial" | "ready" | "survey" | "evaluation" | "done";
export type GroupType = "control" | "lime" | "word2vec";

export default function App() {
  const [appState, setAppState] = useState<AppState>("welcome");
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [participantName, setParticipantName] = useState<string>("");
  const [responses, setResponses] = useState<ResponseData[]>([]);
  const [groupType, setGroupType] = useState<GroupType>("control");
  
  // State baru untuk menampung skor kegunaan AI global dari kuesioner akhir
  const [aiGlobalHelpfulness, setAiGlobalHelpfulness] = useState<number | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const groupParam = params.get("group");

    if (groupParam === "lime") {
      setGroupType("lime");
    } else if (groupParam === "word2vec") {
      setGroupType("word2vec");
    } else {
      setGroupType("control");
    }
  }, []);

  // Perubahan: Menerima objek data dari EmailQuestion.tsx
  const handleAnswer = (answerData: { isPhishing: boolean; responseTime: number; confidence: number }) => {
    // 1. Simpan jawaban saat ini ke dalam array penampung
    const updatedResponses = [
      ...responses,
      {
        email_id: currentQuestion,
        is_phishing: answerData.isPhishing,
        response_time_ms: answerData.responseTime,
        confidence_level: answerData.confidence, // <-- TERSIMPAN DI BATCH
      },
    ];
    
    setResponses(updatedResponses);

    // 2. Kontrol Alur Halaman
    if (currentQuestion < 10) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Jika sudah soal terakhir (ke-10), cek grup partisipan
      if (groupType === "control") {
        // Grup control tidak melihat menu helpfulness, langsung set done untuk kirim ke DB
        setAppState("done");
      } else {
        // Grup LIME & Word2Vec diarahkan ke halaman evaluasi akhir dulu
        setAppState("evaluation");
      }
    }
  };

  // Fungsi baru untuk menangani submit kuesioner helpfulness akhir (Khusus grup AI)
  const handleFinalEvaluationSubmit = (helpfulnessRating: number | null) => {
    setAiGlobalHelpfulness(helpfulnessRating);
    setAppState("done"); // Memicu useEffect di bawah untuk menembak DB sekaligus
  };

  // SINKRONISASI PENGIRIMAN DATA KE DATABASE (Hanya berjalan ketika state berubah jadi "done")
  useEffect(() => {
    if (appState === "done") {
      submitSurveyData({
        participant_name: participantName,
        group_type: groupType,
        ai_global_helpfulness: aiGlobalHelpfulness, // <-- TAMBAHAN: Mengirim data kegunaan global ke DB
        responses: responses,
      });
    }
  }, [appState, participantName, groupType, responses, aiGlobalHelpfulness]);

  return (
    <div className="min-h-screen bg-[#fdf8f0] flex items-center justify-center md:p-6 font-sans text-slate-800">
      <div className="bg-white w-full max-w-4xl min-h-screen md:min-h-[600px] md:rounded-2xl shadow-none md:shadow-xl p-6 sm:p-8 md:p-12 flex flex-col relative overflow-hidden">
        {appState === "welcome" && (
          <WelcomeScreen
            onNext={() => setAppState("tutorial")}
            setName={setParticipantName}
          />
        )}

        {appState === "tutorial" && (
          <TutorialScreen
            group={groupType}
            onFinish={() => setAppState("ready")}
          />
        )}

        {appState === "ready" && (
          <ReadyScreen onStart={() => setAppState("survey")} />
        )}

        {appState === "survey" && (
          <EmailQuestion
            key={currentQuestion}
            pageNumber={currentQuestion}
            group={groupType}
            onAnswer={handleAnswer}
          />
        )}

        {/* SCREEN BARU: Muncul setelah soal ke-10 khusus untuk grup LIME / Word2Vec */}
        {appState === "evaluation" && (
          <FinalEvaluation 
            group={groupType}
            onSubmit={handleFinalEvaluationSubmit}
          />
        )}

        {appState === "done" && <ThankYouScreen />}
      </div>
    </div>
  );
}