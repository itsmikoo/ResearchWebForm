export interface Highlight {
  word: string;
  weight: number;
  type: 'legitimate' | 'phishing';
}

interface LimeEmailViewerProps {
  text: string;
  highlights: Highlight[];
}

export default function LimeEmailViewer({ text, highlights }: LimeEmailViewerProps) {
  const highlightMap = highlights.reduce((acc, curr) => {
    acc[curr.word.toLowerCase()] = curr;
    return acc;
  }, {} as Record<string, Highlight>);

  const maxWeight = Math.max(...highlights.map(h => Math.abs(h.weight)));

  const words = text.split(' ');

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      {/* Legend / Keterangan Warna */}
      <div className="flex gap-6 mb-6 pb-4 border-b border-gray-100 text-sm font-medium">
        <div className="flex items-center gap-2">
          {/* Legend di-set di 60% sebagai jalan tengah */}
          <span className="w-4 h-4 rounded" style={{ backgroundColor: 'rgba(34, 197, 94, 0.6)' }}></span>
          <span className="text-slate-600">Safe Email (Green)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded" style={{ backgroundColor: 'rgba(239, 68, 68, 0.6)' }}></span>
          <span className="text-slate-600">Phishing Email (Red)</span>
        </div>
      </div>

      {/* Render Teks Email dengan Highlight Dinamis */}
      <div className="text-slate-800 leading-relaxed text-base md:text-lg">
        {words.map((word, index) => {
          const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
          const highlightData = highlightMap[cleanWord];

          if (highlightData) {
            // 2. Hitung Rasio (0.0 sampai 1.0)
            const ratio = Math.abs(highlightData.weight) / maxWeight;
            
            // 3. Konversi Rasio ke Opacity (Mulai dari 0.20 sampai maksimal 0.80)
            // Rumus: Base 0.2 + (Ratio * Sisa Range 0.6)
            const softAlpha = 0.20 + (ratio * 0.60); 

            // 4. Masukkan alpha ke RGBA
            const bgColor = highlightData.type === 'legitimate' 
              ? `rgba(34, 197, 94, ${softAlpha})` 
              : `rgba(239, 68, 68, ${softAlpha})`;
            
            return (
              <span 
                key={index} 
                className="px-0.5 mx-[1px] rounded transition-all cursor-help group relative inline-block hover:brightness-95"
                style={{ backgroundColor: bgColor }}
              >
                {word}
                
                {/* Tooltip untuk melihat skor aslinya saat di-hover */}
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-10 shadow-lg font-sans">
                  LIME Weight: {highlightData.weight.toFixed(4)}
                </span>
              </span>
            );
          }

          // Render kata biasa jika tidak ada di list
          return <span key={index}> {word} </span>;
        })}
      </div>
    </div>
  );
}