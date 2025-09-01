
import { motion } from "framer-motion";
import { Link } from "wouter";
import HeaderNav from "@/components/header-nav";

export default function PrivacyPolicy() {
  return (
    <div className="font-sans gradient-bg min-h-screen">
      <HeaderNav />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-800 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600 font-light">
              Last updated: January 15, 2025
            </p>
          </header>

          <div className="space-y-8 text-slate-700">
            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Our Commitment to Your Privacy</h2>
              <p className="leading-relaxed">
                At Zonely Space, we are committed to protecting your privacy and ensuring that your personal 
                information remains secure. This Privacy Policy explains how we collect, use, and protect 
                information when you use our website and breathing exercise tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Information We Collect</h2>
              
              <h3 className="text-lg font-medium text-slate-700 mb-3">Information You Don't Need to Provide</h3>
              <p className="leading-relaxed mb-4">
                Zonely Space is designed to be completely anonymous. You do not need to create an account, 
                provide an email address, or share any personal information to use our breathing exercises 
                and wellness tools.
              </p>

              <h3 className="text-lg font-medium text-slate-700 mb-3 mt-6">Technical Information</h3>
              <p className="leading-relaxed mb-4">
                Like most websites, we automatically collect certain technical information when you visit Zonely Space:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Your IP address (anonymized for privacy)</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on the site</li>
                <li>Referring website (if applicable)</li>
                <li>Device type (mobile, desktop, tablet)</li>
              </ul>
              <p className="leading-relaxed">
                This information is collected through standard web server logs and is used solely for improving our 
                service, understanding how people use the site, and ensuring technical functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">How We Use Information</h2>
              <p className="leading-relaxed mb-4">
                The limited technical information we collect is used only for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Improving website performance and user experience</li>
                <li>Understanding which features are most helpful to users</li>
                <li>Identifying and fixing technical issues</li>
                <li>Ensuring website security and preventing abuse</li>
                <li>Generating anonymous usage statistics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Information We Do NOT Collect</h2>
              <p className="leading-relaxed mb-4">
                We want to be completely transparent about what we don't collect:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Names, email addresses, or other personal identifiers</li>
                <li>Information about your breathing sessions or wellness practices</li>
                <li>Health information or medical data</li>
                <li>Location data beyond general geographic region</li>
                <li>Social media profiles or login credentials</li>
                <li>Payment information (our service is completely free)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Cookies and Tracking</h2>
              <p className="leading-relaxed mb-4">
                Zonely Space uses minimal cookies and tracking technologies:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics Cookies:</strong> Anonymous usage statistics to improve our service</li>
                <li><strong>No Advertising Cookies:</strong> We do not use cookies for advertising or marketing</li>
              </ul>
              <p className="leading-relaxed">
                You can disable cookies in your browser settings, though this may affect some website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Data Sharing and Third Parties</h2>
              <p className="leading-relaxed mb-4">
                We do not sell, rent, or share your information with third parties, except in these limited circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Technical providers who help us operate the website (under strict confidentiality agreements)</li>
                <li><strong>Legal Requirements:</strong> If required by law or to protect the rights and safety of our users</li>
                <li><strong>Anonymous Analytics:</strong> Aggregated, anonymized usage statistics that cannot identify individual users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Data Security</h2>
              <p className="leading-relaxed">
                We implement industry-standard security measures to protect any information we collect. Our website 
                uses HTTPS encryption, secure hosting infrastructure, and regular security updates. However, no method 
                of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Your Rights and Choices</h2>
              <p className="leading-relaxed mb-4">
                Since we collect minimal information and do not require accounts, there is very little personal data 
                to manage. However, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use our website anonymously without providing any personal information</li>
                <li>Disable cookies in your browser settings</li>
                <li>Contact us with any privacy concerns or questions</li>
                <li>Request information about any data we may have collected from your visits</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Children's Privacy</h2>
              <p className="leading-relaxed">
                Zonely Space is designed to be safe for all ages, including children. We do not knowingly collect 
                personal information from children under 13. Since our service does not require personal information 
                from anyone, children can safely use our breathing exercises under parental guidance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">International Users</h2>
              <p className="leading-relaxed">
                Zonely Space is available globally. If you are accessing our website from outside the United States, 
                please be aware that any information collected may be transferred to and processed in the United States, 
                where our servers are located. By using our service, you consent to this transfer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal 
                requirements. Any changes will be posted on this page with an updated revision date. We encourage 
                you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-slate-50/80 backdrop-blur-sm rounded-lg p-6 border border-slate-200/30 mt-4">
                <p className="text-slate-700">
                  <strong>Email:</strong> <a href="mailto:privacy@zonely.space" className="text-sky-600 hover:text-sky-700">privacy@zonely.space</a>
                </p>
                <p className="text-slate-700 mt-2">
                  <strong>Website:</strong> <Link href="/contact" className="text-sky-600 hover:text-sky-700">Contact Form</Link>
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </main>

      <footer className="mt-16 py-8 px-4 text-center border-t border-slate-200/50">
        <p className="text-slate-400 text-xs">
          © 2025 Zonely Space. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
