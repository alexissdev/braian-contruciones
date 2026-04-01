"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 shadow-sm"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <a href="#home" className="flex items-center">
          <Image
            src="/images/logo-2.png"
            alt="Braian Construcciones"
            width={50}
            height={50}
            className="object-contain"
          />
        </a>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-blue-700 transition">
            Inicio
          </a>
          <a href="#services" className="hover:text-blue-700 transition">
            Servicios
          </a>
          <a href="#projects" className="hover:text-blue-700 transition">
            Proyectos
          </a>
        </div>

        <a
          href="https://wa.me/5491155067680?text=Hola%20quiero%20un%20presupuesto"
          target="_blank"
          className="hidden md:block bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Contactar
        </a>

        <button
          className="md:hidden text-blue-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-md px-6 py-6 flex flex-col gap-4 text-center text-black"
          >
            <a href="#home" onClick={() => setOpen(false)}>
              Inicio
            </a>

            <a href="#services" onClick={() => setOpen(false)}>
              Servicios
            </a>
            <a href="#projects" onClick={() => setOpen(false)}>
              Proyectos
            </a>

            <a
              href="https://wa.me/5491155067680?text=Hola%20quiero%20un%20presupuesto"
              target="_blank"
              className="bg-blue-900 text-white px-4 py-2 rounded-lg"
            >
              Contactar
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}