"use client";
import React, { useState, useEffect, useRef } from 'react';

const Timer = ({ time,callBack }: { time: number, callBack: () => void }) => {
  const [secondsLeft, setSecondsLeft] = useState(time * 60); // Convert minutes to seconds
  const [isActive, setIsActive] = useState(false);
  const [dynTitle, setDynTitle] = useState('');

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setSecondsLeft(time * 60); // Update secondsLeft when time changes
    setIsActive(false);
  }, [time]);

  useEffect(() => {
    if (isActive) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        setSecondsLeft((prevSeconds) => {
          if (prevSeconds <= 0) {
            clearInterval(intervalRef.current as ReturnType<typeof setInterval>);
            setIsActive(false); // Stop the timer
            var aud = new Audio('overvelmed.mp3');
            aud.play();
            callBack();
            return 0;  
          }
          return prevSeconds - 1;
        });
      }, 990);
    } else if (!isActive && secondsLeft !== 0) {
      clearInterval(intervalRef.current as ReturnType<typeof setInterval>);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current as ReturnType<typeof setInterval>);
      }
    };
  }, [isActive, secondsLeft]);

  const handleStart = () => {
    if (secondsLeft > 0) {
      setIsActive(true);
    }
  };

  const endHandleStart = () => {
    if (secondsLeft > 0) {
      setIsActive(false);
    }
  };

  // Calculate minutes and seconds
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  useEffect(()=>{
    setDynTitle(`${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} - ${minutes > 20 ? "Pomodoro - Time to Focus " : 'Pomodoro - Time to rest' }`);
    document.title = `${dynTitle}`; 
  }, [secondsLeft, time]);  

  return (
    <div className='flex flex-col gap-2 items-center'>
      <h2 className='babas text-8xl md:text-9xl '>
        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h2>
      <button className={`p-2 pl-4 pr-4 bg-white text-black text-lg rounded-lg btn-shodow ${isActive ? 'b-shadow' : 'shadow-none'}`} onClick={isActive ? endHandleStart : handleStart}>
        {isActive ? "Stop Pomo" : 'Start Pomo'}
      </button>
    </div>
  );
};

export default Timer;
