import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="font-sans gradient-bg min-h-screen">
      <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-slate-200/50 z-50">
        <nav className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Zonely Space</span>
          </Link>
          <div className="flex space-x-6">
            <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors">About</Link>
            <Link href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600 font-light">
              Last updated: January 2025
            </p>
          </header>

          <div className="prose prose-lg mx-auto text-slate-700 space-y-8">
            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Our Commitment to Your Privacy</h2>
              <p className="leading-relaxed">
                At Zonely Space, we are committed to protecting your privacy and ensuring that your personal information 
                remains secure. This Privacy Policy explains what information we collect, how we use it, and your rights 
                regarding your personal data when you use our website and breathing exercise service.
              </p>
              <p className="leading-relaxed">
                We believe that mental health and wellness tools should be accessible without compromising your privacy. 
                That's why we've designed Zonely Space to function effectively while collecting minimal personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Information We Collect</h2>
              
              <h3 className="text-lg font-medium text-slate-700 mb-3">Information You Provide</h3>
              <p className="leading-relaxed mb-4">
                Zonely Space is designed to work without requiring any personal information from you. You can use our 
                breathing exercises completely anonymously without creating an account, providing your name, email address, 
                or any other personal details.
              </p>
              <p className="leading-relaxed mb-4">
                The only time we collect personal information is if you voluntarily contact us through our contact page 
                or email address. In these cases, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Your email address (if you contact us)</li>
                <li>Any information you choose to include in your message</li>
                <li>Your name (if you provide it)</li>
              </ul>

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
              <h2 className="text-2xl font-medium text-slate-800 mb-4">How We Use Your Information</h2>
              
              <h3 className="text-lg font-medium text-slate-700 mb-3">Personal Information</h3>
              <p className="leading-relaxed mb-4">
                If you contact us, we use your email address and message content solely to:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Respond to your questions or concerns</li>
                <li>Provide technical support</li>
                <li>Improve our service based on your feedback</li>
              </ul>

              <h3 className="text-lg font-medium text-slate-700 mb-3 mt-6">Technical Information</h3>
              <p className="leading-relaxed mb-4">
                We use technical information to:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Ensure the website functions properly across different devices and browsers</li>
                <li>Identify and fix technical issues</li>
                <li>Understand usage patterns to improve the user experience</li>
                <li>Protect against abuse and ensure service security</li>
                <li>Comply with legal requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Information Sharing and Disclosure</h2>
              <p className="leading-relaxed mb-4">
                We do not sell, trade, rent, or share your personal information with third parties, except in the 
                following limited circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or government regulation</li>
                <li><strong>Service Providers:</strong> We may share technical information with trusted service providers who help us operate the website (such as hosting providers), but they are bound by confidentiality agreements</li>
                <li><strong>Business Transfer:</strong> In the unlikely event that Zonely Space is sold or transferred, user information may be part of that transaction, but privacy protections would remain in effect</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate security measures to protect your information against unauthorized access, 
                alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Secure HTTPS encryption for all data transmission</li>
                <li>Regular security updates and monitoring</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Secure data storage practices</li>
              </ul>
              <p className="leading-relaxed">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we 
                strive to protect your personal information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Cookies and Tracking</h2>
              <p className="leading-relaxed mb-4">
                Zonely Space uses minimal cookies and tracking technologies:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics:</strong> We may use privacy-focused analytics to understand how the site is used, but this data is anonymized and aggregated</li>
              </ul>
              <p className="leading-relaxed">
                We do not use cookies for advertising, tracking across other websites, or building detailed user profiles. 
                You can disable cookies in your browser settings, though this may affect some website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Your Rights</h2>
              <p className="leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li><strong>Access:</strong> Request information about what personal data we have about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate personal information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your personal information in a portable format</li>
                <li><strong>Opt-out:</strong> Opt out of any future communications from us</li>
              </ul>
              <p className="leading-relaxed">
                To exercise any of these rights, please contact us at hello@zonelyspace.com. We will respond to your 
                request within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Children's Privacy</h2>
              <p className="leading-relaxed">
                Zonely Space does not knowingly collect personal information from children under 13 years of age. 
                If we learn that we have collected personal information from a child under 13, we will delete that 
                information immediately. If you believe we have collected information from a child under 13, please 
                contact us immediately at hello@zonelyspace.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">International Users</h2>
              <p className="leading-relaxed">
                Zonely Space is operated from the United States. If you are accessing our service from outside the 
                United States, please be aware that your information may be transferred to, stored, and processed in 
                the United States where our servers are located and our central database is operated. By using our 
                service, you consent to any such transfer of information outside of your country.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Changes to This Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, 
                legal requirements, or other factors. When we make changes, we will update the "Last updated" date 
                at the top of this policy and notify users of significant changes through our website.
              </p>
              <p className="leading-relaxed">
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect 
                your privacy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, 
                please contact us at:
              </p>
              <div className="bg-slate-50 rounded-lg p-4 mt-4">
                <p className="text-slate-700 mb-2"><strong>Email:</strong> hello@zonelyspace.com</p>
                <p className="text-slate-700"><strong>Subject Line:</strong> Privacy Policy Inquiry</p>
              </div>
              <p className="leading-relaxed mt-4">
                We are committed to resolving any privacy concerns you may have and will respond to your inquiry 
                within 48 hours.
              </p>
            </section>
          </div>
        </motion.article>
      </main>

      <footer className="mt-16 py-8 px-4 text-center border-t border-slate-200/50">
        <p className="text-slate-400 text-xs">
          © 2025 Zonely. All rights reserved.
        </p>
      </footer>
    </div>
  );
}