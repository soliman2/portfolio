import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { IMPACT_STATS_ROW_1, IMPACT_STATS_ROW_2 } from '../constants';

const ImpactStats: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Count-up animation hook
  const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      if (!isInView) return;

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [end, duration, isInView]);

    return count;
  };

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0A0B1E 0%, #1A1F2E 100%)'
      }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row 1: 5 Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16"
        >
          {IMPACT_STATS_ROW_1.map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-slate-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Row 2: 2 Stats (Centered) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col sm:flex-row justify-center items-center gap-12 md:gap-20"
        >
          {IMPACT_STATS_ROW_2.map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-slate-300 font-medium">
                {stat.label}
              </div>
              {stat.sub && (
                <div className="text-xs md:text-sm text-slate-400 mt-1">
                  {stat.sub}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStats;