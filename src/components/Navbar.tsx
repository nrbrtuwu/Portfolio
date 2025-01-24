import React from 'react';
import { useAnimate } from '../hooks/useAnimate';
import { Code } from 'lucide-react';

export const Navbar = () => {
  const { ref } = useAnimate({
    animation: 'slideDown',
    duration: 1000,
    delay: 200
  });

  return (
    <nav ref={ref} className="fixed top-0 w-full px-8 py-6 flex justify-between items-center z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/5">
      <div className="flex items-center gap-2 cursor-pointer">
        <Code className="w-6 h-6 text-blue-400" />
        <span className="text-2xl font-bold gradient-text">BOBER Inc.</span>
      </div>
    </nav>
  );
};