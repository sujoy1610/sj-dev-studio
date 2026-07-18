import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[10000] bg-bg flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl md:text-6xl font-bold tracking-tight"
          >
            SJ <span className="text-gradient">DEV</span>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 220 }}
            transition={{ duration: 1.3, delay: 0.3, ease: 'easeInOut' }}
            className="h-[2px] mt-6 bg-gradient-to-r from-accent via-gold to-highlight rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-xs tracking-[0.3em] text-muted uppercase"
          >
            Crafting the experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
