"use client";
import { useMemo } from "react";
import { useCountdown } from "@/hooks/useCountdown";
export default function Countdown({
  large = false,
  deadline = false,
}: {
  large?: boolean;
  deadline?: boolean;
}) {
  const target = useMemo(
    () =>
      deadline
        ? new Date("2026-11-10T23:59:59+05:30")
        : new Date("2026-11-14T09:00:00+05:30"),
    [deadline],
  );
  const t = useCountdown(target);
  const values = [
    [t.days, "Days"],
    [t.hours, "Hours"],
    [t.minutes, "Minutes"],
    [t.seconds, "Seconds"],
  ] as const;
  return (
    <div className={`countdown ${large ? "countdown--large" : ""}`}>
      {values.map(([value, label], i) => (
        <div className="countdown-unit" key={label}>
          <div>
            <strong>{String(value).padStart(2, "0")}</strong>
            <span>{label}</span>
          </div>
          {i < 3 && <b>/</b>}
        </div>
      ))}
    </div>
  );
}
