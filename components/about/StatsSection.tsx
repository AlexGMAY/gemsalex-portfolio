import { motion, useAnimation } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface StatItemProps {
  number: number;
  suffix?: string;
  label: string;
  duration?: number;
  decimals?: number;
}

const StatItem = ({
  number,
  suffix = "",
  label,
  duration = 2.5,
  decimals = 0,
}: StatItemProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      className="px-4 py-8 text-center"
    >
      <div className="text-5xl font-bold text-white mb-2">
        {inView ? (
          <CountUp
            end={number}
            duration={duration}
            suffix={suffix}
            decimals={decimals}
            className="inline-block"
          />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ delay: duration * 0.8 }}
        className="text-xl text-blue-300 font-medium border-t border-gray-800"
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-black-200 to-blue-800 rounded-xl relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="grid grid-cols-5 gap-4 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="border border-blue-400 rounded-lg"></div>
          ))}
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <StatItem
            number={53}
            suffix="+"
            label="Projects Delivered"
            duration={2}
          />
          <StatItem
            number={99.7}
            suffix="%"
            label="Client Satisfaction"
            duration={2.5}
            decimals={1}
          />
          <StatItem
            number={12.8}
            suffix="k"
            label="Lines of Code"
            duration={3}
            decimals={1}
          />
          <StatItem
            number={24}
            suffix="/7"
            label="Support Availability"
            duration={1.5}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
