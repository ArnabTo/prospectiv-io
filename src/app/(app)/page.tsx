'use client';
import { motion } from "framer-motion"
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold">Hello World!</h1>
    </motion.div>
  );
}
