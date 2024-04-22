import React, { useRef, useEffect } from 'react';

const Test = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollElement = scrollRef.current;
      if (scrollElement) {
        const rect = scrollElement.getBoundingClientRect();
        const bottomOffset = window.innerHeight - rect.bottom;
        if (bottomOffset >= 0) {
          scrollElement.classList.remove('sticky', 'top-0');
          scrollElement.classList.add('absolute', 'bottom-0');
        } else {
          scrollElement.classList.remove('absolute', 'bottom-0');
          scrollElement.classList.add('sticky', 'top-0');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-screen overflow-y-auto">
      <div className="pb-20" ref={scrollRef}>
        <div className="h-96 bg-gray-100">Sticky Header</div>
        <div className="h-96 bg-gray-200">Scrollable Content</div>
      </div>
      <div className="h-20 bg-gray-300">Sticky Footer</div>
    </div>
  );
};

export default Test;
