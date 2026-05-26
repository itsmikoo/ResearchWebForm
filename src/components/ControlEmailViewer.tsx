import React from 'react';

interface ControlEmailViewerProps {
  text: string;
}

export default function ControlEmailViewer({ text }: ControlEmailViewerProps) {
  // Pecah teks mentah menjadi array kata berdasarkan spasi
  const words = text.split(' ');

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-slate-800 leading-relaxed text-base md:text-lg">
      {words.map((word, index) => {
        // Deteksi tanda baca akhir
        const isEndOfSentence = word.endsWith('.') || word.endsWith('!') || word.endsWith('?');

        return (
          <React.Fragment key={index}>
            <span>{word}</span>
            
            {/* Spasi Antar Kata */}
            {' '}
            
            {/* Injeksi Paragraf Baru Jika Berada di Akhir Kalimat */}
            {isEndOfSentence && (
              <>
                <br />
                <br />
              </>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}