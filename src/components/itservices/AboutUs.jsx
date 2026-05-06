import React from 'react';
import { ShieldCheck, MapPin, Zap, Users } from 'lucide-react';
import AboutUsContent from './AboutUsContent';
import StatCard from './StatCard';

const stats = [
  { icon: <MapPin className="text-primary-500" size={24} />, label: "Ghana-Based", desc: "Locally trusted solutions provider" },
  { icon: <Users className="text-primary-500" size={24} />, label: "Expert Team", desc: "Certified IT & electrical engineers" },
  { icon: <Zap className="text-primary-500" size={24} />, label: "Integration", desc: "Seamless smart home & automation" },
  { icon: <ShieldCheck className="text-primary-500" size={24} />, label: "Support", desc: "Responsive ongoing maintenance" },
];

function AboutUs() {
  return (
    <section id="about" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text & Grid */}
          <AboutUsContent />

          {/* Right: Bento Grid Features */}
          <div className="relative mt-10 lg:mt-0">
            {/* Boxy decorative background */}
            <div className="absolute top-0 right-0 w-[90%] h-[90%] bg-slate-900 -z-10 transform translate-x-4 -translate-y-4 border border-slate-700"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {stats.map((stat, i) => (
                <StatCard key={i} stat={stat} index={i} />
              ))}
            </div>

            {/* Decorative dots */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[radial-gradient(circle,#cbd5e1_2px,transparent_2px)] [background-size:16px_16px] -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;
