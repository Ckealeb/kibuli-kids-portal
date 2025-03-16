
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface StatisticProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const Statistic: React.FC<StatisticProps> = ({
  value,
  label,
  suffix = '',
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = value;
    
    // Calculate increment per frame to complete in duration
    const totalFrames = Math.min(end, 60);
    const incrementPerFrame = end / totalFrames;
    
    const timer = setInterval(() => {
      start += incrementPerFrame;
      setCount(Math.min(Math.floor(start), end));
      
      if (start >= end) {
        clearInterval(timer);
      }
    }, duration / totalFrames);
    
    return () => clearInterval(timer);
  }, [value, duration, isInView]);
  
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
        {isInView ? count : 0}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

const Statistics = () => {
  return (
    <div className="py-12 bg-secondary rounded-2xl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Statistic value={15} label="Years of Excellence" suffix="+" />
          <Statistic value={500} label="Happy Students" suffix="+" />
          <Statistic value={25} label="Expert Teachers" suffix="+" />
          <Statistic value={98} label="Success Rate" suffix="%" />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
