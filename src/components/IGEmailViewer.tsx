import React from "react";
import type { IGToken } from "../data/word2vecEmails";

interface IGEmailViewerProps {
  text: string;
  tokens: IGToken[];
  explainingTowards: "phishing" | "safe";
}

export default function IGEmailViewer({
  text,
  tokens,
  explainingTowards,
}: IGEmailViewerProps) {
  // 1. Create a dictionary map for fast lookup of tokens
  const tokenMap = tokens.reduce(
    (acc, curr) => {
      acc[curr.word.toLowerCase()] = curr;
      return acc;
    },
    {} as Record<string, IGToken>,
  );

  // 2. Cari nilai bobot absolut tertinggi untuk patokan 100% kepekatan gradasi
  const maxScore = Math.max(...tokens.map((t) => Math.abs(t.score)));

  console.log("1. Max Score:", maxScore);
  console.log("2. Token Dictionary:", tokenMap);

  // 3. Split text by newlines to respect paragraph formatting
  // If text is undefined, fall back to an empty string to prevent the crash
  const paragraphs = (text || "").split("\n");

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      {/* Legend / Keterangan Warna */}
      <div className="flex gap-6 mb-6 pb-4 border-b border-gray-100 text-sm font-medium">
        <div className="flex items-center gap-2">
          <span
            className="w-4 h-4 rounded"
            style={{ backgroundColor: "rgba(34, 197, 94, 0.6)" }}
          ></span>
          <span className="text-slate-600">Safe Email (Green)</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="w-4 h-4 rounded"
            style={{ backgroundColor: "rgba(239, 68, 68, 0.6)" }}
          ></span>
          <span className="text-slate-600">Phishing Email (Red)</span>
        </div>
      </div>

      {/* Render Teks Email Berurutan dengan Paragraf */}
      <div className="text-slate-800 leading-relaxed text-base md:text-lg">
        {paragraphs.map((paragraph, pIndex) => (
          <div key={pIndex} className="min-h-[1.5rem] mb-1">
            {paragraph.split(" ").map((word, wIndex) => {
              // Skip empty strings caused by multiple spaces
              if (!word) return null;

              const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
              const tokenData = tokenMap[cleanWord];

              console.log("1. Max Score:", maxScore);
              console.log("2. Token Dictionary:", tokenMap);

              return (
                <React.Fragment key={wIndex}>
                  {tokenData ? (
                    (() => {
                      // 4. Logika Penentuan Warna berdasarkan arah penjelasan
                      let isPhishing = false;
                      if (explainingTowards === "phishing") {
                        isPhishing = tokenData.score > 0;
                      } else {
                        isPhishing = tokenData.score < 0;
                      }

                      // 5. Hitung intensitas gradasi
                      const ratio = Math.abs(tokenData.score) / maxScore;
                      const softAlpha = 0.2 + ratio * 0.6;

                      const bgColor = isPhishing
                        ? `rgba(239, 68, 68, ${softAlpha})` // Merah
                        : `rgba(34, 197, 94, ${softAlpha})`; // Hijau

                      return (
                        <span
                          className="px-0.5 mx-[1px] rounded transition-all cursor-help group relative inline-block hover:brightness-95"
                          style={{ backgroundColor: bgColor }}
                        >
                          {word}

                          {/* Tooltip IG Score */}
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-10 shadow-lg font-sans">
                            IG Score: {tokenData.score.toFixed(4)}
                          </span>
                        </span>
                      );
                    })()
                  ) : (
                    // Jika kata biasa tanpa bobot AI
                    <span>{word}</span>
                  )}
                  {/* SPASI ANTAR KATA */}{" "}
                </React.Fragment>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
