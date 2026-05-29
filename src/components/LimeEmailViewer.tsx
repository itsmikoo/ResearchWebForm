import React from "react";

export interface Highlight {
  word: string;
  weight: number;
  type: "legitimate" | "phishing";
}

interface LimeEmailViewerProps {
  text: string;
  highlights: Highlight[];
}

export default function LimeEmailViewer({
  text,
  highlights,
}: LimeEmailViewerProps) {
  const highlightMap = highlights.reduce(
    (acc, curr) => {
      acc[curr.word.toLowerCase()] = curr;
      return acc;
    },
    {} as Record<string, Highlight>,
  );

  const maxWeight = Math.max(...highlights.map((h) => Math.abs(h.weight)));

  // 1. Split the text by newlines to preserve manual formatting
  const paragraphs = text.split("\n");

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      {/* Legend */}
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

      {/* Render Email Text */}
      <div className="text-slate-800 leading-relaxed text-base md:text-lg">
        {paragraphs.map((paragraph, pIndex) => (
          // 2. Wrap each line in a div. min-h ensures empty lines (\n\n) render as blank spaces.
          <div key={pIndex} className="min-h-[1.5rem] mb-1">
            {paragraph.split(" ").map((word, wIndex) => {
              // Skip empty strings caused by multiple spaces
              if (!word) return null;

              const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
              const highlightData = highlightMap[cleanWord];

              return (
                <React.Fragment key={wIndex}>
                  {highlightData ? (
                    (() => {
                      const ratio = Math.abs(highlightData.weight) / maxWeight;
                      const softAlpha = 0.2 + ratio * 0.6;
                      const bgColor =
                        highlightData.type === "legitimate"
                          ? `rgba(34, 197, 94, ${softAlpha})`
                          : `rgba(239, 68, 68, ${softAlpha})`;

                      return (
                        <span
                          className="px-0.5 mx-[1px] rounded transition-all cursor-help group relative inline-block hover:brightness-95"
                          style={{ backgroundColor: bgColor }}
                        >
                          {word}
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-slate-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-10 shadow-lg font-sans">
                            LIME Weight: {highlightData.weight.toFixed(4)}
                          </span>
                        </span>
                      );
                    })()
                  ) : (
                    <span>{word}</span>
                  )}{" "}
                </React.Fragment>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
