"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Project, projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (!sliderRef.current || !containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const scrollWidth = sliderRef.current.scrollWidth;

    setConstraints({
      right: 0,
      left: -(scrollWidth - containerWidth),
    });
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-blue-50 text-center overflow-hidden"
    >
      <h2 className="text-3xl font-bold mb-12 text-blue-900">
        Proyectos Realizados
      </h2>

      <div ref={containerRef} className="px-6 overflow-hidden">
        <motion.div
          ref={sliderRef}
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.08}
          whileTap={{ cursor: "grabbing" }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              onClick={() => setActive(p)}
              whileTap={{ scale: 0.95 }}
              className="group flex-none w-[calc(33.333%-16px)] min-w-[350px]"
            >
              {/* 📱 TÍTULO MOBILE */}
              <h3 className="md:hidden text-blue-900 font-bold text-lg mb-2 text-left">
                {p.title}
              </h3>

              {/* 🖼️ IMAGEN + EFECTO */}
              <div className="relative">
                {/* ✨ EFECTO SOLO EN IMAGEN */}
                <motion.div
                  className="absolute inset-0 rounded-xl md:hidden pointer-events-none"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(59,130,246,0)",
                      "0 0 20px rgba(59,130,246,0.6)",
                      "0 0 0px rgba(59,130,246,0)"
                    ]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2
                  }}
                />

                <Image
                  src={p.img}
                  alt={p.title}
                  width={800}
                  height={500}
                  className="rounded-xl object-cover w-full h-[340px]"
                />

                {/* 💻 OVERLAY DESKTOP */}
                <div className="hidden md:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition rounded-xl flex-col justify-center items-center text-white p-4">
                  <h3 className="font-bold text-xl">{p.title}</h3>
                  <p className="text-sm mt-2">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
            onClick={() => setActive(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl overflow-hidden max-w-lg w-full text-left"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* 🖼️ IMAGEN */}
              <Image
                src={active.img}
                alt={active.title}
                width={800}
                height={500}
                className="w-full h-60 object-cover"
              />

              {/* 📄 CONTENIDO */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-blue-900">
                  {active.title}
                </h3>

                <p className="mb-6 text-gray-700">
                  {active.desc}
                </p>

                <button
                  className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  onClick={() => setActive(null)}
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}