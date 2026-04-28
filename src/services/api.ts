import { supabase } from '../supabaseClient';

export interface SurveyPayload {
  participant_name: string;
  responses: {
    email_id: number;
    is_phishing: boolean;
    response_time_ms: number;
  }[];
}

export const submitSurveyData = async (payload: SurveyPayload) => {
  console.log("Preparing to send data to Supabase...");
  
  try {
    // 1. Masukkan nama ke tabel 'participants' dan ambil 'id'-nya
    const { data: participantData, error: participantError } = await supabase
      .from('participants')
      .insert([{ name: payload.participant_name }])
      .select('id')
      .single();

    if (participantError) throw participantError;

    const participantId = participantData.id;

    // 2. Siapkan data jawaban yang sudah ditambahkan participant_id
    const responsesToInsert = payload.responses.map((response) => ({
      participant_id: participantId,
      email_id: response.email_id,
      is_phishing: response.is_phishing,
      response_time_ms: response.response_time_ms
    }));

    // 3. Masukkan semua jawaban ke tabel 'responses' sekaligus (Bulk Insert)
    const { error: responsesError } = await supabase
      .from('responses')
      .insert(responsesToInsert);

    if (responsesError) throw responsesError;
    return { status: 200, message: "Success" };

  } catch (error) {
    return { status: 500, message: "Error" };
  }
};