"use client";
import { useEffect, useRef, useState } from "react";

export const TypewriterEffect = ({ text = "", keyPressDelay = 75 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const currentIndexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (text.length === 0) {
      return;
    }

    currentIndexRef.current = 0;
    setDisplayedText("");

    const animate = () => {
      if (currentIndexRef.current < text.length) {
        timeoutRef.current = setTimeout(() => {
          currentIndexRef.current += 1;
          setDisplayedText(text.slice(0, currentIndexRef.current));
          animate();
        }, keyPressDelay);
      }
    };

    animate();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, keyPressDelay]);

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
