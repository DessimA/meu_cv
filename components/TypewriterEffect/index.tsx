
"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number;
  speed?: number;
}

export default function TypeWriter({ text, delay = 0, speed = 50 }: TypeWriterProps) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, speed, text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay: delay }}
      className="font-mono"
    >
      {currentText}
    </motion.span>
  );
}
