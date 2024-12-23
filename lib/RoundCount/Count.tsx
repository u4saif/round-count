import { useEffect, useState, useRef } from 'react';
import './Count.css';

const convertMS = (ms: number) => {
  const s = Math.floor(ms / 1000) % 60;
  const m = Math.floor(ms / 60000) % 60;
  const h = Math.floor(ms / 3600000) % 24;
  const d = Math.floor(ms / 86400000);
  return { d, h, m, s };
};

const addZ = (n: number) => (n < 10 ? '0' : '') + n;

const formatTime = ({ d, h, m, s }: { d: number; h: number; m: number; s: number }) => {
  if (d > 0) return `${addZ(d)}D ${addZ(h)}H`;
  if (h > 0) return `${addZ(h)}H ${addZ(m)}M`;
  return `${addZ(m)}M ${addZ(s)}S`;
};

interface CountProps {
  time?: number;
  width?: number;
}

const Count = ({ time , width}: CountProps) => {
  const initalTime = time || 10;
  const circleWidth = width || 200;
  const [timeLeft, setTimeLeft] = useState(initalTime * 1000); // Initial countdown in milliseconds
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!isRunning) return;

    const startTime = Date.now();
    const endTime = startTime + timeLeft;

    const update = () => {
      const now = Date.now();
      const remainingTime = endTime - now;

      if (remainingTime <= 0) {
        setTimeLeft(0);
        setIsRunning(false);
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
        }
        return;
      }

      setTimeLeft(remainingTime);
    };

    intervalRef.current = setInterval(update, 16); // Update every ~16ms for smooth animation

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft]);

  const progress = ((initalTime * 1000 - timeLeft) / (initalTime * 1000)) * 301.44;

  return (
      <div className="c-container"  >
        <div className="c-text">
          {timeLeft > 0 ? formatTime(convertMS(timeLeft)) : "Time's up!!!"}
        </div>
        <svg id="yeah" viewBox="0 0 100 100" width={circleWidth}>
          <path
            id="bg"
            strokeLinecap="round"
            strokeWidth="4"
            stroke="#fff"
            fill="none"
            d="M50 2 a 48 48 0 0 1 0 96 a 48 48 0 0 1 0 -96"
          />
          <path
            id="progress"
            strokeLinecap="round"
            strokeWidth="4"
            stroke="#0b57d0"
            fill="none"
            d="M50 2 a 48 48 0 0 1 0 96 a 48 48 0 0 1 0 -96"
            strokeDasharray={`${progress}, 301.44`}
          />
        </svg>
      </div>
  );
};

export default Count;
