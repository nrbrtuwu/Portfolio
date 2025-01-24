import React from 'react';
import { useAnimate } from '../hooks/useAnimate';
import { Laptop, Keyboard, Headphones, Monitor, Mouse, Mic } from 'lucide-react';

const workspaceItems = {
  'Main Setup': [
    { title: 'Example PC', specs: 'Processor • 16GB RAM • 512GB SSD', icon: Laptop },
    { title: 'Example Monitor', specs: '27-inch • 60Hz • DP 2.1', icon: Monitor }
  ],
  'Peripherals': [
    { title: 'Example Keyboard', specs: 'Mechanical • Brown Switches • RGB', icon: Keyboard },
    { title: 'Example Mouse', specs: 'Wireless • Custom Buttons • Ergonomic', icon: Mouse }
  ],
  'Audio': [
    { title: 'Example Headphones', specs: 'Wireless • Noise Cancelling', icon: Headphones },
    { title: 'Example Microphone', specs: 'USB Microphone • Custom Arm', icon: Mic }
  ]
};

export const Workspace = () => {
  const { ref } = useAnimate({
    animation: 'fadeInLeft',
    duration: 800,
    delay: 200,
    when: 'inView'
  });

  return (
    <section id="setup" className="py-20 px-[10%] relative" ref={ref}>
      <h2 className="text-5xl font-bold text-center mb-4 gradient-text">My Workspace</h2>
      <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
        The tools and equipment I use to bring ideas to life
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {Object.entries(workspaceItems).map(([category, items], index) => (
          <div key={index} className="flex flex-col space-y-6">
            <h3 className="text-2xl font-semibold gradient-text text-center">{category}</h3>
            <div className="flex-1 grid grid-rows-2 gap-6">
              {items.map((item, itemIndex) => (
                <div key={itemIndex} className="glass-card hover-card h-[160px] flex items-center p-6">
                  <div className="flex items-center gap-6 w-full">
                    <div className="min-w-[3rem] w-12 h-12 rounded-xl bg-black/20 border border-white/5 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                      <p className="text-gray-300 mt-1">{item.specs}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}