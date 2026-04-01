"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "@/data/hero";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[index].url})`,
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-white flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Construcción y Remodelación Profesional
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl text-lg mb-8 text-gray-200"
        >
          En Braian Construcciones transformamos tus ideas en realidad.
          Calidad, compromiso y resultados garantizados.
        </motion.p>

        <motion.a
          href="https://wa.me/5491155067680?text=Hola%20quiero%20un%20presupuesto"
          target="_blank"
          className="inline-block bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-green-500 hover:text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Solicitar presupuesto
        </motion.a>

      </div>
    </section>
  );
}