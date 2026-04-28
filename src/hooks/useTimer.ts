import { useState, useEffect } from 'react';

export function useTimer() {
  const [timeMs, setTimeMs] = useState<number>(0);

  useEffect(() => {
    // Catat waktu mulai saat komponen pertama kali muncul
    const startTime = Date.now();
    
    // Update state setiap 100ms agar timer terlihat berjalan (tidak memberatkan performa)
    const interval = setInterval(() => {
      setTimeMs(Date.now() - startTime);
    }, 100);

    // Bersihkan interval saat komponen hilang atau berganti halaman (Mencegah memory leak)
    return () => clearInterval(interval);
  }, []);

  return timeMs;
}