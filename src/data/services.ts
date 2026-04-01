import {LucideIcon, Hammer, Wrench, Home, Building } from "lucide-react";

export type Service = {
    title: string;
    desc: string;
    icon: LucideIcon;
}

export const services: Service[] = [
    {
        title: "Construcción de viviendas",
        desc: "Construimos casas desde cero con materiales de alta calidad",
        icon: Home,
      },
      {
        title: "Remodelaciones",
        desc: "Renovamos espacios interiores y exteriores",
        icon: Wrench,
      },
      {
        title: "Ampliaciones",
        desc: "Aumentá el espacio de tu hogar de forma profesional",
        icon: Building,
      },
      {
        title: "Reparaciones generales",
        desc: "Soluciones rápidas y eficientes para tu propiedad",
        icon: Hammer,
      },
    ];