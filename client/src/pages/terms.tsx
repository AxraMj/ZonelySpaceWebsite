import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import HeaderNav from "@/components/header-nav";

export default function Terms() {
  return (
    <div className="font-sans gradient-bg min-h-screen">
      <HeaderNav />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-slate-600 font-light">
              Last updated: January 2025
            </p>
          </header>

          <div className="prose prose-lg mx-auto text-slate-700 space-y-8">
            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">1. Agreement to Terms</h2>
              <p className="leading-relaxed">
                By accessing and using Zonely Space (the "Service"), you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, you are 
                prohibited from using the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">2. Use License</h2>
              <p className="leading-relaxed">
                Permission is granted to temporarily access the materials (information or software) on Zonely Space 
                for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer 
                of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained on the Service</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">3. Disclaimer</h2>
              <p className="leading-relaxed">
                The materials on Zonely Space are provided on an 'as is' basis. We make no warranties, expressed 
                or implied, and hereby disclaim and negate all other warranties including, without limitation, 
                implied warranties or conditions of merchantability, fitness for a particular purpose, or 
                non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="leading-relaxed">
                The Service is not intended to be a substitute for professional medical advice, diagnosis, or 
                treatment. Always seek the advice of your physician or other qualified health provider with any 
                questions you may have regarding a medical condition.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">4. Limitations</h2>
              <p className="leading-relaxed">
                In no event shall Zonely Space or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising out of 
                the use or inability to use the materials on the Service, even if we or an authorized representative 
                has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">5. Accuracy of Materials</h2>
              <p className="leading-relaxed">
                The materials appearing on Zonely Space could include technical, typographical, or photographic 
                errors. We do not warrant that any of the materials on the Service are accurate, complete, or 
                current. We may make changes to the materials contained on the Service at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">6. Links</h2>
              <p className="leading-relaxed">
                We have not reviewed all of the sites linked to our Service and are not responsible for the contents 
                of any such linked site. The inclusion of any link does not imply endorsement by us of the site. 
                Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">7. Modifications</h2>
              <p className="leading-relaxed">
                We may revise these terms of service for the Service at any time without notice. By using this 
                Service you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">8. Governing Law</h2>
              <p className="leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the United 
                States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">9. Contact Information</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-slate-50 rounded-lg p-4 mt-4">
                <p className="text-slate-700 mb-2"><strong>Email:</strong> support@zonely.space</p>
                <p className="text-slate-700"><strong>Subject Line:</strong> Terms of Service Inquiry</p>
              </div>
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