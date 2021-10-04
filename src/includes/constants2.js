export const Analisis = {
  LexicoGramatical: {
    analysisTypes: {
      Gerundios: {
        feedbackTypes: {
          LexicoGramaticalGerundiosExcesivo: {
            feedbackTitle: "Gerundios Excesivos",
            feedbackComment: "Recuerda que el gerundio es una forma no personal del verbo, es decir, que no se encuentra conjugada. No se recomienda utilizar gerundios con tanta frecuencia, por lo que  intenta utilizar oraciones con verbos conjugados, por ejemplo: “Un circuito RLC consta de dos elementos de almacenamiento de energía: el inductor y el capacitor. A estos circuitos se les llama circuitos de segundo orden, porque sus respuestas se describen con ecuaciones diferenciales de segundo orden”.",
            negativeFeedback: "¡Tu párrafo tiene muchos gerundios! Evita usarlos con frecuencia para que no dificulte la comprensión de tu texto. Para reformular la oración reemplaza el gerundio por un verbo conjugado y añade un conector.",
            positiveFeedback: "¡Felicitaciones! no observamos un uso excesivo de gerundios en tu texto.",
            errorExample: "“Esta experiencia está diseñada para que los alumnos armen circuitos en serie y en paralelo de resistores, aprendiendo cómo medir sus respectivos voltajes y corrientes en cada uno de los elementos, comprobando así las Leyes de Kirchhoff”.",
            errorCorrection: "“Esta experiencia está diseñada para que los alumnos armen circuitos en serie y en paralelo de resistores, aprendan cómo medir sus respectivos voltajes y corrientes en cada uno de los elementos, y comprueben así las Leyes de Kirchhoff”.",
            errorComment: "Una forma de evitar la repetición de los gerundios, es reformular los verbos.",
            style: "#FBBA63",
            nro_errores : 0 ,
          }
        },
        analysisTitle: "Gerundios",
        endpoint: "gerunds"
      }
    },
    tabTitle: "Léxico Gramatical"
  },
  Formal: {
    analysisTypes: {
      Oraciones: {
        feedbackTypes: {
          OracionesExtensas: {
            feedbackTitle: "Oraciones Extensas",
            feedbackComment: "Recuerda que las oraciones se componen por un sujeto y un predicado y finalizan con un punto seguido.",
            negativeFeedback: "¡Tu oración es muy extensa! Se recomienda que una oración tenga una extensión entre 18 a 32 palabras.",
            positiveFeedback: "Se identifica un buen texto, puesto que hay una adecuada extensión de oraciones ¡Sigue así!.",
            errorExample: "“Toda resistencia tiene un valor nominal y otro real, teniendo en cuenta lo anterior con una tabla de colores se calcula el valor nominal de las dos resistencias dadas, luego en ambos multímetros se coloca la modalidad para medir resistencia, de acuerdo con el procedimiento puntual que se debe realizar con el analógico, primero conectar ambas terminales caimán de los cables, para crear un puente entre las dos entradas del multímetro, posteriormente se debe mover el indicador del instrumento con tal de que indique cero, para esto se utiliza la perilla que se encuentra en las esquina inferior del visor, se recomienda recostar el instrumento en la mesa y mirarlo desde arriba hasta que no se distinga el reflejo del indicador, para así tener una medición más exacta”.",
            errorCorrection: "“Toda resistencia tiene un valor nominal y otro real. Teniendo en cuenta lo anterior, con una tabla de colores se calcula el valor nominal de las dos resistencias dadas y luego, en ambos multímetros, se coloca la modalidad para medir resistencia. De acuerdo con el procedimiento puntual que se debe realizar con el analógico, primero se debe conectar ambas terminales caimán de los cables, para crear un puente entre las dos entradas del multímetro. Posteriormente, se debe mover el indicador del instrumento con tal de que indique cero, para esto se utiliza la perilla que se encuentra en las esquina inferior del visor. Se recomienda recostar el instrumento en la mesa y mirarlo desde arriba hasta que no se distinga el reflejo del indicador, para así tener una medición más exacta”.",
            errorComment: "La oración al ser tan extensa dificulta la comprensión, por lo que si tu oración es similar a este ejemplo en cuanto a la estructura, te recomendamos que la organices empleando marcadores discursivos, así como puntos y comas.",
            style: "#FBBA63",
            nro_errores: 0,
          },
          OracionesBreves: {
            feedbackTitle: "Oraciones Breves",
            feedbackComment: "Recuerda que las oraciones se componen por un sujeto y un predicado y finalizan con un punto seguido.",
            negativeFeedback: "¡Tu oración es muy breve! Se recomienda que una oración tenga una extensión entre 18 a 32 palabras.",
            positiveFeedback: "Se identifica un buen texto, puesto que hay una adecuada extensión de oraciones ¡Sigue así!.",
            errorExample: "“Hemos concluido.”",
            errorCorrection: "“A modo de conclusión, se identifica que las curvas características de un resistor lineal invariante y un resistor no lineal son muy similares, no obstante, el resistor lineal invariante toma valores negativos y positivos”.",
            errorComment: "Si bien, las oraciones breves no se clasifican como error, su presencia si influye en el estilo del escrito, por lo que se sugiere complementar la idea para lograr una extensión apropiada.",
            style: "#FFF492",
            nro_errores: 0,
          }
        },
        analysisTitle: "Oraciones",
        endpoint: "oraciones"
      },
      Parrafos: {
        feedbackTypes: {
          ParrafosExtensos: {
            feedbackTitle: "Párrafos Extensos",
            feedbackComment: "Recuerda que el párrafo es una unidad de sentido compuesta por diversas oraciones que se caracterizan por desarrollar una idea central.",
            negativeFeedback: "¡Tu párrafo es muy extenso! Se sugiere que la extensión de un párrafo sea de 3 oraciones como mínimo y 5 máximo.",
            positiveFeedback: "¡Felicitaciones! no observamos errores en tu texto. Se identifica una adecuada extensión de párrafos.",
            errorExample: "",
            errorComment: "",
            errorCorrection: "",
            style: "#FBBA63",
            nro_errores: 0,
          },
          ParrafosBreves: {
            feedbackTitle: "Párrafos Breves",
            feedbackComment: "Recuerda que el párrafo es una unidad de sentido compuesta por diversas oraciones que se caracterizan por desarrollar una idea central.",
            negativeFeedback: "¡Tu párrafo es muy breve! Se sugiere que la extensión de un párrafo sea de 3 oraciones como mínimo y 5 máximo.",
            positiveFeedback: "¡Felicitaciones! no observamos errores en tu texto. Se identifica una adecuada extensión de párrafos.",
            errorExample: "",
            errorComment: "",
            errorCorrection: "",
            style: "#FFF492",
            nro_errores: 0,
          }
        },
        analysisTitle: "Párrafos",
        endpoint: "micro_paragraphs",
      }
    },
    tabTitle: "Formal"
  },
  Estilo: {
    analysisTypes: {
      Persona:  {
        feedbackTypes:  {
          PrimeraPersonaSingular: {
            feedbackTitle: "Primera Persona Singular",
            feedbackComment: "",
            negativeFeedback: "Estás usando la primera persona singular para redactar tu texto. Se aconseja utilizar la tercera persona gramatical, la forma pasiva y la impersonal para la escritura de informes.",
            positiveFeedback: "¡Excelente! no observamos el uso de la primera persona singular en tu texto.",
            errorExample: "“Para el caso, armar otro circuito en paralelo el procedimiento lo <strong>encontré</strong> un poco más tedioso y <strong>terminé</strong> por <strong>confundirme</strong> en como agregar el multímetro para cada elemento. Luego, con ayuda de tips de la profesora, <strong>pude</strong> saber cuál parte iba con cuál en la protoboard. <strong>Despejando</strong> esa duda, <strong>pude</strong> empezar a calcular los valores de voltaje y corriente en el circuito”.",
            errorCorrection: "“Para el caso, armar otro circuito en paralelo <strong>fue un</strong> procedimiento  un poco más tedioso, <strong>lo que provocó confusión</strong> en cómo agregar el multímetro para cada elemento. Luego, con ayuda de tips de la profesora, <strong>se logró identificar</strong> cuál parte iba con cuál en la protoboard. <strong>Al despejar</strong> esa duda, <strong>fue posible</strong> empezar a calcular los valores de voltaje y corriente en el circuito”.",
            errorComment: "",
            style: "#ffaa8e",
            nro_errores: 0
          },
          SegundaPersonaSingular: {
            feedbackTitle: "Segunda Persona Singular",
            feedbackComment: "",
            negativeFeedback: "Estás usando la segunda persona singular para redactar tu texto. Se aconseja utilizar la tercera persona gramatical, la forma pasiva y la impersonal para la escritura de informes.",
            positiveFeedback: "Haz producido un buen texto, puesto que no identificamos el uso de la segunda persona singular ¡Sigue así!",
            errorExample: "“Este proceso se repetirá con los diferentes circuitos que se analizarán a lo largo de esta experiencia, pero con la diferencia que en cada uno de estos se utilizará un método distinto y las variables a encontrar serán distintas, dependiendo de lo que te pida indagar en el circuito a analizar respectivamente”.",
            errorCorrection: "“Este proceso se repetirá con los diferentes circuitos que se analizarán a lo largo de esta experiencia, pero con la diferencia que en cada uno de estos se utilizará un método distinto y las variables a encontrar serán distintas, dependiendo de lo que se pida indagar en el circuito a analizar respectivamente”.",
            errorComment: "En este caso correspondía emplear la forma impersonal “se”, como se presenta a continuación:",
            style: "#fffa8e",
            nro_errores: 0
          }
        },
        analysisTitle: "Primera y Segunda Persona",
        endpoint: "fs_person"
      },
      VozPasiva: {
        feedbackTypes:  {
          VozPasiva: {
            feedbackTitle: "Voz Pasiva",
            feedbackComment: "La voz pasiva es una construcción en la que el sujeto de la oración es pasivo, es decir, que padece la acción denotada por el verbo. La voz pasiva oculta el agente de la acción, pero si consideras pertinente mostrar el agente, utiliza la oración activa, como por ejemplo “Las funciones periódicas son de gran ayuda, ya que permiten graficar a través de ellas la relación existente entre variables”.",
            negativeFeedback: "En esta oración estás usando la voz pasiva excesivamente. Te recomendamos evitar su uso, pero si lo vas a hacer que no sea más de una vez en una misma oración.",
            positiveFeedback: "¡Haz realizado un buen trabajo! No identificamos un exceso de voz pasiva en tu texto.",
            errorExample: "“Los datos presentados en la tabla n°1 fueron identificados y presentados mediante el uso de los manuales de cada fabricante los cuales fueron entregados en laboratorio de mediciones”.",
            errorCorrection: "“Se identificaron y presentaron los datos de la tabla n°1 mediante el uso de los manuales de cada fabricante, los cuales se entregaron en el laboratorio de mediciones”.",
            errorComment: "",
            style: "#ffaa8e",
            nro_errores: 0
          }
        },
        analysisTitle: "Voz Pasiva",
        endpoint: "passive_voice"
      },
      Conectores: {
        feedbackTypes:  {
          Conectores: {
            feedbackTitle: "Conectores",
            feedbackComment: "Los conectores son unidades invariables que establecen conexiones entre las distintas partes de un texto. Sin ellos la oración no cobra sentido, tal como se evidencia en el enunciado que se presenta a continuación: “el multímetro digital entregó mejores resultados en todas las actividades, (por lo que) es un buen candidato para realizar mediciones en futuros laboratorios, (ya que) también necesita menor cantidad de ajustes que un multímetro análogo”.",
            negativeFeedback: "En esta oración, al parecer, no estás empleando ningún conector. Te recomendamos que los utilices para que las ideas se relacionen de manera clara y que tu texto sea cohesivo.",
            positiveFeedback: "Observamos un buen texto, con un adecuado uso de conectores ¡Buen trabajo!.",
            errorExample: "“Previamente al comienzo de la actividad práctica, fueron dados a conocer los riesgos eléctricos y los métodos de protección. Se mencionó que en caso de descarga eléctrica en un compañero, se debe cortar la corriente desde el interruptor o disyuntor (automático), en este caso instalado en el mesón de trabajo. Por el contrario, nunca se debe tocar a la persona que está recibiendo corriente eléctrica”.",
            errorCorrection: "“Previamente al comienzo de la actividad práctica, fueron dados a conocer los riesgos eléctricos y los métodos de protección. Se mencionó que en caso de descarga eléctrica en un compañero, se debe cortar la corriente desde el interruptor o disyuntor (automático), en este caso instalado en el mesón de trabajo. Además, nunca se debe tocar a la persona que está recibiendo corriente eléctrica”.",
            errorComment: "Debido a que las ideas no se contraponen sino que se añade otra complementando la anterior, en lugar de utilizar el conector “Por el contrario”, se recomienda utilizar un conector aditivo como “Además” o “Asimismo”.",
            style: "#ffaa8e",
            nro_errores: 0
          }
        },
        analysisTitle: "Conectores",
        endpoint: "conectores"
      },
      Conectores2: {
        feedbackTypes:  {
          Conectores2: {
            feedbackTitle: "Conectores2",
            feedbackComment: "placeholder",
            negativeFeedback: "placeholder",
            positiveFeedback: "placeholder",
            errorExample: "placeholder",
            errorCorrection: "placeholder",
            errorComment: "placeholder",
            urlGenially: 'https://view.genial.ly/60cd376d3adac80cfe6f5e52',
            style: "#ffaa8e",
            nro_errores: 0
          }
        },
        analysisTitle: "Conectores 2",
        endpoint: "conectores2"
      }
    },
    tabTitle: "Estilo"
  },
  Discursivo: {
    analysisTypes: {
      Complejidad: {
        feedbackTypes: {
          Complejidad: {
            feedbackTitle: "Complejidad",
            feedbackComment: "placeholder",
            negativeFeedback: "placeholder",
            positiveFeedback: "placeholder",
            errorExample: "placeholder",
            errorCorrection: "placeholder",
            errorComment: "placeholder",
            style: '#ffaa8e',
            nro_errores: 0
          }
        },
        analysisTitle: "Complejidad",
        endpoint: "sentence_complexity"
      },
      Lecturabilidad: {
        feedbackTypes: {
          LecturabilidadDificil: {
            feedbackTitle: "Lecturabilidad Difícil",
            feedbackComment: "placeholder",
            negativeFeedback: "¡Excelente!, el grado de lecturabilidad de tu párrafo se ajusta totalmente al nivel académico requerido. Tu rango de lecturabilidad se encuentra entre 0 y 40 puntos, lo que significa que el largo de las palabras y frases de tu párrafo es ideal.",
            positiveFeedback: "No se encontraron párrafos con este nivel de lacturabilidad en tu párrafo.",
            errorExample: "placeholder",
            errorCorrection: "placeholder",
            errorComment: "placeholder",
            style: '#FFADAD',
            nro_errores: 0
          },
          LecturabilidadAlgoDificil: {
            feedbackTitle: "Lecturabilidad Algo Difícil",
            feedbackComment: "placeholder",
            negativeFeedback: "¡Muy bien!, el grado de lecturabilidad de tu párrafo se ajusta bastante al nivel académico requerido. Tu rango de lecturabilidad se encuentra entre 40 y 55 puntos, lo que significa que el largo de las palabras y frases de tu párrafo es adecuado.",
            positiveFeedback: "No se encontraron párrafos con este nivel de lacturabilidad en tu párrafo.",
            errorExample: "placeholder",
            errorCorrection: "placeholder",
            errorComment: "placeholder",
            style: '#FBBA63',
            nro_errores: 0
          },
          LecturabilidadNormal: {
            feedbackTitle: "Lecturabilidad Normal",
            feedbackComment: "placeholder",
            negativeFeedback: "¡Bien!, el grado de lecturabilidad de tu párrafo se ajusta suficientemente al nivel académico requerido. Tu rango de lecturabilidad se encuentra entre 55 y 65 puntos, lo que significa que el largo de las palabras y frases de tu párrafo es aceptable.",
            positiveFeedback: "No se encontraron párrafos con este nivel de lacturabilidad en tu párrafo.",
            errorExample: "placeholder",
            errorCorrection: "placeholder",
            errorComment: "placeholder",
            style: '#FFF492',
            nro_errores: 0
          },
          LecturabilidadAlgoFacil: {
            feedbackTitle: "Lecturabilidad Algo Fácil",
            feedbackComment: "placeholder",
            negativeFeedback: "El grado de lecturabilidad de tu párrafo no se ajusta al nivel académico requerido. Tu rango de lecturabilidad se encuentra entre 65 y 80 puntos, lo que significa que el largo de las palabras y frases de tu párrafo no es recomendable.",
            positiveFeedback: "No se encontraron párrafos con este nivel de lacturabilidad en tu párrafo.",
            errorExample: "placeholder",
            errorCorrection: "placeholder",
            errorComment: "placeholder",
            style: '#A0C4FF',
            nro_errores: 0
          },
          LecturabilidadFacil: {
            feedbackTitle: "Lecturabilidad Fácil",
            feedbackComment: "placeholder",
            negativeFeedback: "El grado de lecturabilidad de tu párrafo no se ajusta al nivel académico requerido. Tu rango de lecturabilidad se encuentra entre 80 y 100 puntos, lo que significa que el largo de las palabras y frases de tu párrafo es insuficiente.",
            positiveFeedback: "No se encontraron párrafos con este nivel de lacturabilidad en tu párrafo.",
            errorExample: "placeholder",
            errorCorrection: "placeholder",
            errorComment: "placeholder",
            style: '#CAFFBF',
            nro_errores: 0
          },
        },
        analysisTitle: "Lecturabilidad",
        endpoint: "lecturabilidad_parrafo"
      },
      Proposito: {
        feedbackTypes: {
          Resumen: {
            feedbackTitle: "Resumen",
            feedbackComment: "placeholder",
            negativeFeedback: "placeholder",
            positiveFeedback: "placeholder",
            errorExample: "placeholder",
            errorCorrection: "placeholder",
            errorComment: "placeholder",
            style: '#FFADAD',
            nro_errores: 0
          },
          Introduccion: {
            feedbackTitle: "Introducción",
            feedbackComment: "placeholder",
            negativeFeedback: "placeholder",
            positiveFeedback: "placeholder",
            errorExample: "placeholder",
            errorCorrection: "placeholder",
            errorComment: "placeholder",
            style: '#FBBA63',
            nro_errores: 0
          },
          Desarrollo: {
            feedbackTitle: "Desarrollo",
            feedbackComment: "placeholder",
            negativeFeedback: "placeholder",
            positiveFeedback: "placeholder",
            errorExample: "placeholder",
            errorCorrection: "placeholder",
            errorComment: "placeholder",
            style: '#FFF492',
            nro_errores: 0
          },
          Resultados: {
            feedbackTitle: "Resultados",
            feedbackComment: "placeholder",
            negativeFeedback: "placeholder",
            positiveFeedback: "placeholder",
            errorExample: "placeholder",
            errorCorrection: "placeholder",
            errorComment: "placeholder",
            style: '#A0C4FF',
            nro_errores: 0
          },
          Conclusion: {
            feedbackTitle: "Conclusión",
            feedbackComment: "placeholder",
            negativeFeedback: "placeholder",
            positiveFeedback: "placeholder",
            errorExample: "placeholder",
            errorCorrection: "placeholder",
            errorComment: "placeholder",
            style: '#CAFFBF',
            nro_errores: 0
          }
        },
        analysisTitle: "Propósito",
        endpoint: "proposito"
      }
    },
    tabTitle: "Discursivo"
  }
}

export const PREHTML = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
export const POSTHTML = "</body></html>";