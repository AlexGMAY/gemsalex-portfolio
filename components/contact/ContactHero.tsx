"use client";

import {
  FiChevronDown,
  FiMail,
  FiCalendar,
  FiMessageSquare,
} from "react-icons/fi";

const ContactHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-28 overflow-hidden">
      {/* Animated background elements only - optimized for performance */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400 animate-float-slow"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Floating particles - optimized with CSS animations */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full bg-blue-400 animate-float-particle"
          style={{
            width: Math.random() * 6 + 2 + "px",
            height: Math.random() * 6 + 2 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="pt-20 max-w-4xl mx-auto text-center">
          {/* Headline - No animation, static for better LCP */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-lime-400 opacity-100 visible">
            Let&apos;s Build Something{" "}
            <span className="text-lime-400">Remarkable</span>
          </h1>

          {/* Subheading - Static */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Whether you have a project or just want to connect — I respond
            within 24 hours
          </p>

          {/* Channel pills with icons - No hover animations */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {[
              {
                icon: <FiMail className="mr-2" />,
                label: "Email",
                color: "bg-blue-600/10 text-blue-400 hover:bg-blue-600/20",
                href: "#contact-system",
              },
              {
                icon: <FiCalendar className="mr-2" />,
                label: "Schedule Call",
                color: "bg-lime-600/10 text-lime-400 hover:bg-lime-600/20",
                href: "#scheduler",
              },
              {
                icon: <FiMessageSquare className="mr-2" />,
                label: "Live Chat",
                color: "bg-cyan-600/10 text-cyan-400 hover:bg-cyan-600/20",
                href: "https://discord.gg/KXfxMWT4G",
              },
            ].map((channel, i) => (
              <a
                key={i}
                href={channel.href}
                className={`flex items-center px-5 py-3 rounded-full border border-gray-700 ${channel.color} transition-colors min-h-[44px]`}
              >
                {channel.icon}
                {channel.label}
              </a>
            ))}
          </div>

          {/* Scroll indicator - Simplified with CSS animation */}
          <div className="flex flex-col items-center justify-center mt-12">
            <span className="text-gray-500 text-sm mb-2">
              Explore contact options
            </span>
            <FiChevronDown className="text-gray-600 text-2xl animate-bounce" />
          </div>
        </div>
      </div>

      {/* Floating gradient blob - Optimized with CSS */}
      <div className="absolute -bottom-1/3 -left-1/4 w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 filter blur-3xl opacity-20 animate-rotate-slow" />
    </section>
  );
};

export default ContactHero;
