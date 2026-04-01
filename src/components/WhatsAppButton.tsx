"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
      <motion.a
        href="https://wa.me/5491155067680?text=Hola%20quiero%20un%20presupuesto"
        target="_blank"
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center hover:scale-110 transition"
      >
        <FaWhatsapp size={28} />
      </motion.a>
    );
  }