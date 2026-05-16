import { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import TutorialScreen from './components/TutorialScreen';
import ReadyScreen from './components/ReadyScreen';
import EmailQuestion from './components/EmailQuestion';
import ThankYouScreen from './components/ThankYouScreen';
import { submitSurveyData } from './services/api';

interface ResponseData {
  email_id: number;
  is_phishing: boolean;
  response_time_ms: number;
}

type AppState = 'welcome' | 'tutorial' | 'ready' | 'survey' | 'done';

export default function App() {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [participantName, setParticipantName] = useState<string>("");
  const [responses, setResponses] = useState<ResponseData[]>([]);

  const handleAnswer = (isPhishing: boolean, responseTime: number) => {
    setResponses((prev) => [
      ...prev,
      { email_id: currentQuestion, is_phishing: isPhishing, response_time_ms: responseTime }
    ]);
    
    if (currentQuestion < 10) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setAppState('done');
    }
  };

  useEffect(() => {
    if (appState === 'done') {
      submitSurveyData({ participant_name: participantName, responses });
    }
  }, [appState, participantName, responses]);

  return (
    <div className="min-h-screen bg-[#fdf8f0] flex items-center justify-center md:p-6 font-sans text-slate-800">
      <div className="bg-white w-full max-w-4xl min-h-screen md:min-h-[600px] md:rounded-2xl shadow-none md:shadow-xl p-6 sm:p-8 md:p-12 flex flex-col relative overflow-hidden">
        
        {appState === 'welcome' && (
          <WelcomeScreen 
            onNext={() => setAppState('tutorial')} 
            setName={setParticipantName} 
          />
        )}

        {appState === 'tutorial' && (
          <TutorialScreen 
            onFinish={() => setAppState('ready')} 
          />
        )}

        {appState === 'ready' && (
          <ReadyScreen 
            onStart={() => setAppState('survey')} 
          />
        )}

        {appState === 'survey' && (
          <EmailQuestion 
            key={currentQuestion} 
            pageNumber={currentQuestion} 
            onAnswer={handleAnswer} 
          />
        )}

        {appState === 'done' && <ThankYouScreen />}
        
      </div>
    </div>
  );
}