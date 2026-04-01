"use client";
import { services } from "@/data/services";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-900">
          Nuestros Servicios
        </h2>
        <p className="text-gray-600 mt-4">
          Soluciones profesionales para cada etapa de tu proyecto
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
        {services.map((s, i) => {
          const Icon = s.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition hover:-translate-y-2 group"
            >
              <div className="text-blue-700 mb-4 group-hover:scale-110 transition">
                <Icon size={40} />
              </div>

              <h3 className="font-bold text-lg mb-2 text-blue-900">
                {s.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {s.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}