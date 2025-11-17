import React from "react";
import { Metadata } from "next";
import { Shield, Eye, Database, Lock, User, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Merveille Alexander - Data Protection",
  description:
    "Understand how we protect your data. Our privacy policy reflects our commitment to transparency and security in all interactions.",
};

const PrivacyPolicy = () => {
  const privacyPrinciples = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Transparency First",
      description:
        "We believe in complete clarity about what data we collect and why.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Minimal Data Collection",
      description: "We only collect what's necessary to provide our services.",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Security by Design",
      description:
        "Your data is protected with enterprise-grade security measures.",
    },
    {
      icon: <User className="h-8 w-8" />,
      title: "Your Control",
      description:
        "You have full control over your personal information at all times.",
    },
  ];

  return (
    <main className="relative bg-black-100 min-h-screen py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-lime-500/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Hero Section */}
        <div className="text-center mt-20 mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/20 to-lime-500/20 rounded-2xl border border-blue-500/30 mb-6">
            <Shield className="h-10 w-10 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-lime-400">
              Policy
            </span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Your privacy isn&apos;t just protected—it&apos;s respected. We
            believe data protection should be transparent, straightforward, and
            built on mutual trust.
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              The Philosophy Behind Our Privacy Approach
            </h2>
            <p className="text-neutral-400 text-lg text-center leading-relaxed">
              {
                "There is no privacy problem—only the understanding that your data belongs to you. We're simply temporary custodians who respect your digital sovereignty."
              }
            </p>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {privacyPrinciples.map((principle, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4">{principle.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {principle.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Policy Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Information We Collect */}
          <section className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Database className="h-6 w-6 text-blue-400" />
              Information We Collect
            </h2>
            <div className="space-y-4 text-neutral-400">
              <p>We collect minimal information to provide our services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Contact Information:</strong> Name, email when you
                  reach out
                </li>
                <li>
                  <strong>Usage Data:</strong> How you interact with our website
                </li>
                <li>
                  <strong>Communication:</strong> Messages and inquiries you
                  send
                </li>
                <li>
                  <strong>Technical Data:</strong> Browser type, device
                  information for optimization
                </li>
              </ul>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Eye className="h-6 w-6 text-lime-400" />
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-neutral-400">
              <p>Your information helps us:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send important updates about our services</li>
                <li>Ensure the security and integrity of our platform</li>
                <li>Analyze website performance and user experience</li>
              </ul>
            </div>
          </section>

          {/* Data Protection */}
          <section className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Lock className="h-6 w-6 text-cyan-400" />
              Data Protection & Security
            </h2>
            <div className="space-y-4 text-neutral-400">
              <p>We implement robust security measures:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information</li>
                <li>Secure infrastructure and hosting</li>
                <li>Continuous monitoring for potential threats</li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <User className="h-6 w-6 text-purple-400" />
              Your Rights & Control
            </h2>
            <div className="space-y-4 text-neutral-400">
              <p>You have complete control over your data:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Access:</strong> Request a copy of your personal data
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct your
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  data
                </li>
                <li>
                  <strong>Objection:</strong> Object to certain data processing
                </li>
                <li>
                  <strong>Portability:</strong> Request your data in a portable
                  format
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, contact us at{" "}
                <span className="text-blue-400">consultus@gemsalex.com</span>
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-br from-blue-500/10 to-lime-500/10 border border-blue-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-neutral-400 mb-6">
              We&apos;re here to help you understand how your data is protected.
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-400">
              <Mail className="h-5 w-5" />
              <span>consultus@gemsalex.com</span>
            </div>
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-12 text-neutral-500">
          <p>
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
