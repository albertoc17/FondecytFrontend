import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
// import Analisis from "@/includes/constants.js";

Vue.use(Vuex)

const initialState = {
  gerundios: {
    html: "",
    feedbackTypes: {
      gerundiosExcesivos: {
        feedbackTitle: "Gerundios Excesivos",
        feedbackComment: "Recuerda que el gerundio es una forma no personal del verbo, es decir, que no se encuentra conjugada. No se recomienda utilizar gerundios con tanta frecuencia, por lo que  intenta utilizar oraciones con verbos conjugados, por ejemplo: “Un circuito RLC consta de dos elementos de almacenamiento de energía: el inductor y el capacitor. A estos circuitos se les llama circuitos de segundo orden, porque sus respuestas se describen con ecuaciones diferenciales de segundo orden”.",
        negativeFeedback: "¡Tu párrafo tiene muchos gerundios! Evita usarlos con frecuencia para que no dificulte la comprensión de tu texto. Para reformular la oración reemplaza el gerundio por un verbo conjugado y añade un conector.",
        positiveFeedback: "¡Felicitaciones! no observamos un uso excesivo de gerundios en tu texto.",
        errorExample: "“Esta experiencia está diseñada para que los alumnos armen circuitos en serie y en paralelo de resistores, aprendiendo cómo medir sus respectivos voltajes y corrientes en cada uno de los elementos, comprobando así las Leyes de Kirchhoff”.",
        errorCorrection: "“Esta experiencia está diseñada para que los alumnos armen circuitos en serie y en paralelo de resistores, aprendan cómo medir sus respectivos voltajes y corrientes en cada uno de los elementos, y comprueben así las Leyes de Kirchhoff”.",
        errorComment: "Una forma de evitar la repetición de los gerundios, es reformular los verbos.",
        style: "bg-red",
        nro_errores : 0
      }
    },
  },
  oraciones: {
    html: "",
    feedbackTypes: {
      oracionesExtensas: {
        feedbackTitle: "Oraciones Extensas",
        feedbackComment: "Recuerda que las oraciones se componen por un sujeto y un predicado y finalizan con un punto seguido.",
        negativeFeedback: "¡Tu oración es muy extensa! Se recomienda que una oración tenga una extensión entre 18 a 32 palabras.",
        positiveFeedback: "Se identifica un buen texto, puesto que hay una adecuada extensión de oraciones ¡Sigue así!.",
        errorExample: "“Toda resistencia tiene un valor nominal y otro real, teniendo en cuenta lo anterior con una tabla de colores se calcula el valor nominal de las dos resistencias dadas, luego en ambos multímetros se coloca la modalidad para medir resistencia, de acuerdo con el procedimiento puntual que se debe realizar con el analógico, primero conectar ambas terminales caimán de los cables, para crear un puente entre las dos entradas del multímetro, posteriormente se debe mover el indicador del instrumento con tal de que indique cero, para esto se utiliza la perilla que se encuentra en las esquina inferior del visor, se recomienda recostar el instrumento en la mesa y mirarlo desde arriba hasta que no se distinga el reflejo del indicador, para así tener una medición más exacta”.",
        errorCorrection: "“Toda resistencia tiene un valor nominal y otro real. Teniendo en cuenta lo anterior, con una tabla de colores se calcula el valor nominal de las dos resistencias dadas y luego, en ambos multímetros, se coloca la modalidad para medir resistencia. De acuerdo con el procedimiento puntual que se debe realizar con el analógico, primero se debe conectar ambas terminales caimán de los cables, para crear un puente entre las dos entradas del multímetro. Posteriormente, se debe mover el indicador del instrumento con tal de que indique cero, para esto se utiliza la perilla que se encuentra en las esquina inferior del visor. Se recomienda recostar el instrumento en la mesa y mirarlo desde arriba hasta que no se distinga el reflejo del indicador, para así tener una medición más exacta”.",
        errorComment: "La oración al ser tan extensa dificulta la comprensión, por lo que si tu oración es similar a este ejemplo en cuanto a la estructura, te recomendamos que la organices empleando marcadores discursivos, así como puntos y comas.",
        style: "bg-red",
        nro_errores: 0,
      },
      oracionesBreves: {
        feedbackTitle: "Oraciones Breves",
        feedbackComment: "Recuerda que las oraciones se componen por un sujeto y un predicado y finalizan con un punto seguido.",
        negativeFeedback: "¡Tu oración es muy breve! Se recomienda que una oración tenga una extensión entre 18 a 32 palabras.",
        positiveFeedback: "Se identifica un buen texto, puesto que hay una adecuada extensión de oraciones ¡Sigue así!.",
        errorExample: "“Hemos concluido.”",
        errorCorrection: "“A modo de conclusión, se identifica que las curvas características de un resistor lineal invariante y un resistor no lineal son muy similares, no obstante, el resistor lineal invariante toma valores negativos y positivos”.",
        errorComment: "Si bien, las oraciones breves no se clasifican como error, su presencia si influye en el estilo del escrito, por lo que se sugiere complementar la idea para lograr una extensión apropiada.",
        style: "bg-yellow",
        nro_errores: 0,
      }
    }
  },
  parrafos: {
    html: "",
    feedbackTypes: {
      parrafosExtensos: {
        feedbackTitle: "Párrafos Extensos",
        feedbackComment: "Recuerda que el párrafo es una unidad de sentido compuesta por diversas oraciones que se caracterizan por desarrollar una idea central.",
        negativeFeedback: "¡Tu párrafo es muy extenso! Se sugiere que la extensión de un párrafo sea de 3 oraciones como mínimo y 5 máximo.",
        positiveFeedback: "¡Felicitaciones! no observamos errores en tu texto. Se identifica una adecuada extensión de párrafos.",
        errorExample: "",
        errorComment: "",
        errorCorrection: "",
        style: "bg-red",
        nro_errores: 0,
      },
      parrafosBreves: {
        feedbackTitle: "Párrafos Breves",
        feedbackComment: "Recuerda que el párrafo es una unidad de sentido compuesta por diversas oraciones que se caracterizan por desarrollar una idea central.",
        negativeFeedback: "¡Tu párrafo es muy breve! Se sugiere que la extensión de un párrafo sea de 3 oraciones como mínimo y 5 máximo.",
        positiveFeedback: "¡Felicitaciones! no observamos errores en tu texto. Se identifica una adecuada extensión de párrafos.",
        errorExample: "",
        errorComment: "",
        errorCorrection: "",
        style: "bg-yellow",
        nro_errores: 0,
      }
    }
  },
  persona: {
    html: "",
    feedbackTypes:  {
      primeraPersonaSingular: {
        feedbackTitle: "Primera Persona Singular",
        feedbackComment: "",
        negativeFeedback: "Estás usando la primera persona singular para redactar tu texto. Se aconseja utilizar la tercera persona gramatical, la forma pasiva y la impersonal para la escritura de informes.",
        positiveFeedback: "¡Excelente! no observamos el uso de la primera persona singular en tu texto.",
        errorExample: "“Para el caso, armar otro circuito en paralelo el procedimiento lo encontré un poco más tedioso y terminé por confundirme en como agregar el multímetro para cada elemento. Luego, con ayuda de tips de la profesora, <strong>pude</strong> saber cuál parte iba con cuál en la protoboard. <strong>Despejando</strong> esa duda, <strong>pude</strong> empezar a calcular los valores de voltaje y corriente en el circuito”.",
        errorCorrection: "“Para el caso, armar otro circuito en paralelo <strong>fue un</strong> procedimiento  un poco más tedioso, <strong>lo que provocó confusión</strong> en cómo agregar el multímetro para cada elemento. Luego, con ayuda de tips de la profesora, <strong>se logró identificar</strong> cuál parte iba con cuál en la protoboard. <strong>Al despejar</strong> esa duda, <strong>fue posible</strong> empezar a calcular los valores de voltaje y corriente en el circuito”.",
        errorComment: "",
        style: "bg-red",
        nro_errores: 0
      },
      segundaPersonaSingular: {
        feedbackTitle: "Segunda Persona Singular",
        feedbackComment: "",
        negativeFeedback: "Estás usando la segunda persona singular para redactar tu texto. Se aconseja utilizar la tercera persona gramatical, la forma pasiva y la impersonal para la escritura de informes.",
        positiveFeedback: "Haz producido un buen texto, puesto que no identificamos el uso de la segunda persona singular ¡Sigue así!",
        errorExample: "“Este proceso se repetirá con los diferentes circuitos que se analizarán a lo largo de esta experiencia, pero con la diferencia que en cada uno de estos se utilizará un método distinto y las variables a encontrar serán distintas, dependiendo de lo que te pida indagar en el circuito a analizar respectivamente”.",
        errorCorrection: "“Este proceso se repetirá con los diferentes circuitos que se analizarán a lo largo de esta experiencia, pero con la diferencia que en cada uno de estos se utilizará un método distinto y las variables a encontrar serán distintas, dependiendo de lo que se pida indagar en el circuito a analizar respectivamente”.",
        errorComment: "En este caso correspondía emplear la forma impersonal “se”, como se presenta a continuación:",
        style: "bg-yellow",
        nro_errores: 0
      }
    }
  },
  vozPasiva: {
    html: "",
    feedbackTypes:  {
      vozPasiva: {
        feedbackTitle: "Voz Pasiva",
        feedbackComment: "La voz pasiva es una construcción en la que el sujeto de la oración es pasivo, es decir, que padece la acción denotada por el verbo. La voz pasiva oculta el agente de la acción, pero si consideras pertinente mostrar el agente, utiliza la oración activa, como por ejemplo “Las funciones periódicas son de gran ayuda, ya que permiten graficar a través de ellas la relación existente entre variables”.",
        negativeFeedback: "En esta oración estás usando la voz pasiva excesivamente. Te recomendamos evitar su uso, pero si lo vas a hacer que no sea más de una vez en una misma oración.",
        positiveFeedback: "¡Haz realizado un buen trabajo! No identificamos un exceso de voz pasiva en tu texto.",
        errorExample: "“Los datos presentados en la tabla n°1 fueron identificados y presentados mediante el uso de los manuales de cada fabricante los cuales fueron entregados en laboratorio de mediciones”.",
        errorCorrection: "“Se identificaron y presentaron los datos de la tabla n°1 mediante el uso de los manuales de cada fabricante, los cuales se entregaron en el laboratorio de mediciones”.",
        errorComment: "",
        style: "bg-red",
        nro_errores: 0
      }
    },  
  },
  conectores: {
    html: "",
    feedbackTypes: {
      ausenciaConectores: {
        feedbackTitle: "Ausencia de Conectores",
        feedbackComment: "Los conectores son unidades invariables que establecen conexiones entre las distintas partes de un texto. Sin ellos la oración no cobra sentido, tal como se evidencia en el enunciado que se presenta a continuación: “el multímetro digital entregó mejores resultados en todas las actividades, (por lo que) es un buen candidato para realizar mediciones en futuros laboratorios, (ya que) también necesita menor cantidad de ajustes que un multímetro análogo”.",
        negativeFeedback: "En esta oración, al parecer, no estás empleando ningún conector. Te recomendamos que los utilices para que las ideas se relacionen de manera clara y que tu texto sea cohesivo.",
        positiveFeedback: "Observamos un buen texto, con un adecuado uso de conectores ¡Buen trabajo!.",
        errorExample: "“Previamente al comienzo de la actividad práctica, fueron dados a conocer los riesgos eléctricos y los métodos de protección. Se mencionó que en caso de descarga eléctrica en un compañero, se debe cortar la corriente desde el interruptor o disyuntor (automático), en este caso instalado en el mesón de trabajo. Por el contrario, nunca se debe tocar a la persona que está recibiendo corriente eléctrica”.",
        errorCorrection: "“Previamente al comienzo de la actividad práctica, fueron dados a conocer los riesgos eléctricos y los métodos de protección. Se mencionó que en caso de descarga eléctrica en un compañero, se debe cortar la corriente desde el interruptor o disyuntor (automático), en este caso instalado en el mesón de trabajo. Además, nunca se debe tocar a la persona que está recibiendo corriente eléctrica”.",
        errorComment: "Debido a que las ideas no se contraponen sino que se añade otra complementando la anterior, en lugar de utilizar el conector “Por el contrario”, se recomienda utilizar un conector aditivo como “Además” o “Asimismo”.",
        style: "bg-red",
        nro_errores: 0
      },
      conectoresRepetidos: {
        feedbackTitle: "Conectores Repetidos",
        feedbackComment: "",
        negativeFeedback: "Estás repitiendo conectores dentro de un mismo párrafo. Te recomendamos reemplazarlos por otros que cumplan la misma función. Para saber qué tipos de conectores estás empleando y por cuáles puedes sustituirlos, revisa la siguiente presentación.",
        positiveFeedback: "¡Has realizado un buen trabajo! No identificamos repetición de conectores en tu texto.",
        errorExample: "",
        errorCorrection: "",
        errorComment: "",
        urlGenially: 'https://view.genial.ly/60cd376d3adac80cfe6f5e52',
        style: "bg-yellow",
        nro_errores: 0
      }
    }
  },
  complejidad: {
    html: "",
    feedbackTypes: {
      complejidad: {
        feedbackTitle: "Complejidad",
        feedbackComment: "La complejidad en la oración se refiere al alto grado de esfuerzo que se requiere para comprender un texto, lo que está determinado por la cantidad de palabras que se presentan antes del verbo principal. De modo que, mientras más palabras aparecen antes del verbo, mayor será el grado de complejidad.        Te sugerimos que, antes de reformular la oración para que el verbo aparezca antes, revises que esta cumpla con las recomendaciones de extensión mínima, es decir, que la oración esté dentro del rango entre las 18 a 32 palabras.",
        negativeFeedback: "Tu oración tiene un grado de complejidad muy alto, es decir, el verbo no aparece dentro del primer cuarto de palabras de la oración. Te recomendamos reducir la cantidad de palabras antes del verbo para que el texto se pueda comprender de mejor manera.",
        positiveFeedback: "¡Excelente! No observamos oraciones con alto grado de complejidad.",
        errorExample: "“Las comunicaciones inalámbricas de alta velocidad en entornos interiores para servicios móviles se han realizado en frecuencias bajo los 6 [GHz]”.",
        errorCorrection: "“Las comunicaciones inalámbricas de alta velocidad se han realizado en entornos interiores para servicios móviles en frecuencias bajo los 6 [GHz]”",
        errorComment: "El verbo tiene una posición muy cercana al término de la oración, lo que implica que se dificulta su comprensión y lectura. Se debe reestructurar el orden para que el verbo quede en el primer cuarto de palabras dentro de la oración.",
        style: "bg-red",
        nro_errores: 0
      }
    },
  },
  lecturabilidad: {
    html: "",
    feedbackTypes: {
      dificil: {
        feedbackTitle: "Lecturabilidad Difícil",
        feedbackComment: "",
        negativeFeedback: "¡Excelente!, el grado de lecturabilidad de tu párrafo se ajusta totalmente al nivel académico requerido. Tu rango de lecturabilidad se encuentra entre 0 y 40 puntos, lo que significa que el largo de las palabras y frases de tu párrafo es ideal.",
        positiveFeedback: "No se encontraron párrafos con este nivel de lacturabilidad en tu texto.",
        example: "Un ejemplo de párrafo categorizado con un grado de lecturabilidad muy difícil es el que se presenta a continuación: “Un parque eólico se define como un conjunto de generadores eólicos conectados entre sí para inyectar energía eléctrica a un sistema eléctrico” (37,25)",
        style: "bg-red",
        nro_errores: 0
      },
      algoDificil: {
        feedbackTitle: "Lecturabilidad Algo Difícil",
        feedbackComment: "",
        negativeFeedback: "¡Muy bien!, el grado de lecturabilidad de tu párrafo se ajusta bastante al nivel académico requerido. Tu rango de lecturabilidad se encuentra entre 40 y 55 puntos, lo que significa que el largo de las palabras y frases de tu párrafo es adecuado.",
        positiveFeedback: "No se encontraron párrafos con este nivel de lacturabilidad en tu texto.",
        example: "Un ejemplo de párrafo categorizado con un grado de lecturabilidad algo difícil es el que se presenta a continuación: “La Energía Hidráulica es un tipo de energía renovable convencional, se obtiene del aprovechamiento de las energías cinéticas y potencial de la corriente del agua o los saltos de aguas naturales” (50,66)",
        style: "bg-yellow",
        nro_errores: 0
      },
      normal: {
        feedbackTitle: "Lecturabilidad Normal",
        feedbackComment: "",
        negativeFeedback: "¡Bien!, el grado de lecturabilidad de tu párrafo se ajusta suficientemente al nivel académico requerido. Tu rango de lecturabilidad se encuentra entre 55 y 65 puntos, lo que significa que el largo de las palabras y frases de tu párrafo es aceptable.",
        positiveFeedback: "No se encontraron párrafos con este nivel de lacturabilidad en tu texto.",
        example: "“Cuando se habla de la huella de carbono de la energía, esta contempla al sector eléctrico contribuyendo con el 35% de las emisiones de dióxido de carbono a nivel global”. (56,39)",
        style: "bg-lightgreen",
        nro_errores: 0
      },
      algoFacil: {
        feedbackTitle: "Lecturabilidad Algo Fácil",
        feedbackComment: "",
        negativeFeedback: "El grado de lecturabilidad de tu párrafo no se ajusta al nivel académico requerido. Tu rango de lecturabilidad se encuentra entre 65 y 80 puntos, lo que significa que el largo de las palabras y frases de tu párrafo no es recomendable.",
        positiveFeedback: "No se encontraron párrafos con este nivel de lacturabilidad en tu texto.",
        example: "“Dispositivo que se utiliza para aprovechar la energía contenida en el viento y transformarla en eléctrica. Una turbina obtiene su potencia de entrada convirtiendo la energía cinética del viento en un par (fuerza de giro), el cual actúa sobre las palas”. (66,33)",
        style: "bg-orange",
        nro_errores: 0
      },
      facil: {
        feedbackTitle: "Lecturabilidad Fácil",
        feedbackComment: "",
        negativeFeedback: "El grado de lecturabilidad de tu párrafo no se ajusta al nivel académico requerido. Tu rango de lecturabilidad se encuentra entre 80 y 100 puntos, lo que significa que el largo de las palabras y frases de tu párrafo es insuficiente.",
        positiveFeedback: "No se encontraron párrafos con este nivel de lacturabilidad en tu texto.",
        example: "“Tal día como hoy de hace ciento diez (110) años, o lo que es lo mismo el 26 de octubre de 1906, el físico e inventor estadounidense Lee De Forest (1873-1961), anunciaba el descubrimiento del tubo de vacío de tres elementos”. (88,81)",
        style: "bg-blue",
        nro_errores: 0
      }
    },
  },
  proposito: {
    html: "",
    feedbackTypes: {
      resumen: {
        feedbackTitle: "Resumen",
        feedbackComment: "El propósito del resumen es sintetizar el contenido del informe, por lo tanto, se espera que se anuncien los principales temas que se presentarán en él. Para ello, se debe describir el tema y problema, mencionar los procedimientos realizados, sintetizar algunos resultados y señalar los términos más relevantes. Debido a que el resumen presenta información de todos los apartados, puede que las oraciones estén destacadas con diversos colores, verifica que se ajusten al propósito.",
        negativeFeedback: "¡Tu resumen contiene oraciones que no cumplen con el propósito discursivo del apartado. Revisa los colores con que se destacan las oraciones, para conocer a qué propósito se ajustan más. Te recomendamos revisar el propósito de este apartado, evaluar si se ajusta o no a lo requerido y corregir en caso de ser necesario.",
        positiveFeedback: "¡Excelente! El resumen tiene oraciones que cumplen con el propósito discursivo del apartado.",
        errorExample: "placeholder",
        errorCorrection: "placeholder",
        errorComment: "placeholder",
        style: "bg-red",
        nro_errores: 0
      },
      introduccion: {
        feedbackTitle: "Introducción",
        feedbackComment: "El propósito de la introducción es introducir al lector en el trabajo, por lo tanto, se espera orientar al lector en relación con el tema, presentar los supuestos conceptuales más relevantes que guían la investigación, indicar su propósito y justificar la relevancia de realizar la investigación. A continuación se presentan algunos ejemplos para cumplir con el objetivo de la introducción: - X es un área de gran interés dentro del campo de… - X tiene una serie de importantes problemas en cuanto a… - Este concepto ha sido recientemente cuestionado por estudios que demuestran que… - Hasta la fecha, la investigación se ha centrado en el papel de X en Y en lugar de Z… - La literatura científica desarrollada hasta el momento no muestra una evidencia confiable acerca de… - Este estudio podría estimular el debate / revelar / revestir / proporcionar evidencia / contribuir al incremento del conocimiento en… / ofrecer una visión alternativa / dar cuenta de / reavivar el interés por… - El objetivo de este proyecto de investigación ha sido tratar de… - Este estudio tuvo como objeto responder a las siguientes preguntas de investigación: - Las cuestiones / temas principales abordados en este trabajo son: - Los resultados obtenidos en este estudio supondrían una importante contribución al campo de… dado que…",
        negativeFeedback: "¡Tu introducción contiene oraciones que no cumplen con el propósito discursivo del apartado. Revisa los colores con que se destacan las oraciones, para conocer a qué propósito se ajustan más. Te recomendamos revisar el propósito de este apartado, evaluar si se ajusta o no a lo requerido y corregir en caso de ser necesario.",
        positiveFeedback: "¡Excelente! La introducción riene oraciones que cumplen con el propósito discursivo del apartado.",
        errorExample: "placeholder",
        errorCorrection: "placeholder",
        errorComment: "placeholder",
        style: "bg-yellow",
        nro_errores: 0
      },
      desarrollo: {
        feedbackTitle: "Desarrollo",
        feedbackComment: "El propósito del desarrollo consiste en la descripción de los procesos realizados para llevar a cabo el estudio, en donde se incluyen los materiales y metodología a utilizar. Algunos ejemplos para cumplir con propósito en el desarrollo son: - Diferentes autores han utilizado X en un amplia variedad de formas para… - Este estudio constituye… - Para la recogida de datos… - Los datos fueron obtenidos de… - El enfoque de investigación adoptado para este estudio fue… - Para la realización de esta investigación se adoptó un diseño de tipo X para así proporcionar… - X se prepararía de acuerdo con el procedimiento utilizado por Autor en Y para… - Con el fin de entender cómo X actúa sobre Y se realizaría… - Para establecer si… - La metodología aplicada en esta investigación podrían plantear varias limitaciones para X: en primer lugar,… en segundo lugar,…",
        negativeFeedback: "¡Tu desarrollo contiene oraciones que no cumplen con el propósito discursivo del apartado. Revisa los colores con que se destacan las oraciones, para conocer a qué propósito se ajustan más. Te recomendamos revisar el propósito de este apartado, evaluar si se ajusta o no a lo requerido y corregir en caso de ser necesario.",
        positiveFeedback: "¡Excelente! El Desarrollo tiene oraciones que cumplen con el propósito discursivo del apartado.",
        errorExample: "placeholder",
        errorCorrection: "placeholder",
        errorComment: "placeholder",
        style: "bg-lightgreen",
        nro_errores: 0
      },
      resultados: {
        feedbackTitle: "Resultados",
        feedbackComment: "El propósito de este apartado es presentar los resultados y proponer una interpretación de ellos de acuerdo con las investigaciones previas relacionadas presentadas en el desarrollo. Algunos ejemplos para cumplir con el propósito en los resultados son: - Para evaluar X, se utilizó Y como…. - Como se destaca en la gráfica X… - De esta figura se desprende que… - Este gráfico es bastante revelador en cuanto a… - En este estudio se encontró una fuerte evidencia de X cuando… - No se encontraron/hallaron diferencias significativas entre… - El resultado más llamativo que emerge de los datos es… - A partir de los datos se identificaron una serie de cuestiones comunes… - A partir del análisis surgen X temas… - Estos resultados sugieren, en síntesis, que…",
        negativeFeedback: "¡Tus resultados contienen oraciones que no cumplen con el propósito discursivo del apartado. Revisa los colores con que se destacan las oraciones, para conocer a qué propósito se ajustan más. Te recomendamos revisar el propósito de este apartado, evaluar si se ajusta o no a lo requerido y corregir en caso de ser necesario.",
        positiveFeedback: "¡Excelente! Los Resultados tienen oraciones que cumplen con el propósito discursivo del apartado.",
        errorExample: "placeholder",
        errorCorrection: "placeholder",
        errorComment: "placeholder",
        style: "bg-orange",
        nro_errores: 0
      },
      conclusion: {
        feedbackTitle: "Conclusión",
        feedbackComment: "El propósito de este apartado es concluir el informe, recordando al lector los aspectos más relevantes y proponiendo una interpretación de los hallazgos obtenidos y presentando proyecciones del trabajo realizado. Algunos ejemplos para cumplir con el propósito en la conclusión son: - Se ha extraído una serie de conclusiones a partir de los resultados de este estudio… - Concluyendo esta sección es posible señalar que… - El presente estudio fue diseñado para determinar… - El principal objetivo del presente informe era… - Este estudio ha demostrado que… - Estos hallazgos sugieren que, en general,… - Una limitación de este informe es que… - Los hallazgos de este informe están sujetos por lo menos a X limitaciones: en primer lugar,… - Las siguiente conclusiones se pueden extraer de este informe:… - Los resultados de este informe indican que…",
        negativeFeedback: "¡Tu conclusión contiene oraciones que no cumplen con el propósito discursivo del apartado. Revisa los colores con que se destacan las oraciones, para conocer a qué propósito se ajustan más. Te recomendamos revisar el propósito de este apartado, evaluar si se ajusta o no a lo requerido y corregir en caso de ser necesario.",
        positiveFeedback: "¡Excelente! La Conclusión tiene oraciones que cumplen con el propósito discursivo del apartado.",
        errorExample: "placeholder",
        errorCorrection: "placeholder",
        errorComment: "placeholder",
        style: "bg-blue",
        nro_errores: 0
      }
    },
  },
  default: {
    html: null,
    feedbackTypes: null
  },
  estadisticasGenerales: null,
  analysisTab: null,
  analysisGroupTab: null,
  selectedTabIndex: "gerundios",
  filename: "mecanicacuantica.doc",
}

const store = new Vuex.Store({
  state: initialState,
  getters,
  actions,
  mutations,
})

export default store;