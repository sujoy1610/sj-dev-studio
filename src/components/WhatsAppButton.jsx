import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/+919382420874"
      target="_blank"
      rel="noopener noreferrer"
      data-cursor-hover
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.6, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full bg-success flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.5)]"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-30" />
      <MessageCircle className="w-6 h-6 text-bg relative z-10" strokeWidth={2.4} />
    </motion.a>
  )
}
