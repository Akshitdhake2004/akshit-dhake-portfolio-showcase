
import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [linkHover, setLinkHover] = useState(false);
  
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseDown = () => setClicking(true);
    const mouseUp = () => setClicking(false);

    const handleLinkHoverIn = () => setLinkHover(true);
    const handleLinkHoverOut = () => setLinkHover(false);

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', mouseDown);
    document.addEventListener('mouseup', mouseUp);

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverIn);
      link.addEventListener('mouseleave', handleLinkHoverOut);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', mouseDown);
      document.removeEventListener('mouseup', mouseUp);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverIn);
        link.removeEventListener('mouseleave', handleLinkHoverOut);
      });
    };
  }, []);

  return (
    <div className="hidden md:block">
      <div 
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      >
        <div className="relative">
          <div 
            className={`rounded-full bg-white w-2 h-2 transition-transform duration-100 ${clicking ? 'scale-150' : 'scale-100'}`} 
          />
        </div>
      </div>
      <div 
        className="fixed top-0 left-0 pointer-events-none z-40"
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div 
          className={`rounded-full border border-white w-10 h-10 transition-all duration-150 
          ${clicking ? 'scale-75 bg-white/10' : 'scale-100'} 
          ${linkHover ? 'scale-150 bg-white/5' : ''}`}
        />
      </div>
    </div>
  );
}
