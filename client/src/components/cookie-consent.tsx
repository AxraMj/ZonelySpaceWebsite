import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg p-4"
        >
          <div className="max-w-6xl mx-auto flex items-start space-x-4">
            <Cookie className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-medium text-slate-800 mb-2">We use cookies to improve your experience</h3>
              <p className="text-sm text-slate-600 mb-4">
                This website uses essential cookies for functionality and analytics cookies to help us understand how you use the site. 
                We also use Google AdSense, which may use cookies for advertising purposes. By continuing to use our site, you consent to our use of cookies.{' '}
                <a href="/Privacy-Policy" className="text-sky-600 hover:text-sky-700 underline">
                  Learn more in our Privacy Policy
                </a>
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <button
                  onClick={handleAccept}
                  className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Accept All Cookies
                </button>
                <button
                  onClick={handleDecline}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Essential Only
                </button>
                <button
                  onClick={() => setShowBanner(false)}
                  className="self-start sm:self-auto text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label="Close cookie banner"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}