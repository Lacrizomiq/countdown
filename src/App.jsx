import { useState } from "react";
import { useCountdown } from "./useCountdown";

const Countdown = () => {
  const [initialTicks, setInitialTicks] = useState(100);
  const [speed, setSpeed] = useState(1000);
  const { ticks, handleIsActive, isActive, reset } = useCountdown(
    initialTicks,
    speed
  );

  return (
    <div className="countdown-container">
      <label>
        Ticks
        <input
          type="number"
          value={initialTicks}
          onChange={(e) => setInitialTicks(e.target.value)}
          className="countdown-input"
        />
      </label>

      <label>
        Speed
        <input
          type="number"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
          className="countdown-input"
        />
      </label>
      <div className="countdown-display">{ticks}</div>
      <button onClick={handleIsActive} className="countdown-button">
        {isActive ? "Pause" : "Start"}
      </button>
      <button onClick={reset} className="countdown-button">
        Reset
      </button>
    </div>
  );
};

export default Countdown;
