export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-blue-900 text-white relative overflow-hidden"
    >
      {/* fondo decorativo */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_white,_transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Querés empezar tu proyecto?
        </h2>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
          Construimos, remodelamos y transformamos espacios con calidad,
          compromiso y atención personalizada. Pedí tu presupuesto hoy mismo.
        </p>

        {/* Cards de contacto */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          
          {/* WhatsApp */}
          <a
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            className="group bg-green-500 hover:bg-green-600 transition rounded-xl p-6 flex flex-col items-center shadow-lg"
          >
            <span className="text-lg font-semibold mb-2">
              WhatsApp directo
            </span>
            <span className="text-sm opacity-90">
              Respuesta rápida en minutos
            </span>
          </a>

          {/* Formulario / acción */}
          <button className="bg-white text-blue-950 hover:bg-gray-100 transition rounded-xl p-6 flex flex-col items-center shadow-lg">
            <span className="text-lg font-semibold mb-2">
              Solicitar presupuesto
            </span>
            <span className="text-sm opacity-70">
              Te contactamos en menos de 24 hs
            </span>
          </button>
        </div>

        {/* info extra */}
        <div className="mt-12 text-sm text-gray-400">
          Atención personalizada · Obras en toda la zona · Presupuestos sin cargo
        </div>
      </div>
    </section>
  );
}