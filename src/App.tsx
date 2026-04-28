import { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import EmailQuestion from './components/EmailQuestion';
import ThankYouScreen from './components/ThankYouScreen';
import { submitSurveyData } from './services/api';

interface ResponseData {
  email_id: number;
  is_phishing: boolean;
  response_time_ms: number;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [participantName, setParticipantName] = useState<string>("");
  const [responses, setResponses] = useState<ResponseData[]>([]);

  const handleAnswer = (isPhishing: boolean, responseTime: number) => {
    setResponses((prev) => [
      ...prev,
      { email_id: currentPage - 1, is_phishing: isPhishing, response_time_ms: responseTime }
    ]);
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (currentPage === 12) {
      submitSurveyData({ participant_name: participantName, responses });
    }
  }, [currentPage, participantName, responses]);

  return (
    <div className="min-h-screen bg-[#fdf8f0] flex items-center justify-center md:p-6 font-sans text-slate-800">
      {/* Container utama: Full screen di HP, Card di Laptop */}
      <div className="bg-white w-full max-w-4xl min-h-screen md:min-h-[600px] md:rounded-2xl shadow-none md:shadow-xl p-6 sm:p-8 md:p-12 flex flex-col">
        {currentPage === 1 && <WelcomeScreen onNext={() => setCurrentPage(2)} setName={setParticipantName} />}
        {currentPage >= 2 && currentPage <= 11 && (
          <EmailQuestion key={currentPage} pageNumber={currentPage} onAnswer={handleAnswer} />
        )}
        {currentPage === 12 && <ThankYouScreen />}
      </div>
    </div>
  );
}