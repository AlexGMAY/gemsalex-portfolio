"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getNavItems } from "@/data";

export const FloatingNav = ({
  className,
  appointmentLink = "/contact",
}: {
  className?: string;
  appointmentLink?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isFrench, toggleLanguage } = useLanguage();

  // Get translated nav items from data
  const navItems = getNavItems(isFrench);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <>
      {/* Desktop Navigation */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "hidden lg:flex gap-6 max-w-fit md:min-w-[70vw] lg:min-w-5xl fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-2 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-between space-x-4",
            className,
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          <div className="flex items-center">
            <Link href="/">
              <Image
                alt="Strategic Software Engineer and Business Problem Solver - Merveille Alexandre"
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
                src="/logo-MA.png"
                quality={80}
                priority={false}
              />
            </Link>
          </div>

          <div className="relative items-center flex gap-6 space-x-1">
            {navItems.map((navItem, idx) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "text-neutral-50 hover:text-blue-200 transition-colors duration-200 relative group",
                  pathname === navItem.link && "text-blue-300 font-medium",
                )}
              >
                <span className="md:uppercase lg:uppercase font-semibold text-sm !cursor-pointer">
                  {navItem.name}
                </span>
                <span
                  className={cn(
                    "absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-300 transform scale-x-0 transition-transform duration-300",
                    pathname === navItem.link
                      ? "scale-x-100"
                      : "group-hover:scale-x-75",
                  )}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Language Toggle with Flags */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-blue-300/50 hover:bg-blue-300/10 transition-all duration-200"
              aria-label={isFrench ? "Switch to English" : "Passer au français"}
              title={isFrench ? "Switch to English" : "Passer au français"}
            >
              <span className="text-lg leading-none">
                {isFrench ? "🇬🇧" : "🇫🇷"}
              </span>
              <span className="text-sm font-semibold text-white">
                {isFrench ? "EN" : "FR"}
              </span>
            </button>

            <Link href={appointmentLink}>
              <button className="relative px-6 py-2.5 text-sm font-medium rounded-full group overflow-hidden bg-gradient-to-r from-blue-200 to-blue-300 text-white">
                <span className="relative z-10">
                  {isFrench ? "Prendre rendez-vous" : "Get an appointment"}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-lime-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <span className="absolute inset-0.5 rounded-full bg-black/10 backdrop-blur-sm" />
              </button>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Tablet/Mobile Navigation */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-[5000] bg-black-100/90 backdrop-blur-md border-b border-gray-800/50">
        <div className="flex items-center justify-between px-4 h-16 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center">
            <Image
              alt="Strategic Software Engineer and Business Problem Solver - Merveille Alexandre"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
              src="/logo-MA.png"
              quality={80}
              priority
            />
          </Link>

          <div className="flex items-center gap-3">
            {/* Mobile Language Toggle with Flags */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 hover:border-blue-300/50 hover:bg-blue-300/10 transition-all duration-200"
              aria-label={isFrench ? "Switch to English" : "Passer au français"}
            >
              <span className="text-base leading-none">
                {isFrench ? "🇬🇧" : "🇫🇷"}
              </span>
              <span className="text-xs font-semibold text-white">
                {isFrench ? "EN" : "FR"}
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg backdrop-blur-md bg-gray-800/80 border border-gray-700 hover:bg-gray-700/80 transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-24 right-4 z-[4999] rounded-lg backdrop-blur-md bg-gray-800/95 border border-gray-700 p-4 shadow-xl min-w-[200px]"
            style={{
              backdropFilter: "blur(16px) saturate(180%)",
              backgroundColor: "rgba(17, 25, 40, 0.95)",
            }}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`mobile-link-${idx}`}
                  href={navItem.link}
                  className={cn(
                    "text-neutral-50 hover:text-blue-200 px-4 py-2 transition-colors duration-200 relative group",
                    pathname === navItem.link && "text-blue-300 font-medium",
                  )}
                >
                  <div className="flex items-center">                    
                    <span className="uppercase font-semibold text-sm">
                      {navItem.name}
                    </span>
                  </div>
                  <span
                    className={cn(
                      "absolute left-4 right-4 bottom-0 h-0.5 bg-blue-300 transform scale-x-0 transition-transform duration-300",
                      pathname === navItem.link
                        ? "scale-x-100"
                        : "group-hover:scale-x-75",
                    )}
                  />
                </Link>
              ))}
              <Link href={appointmentLink}>
                <button className="relative px-6 py-2.5 text-sm font-medium rounded-full group overflow-hidden bg-gradient-to-r from-blue-200 to-blue-300 text-white w-full">
                  <span className="relative z-10">
                    {isFrench ? "Prendre rendez-vous" : "Book An Appointment"}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-lime-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                  <span className="absolute inset-0.5 rounded-full bg-black/10 backdrop-blur-sm" />
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
