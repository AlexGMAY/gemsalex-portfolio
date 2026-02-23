'use client';

import { motion } from "framer-motion";
import {
  FiMail,
  FiCalendar,
  FiMessageSquare,  
  FiShield,
} from "react-icons/fi";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactMethodMatrix = () => {
  const channels = [
    {
      icon: <FiMail className="text-2xl text-blue-400" />,
      name: "Email",
      type: "Asynchronous",
      response: "≤24 hours",
      bestFor: "Project inquiries, detailed questions",
      action: "consultus@gemsalex.com",
      color: "bg-blue-600/10",
      border: "border-blue-500/30",
      actionColor: "text-blue-400 hover:text-blue-300",
      actionIcon: <FiMail className="ml-1" />,
      actionRedirect: "#contact-system",
    },
    {
      icon: <FiCalendar className="text-2xl text-lime-400" />,
      name: "Scheduled Call",
      type: "Synchronous",
      response: "Instant booking",
      bestFor: "Complex discussions, consultations",
      action: "Book An Appointment",
      color: "bg-lime-600/10",
      border: "border-lime-500/30",
      actionColor: "text-lime-400 hover:text-lime-300",
      actionIcon: <FiCalendar className="ml-1" />,
      actionRedirect: "#scheduler",
    },
    // {
    //   icon: <FaDiscord className="text-2xl text-indigo-400" />,
    //   name: "Discord",
    //   type: "Real-time",
    //   response: "1-4 hours",
    //   bestFor: "Quick questions, Web Development Service",
    //   action: "@gemsalex",
    //   color: "bg-indigo-600/10",
    //   border: "border-indigo-500/30",
    //   actionColor: "text-indigo-400 hover:text-indigo-300",
    //   actionIcon: <FaDiscord className="ml-1" />,
    //   actionRedirect: "https://discord.gg/KXfxMWT4G",
    // },
    // {
    //   icon: <FiMessageSquare className="text-2xl text-green-400" />,
    //   name: "Support Portal",
    //   type: "Ticketed",
    //   response: "≤2 hours",
    //   bestFor: "Existing clients, urgent issues",
    //   action: "Open ticket",
    //   color: "bg-green-600/10",
    //   border: "border-green-500/30",
    //   actionColor: "text-green-400 hover:text-green-300",
    //   actionIcon: <FiMessageSquare className="ml-1" />,
    //   actionRedirect: "#support-system-modal",
    // },
  ];

  const socials = [
    {
      icon: <FaLinkedin className="text-xl text-[#0A66C2]" />,
      name: "LinkedIn",
      handle: "/in/alexandre-merveille-may",
      color: "bg-[#0A66C2]/10",
      border: "border-[#0A66C2]/30",
      link: "https://www.linkedin.com/in/alexandre-merveille-may/",
    },
    {
      icon: <FaGithub className="text-xl text-gray-300" />,
      name: "GitHub",
      handle: "@AlexGMAY",
      color: "bg-gray-700/50",
      border: "border-gray-600/30",
      link: "https://github.com/AlexGMAY/",
    },
    {
      icon: <FaXTwitter className="text-xl text-white" />,
      name: "X",
      handle: "@themarvelbiz",
      color: "bg-black/50",
      border: "border-gray-700/50",
      link: "https://x.com/@themarvelbiz/",
    },
    {
      icon: <FaDiscord className="text-xl text-[#5865F2]" />,
      name: "Discord",
      handle: "@gemsalex",
      color: "bg-[#5865F2]/10",
      border: "border-[#5865F2]/30",
      //  https://discord.com/users/youruserid
      link: "https://discord.gg/KXfxMWT4G",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black-100 to-black-100">
      <div>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Optimal Contact Channels
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the best method based on your needs and expected response
            time
          </p>
        </motion.div>

        {/* Main Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {channels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl border ${channel.border} ${channel.color} backdrop-blur-sm hover:shadow-lg transition-all`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-lg ${channel.color} border ${channel.border}`}
                >
                  {channel.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <h3 className="text-xl font-semibold text-white">
                      {channel.name}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${channel.color} border ${channel.border}`}
                    >
                      {channel.type}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-400 text-sm">Response Time</p>
                      <p className="text-white font-medium">
                        {channel.response}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Best For</p>
                      <p className="text-white font-medium">
                        {channel.bestFor}
                      </p>
                    </div>
                  </div>

                  <motion.a
                    whileHover={{ x: 3 }}
                    href={channel.actionRedirect}                    
                    className={`inline-flex items-center font-medium ${channel.actionColor} transition-colors`}
                  >
                    {channel.action} {channel.actionIcon}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 backdrop-blur-sm"
        >
          <div id="chat" className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Social Profiles
              </h3>
              <p className="text-gray-400">
                For networking and casual conversations
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.link}
                  target="blank"
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg border ${social.border} ${social.color} transition-all`}
                >
                  {social.icon}
                  <div>
                    <p className="text-sm text-gray-300">{social.name}</p>
                    <p className="text-white font-medium text-sm">
                      {social.handle}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Security Assurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gray-800/50 px-6 py-3 rounded-full border border-gray-700">
            <FiShield className="text-green-400" />
            <span className="text-gray-300 text-sm">
              All communications are encrypted and secure
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMethodMatrix;
