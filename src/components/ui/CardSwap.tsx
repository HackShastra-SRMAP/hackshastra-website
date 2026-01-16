import React, { Children, cloneElement, forwardRef, isValidElement, useState, useMemo, ReactNode, CSSProperties } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './CardSwap.css';

interface CardProps {
  children?: ReactNode;
  customClass?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ customClass, children, ...rest }, ref) => (
  <div ref={ref} {...rest} className={`swap-card ${customClass ?? ''} ${rest.className ?? ''}`.trim()}>
    {children}
  </div>
));
Card.displayName = 'Card';

interface CardSwapProps {
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  onCardClick?: (index: number) => void;
  children: ReactNode;
}

const CardSwap = ({
  width = 380,
  height = 450,
  cardDistance = 40,
  verticalDistance = 50,
  onCardClick,
  children
}: CardSwapProps) => {
  const childArr = useMemo(() => Children.toArray(children), [children]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    onCardClick?.(index);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + childArr.length) % childArr.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % childArr.length);
  };

  const rendered = childArr.map((child, i) => {
    if (!isValidElement(child)) return child;

    const childProps = child.props as CardProps;
    
    // Calculate position based on distance from active
    let position = i - activeIndex;
    if (position < 0) position += childArr.length;
    
    const isActive = position === 0;
    const offset = position * cardDistance;
    const yOffset = position * verticalDistance;
    const zOffset = position * -50;
    const scale = 1 - position * 0.05;
    const opacity = 1 - position * 0.2;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return cloneElement(child as any, {
      key: i,
      style: {
        width,
        height,
        transform: `translateX(calc(-50% + ${offset}px)) translateY(calc(-50% - ${yOffset}px)) translateZ(${zOffset}px) scale(${scale})`,
        zIndex: childArr.length - position,
        opacity: Math.max(opacity, 0.3),
        ...(childProps.style ?? {})
      },
      className: `swap-card ${isActive ? 'active' : ''} ${childProps.className ?? ''}`,
      onClick: (e: React.MouseEvent) => {
        handleCardClick(i);
        childProps.onClick?.(e);
      }
    });
  });

  return (
    <div className="card-swap-wrapper">
      {/* Left arrow button */}
      <button
        className="card-swap-arrow card-swap-arrow-left"
        onClick={goToPrev}
        aria-label="Previous card"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="card-swap-container" style={{ width, height }}>
        {rendered}
      </div>

      {/* Right arrow button */}
      <button
        className="card-swap-arrow card-swap-arrow-right"
        onClick={goToNext}
        aria-label="Next card"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Navigation dots */}
      <div className="card-swap-dots">
        {childArr.map((_, i) => (
          <button
            key={i}
            className={`card-swap-dot ${activeIndex === i ? 'active' : ''}`}
            onClick={() => handleCardClick(i)}
            aria-label={`Go to card ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSwap;
