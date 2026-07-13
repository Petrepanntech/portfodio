import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

function AnimatedChar({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  if (char === ' ') {
    return <span>{'\u00A0'}</span>;
  }

  return (
    <span style={{ position: 'relative', display: 'inline' }}>
      <span style={{ visibility: 'hidden' }}>{char}</span>
      <motion.span
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          opacity,
        }}
      >
        {char}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');

  return (
    <p ref={ref} className={className} style={{ ...style, wordWrap: 'break-word' }}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((char, ci) => {
            // Calculate the absolute index across the full text
            const absIndex = text.indexOf(word, wi > 0 ? text.indexOf(words[wi - 1]) + words[wi - 1].length : 0) + ci;
            return (
              <AnimatedChar
                key={`${wi}-${ci}`}
                char={char}
                index={absIndex}
                total={text.length}
                progress={scrollYProgress}
              />
            );
          })}
          {wi < words.length - 1 && <span>{'\u00A0'}</span>}
        </span>
      ))}
    </p>
  );
}
