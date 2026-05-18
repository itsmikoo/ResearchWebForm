import type { IGToken } from '../data/word2vecEmails';

interface IGEmailViewerProps {
  tokens: IGToken[];
  explainingTowards: 'phishing' | 'safe';
}

export default function IGEmailViewer({ tokens, explainingTowards }: IGEmailViewerProps) {
  // 1. Cari nilai bobot absolut tertinggi untuk patokan 100% kepekatan gradasi
  const maxScore = Math.max(...tokens.map(t => Math.abs(t.score)));

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      
      {/* Legend / Keterangan Warna */}
      <div className="flex gap-6 mb-6 pb-4 border-b border-gray-100 text-sm font-medium">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded" style={{ backgroundColor: 'rgba(34, 197, 94, 0.6)' }}></span>
          <span className="text-slate-600">Safe Email (Green)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded" style={{ backgroundColor: 'rgba(239, 68, 68, 0.6)' }}></span>
          <span className="text-slate-600">Phishing Email (Red)</span>
        </div>
      </div>

      {/* Render Teks Email Berurutan */}
      <div className="text-slate-800 leading-relaxed text-base md:text-lg">
        {tokens.map((token, index) => {
          // 2. Logika Penentuan Warna berdasarkan arah penjelasan (Explaining Towards)
          // Jika model menjelaskan Phishing: Skor positif = Phishing, Skor negatif = Safe
          // Jika model menjelaskan Safe: Skor positif = Safe, Skor negatif = Phishing
          let isPhishing = false;
          if (explainingTowards === 'phishing') {
            isPhishing = token.score > 0;
          } else {
            isPhishing = token.score < 0;
          }

          // 3. Hitung intensitas gradasi (minimal 20%, maksimal 80%)
          const ratio = Math.abs(token.score) / maxScore;
          const softAlpha = 0.20 + (ratio * 0.60); 

          const bgColor = isPhishing 
            ? `rgba(239, 68, 68, ${softAlpha})`  // Merah
            : `rgba(34, 197, 94, ${softAlpha})`; // Hijau
          
          return (
            <span 
              key={index} 
              className="px-0.5 mx-[1px] rounded transition-all cursor-help group relative inline-block hover:brightness-95"
              style={{ backgroundColor: bgColor }}
            >
              {token.word}
              
              {/* Tooltip IG Score */}
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-10 shadow-lg font-sans">
                IG Score: {token.score.toFixed(4)}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}