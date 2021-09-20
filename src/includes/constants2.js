export const Analisis = {
  LexicoGramatical: {
    Gerundios: {
      TiposAnalisis: {
        LexicoGramaticalGerundiosExcesivo: {
          label: "Gerundios Excesivos",
          info: "Recuerda que el gerundio es una forma no personal del verbo, es decir, que no se encuentra conjugada. No se recomienda utilizar gerundios con tanta frecuencia, por lo que  intenta utilizar oraciones con verbos conjugados, por ejemplo: “Un circuito RLC consta de dos elementos de almacenamiento de energía: el inductor y el capacitor. A estos circuitos se les llama circuitos de segundo orden, porque sus respuestas se describen con ecuaciones diferenciales de segundo orden”.",
          feedback_negativo: "¡Tu párrafo tiene muchos gerundios! Evita usarlos con frecuencia para que no dificulte la comprensión de tu texto. Para reformular la oración reemplaza el gerundio por un verbo conjugado y añade un conector.",
          feedback_positivo: "¡Felicitaciones! no observamos un uso excesivo de gerundios en tu texto.",
          error: "“Esta experiencia está diseñada para que los alumnos armen circuitos en serie y en paralelo de resistores, aprendiendo cómo medir sus respectivos voltajes y corrientes en cada uno de los elementos, comprobando así las Leyes de Kirchhoff”.",
          correccion: "“Esta experiencia está diseñada para que los alumnos armen circuitos en serie y en paralelo de resistores, aprendan cómo medir sus respectivos voltajes y corrientes en cada uno de los elementos, y comprueben así las Leyes de Kirchhoff”.",
          comentario: "Una forma de evitar la repetición de los gerundios, es reformular los verbos.",
          style: "#FBBA63",
          nro_errores : 0,
        }
      },
      endpoint: "gerunds"
    }
  },
  Formal: {
    Oraciones: {
      TiposAnalisis: {
        OracionesExtensas: {
          label: "Oraciones Extensas",
          info: "Recuerda que las oraciones se componen por un sujeto y un predicado y finalizan con un punto seguido.",
          feedback_negativo: "¡Tu oración es muy extensa! Se recomienda que una oración tenga una extensión entre 18 a 32 palabras.",
          feedback_positivo: "Se identifica un buen texto, puesto que hay una adecuada extensión de oraciones ¡Sigue así!.",
          error: "“Toda resistencia tiene un valor nominal y otro real, teniendo en cuenta lo anterior con una tabla de colores se calcula el valor nominal de las dos resistencias dadas, luego en ambos multímetros se coloca la modalidad para medir resistencia, de acuerdo con el procedimiento puntual que se debe realizar con el analógico, primero conectar ambas terminales caimán de los cables, para crear un puente entre las dos entradas del multímetro, posteriormente se debe mover el indicador del instrumento con tal de que indique cero, para esto se utiliza la perilla que se encuentra en las esquina inferior del visor, se recomienda recostar el instrumento en la mesa y mirarlo desde arriba hasta que no se distinga el reflejo del indicador, para así tener una medición más exacta”.",
          correccion: "“Toda resistencia tiene un valor nominal y otro real. Teniendo en cuenta lo anterior, con una tabla de colores se calcula el valor nominal de las dos resistencias dadas y luego, en ambos multímetros, se coloca la modalidad para medir resistencia. De acuerdo con el procedimiento puntual que se debe realizar con el analógico, primero se debe conectar ambas terminales caimán de los cables, para crear un puente entre las dos entradas del multímetro. Posteriormente, se debe mover el indicador del instrumento con tal de que indique cero, para esto se utiliza la perilla que se encuentra en las esquina inferior del visor. Se recomienda recostar el instrumento en la mesa y mirarlo desde arriba hasta que no se distinga el reflejo del indicador, para así tener una medición más exacta”.",
          comentario: "La oración al ser tan extensa dificulta la comprensión, por lo que si tu oración es similar a este ejemplo en cuanto a la estructura, te recomendamos que la organices empleando marcadores discursivos, así como puntos y comas.",
          style: "#FBBA63",
          nro_errores: 0,
        },
        OracionesBreves: {
          label: "Oraciones Breves",
          info: "Recuerda que las oraciones se componen por un sujeto y un predicado y finalizan con un punto seguido.",
          feedback_negativo: "¡Tu oración es muy breve! Se recomienda que una oración tenga una extensión entre 18 a 32 palabras.",
          feedback_positivo: "Se identifica un buen texto, puesto que hay una adecuada extensión de oraciones ¡Sigue así!.",
          error: "“Hemos concluido.”",
          comentario: "Si bien, las oraciones breves no se clasifican como error, su presencia si influye en el estilo del escrito, por lo que se sugiere complementar la idea para lograr una extensión apropiada.",
          correccion: "“A modo de conclusión, se identifica que las curvas características de un resistor lineal invariante y un resistor no lineal son muy similares, no obstante, el resistor lineal invariante toma valores negativos y positivos”.",
          style: "#FFF492",
          nro_errores: 0,
        }
      },
      endpoint: "oraciones"
    },
    Parrafos: {
      TiposAnalisis: {
        ParrafosExtensos: {
          label: "Párrafos Extensos",
          info: "Recuerda que el párrafo es una unidad de sentido compuesta por diversas oraciones que se caracterizan por desarrollar una idea central.",
          feedback_negativo: "¡Tu párrafo es muy extenso! Se sugiere que la extensión de un párrafo sea de 3 oraciones como mínimo y 5 máximo.",
          feedback_positivo: "¡Felicitaciones! no observamos errores en tu texto. Se identifica una adecuada extensión de párrafos.",
          error: "",
          comentario: "",
          correccion: "",
          style: "#FBBA63",
          nro_errores: 0,
        },
        ParrafosBreves: {
          label: "Párrafos Breves",
          info: "Recuerda que el párrafo es una unidad de sentido compuesta por diversas oraciones que se caracterizan por desarrollar una idea central.",
          feedback_negativo: "¡Tu párrafo es muy breve! Se sugiere que la extensión de un párrafo sea de 3 oraciones como mínimo y 5 máximo.",
          feedback_positivo: "¡Felicitaciones! no observamos errores en tu texto. Se identifica una adecuada extensión de párrafos.",
          error: "",
          comentario: "",
          correccion: "",
          style: "#FFF492",
          nro_errores: 0,
        }
      },
      endpoint: "micro_paragraphs",
    }
  },
  Estilo: {
    Persona:  {
      TiposAnalisis:  {
        PrimeraPersonaSingular: {
          label: "Primera Persona Singular",
          info: "",
          feedback_negativo: "Estás usando la primera persona singular para redactar tu texto. Se aconseja utilizar la tercera persona gramatical, la forma pasiva y la impersonal para la escritura de informes.",
          feedback_positivo: "¡Excelente! no observamos el uso de la primera persona singular en tu texto.",
          error: "“Para el caso, armar otro circuito en paralelo el procedimiento lo <strong>encontré</strong> un poco más tedioso y <strong>terminé</strong> por <strong>confundirme</strong> en como agregar el multímetro para cada elemento. Luego, con ayuda de tips de la profesora, <strong>pude</strong> saber cuál parte iba con cuál en la protoboard. <strong>Despejando</strong> esa duda, <strong>pude</strong> empezar a calcular los valores de voltaje y corriente en el circuito”.",
          correccion: "“Para el caso, armar otro circuito en paralelo <strong>fue un</strong> procedimiento  un poco más tedioso, <strong>lo que provocó confusión</strong> en cómo agregar el multímetro para cada elemento. Luego, con ayuda de tips de la profesora, <strong>se logró identificar</strong> cuál parte iba con cuál en la protoboard. <strong>Al despejar</strong> esa duda, <strong>fue posible</strong> empezar a calcular los valores de voltaje y corriente en el circuito”.",
          comentario: "",
          style: "#ffaa8e",
          nro_errores: 0
        },
        SegundaPersonaSingular: {
          label: "Segunda Persona Singular",
          info: "",
          feedback_negativo: "Estás usando la segunda persona singular para redactar tu texto. Se aconseja utilizar la tercera persona gramatical, la forma pasiva y la impersonal para la escritura de informes.",
          feedback_positivo: "Haz producido un buen texto, puesto que no identificamos el uso de la segunda persona singular ¡Sigue así!",
          error: "“Este proceso se repetirá con los diferentes circuitos que se analizarán a lo largo de esta experiencia, pero con la diferencia que en cada uno de estos se utilizará un método distinto y las variables a encontrar serán distintas, dependiendo de lo que te pida indagar en el circuito a analizar respectivamente”.",
          correccion: "“Este proceso se repetirá con los diferentes circuitos que se analizarán a lo largo de esta experiencia, pero con la diferencia que en cada uno de estos se utilizará un método distinto y las variables a encontrar serán distintas, dependiendo de lo que se pida indagar en el circuito a analizar respectivamente”.",
          comentario: "En este caso correspondía emplear la forma impersonal “se”, como se presenta a continuación:",
          style: "#fffa8e",
          nro_errores: 0
        }
      },
      endpoint: "fs_person"
    },
    VozPasiva: {
      TiposAnalisis:  {
        VozPasiva: {
          label: "Voz Pasiva",
          info: "La voz pasiva es una construcción en la que el sujeto de la oración es pasivo, es decir, que padece la acción denotada por el verbo. La voz pasiva oculta el agente de la acción, pero si consideras pertinente mostrar el agente, utiliza la oración activa, como por ejemplo “Las funciones periódicas son de gran ayuda, ya que permiten graficar a través de ellas la relación existente entre variables”.",
          feedback_negativo: "En esta oración estás usando la voz pasiva excesivamente. Te recomendamos evitar su uso, pero si lo vas a hacer que no sea más de una vez en una misma oración.",
          feedback_positivo: "¡Haz realizado un buen trabajo! No identificamos un exceso de voz pasiva en tu texto.",
          error: "“Los datos presentados en la tabla n°1 fueron identificados y presentados mediante el uso de los manuales de cada fabricante los cuales fueron entregados en laboratorio de mediciones”.",
          correccion: "“Se identificaron y presentaron los datos de la tabla n°1 mediante el uso de los manuales de cada fabricante, los cuales se entregaron en el laboratorio de mediciones”.",
          comentario: "",
          style: "#ffaa8e",
          nro_errores: 0
        }
      },
      endpoint: "passive_voice"
    },
    Conectores: {
      TiposAnalisis:  {
        Conectores: {
          label: "Conectores",
          info: "Los conectores son unidades invariables que establecen conexiones entre las distintas partes de un texto. Sin ellos la oración no cobra sentido, tal como se evidencia en el enunciado que se presenta a continuación: “el multímetro digital entregó mejores resultados en todas las actividades, (por lo que) es un buen candidato para realizar mediciones en futuros laboratorios, (ya que) también necesita menor cantidad de ajustes que un multímetro análogo”.",
          feedback_negativo: "En esta oración, al parecer, no estás empleando ningún conector. Te recomendamos que los utilices para que las ideas se relacionen de manera clara y que tu texto sea cohesivo.",
          feedback_positivo: "Observamos un buen texto, con un adecuado uso de conectores ¡Buen trabajo!.",
          error: "“Previamente al comienzo de la actividad práctica, fueron dados a conocer los riesgos eléctricos y los métodos de protección. Se mencionó que en caso de descarga eléctrica en un compañero, se debe cortar la corriente desde el interruptor o disyuntor (automático), en este caso instalado en el mesón de trabajo. Por el contrario, nunca se debe tocar a la persona que está recibiendo corriente eléctrica”.",
          correccion: "“Previamente al comienzo de la actividad práctica, fueron dados a conocer los riesgos eléctricos y los métodos de protección. Se mencionó que en caso de descarga eléctrica en un compañero, se debe cortar la corriente desde el interruptor o disyuntor (automático), en este caso instalado en el mesón de trabajo. Además, nunca se debe tocar a la persona que está recibiendo corriente eléctrica”.",
          comentario: "Debido a que las ideas no se contraponen sino que se añade otra complementando la anterior, en lugar de utilizar el conector “Por el contrario”, se recomienda utilizar un conector aditivo como “Además” o “Asimismo”.",
          style: "#ffaa8e",
          nro_errores: 0
        }
      },
      endpoint: "conectores"
    }
  },
  Discursivo: {
    Complejidad: {
      TiposAnalisis: {
        Complejidad: {
          label: "Complejidad",
          info: "placeholder",
          feedback_negativo: "placeholder",
          feedback_positivo: "placeholder",
          error: "placeholder",
          correccion: "placeholder",
          comentario: "placeholder",
          style: '#ffaa8e',
          nro_errores: 0
        }
      },
      endpoint: "sentence_complexity"
    },
    Lecturabilidad: {
      TiposAnalisis: {
        LecturabilidadDificil: {
          label: "Lecturabilidad Difícil",
          info: "placeholder",
          feedback_negativo: "¡Excelente!, el grado de lecturabilidad de tu párrafo se ajusta totalmente al nivel académico requerido. Tu rango de lecturabilidad se encuentra entre 0 y 40 puntos, lo que significa que el largo de las palabras y frases de tu párrafo es ideal.",
          feedback_positivo: "No se encontraron párrafos con este nivel de lacturabilidad en tu párrafo.",
          error: "placeholder",
          correccion: "placeholder",
          comentario: "placeholder",
          style: '#FFADAD',
          nro_errores: 0
        },
        LecturabilidadAlgoDificil: {
          label: "Lecturabilidad Algo Difícil",
          info: "placeholder",
          feedback_negativo: "¡Muy bien!, el grado de lecturabilidad de tu párrafo se ajusta bastante al nivel académico requerido. Tu rango de lecturabilidad se encuentra entre 40 y 55 puntos, lo que significa que el largo de las palabras y frases de tu párrafo es adecuado.",
          feedback_positivo: "No se encontraron párrafos con este nivel de lacturabilidad en tu párrafo.",
          error: "placeholder",
          correccion: "placeholder",
          comentario: "placeholder",
          style: '#FBBA63',
          nro_errores: 0
        },
        LecturabilidadNormal: {
          label: "Lecturabilidad Normal",
          info: "placeholder",
          feedback_negativo: "¡Bien!, el grado de lecturabilidad de tu párrafo se ajusta suficientemente al nivel académico requerido. Tu rango de lecturabilidad se encuentra entre 55 y 65 puntos, lo que significa que el largo de las palabras y frases de tu párrafo es aceptable.",
          feedback_positivo: "No se encontraron párrafos con este nivel de lacturabilidad en tu párrafo.",
          error: "placeholder",
          correccion: "placeholder",
          comentario: "placeholder",
          style: '#FFF492',
          nro_errores: 0
        },
        LecturabilidadAlgoFacil: {
          label: "Lecturabilidad Algo Fácil",
          info: "placeholder",
          feedback_negativo: "El grado de lecturabilidad de tu párrafo no se ajusta al nivel académico requerido. Tu rango de lecturabilidad se encuentra entre 65 y 80 puntos, lo que significa que el largo de las palabras y frases de tu párrafo no es recomendable.",
          feedback_positivo: "No se encontraron párrafos con este nivel de lacturabilidad en tu párrafo.",
          error: "placeholder",
          correccion: "placeholder",
          comentario: "placeholder",
          style: '#A0C4FF',
          nro_errores: 0
        },
        LecturabilidadFacil: {
          label: "Lecturabilidad Fácil",
          info: "placeholder",
          feedback_negativo: "El grado de lecturabilidad de tu párrafo no se ajusta al nivel académico requerido. Tu rango de lecturabilidad se encuentra entre 80 y 100 puntos, lo que significa que el largo de las palabras y frases de tu párrafo es insuficiente.",
          feedback_positivo: "No se encontraron párrafos con este nivel de lacturabilidad en tu párrafo.",
          error: "placeholder",
          correccion: "placeholder",
          comentario: "placeholder",
          style: '#CAFFBF',
          nro_errores: 0
        },
      }, 
      endpoint: "lecturabilidad_parrafo"
    },
    Proposito: {
      TiposAnalisis: {
        Resumen: {
          label: "Resumen",
          info: "placeholder",
          feedback_negativo: "placeholder",
          feedback_positivo: "placeholder",
          error: "placeholder",
          correccion: "placeholder",
          comentario: "placeholder",
          style: '#FFADAD',
          nro_errores: 0
        },
        Introduccion: {
          label: "Introducción",
          info: "placeholder",
          feedback_negativo: "placeholder",
          feedback_positivo: "placeholder",
          error: "placeholder",
          correccion: "placeholder",
          comentario: "placeholder",
          style: '#FBBA63',
          nro_errores: 0
        },
        Desarrollo: {
          label: "Desarrollo",
          info: "placeholder",
          feedback_negativo: "placeholder",
          feedback_positivo: "placeholder",
          error: "placeholder",
          correccion: "placeholder",
          comentario: "placeholder",
          style: '#FFF492',
          nro_errores: 0
        },
        Resultados: {
          label: "Resultados",
          info: "placeholder",
          feedback_negativo: "placeholder",
          feedback_positivo: "placeholder",
          error: "placeholder",
          correccion: "placeholder",
          comentario: "placeholder",
          style: '#A0C4FF',
          nro_errores: 0
        },
        Conclusion: {
          label: "Conclusión",
          info: "placeholder",
          feedback_negativo: "placeholder",
          feedback_positivo: "placeholder",
          error: "placeholder",
          correccion: "placeholder",
          comentario: "placeholder",
          style: '#CAFFBF',
          nro_errores: 0
        }
      },
      endpoint: "proposito"
    }
  }
}