// Define the exact shape of the data we will send to the backend
export interface SurveyPayload {
  participant_name: string;
  responses: {
    email_id: number;
    is_phishing: boolean;
    response_time_ms: number;
  }[];
}

// Mock API function
export const submitSurveyData = async (payload: SurveyPayload) => {
  console.log("Preparing to send data to backend...", payload);
  
  // Simulating a network request that takes 1 second
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Data successfully saved to mock backend!");
      resolve({ status: 200, message: "Success" });
    }, 1000);
  });
};