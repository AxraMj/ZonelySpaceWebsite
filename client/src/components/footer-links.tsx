import { motion } from "framer-motion";

export default function FooterLinks() {
  const mindfulnessApps = [
    { name: 'Calm', url: 'https://www.calm.com' },
    { name: 'Headspace', url: 'https://www.headspace.com' },
    { name: 'Insight Timer', url: 'https://insighttimer.com' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="py-8 px-4 text-center border-t border-slate-200/50"
    >
      <div className="mb-6">
        <p className="text-slate-500 text-sm mb-4">Discover more mindfulness apps:</p>
        <div className="flex justify-center space-x-6">
          {mindfulnessApps.map((app) => (
            <motion.a
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-600 transition-colors duration-200 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {app.name}
            </motion.a>
          ))}
        </div>
      </div>
      <p className="text-slate-400 text-xs">
        © 2025 Zonely. All rights reserved.
      </p>
    </motion.footer>
  );
}
