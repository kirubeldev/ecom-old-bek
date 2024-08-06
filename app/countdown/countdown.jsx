"use client"
import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilNextTuesday());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilNextTuesday());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeUntilNextTuesday() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hoursInDay = 24;
    const minutesInHour = 60;
    const secondsInMinute = 60;
    const millisecondsInSecond = 1000;

    // Calculate how many days until the next Tuesday
    let daysUntilTuesday = 2 - dayOfWeek; // 2 is Tuesday
    if (daysUntilTuesday <= 0) {
      daysUntilTuesday += 7;
    }

    // Set the target date to the next Tuesday at midnight
    const nextTuesday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + daysUntilTuesday,
      0, 0, 0
    );

    // Calculate the difference in milliseconds
    const difference = nextTuesday - now;

    // Calculate remaining time
    const days = Math.floor(difference / (hoursInDay * minutesInHour * secondsInMinute * millisecondsInSecond));
    const hours = Math.floor((difference % (hoursInDay * minutesInHour * secondsInMinute * millisecondsInSecond)) / (minutesInHour * secondsInMinute * millisecondsInSecond));
    const minutes = Math.floor((difference % (minutesInHour * secondsInMinute * millisecondsInSecond)) / (secondsInMinute * millisecondsInSecond));
    const seconds = Math.floor((difference % (secondsInMinute * millisecondsInSecond)) / millisecondsInSecond);

    return { days, hours, minutes, seconds };
  }

  function formatTime(unit) {
    // Pad single digit numbers with leading zero
    return unit.toString().padStart(2, '0');
  }

  return (
    <div className="countdown">
      <div className="flex items-center space-x-6 mt-2">
        <div className="text-center">
          <p className="text-xs -ml-6">Days</p>
          <p className="text-3xl font-bold">{formatTime(timeLeft.days)} <span className='ml-3 text-[#DB4444]'> : </span> </p>
        </div>
        <div className="text-center">
          <p className="text-xs -ml-6">Hours</p>
          <p className="text-3xl font-bold">{formatTime(timeLeft.hours)}<span className='ml-3 text-[#DB4444]'> : </span></p>
        </div>
        <div className="text-center">
          <p className="text-xs -ml-6">Minutes</p>
          <p className="text-3xl font-bold">{formatTime(timeLeft.minutes)}<span className='ml-3 text-[#DB4444]'> : </span> </p>
        </div>
        <div className="text-center">
          <p className="text-xs -ml-6">Seconds</p>
          <p className="text-3xl font-bold">{formatTime(timeLeft.seconds)} </p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
