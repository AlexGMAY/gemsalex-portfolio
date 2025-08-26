import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function BlogPostFooter() {
  return (
    <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
            {/* Replace with your image */}
            <img
              src="/your-profile-image.jpg"
              alt="Merveille Alexander"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Merveille Alexander</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Web development & English Instructor and Full-stack js/php developer specializing in PHP, Node/Express, Next.js and React. I create performant web applications with great user experiences.
          </p>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/yourusername"
              aria-label="GitHub"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub size={20} />
            </Link>
            <Link
              href="https://twitter.com/yourusername"
              aria-label="Twitter"
              className="text-gray-500 hover:text-blue-500"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-blue-700"
            >
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h4 className="text-lg font-medium mb-3">Enjoyed this article?</h4>
        <p className="mb-4">
          Subscribe to my newsletter to get notified about new posts and
          exclusive content.
        </p>
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
}
