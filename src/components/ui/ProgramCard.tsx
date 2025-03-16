
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  ageRange: string;
  link: string;
  delay?: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  icon,
  ageRange,
  link,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={cn(
        "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",
        "transform transition-all duration-300",
        isHovered ? "scale-[1.02] shadow-md" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        
        <div className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-primary mb-4">
          Ages {ageRange}
        </div>
        
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <Link
          to={link}
          className={cn(
            "inline-flex items-center text-sm font-medium",
            "transition-all duration-300",
            isHovered ? "text-primary" : "text-muted-foreground"
          )}
        >
          Learn more
          <svg
            className={cn(
              "ml-2 w-4 h-4 transition-transform duration-300",
              isHovered ? "translate-x-1" : ""
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
