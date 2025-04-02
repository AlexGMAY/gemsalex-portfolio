import { motion, useAnimation } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FiAward, FiCode, FiHeart, FiClock } from "react-icons/fi";
import { FaRegStar, FaCode, FaHeadset, FaProjectDiagram } from "react-icons/fa";

interface StatItemProps {
  number: number;
  suffix?: string;
  label: string;
  duration?: number;
  decimals?: number;
  icon?: React.ReactNode;
  color?: string;
}

const StatItem = ({
  number,
  suffix = "",
  label,
  duration = 2.5,
  decimals = 0,
  icon,
  color = "text-blue-400",
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
      className="px-4 py-8 text-center group"
    >
      <div className="relative inline-block mb-6">
        <div
          className={`absolute inset-0 rounded-full ${color.replace(
            "text",
            "bg"
          )} opacity-10 group-hover:opacity-20 transition-all duration-300`}
        ></div>
        <div
          className={`relative p-4 rounded-full ${color.replace(
            "text",
            "bg"
          )} bg-opacity-10 border ${color.replace(
            "text",
            "border"
          )} border-opacity-30 group-hover:border-opacity-60 transition-all duration-300`}
        >
          {icon || <FiAward className={`text-2xl ${color}`} />}
        </div>
      </div>

      <div className={`text-5xl font-bold ${color} mb-2`}>
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
        className="text-lg text-gray-300 font-medium"
      >
        {label}
      </motion.p>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: inView ? "60%" : 0 }}
        transition={{ delay: duration * 0.5, duration: 1 }}
        className={`mx-auto mt-4 h-0.5 ${color.replace(
          "text",
          "bg"
        )} bg-opacity-30`}
      />
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-24 relative rounded-xl bg-gradient-to-br from-black-200 via-blue-800 to-black-100">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-5"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="grid grid-cols-5 gap-4 w-full h-full">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-blue-400 rounded-lg"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-blue-400"
          style={{
            width: Math.random() * 6 + 2 + "px",
            height: Math.random() * 6 + 2 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, (Math.random() - 0.5) * 100],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 hidden"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            By The Numbers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Quantifying my impact and dedication to excellence
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <StatItem
            number={53}
            suffix="+"
            label="Projects Delivered"
            duration={2}
            icon={<FaProjectDiagram className="text-2xl text-lime-400" />}
            color="text-lime-400"
          />
          <StatItem
            number={99.7}
            suffix="%"
            label="Client Satisfaction"
            duration={2.5}
            decimals={1}
            icon={<FaRegStar className="text-2xl text-yellow-400" />}
            color="text-yellow-400"
          />
          <StatItem
            number={12.8}
            suffix="k"
            label="Lines of Code"
            duration={3}
            decimals={1}
            icon={<FaCode className="text-2xl text-blue-300" />}
            color="text-blue-300"
          />
          <StatItem
            number={24}
            suffix="/7"
            label="Support Availability"
            duration={1.5}
            icon={<FaHeadset className="text-2xl text-blue-200" />}
            color="text-blue-200"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
