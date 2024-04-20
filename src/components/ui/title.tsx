// components/ui/Title.tsx
import React from 'react';

interface TitleProps {
  text: string;
  level?: number;
  size?: string;
  alignment?: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  text,
  level = 1,
  size = 'text-2xl',
  alignment = 'text-left',
  className = ''
}) => {

  // Ensure the heading level is valid and falls back to 1 if not
  const safeLevel = level >= 1 && level <= 6 ? level : 1;
  const Component = `h${safeLevel}` as keyof JSX.IntrinsicElements;

  const classes = `${size} ${alignment} ${className}`;
  return <Component className={classes}>{text}</Component>;
};

export default Title;
