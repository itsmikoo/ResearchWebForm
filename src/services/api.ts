import { supabase } from '../supabaseClient'; 

interface ResponseData {
  email_id: number;
  is_phishing: boolean;
  response_time_ms: number;
  confidence_level: number; // <-- TAMBAHAN: Tingkat keyakinan per pertanyaan
}

interface SurveyData {
  participant_name: string;
  group_type: 'control' | 'lime' | 'word2vec';
  ai_global_helpfulness: number | null; // <-- TAMBAHAN: Skor kegunaan global dari App.tsx
  responses: ResponseData[];
}

export async function submitSurveyData({ 
  participant_name, 
  group_type, 
  ai_global_helpfulness, 
  responses 
}: SurveyData) {
  try {
    // 1. Masukkan data partisipan ke tabel utama (termasuk grup dan skor helpfulness akhir)
    const { data: participantData, error: participantError } = await supabase
      .from('participants') 
      .insert([
        { 
          name: participant_name, 
          group_type: group_type,
          helpfulness: ai_global_helpfulness // <-- KOLOM BARU: Disimpan 1x saja di tabel utama
        }
      ])
      .select()
      .single();

    if (participantError) throw participantError;

    // 2. Masukkan semua respon jawaban (10 soal) ke tabel detail responses
    if (participantData && responses.length > 0) {
      const responsesToInsert = responses.map((res) => ({
        participant_id: participantData.id, 
        email_id: res.email_id,
        is_phishing: res.is_phishing,
        response_time_ms: res.response_time_ms,
        confidence_level: res.confidence_level // <-- KOLOM BARU: Disimpan unik per nomor soal
      }));

      const { error: responseError } = await supabase
        .from('responses') 
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