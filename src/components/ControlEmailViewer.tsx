import React from "react";

interface ControlEmailViewerProps {
  text: string;
}

export default function ControlEmailViewer({ text }: ControlEmailViewerProps) {
  // Split the text by newlines exactly like the Lime viewer
  const paragraphs = text.split("\n");

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="text-slate-800 leading-relaxed text-base md:text-lg">
        {paragraphs.map((paragraph, pIndex) => (
          // Use the exact same paragraph spacing and minimum height as Lime
          <div key={pIndex} className="min-h-[1.5rem] mb-1">
            {paragraph.split(" ").map((word, wIndex) => {
              // Skip empty strings caused by multiple spaces
              if (!word) return null;

              return (
                <React.Fragment key={wIndex}>
                  {/* Render plain text, ensuring exact DOM matching with Lime */}
                  <span>{word}</span>{" "}
                </React.Fragment>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
