'use client'; 
import { useState, useEffect } from "react";
import Button from "./Button";
import Timer from "./timer";
import { motion } from 'framer-motion';

type Mode = "Pomodoro" | "Short Break" | "Long Break";

export default function PomoTimer() {
  const variants = {
    initial: { x: 0, opacity: 1 },
    moved: { x: -100, opacity: 0 },
    reset: { x: 0, opacity: 0 },
  };

  const [selectedMode, setSelectedMode] = useState<Mode>("Pomodoro");
  const [cycleCount, setCycleCount] = useState(0); // Keeps track of the current cycle

  const [animationState, setAnimationState] = useState<'initial' | 'moved' | 'reset'>('initial');

  useEffect(() => {
    let timeoutId;

    // Set high-contrast color first
    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.style.backgroundColor = '#ffffff'; // High contrast (white)
    }
    
    // Use a timeout to change to the selected mode color after a brief delay
    timeoutId = setTimeout(() => {
        if (mainElement) {
            switch (selectedMode) {
                case "Pomodoro":
                    mainElement.style.backgroundColor = '#a52a2a'; // Light red for Pomodoro
                    break;
                case "Short Break":
                    mainElement.style.backgroundColor = '#38858A'; // Light blue for Short Break
                    break;
                case "Long Break":
                    mainElement.style.backgroundColor = '#397097'; // Light green for Long Break
                    break;
                default:
                    mainElement.style.backgroundColor = '#a52a2a'; // Reset to default
            }
            mainElement.classList.add('addBody');
        }
    }, 100); // Delay before changing to the normal color (100ms)

    return () => {
        clearTimeout(timeoutId); // Clear timeout if component unmounts or selectedMode changes
        if (mainElement) {
            mainElement.style.backgroundColor = '';
        }
    };
}, [selectedMode]);





  useEffect(() => {
    setAnimationState('reset');

    const resetTimer = setTimeout(() => {
      setAnimationState('moved');
    }, 500);

    const finalTimer = setTimeout(() => {
      setAnimationState('initial');
    }, 1000);

    return () => {
      clearTimeout(resetTimer);
      clearTimeout(finalTimer);
    };
  }, [selectedMode]);

  const timerDurations: Record<Mode, number> = {
    Pomodoro: 25,
    "Short Break": 5,
    "Long Break": 15,
  };

  const handleTimerComplete = () => {
    if (selectedMode === "Pomodoro") {
      setSelectedMode("Short Break");
    } else if (selectedMode === "Short Break") {
      if (cycleCount < 1) {
        setSelectedMode("Pomodoro");
        setCycleCount(cycleCount + 1);
      } else {
        setSelectedMode("Long Break");
        setCycleCount(0); // Reset cycle after Long Break
      }
    } else if (selectedMode === "Long Break") {
      setSelectedMode("Pomodoro"); // Start new cycle after Long Break
    }
  };

  return (
    <div className="smooth-transition gap-6 md:pl-6 md:pr-6 drop-shadow-lg flex flex-col justify-between items-center mt-6 relative bg-opacity-50 bg-gray-100 w-[90%] md:w-[85%]  lg:w-[30%]  rounded-lg pt-3 pb-3">
      <div className="flex w-full justify-around">
        <Button text="Pomodoro" onClick={() => setSelectedMode("Pomodoro")} />
        <Button text="Short Break" onClick={() => setSelectedMode("Short Break")} />
        <Button text="Long Break" onClick={() => setSelectedMode("Long Break")} />
      </div>
      <div>
        <motion.div
          initial="initial"
          animate={animationState}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <Timer callBack={handleTimerComplete} time={timerDurations[selectedMode]} />
        </motion.div>
      </div>
    </div>
  );
}
