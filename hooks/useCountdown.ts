"use client";
import { useEffect, useState } from "react";
export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
const empty: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
export function useCountdown(target: Date) {
  const [time, setTime] = useState<TimeLeft>(empty);
  useEffect(() => {
    const tick = () => {
      const d = Math.max(0, target.getTime() - Date.now());
      setTime({
        days: Math.floor(d / 86400000),
        hours: Math.floor(d / 3600000) % 24,
        minutes: Math.floor(d / 60000) % 60,
        seconds: Math.floor(d / 1000) % 60,
      });
    };
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, [target]);
  return time;
}
