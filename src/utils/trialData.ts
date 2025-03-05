
// Trial data with translations
export const formUrls = {
  en: {
    depression: "https://docs.google.com/forms/d/e/1FAIpQLSdpwdmYvWOQ9o5TTc2pChHTRxBqyaHRVaJAblQ9HKHD7Ud00g/viewform?usp=header",
    birthcontrol: "", // Pending update
  },
  es: {
    depression: "https://docs.google.com/forms/d/e/1FAIpQLSeUKhuLiLntSUQeSsKZkOoUhuMABp6fwW2DU3ugAMmMmPCTxQ/viewform?usp=header",
    birthcontrol: "", // Pending update
  }
};

// Featured trials data
export const getFeaturedTrials = (language: 'en' | 'es') => {
  const trials = {
    en: [
      {
        id: "depression",
        title: "Major Depressive Disorder Study",
        description: "Participating in innovative research for treatment-resistant major depressive disorder. Join us in advancing mental health care.",
        location: "Miami-Ft. Lauderdale, FL",
        compensation: "Up to $1,050",
      },
      {
        id: "birthcontrol",
        title: "Birth Control Trial",
        description: "Participate in a research study evaluating new birth control methods. Your participation helps advance women's healthcare options.",
        location: "Miami-Ft. Lauderdale, FL",
        compensation: "Up to $1,500",
      },
    ],
    es: [
      {
        id: "depression",
        title: "Estudio sobre Trastorno Depresivo Mayor",
        description: "Participando en investigación innovadora para el trastorno depresivo mayor resistente al tratamiento. Únete a nosotros para avanzar en la atención de la salud mental.",
        location: "Miami-Ft. Lauderdale, FL",
        compensation: "Hasta $1,050",
      },
      {
        id: "birthcontrol",
        title: "Ensayo de Control de Natalidad",
        description: "Participa en un estudio de investigación que evalúa nuevos métodos de control de natalidad. Tu participación ayuda a avanzar en las opciones de atención médica para mujeres.",
        location: "Miami-Ft. Lauderdale, FL",
        compensation: "Hasta $1,500",
      },
    ]
  };

  return trials[language];
};
