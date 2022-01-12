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
export const FEEDBACKSTYPESTRED = ["Oraciones Extensas", "Gerundios Excesivos", "Párrafos Extensos", "Primera Persona Singular", "Voz Pasiva", "Ausencia de Conectores", "Complejidad"]