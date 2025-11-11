'use client';

import { motion } from "framer-motion";
import { educationBoard, certificationBoard, courseBoard } from "@/data";
import { FaGraduationCap, FaCertificate, FaBook } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const EducationCertificationsSection = () => {
  return (
    <section id="education-certifications" className="py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-emerald-500">
            Education & Certifications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic background and professional qualifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black-200 rounded-xl shadow-2xl overflow-hidden border border-gray-700 hover:border-lime-400 transition-all duration-300"
          >
            <div className="p-6 flex items-center space-x-4 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
              <div className="p-3 rounded-lg bg-lime-400/10 text-lime-400">
                <FaGraduationCap className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <ul className="divide-y divide-gray-700">
              {educationBoard.map((education, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="p-6 hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-3 w-3 rounded-full bg-lime-400"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {education.degree}
                      </h4>
                      <p className="text-gray-400 mt-1">
                        {education.institution}
                      </p>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <span className="text-sm text-lime-400 bg-lime-400/10 px-2 py-1 rounded">
                          {education.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-black-200 rounded-xl shadow-2xl overflow-hidden border border-gray-700 hover:border-emerald-400 transition-all duration-300"
          >
            <div className="p-6 flex items-center space-x-4 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
              <div className="p-3 rounded-lg bg-emerald-400/10 text-emerald-400">
                <FaCertificate className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <ul className="divide-y divide-gray-700">
              {certificationBoard.map((certification, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="p-6 hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-lg bg-gray-700 flex items-center justify-center overflow-hidden">
                        {certification.icon ? (
                          <img
                            src={certification.icon}
                            alt={certification.name}
                            className="h-8 w-8 object-contain"
                          />
                        ) : (
                          <FaCertificate className="text-emerald-400 text-xl" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">
                        {certification.name}
                      </h4>
                      <p className="text-gray-400 mt-1">
                        Issued by {certification.issuer}
                      </p>
                      <div className="flex items-center mt-3">
                        <span className="text-sm text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                          {certification.year}
                        </span>
                        {certification.link && (
                          <a
                            href={certification.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-gray-400 hover:text-emerald-400 transition-colors"
                          >
                            <FiExternalLink />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Courses Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-black-200 rounded-xl shadow-2xl overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300"
          >
            <div className="p-6 flex items-center space-x-4 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
              <div className="p-3 rounded-lg bg-cyan-400/10 text-cyan-400">
                <FaBook className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold">Courses</h3>
            </div>
            <ul className="divide-y divide-gray-700">
              {courseBoard.map((course, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="p-6 hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-3 w-3 rounded-full bg-cyan-400"></div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {course.name}
                      </h4>
                      <p className="text-gray-400 mt-1">{course.platform}</p>
                      <div className="flex items-center mt-2">
                        <span className="text-sm text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                          {course.year}
                        </span>
                        {course.link && (
                          <a
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-gray-400 hover:text-cyan-400 transition-colors"
                          >
                            <FiExternalLink />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertificationsSection;
