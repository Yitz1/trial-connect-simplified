
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

interface LanguageOption {
  label: string;
  value: string;
  flag: string;
}

const ApplyTrial = () => {
  const { trialId } = useParams();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [trial, setTrial] = useState<any>(null);
  
  // English and Spanish forms
  const formUrls = {
    en: "https://docs.google.com/forms/d/e/1FAIpQLSdpwdmYvWOQ9o5TTc2pChHTRxBqyaHRVaJAblQ9HKHD7Ud00g/viewform?usp=header",
    es: "https://docs.google.com/forms/d/e/1FAIpQLSeUKhuLiLntSUQeSsKZkOoUhuMABp6fwW2DU3ugAMmMmPCTxQ/viewform?usp=header"
  };

  useEffect(() => {
    // Fetch the trial data based on the current language
    const featuredTrials = {
      en: [
        {
          id: "depression",
          title: "Major Depressive Disorder Study",
          description: "Participating in innovative research for treatment-resistant major depressive disorder. Join us in advancing mental health care.",
          location: "Miami-Ft. Lauderdale, FL",
          compensation: "Up to $1,050",
          formUrl: formUrls.en,
        },
        {
          id: "birthcontrol",
          title: "Birth Control Trial",
          description: "Participate in a research study evaluating new birth control methods. Your participation helps advance women's healthcare options.",
          location: "Miami-Ft. Lauderdale, FL",
          compensation: "Up to $1,500",
          formUrl: formUrls.en,
        },
      ],
      es: [
        {
          id: "depression",
          title: "Estudio sobre Trastorno Depresivo Mayor",
          description: "Participando en investigación innovadora para el trastorno depresivo mayor resistente al tratamiento. Únete a nosotros para avanzar en la atención de la salud mental.",
          location: "Miami-Ft. Lauderdale, FL",
          compensation: "Hasta $1,050",
          formUrl: formUrls.es,
        },
        {
          id: "birthcontrol",
          title: "Ensayo de Control de Natalidad",
          description: "Participa en un estudio de investigación que evalúa nuevos métodos de control de natalidad. Tu participación ayuda a avanzar en las opciones de atención médica para mujeres.",
          location: "Miami-Ft. Lauderdale, FL",
          compensation: "Hasta $1,500",
          formUrl: formUrls.es,
        },
      ]
    };

    // Special handling for the general application
    if (trialId === 'general') {
      navigate('/apply/general');
      return;
    }

    // Find the trial by ID
    const currentTrial = featuredTrials[language].find(t => t.id === trialId);
    
    if (currentTrial) {
      setTrial(currentTrial);
    } else {
      toast.error(language === 'en' ? "Trial not found" : "Ensayo no encontrado");
      navigate('/');
    }
  }, [trialId, language, navigate]);

  const languageOptions: LanguageOption[] = [
    { 
      label: "Continue in English", 
      value: "en",
      flag: "🇺🇸"
    },
    { 
      label: "Continuar en Español", 
      value: "es",
      flag: "🇪🇸"
    }
  ];

  const handleLanguageSelect = (langCode: string) => {
    const formUrl = langCode === 'en' ? formUrls.en : formUrls.es;
    
    if (!formUrl) {
      toast.error(language === 'en' 
        ? "This form is not yet available in the selected language" 
        : "Este formulario aún no está disponible en el idioma seleccionado");
      return;
    }
    
    window.open(formUrl, '_blank', 'noopener,noreferrer');
  };

  if (!trial) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'en' ? 'Select Application Language' : 'Seleccione el Idioma de la Aplicación'}
              </h1>
              <p className="text-muted-foreground">
                {language === 'en' 
                  ? 'Please select your preferred language for the application form.' 
                  : 'Por favor, seleccione su idioma preferido para el formulario de solicitud.'}
              </p>
            </div>
            
            <h2 className="font-semibold text-xl mb-4 text-gray-900">{trial.title}</h2>
            
            <div className="space-y-4 mt-6">
              {languageOptions.map((option) => (
                <Button
                  key={option.value}
                  variant="outline"
                  className="w-full py-6 justify-start text-base hover:bg-secondary"
                  onClick={() => handleLanguageSelect(option.value)}
                >
                  <span className="mr-2 text-2xl">{option.flag}</span>
                  {option.label}
                </Button>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="text-muted-foreground"
              >
                {language === 'en' ? 'Return to Home' : 'Volver al Inicio'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyTrial;
