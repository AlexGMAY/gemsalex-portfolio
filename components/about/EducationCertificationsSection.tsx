import { motion } from "framer-motion";
import { educationBoard, certificationBoard, courseBoard } from "@/data";

const EducationCertificationsSection = () => {
  

  return (
    <section id="education-certifications" className="py-24 ">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="heading mb-12"
        >
          Education & Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-black-200 rounded-lg shadow-md p-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <ul className="space-y-4">
              {educationBoard.map((education, index) => (
                <li key={index}>
                  <h4 className="text-lg font-medium">{education.degree}</h4>
                  <p className="text-gray-600">
                    {education.institution} | {education.year}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-black-200 rounded-lg shadow-md p-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
            <ul className="space-y-4">
              {certificationBoard.map((certification, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <img
                    src={certification.icon}
                    alt={certification.name}
                    className="w-12 h-12"
                  />
                  <div>
                    <h4 className="text-lg font-medium">
                      {certification.name}
                    </h4>
                    <p className="text-gray-600">
                      Issued by {certification.issuer}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-black-200 rounded-lg shadow-md p-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Courses</h3>
            <ul className="space-y-4">
              {courseBoard.map((course, index) => (
                <li key={index}>
                  <h4 className="text-lg font-medium">{course.name}</h4>
                  <p className="text-gray-600">
                    {course.platform} | {course.year}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertificationsSection;
