"use client";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({ text = "", keyPressDelay = 75 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1)); // Always take a full substring
        setCurrentIndex(currentIndex + 1);
      }, keyPressDelay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, keyPressDelay]);

  return (
    <>
      {displayedText}
      <Caret />
    </>
  );
};

export const Caret = () => (
  <span className="ml-1 h-fit inline text-ice-800 animate-blink">|</span>
);
