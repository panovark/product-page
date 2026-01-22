import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  // Delay in secodns
  delay?: number;
  // Vertical offset
  y?: number;
  // Animation in seconds
  duration?: number;
  className?: string;
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.5,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    amount: 0.2,
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
