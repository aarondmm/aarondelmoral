export const passions = {
  viajes: {
    eyebrow: "Fuera de la pantalla · Viajes",
    title: "Cambiar de lugar para cambiar de perspectiva.",
    intro: "Viajar me recuerda que siempre hay otra forma de mirar las cosas. Cada ruta, conversación y lugar desconocido alimenta mi curiosidad y mi manera de crear.",
    points: ["Curiosidad antes que certezas.", "Aprender de contextos y personas diferentes.", "Diseñar con una mirada más humana y abierta."],
  },
  skate: {
    eyebrow: "Fuera de la pantalla · Skate",
    title: "Equilibrio, paciencia y volver a intentarlo.",
    intro: "El skate me ha enseñado a disfrutar del proceso. Cada caída aporta información; cada avance, por pequeño que sea, cambia la forma de afrontar el siguiente reto.",
    points: ["La constancia supera a la prisa.", "El progreso real rara vez es lineal.", "La comunidad hace que el camino sea mejor."],
  },
  desarrollo: {
    eyebrow: "Fuera de la pantalla · Desarrollo",
    title: "Construir experiencias que se sientan claras.",
    intro: "Me gusta traducir ideas complejas en productos sencillos de entender, rápidos de usar y agradables de recorrer. La tecnología es mi herramienta para acercar personas e ideas.",
    points: ["La utilidad es una forma de respeto.", "Los detalles construyen confianza.", "La mejor interfaz guía sin interrumpir."],
  },
  espiritualidad: {
    eyebrow: "Fuera de la pantalla · Espiritualidad",
    title: "Conocerme mejor para vivir con más intención.",
    intro: "La espiritualidad se ha convertido en un espacio de pausa y escucha. Me ha ayudado a entenderme mejor, a ordenar lo importante y a construir una vida más consciente, serena y alineada conmigo mismo.",
    points: ["Parar también es avanzar.", "Conocer lo que siento me ayuda a decidir mejor.", "Vivir con intención da profundidad a lo cotidiano."],
  },
} as const;

export type PassionSlug = keyof typeof passions;
