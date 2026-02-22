import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="border-t border-gray-800 px-4 py-8 text-center">
                <p className="text-sm text-gray-300">
                  <span className="text-blue-400">All online training</span> conducted
                  via{" "}
                  <span className="text-lime-400">
                    Google Meet or Microsoft Teams
                  </span>{" "}
                  •{" "}
                  <span className="text-blue-400">
                    Executive scheduling flexibility
                  </span>{" "}
                  •{" "}
                  <span className="text-lime-400">
                    Customized learning architecture
                  </span>{" "}
                  •{" "}
                  <Link
                    href="https://courses.gemsalex.com"
                    className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    aria-label="Access elite training curriculum and enrollment"
                  >
                    Access curriculum at courses.gemsalex.com
                  </Link>
                </p>
        </div>
    </div>
  );
}

export default Footer