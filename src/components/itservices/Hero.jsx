import React from 'react';
import HeroContent from './HeroContent';
import HeroGraphic from './HeroGraphic';

function Hero() {
  return (
    <section className="w-full mt-6 max-lg:mt-[4rem] relative overflow-hidden bg-white">
      {/* Background grid - Boxy & Minimalist */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between p-6 md:p-12 relative z-10 min-h-[85vh]">
        <HeroContent />
        <HeroGraphic />
      </div>
    </section>
  );
}

export default Hero;
