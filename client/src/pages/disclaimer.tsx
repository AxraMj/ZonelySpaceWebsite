import { motion } from "framer-motion";
import HeaderNav from "@/components/header-nav";

function Disclaimer() {
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
            <h1 className="text-4xl md:text-5xl font-light text-slate-800 mb-4" data-testid="page-title">
              Health & Legal Disclaimer
            </h1>
            <p className="text-lg text-slate-600 font-light">
              Important information about using Zonely Space breathing exercises
            </p>
          </header>

          <div className="prose prose-lg mx-auto text-slate-700 space-y-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-medium text-red-800 mb-3 mt-0">Medical Disclaimer</h2>
              <p className="text-red-700 mb-0">
                <strong>The breathing exercises and information provided on Zonely Space are for general wellness and educational purposes only. They are not intended to diagnose, treat, cure, or prevent any disease or medical condition. Always consult with a qualified healthcare professional before beginning any new breathing practice or wellness routine.</strong>
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Not Medical Advice</h2>
              <p className="leading-relaxed">
                Zonely Space is not a medical service, and the content provided does not constitute medical advice, diagnosis, or treatment. The breathing exercises, techniques, and educational information are designed for general wellness support and stress reduction for healthy individuals.
              </p>
              <p className="leading-relaxed">
                We are not licensed healthcare providers, and nothing on this website should be considered a substitute for professional medical advice, diagnosis, or treatment. If you have any medical concerns or conditions, please consult with your physician or other qualified healthcare provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">When to Consult a Healthcare Provider</h2>
              <p className="leading-relaxed mb-4">
                Please consult with a qualified healthcare professional before using our breathing exercises if you have any of the following conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Heart conditions, including irregular heartbeat, heart disease, or high blood pressure</li>
                <li>Respiratory conditions such as asthma, COPD, or other breathing disorders</li>
                <li>Panic disorder, anxiety disorders, or other mental health conditions</li>
                <li>Pregnancy or nursing</li>
                <li>Recent surgery or injury, particularly to the chest or abdomen</li>
                <li>Epilepsy or seizure disorders</li>
                <li>Any condition that affects your ability to breathe normally</li>
                <li>Current use of medications that affect breathing or heart rate</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Potential Risks and Side Effects</h2>
              <p className="leading-relaxed mb-4">
                While breathing exercises are generally safe for healthy individuals, some people may experience:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Dizziness or lightheadedness (especially with rapid breathing techniques)</li>
                <li>Tingling sensations in hands, feet, or face</li>
                <li>Temporary anxiety or emotional release</li>
                <li>Changes in heart rate or blood pressure</li>
                <li>Muscle tension or cramping</li>
              </ul>
              <p className="leading-relaxed">
                If you experience any of these effects or any other concerning symptoms during or after breathing exercises, stop immediately and seek medical attention if symptoms persist or worsen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Safe Practice Guidelines</h2>
              <p className="leading-relaxed mb-4">
                To practice breathing exercises safely:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Start slowly and gradually increase duration and intensity</li>
                <li>Practice in a safe, comfortable environment where you can sit or lie down if needed</li>
                <li>Never practice breath-holding or rapid breathing techniques while driving or operating machinery</li>
                <li>Stop immediately if you feel unwell, dizzy, or experience any concerning symptoms</li>
                <li>Listen to your body and don't push beyond your comfort level</li>
                <li>Stay hydrated and avoid practicing on an empty stomach</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Individual Results May Vary</h2>
              <p className="leading-relaxed">
                The effectiveness of breathing exercises varies among individuals. While many people experience benefits such as reduced stress, improved relaxation, and better focus, we cannot guarantee specific results. Factors such as consistency of practice, individual health status, and life circumstances all influence outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Age Restrictions</h2>
              <p className="leading-relaxed">
                Our breathing exercises are designed for adults and adolescents. Children under 13 should only practice breathing exercises under adult supervision and with approval from their healthcare provider. Parents should consult with their child's pediatrician before introducing any structured breathing practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Emergency Situations</h2>
              <p className="leading-relaxed">
                If you experience severe symptoms such as chest pain, severe difficulty breathing, loss of consciousness, or other medical emergencies, seek immediate medical attention by calling emergency services (911 in the US). Do not rely on breathing exercises to treat medical emergencies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Educational Information Disclaimer</h2>
              <p className="leading-relaxed">
                The educational content on Zonely Space, including blog articles and informational materials, is provided for general knowledge and awareness purposes. While we strive for accuracy, this information should not be considered exhaustive or a replacement for professional education or training in mindfulness, meditation, or healthcare.
              </p>
              <p className="leading-relaxed">
                Scientific research and understanding of breathing techniques and mindfulness practices continue to evolve. We update our content periodically, but information may become outdated or may not reflect the most current research.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">No Professional Relationship</h2>
              <p className="leading-relaxed">
                Use of Zonely Space does not create a professional relationship between you and Zonely Space or any healthcare provider. We do not provide personalized medical advice, therapy, or counseling services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, Zonely Space and its operators shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the breathing exercises or information provided on this website.
              </p>
              <p className="leading-relaxed">
                You acknowledge that you use the breathing exercises and information at your own risk and that you are solely responsible for determining whether these practices are appropriate for your individual circumstances and health status.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Assumption of Risk</h2>
              <p className="leading-relaxed">
                By using Zonely Space and practicing the breathing exercises provided, you acknowledge that you understand the potential risks and that you voluntarily assume all risks associated with such practice. You agree to use the breathing exercises in a responsible manner and to discontinue use if you experience any adverse effects.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Updates to This Disclaimer</h2>
              <p className="leading-relaxed">
                We may update this disclaimer from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with a revised date. Your continued use of Zonely Space after any changes indicates your acceptance of the updated disclaimer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-slate-800 mb-4">Contact Information</h2>
              <p className="leading-relaxed">
                If you have questions about this disclaimer or need clarification about the appropriate use of our breathing exercises, please contact us at:
              </p>
              <div className="bg-slate-50 rounded-lg p-4 mt-4">
                <p className="text-slate-700 mb-2"><strong>Email:</strong> support@zonely.space</p>
                <p className="text-slate-700"><strong>Subject Line:</strong> Health Disclaimer Inquiry</p>
              </div>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <h3 className="font-medium text-blue-800 mb-3">Your Health and Safety Come First</h3>
              <p className="text-blue-700 text-sm">
                We encourage you to prioritize your health and safety above all else. When in doubt, always consult with qualified healthcare professionals. Our breathing exercises are meant to complement, not replace, professional medical care and healthy lifestyle choices.
              </p>
            </div>
          </div>
        </motion.article>
      </main>

      <footer className="mt-16 py-8 px-4 text-center border-t border-slate-200/50">
        <p className="text-slate-400 text-xs">
          © 2025 Zonely Space. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Disclaimer;