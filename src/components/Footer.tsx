"use client";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Marca */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Braian Construcciones
          </h2>
          <p className="text-sm text-gray-300">
            Construcción, remodelación y soluciones integrales para tu hogar.
            Calidad y compromiso en cada proyecto.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="font-semibold mb-4">Secciones</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#servicios" className="hover:text-white transition">
                Servicios
              </a>
            </li>
            <li>
              <a href="#proyectos" className="hover:text-white transition">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-white transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-semibold mb-4">Contacto</h3>

          <div className="flex items-center gap-3 mb-3">
            <FaWhatsapp />
            <a
              href="https://wa.me/5491155067680?text=Hola%20quiero%20un%20presupuesto"
              target="_blank"
              className="hover:text-green-400 transition"
            >
              WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaInstagram />
            <a
              href="https://www.instagram.com/braianconstrucciones_"
              target="_blank"
              className="hover:text-pink-400 transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Braian Construcciones. Todos los derechos reservados.
      </div>
    </footer>
  );
}