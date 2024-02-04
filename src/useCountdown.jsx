import { useState, useEffect } from "react";

export const useCountdown = (initialTicks, intervalMs) => {
  const [ticks, setTicks] = useState(initialTicks);
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setTicks(initialTicks);
    setIsActive(false);
  };

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTicks((ticks) => ticks - 1);
      }, intervalMs);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, intervalMs, ticks]);

  return {
    ticks,
    isActive,
    handleIsActive,
    reset,
  };
};
