import React from "react";
import { Metadata } from "next";
import { Scale, BookOpen, Users, Code, Heart, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Merveille Alexander - Clear Agreements",
  description:
    "Our terms of service are designed to be clear, fair, and focused on creating great outcomes for everyone involved.",
};

const TermsOfService = () => {
  const corePrinciples = [
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Fairness First",
      description: "Agreements should benefit all parties equally",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Transparent Terms",
      description: "No hidden clauses or confusing language",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Mutual Respect",
      description: "Built on trust and professional courtesy",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Clear Deliverables",
      description: "Exactly what you'll get, when you'll get it",
    },
  ];

  return (
    <main className="relative bg-black-100 min-h-screen py-26">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Hero Section */}
        <div className="text-center pt-20 mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl border border-purple-500/30 mt-20 mb-6">
            <Scale className="h-10 w-10 text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
              Service
            </span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Clear agreements create great partnerships. Our terms are designed
            to be straightforward, fair, and focused on delivering exceptional
            results.
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              The Philosophy Behind Our Terms
            </h2>
            <p className="text-neutral-400 text-lg text-center leading-relaxed">
              {
                "There are no complicated terms—only clear agreements between professionals. We believe the best contracts are those built on mutual understanding and shared success"
              }
            </p>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {corePrinciples.map((principle, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-purple-400 mb-4">{principle.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {principle.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Services & Deliverables */}
          <section className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Zap className="h-6 w-6 text-yellow-400" />
              Services & Deliverables
            </h2>
            <div className="space-y-4 text-neutral-400">
              <p>What you can expect from our collaboration:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Custom Software Development:</strong> Tailored
                  solutions for your specific needs
                </li>
                <li>
                  <strong>Technical Consulting:</strong> Expert guidance on
                  architecture and implementation
                </li>
                <li>
                  <strong>Clear Project Scope:</strong> Detailed specifications
                  and deliverables
                </li>
                <li>
                  <strong>Regular Updates:</strong> Transparent progress
                  reporting
                </li>
                <li>
                  <strong>Quality Assurance:</strong> Thorough testing and
                  validation
                </li>
              </ul>
            </div>
          </section>

          {/* Client Responsibilities */}
          <section className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Users className="h-6 w-6 text-blue-400" />
              Client Responsibilities
            </h2>
            <div className="space-y-4 text-neutral-400">
              <p>Successful projects require collaboration:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide clear requirements and feedback</li>
                <li>Make key personnel available for consultations</li>
                <li>Review deliverables in a timely manner</li>
                <li>Provide necessary access to systems and resources</li>
                <li>Adhere to agreed-upon payment schedules</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Code className="h-6 w-6 text-green-400" />
              Intellectual Property
            </h2>
            <div className="space-y-4 text-neutral-400">
              <p>Clear ownership from day one:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Client Work:</strong> You own what you pay for
                </li>
                <li>
                  <strong>Pre-existing IP:</strong> Each party retains their
                  existing intellectual property
                </li>
                <li>
                  <strong>Open Source:</strong> Clear attribution for any
                  open-source components
                </li>
                <li>
                  <strong>Third-party Tools:</strong> Proper licensing for all
                  external resources
                </li>
                <li>
                  <strong>Portfolio Rights:</strong> We may showcase completed
                  work in our portfolio
                </li>
              </ul>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Scale className="h-6 w-6 text-purple-400" />
              Payment & Billing
            </h2>
            <div className="space-y-4 text-neutral-400">
              <p>Straightforward financial arrangements:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Project-based Pricing:</strong> Fixed quotes for
                  defined scope
                </li>
                <li>
                  <strong>Hourly Rates:</strong> For ongoing or undefined work
                </li>
                <li>
                  <strong>Payment Schedule:</strong> Typically 50% upfront, 50%
                  on delivery
                </li>
                <li>
                  <strong>Invoicing:</strong> Professional invoices with clear
                  breakdowns
                </li>
                <li>
                  <strong>Late Payments:</strong> Standard industry terms apply
                </li>
              </ul>
            </div>
          </section>

          {/* Confidentiality */}
          <section className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-cyan-400" />
              Confidentiality
            </h2>
            <div className="space-y-4 text-neutral-400">
              <p>Your business secrets are safe with us:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All client information treated as confidential</li>
                <li>NDA available upon request</li>
                <li>Secure handling of sensitive data</li>
                <li>Limited access to proprietary information</li>
                <li>Professional discretion in all communications</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Heart className="h-6 w-6 text-red-400" />
              Our Commitment & Limits
            </h2>
            <div className="space-y-4 text-neutral-400">
              <p>
                We&apos;re committed to your success, with reasonable
                boundaries:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Professional workmanship and due care</li>
                <li>Timely delivery of agreed-upon scope</li>
                <li>Reasonable revisions and bug fixes</li>
                <li>Clear communication throughout the process</li>
                <li>Industry-standard liability limitations apply</li>
              </ul>
            </div>
          </section>

          {/* Agreement Section */}
          <section className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-neutral-400 mb-6">
              Clear terms create the foundation for successful partnerships.
            </p>
            <p className="text-purple-400 font-semibold">
              By working with us, you agree to these terms and our commitment to
              excellence.
            </p>
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center my-12 text-neutral-500">
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

export default TermsOfService;
