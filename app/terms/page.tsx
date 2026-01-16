'use client';

import { Shield, FileText, AlertCircle, CheckCircle } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
            <FileText className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Terms of Service
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Last updated: October 2, 2025
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                Important Notice
              </h3>
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                By accessing and using CryptoBlog, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                1
              </span>
              Acceptance of Terms
            </h2>
            <div className="pl-11 space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Welcome to CryptoBlog. By accessing or using our website, blog, and AI chat services (collectively, the "Services"), you agree to comply with and be bound by these Terms of Service.
              </p>
              <p>
                We reserve the right to update these terms at any time. Your continued use of the Services after any changes constitutes acceptance of the new terms.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                2
              </span>
              Use of Services
            </h2>
            <div className="pl-11 space-y-4 text-gray-600 dark:text-gray-300">
              <p>You agree to use our Services only for lawful purposes. You must not use our Services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>In any way that violates any applicable federal, state, local, or international law</li>
                <li>To transmit or procure the sending of any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate CryptoBlog, our employees, or other users</li>
                <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                3
              </span>
              Intellectual Property Rights
            </h2>
            <div className="pl-11 space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                The Services and their entire contents, features, and functionality are owned by CryptoBlog and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit for any commercial purpose any portion of the Services without our express written permission.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                4
              </span>
              Investment Disclaimer
            </h2>
            <div className="pl-11 space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-red-800 dark:text-red-200 font-medium">
                  The content provided on CryptoBlog is for informational purposes only and should not be considered financial advice. Cryptocurrency investments are highly volatile and risky. Always do your own research and consult with a qualified financial advisor before making investment decisions.
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                We do not guarantee the accuracy, completeness, or reliability of any information provided. Past performance is not indicative of future results.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                5
              </span>
              AI Chat Service
            </h2>
            <div className="pl-11 space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Our AI chat service is provided to assist with cryptocurrency-related questions. The AI provides general information and should not be relied upon as professional financial, legal, or investment advice.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI responses are generated automatically and may contain errors</li>
                <li>Do not share personal financial information with the AI</li>
                <li>AI conversations may be logged for quality improvement purposes</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                6
              </span>
              User Content
            </h2>
            <div className="pl-11 space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                If you submit comments, feedback, or other content to our Services, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and publish such content.
              </p>
              <p>
                You represent that you own or have the necessary rights to the content you submit and that it does not violate any third-party rights.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                7
              </span>
              Privacy and Data Protection
            </h2>
            <div className="pl-11 space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Your use of our Services is also governed by our Privacy Policy. We collect and use personal information as described in our Privacy Policy.
              </p>
              <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400">
                <Shield className="w-5 h-5" />
                <span className="font-medium">Your privacy is important to us</span>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                8
              </span>
              Limitation of Liability
            </h2>
            <div className="pl-11 space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                To the fullest extent permitted by law, CryptoBlog shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Services.
              </p>
              <p>
                We do not warrant that the Services will be uninterrupted, secure, or error-free.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                9
              </span>
              Termination
            </h2>
            <div className="pl-11 space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                We reserve the right to terminate or suspend your access to our Services immediately, without prior notice, for any reason, including breach of these Terms.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
              <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                10
              </span>
              Contact Information
            </h2>
            <div className="pl-11 space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 space-y-2">
                <p className="font-medium text-gray-900 dark:text-white">CryptoBlog</p>
                <p>Email: legal@cryptoblog.com</p>
                <p>Address: 123 Crypto Street, San Francisco, CA 94102</p>
              </div>
            </div>
          </section>
        </div>

        {/* Acknowledgment */}
        <div className="mt-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                Agreement Acknowledgment
              </h3>
              <p className="text-green-800 dark:text-green-200 text-sm">
                By using CryptoBlog, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}