export const Analisis = {
  lexicoGramatical: {
    analysisTypes: {
      gerundios: {
        analysisTitle: "Gerundios",
        endpoint: "gerunds"
      }
    },
    tabTitle: "Léxico Gramatical"
  },
  formal: {
    analysisTypes: {
      oraciones: {
        analysisTitle: "Oraciones",
        endpoint: "oraciones"
      },
      parrafos: {
        analysisTitle: "Párrafos",
        endpoint: "micro_paragraphs",
      }
    },
    tabTitle: "Formal"
  },
  estilo: {
    analysisTypes: {
      persona:  {
        analysisTitle: "Primera y Segunda Persona",
        endpoint: "fs_person"
      },
      vozPasiva: { 
        analysisTitle: "Voz Pasiva",
        endpoint: "passive_voice"
      },
      conectores: {
        analysisTitle: "Conectores",
        endpoint: "conectores"
      }
    },
    tabTitle: "Estilo"
  },
  discursivo: {
    analysisTypes: {
      complejidad: {
        analysisTitle: "Complejidad",
        endpoint: "sentence_complexity"
      },
      lecturabilidad: {
        analysisTitle: "Lecturabilidad",
        endpoint: "lecturabilidad_parrafo"
      },
      proposito: {
        analysisTitle: "Propósito",
        endpoint: "proposito"
      }
    },
    tabTitle: "Discursivo"
  }
}

export const PREHTML = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
export const POSTHTML = "</body></html>";
export const FEEDBACKSTYPESTDISABLED = ["Lecturabilidad Difícil", "Lecturabilidad Algo Difícil", "Lecturabilidad Normal", "Lecturabilidad Algo Fácil", "Lecturabilidad Fácil", "Resumen", "Introducción", "Desarrollo", "Resultados", "Conclusión"];
export const CAPSULAS = [
  { titulo: "Cápsula 1: Nociones fundamentales para la producción textual", link: "https://drive.google.com/file/d/1Q_slNUEuOdO9iCWc38sqkReQcA1vLBsv/preview"},
  { titulo: "Cápsula 2: Características de la escritura en Ingeniería", link: "https://drive.google.com/file/d/1pBJfeHfLsfVMlvgbdYB3kRZmfaWZ_-WP/preview"},
  { titulo: "Cápsula 3: Características del género informe en Ingeniería", link: "https://drive.google.com/file/d/1e9bJU-ocvJRFgVF7NArmPrS8o1Tp_A8C/preview"},
  { titulo: "Cápsula 4A: Informe de laboratorio", link: "https://drive.google.com/file/d/1oX9TVK7jw4t6owhU3Fea0Z3RNJso27bR/preview"},
  { titulo: "Cápsula 4B: Informe de caso", link: "https://drive.google.com/file/d/1So_hQoUKGuu7l8zlurUI72beA52GGcNP/preview"},
  { titulo: "Cápsula 4C: Trabajo final de grado", link: "https://drive.google.com/file/d/1bjBefAjUaIrwrcuj-7ObVNqSUJHfRiv6/preview"},
  { titulo: "Cápsula 4D: Informe final de proyecto de título", link: "https://drive.google.com/file/d/18tozLzVSBdkqlsMc7AHp2fPod-IWw5wU/preview"},
];







