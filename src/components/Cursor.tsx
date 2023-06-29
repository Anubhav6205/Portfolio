import React, { useEffect, useRef } from 'react';
import { animate, motion } from 'framer-motion';

export default function Cursor() {
    //holds the dom element of cursor 
  const cursorRef = useRef<HTMLDivElement|null>(null);

  //holds the current position of cursor 
  const cursorPosition = useRef({ x: 0, y: 0 });

  //updates current mouse positon 
  const updateCursorPosition = (clientX:any, clientY:any) => {
    cursorPosition.current = { x: clientX, y: clientY };
    requestAnimationFrame(updateCursor);
  };

  const updateCursor = () => {
    const { x, y } = cursorPosition.current;
    if (cursorRef.current) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      cursorRef.current.style.transform = `translate3d(${x - 7+ scrollX}px, ${y - 7 + scrollY}px, 0)`;
    }
  };

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      const { clientX, clientY } = e;
      updateCursorPosition(clientX, clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, );

  useEffect(() => {
    const handleScroll = () => {
      updateCursor();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <motion.div className="cursor" ref={cursorRef} />;
}
