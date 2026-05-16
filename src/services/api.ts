import { supabase } from '../supabaseClient'; // Sesuaikan dengan lokasi file client Supabase-mu

interface ResponseData {
  email_id: number;
  is_phishing: boolean;
  response_time_ms: number;
}

// Update Interface agar menerima group_type
interface SurveyData {
  participant_name: string;
  group_type: 'control' | 'lime' | 'word2vec';
  responses: ResponseData[];
}

export async function submitSurveyData({ participant_name, group_type, responses }: SurveyData) {
  try {
    const { data: participantData, error: participantError } = await supabase
      .from('participants') // Ganti dengan nama tabel utama kamu
      .insert([
        { 
          name: participant_name, 
          group_type: group_type // Kolom baru yang baru saja kita buat di Supabase
        }
      ])
      .select()
      .single();

    if (participantError) throw participantError;

    // 2. Masukkan semua respon jawaban ke tabel detail (jika struktur tabelmu dipisah)
    if (participantData && responses.length > 0) {
      const responsesToInsert = responses.map((res) => ({
        participant_id: participantData.id, // Foreign key menghubungkan ke tabel utama
        email_id: res.email_id,
        is_phishing: res.is_phishing,
        response_time_ms: res.response_time_ms
      }));

      const { error: responseError } = await supabase
        .from('responses') // Ganti dengan nama tabel detail respon kamu
        .insert(responsesToInsert);

      if (responseError) throw responseError;
    }

    console.log("Survey data successfully saved to Supabase!");
    return { success: true };
  } catch (error) {
    console.error("Failed to submit survey data:", error);
    return { success: false, error };
  }
}