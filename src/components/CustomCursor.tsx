import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, input, textarea, [data-interactive="true"]');
      setIsHovering(!!interactive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Primary Dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 bg-[#3B82F6]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '8px' : '6px',
          height: isHovering ? '8px' : '6px',
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Subtle Outer Follower Ring */}
      <div
        className="fixed pointer-events-none z-[9998] rounded-full transition-all duration-200 ease-out -translate-x-1/2 -translate-y-1/2 border border-blue-400/40"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '44px' : '26px',
          height: isHovering ? '44px' : '26px',
          backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.08)' : 'transparent',
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 0.9 : 0,
        }}
      />
    </>
  );
};
