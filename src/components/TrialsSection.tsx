
import { toast } from "sonner";
import TrialCard from "@/components/TrialCard";
import { useLanguage } from "@/contexts/LanguageContext";

// Trial data with translations
const featuredTrials = {
  en: [
    {
      id: "depression",
      title: "Major Depressive Disorder Study",
      description: "Participating in innovative research for treatment-resistant major depressive disorder. Join us in advancing mental health care.",
      location: "Miami-Ft. Lauderdale, FL",
      compensation: "Up to $1,050",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdpwdmYvWOQ9o5TTc2pChHTRxBqyaHRVaJAblQ9HKHD7Ud00g/viewform?usp=header",
    },
    {
      id: "birthcontrol",
      title: "Birth Control Trial",
      description: "Participate in a research study evaluating new birth control methods. Your participation helps advance women's healthcare options.",
      location: "Miami-Ft. Lauderdale, FL",
      compensation: "Up to $1,500",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdpwdmYvWOQ9o5TTc2pChHTRxBqyaHRVaJAblQ9HKHD7Ud00g/viewform?usp=header",
    },
  ],
  es: [
    {
      id: "depression",
      title: "Estudio sobre Trastorno Depresivo Mayor",
      description: "Participando en investigación innovadora para el trastorno depresivo mayor resistente al tratamiento. Únete a nosotros para avanzar en la atención de la salud mental.",
      location: "Miami-Ft. Lauderdale, FL",
      compensation: "Hasta $1,050",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeUKhuLiLntSUQeSsKZkOoUhuMABp6fwW2DU3ugAMmMmPCTxQ/viewform?usp=header",
    },
    {
      id: "birthcontrol",
      title: "Ensayo de Control de Natalidad",
      description: "Participa en un estudio de investigación que evalúa nuevos métodos de control de natalidad. Tu participación ayuda a avanzar en las opciones de atención médica para mujeres.",
      location: "Miami-Ft. Lauderdale, FL",
      compensation: "Hasta $1,500",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdpwdmYvWOQ9o5TTc2pChHTRxBqyaHRVaJAblQ9HKHD7Ud00g/viewform?usp=header",
    },
  ]
};

const TrialsSection = () => {
  const { language } = useLanguage();
  const trials = featuredTrials[language];

  return (
    <section id="featured-trials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Featured Clinical Trials' : 'Ensayos Clínicos Destacados'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'en' 
              ? 'Explore our current research opportunities and find the right trial for you.'
              : 'Explora nuestras oportunidades de investigación actuales y encuentra el ensayo adecuado para ti.'}
          </p>
        </div>
        <div className="max-w-2xl mx-auto space-y-6">
          {trials.map((trial, index) => (
            <TrialCard
              key={index}
              {...trial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrialsSection;
