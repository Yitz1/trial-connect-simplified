
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

interface LanguageOption {
  label: string;
  value: string;
  flag: string;
}

const ApplyGeneral = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  // English and Spanish forms for general application
  const formUrls = {
    en: "https://docs.google.com/forms/d/e/1FAIpQLSfkW3Z3eLUAM5ixpw03NTaGJYGoqntug1OH4VOQ3cLWdL-3dQ/viewform?usp=header",
    es: "" // Will be updated when the Spanish form URL is provided
  };

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
    
    if (langCode === 'es' && !formUrls.es) {
      toast.error(language === 'en' 
        ? "This form is not yet available in Spanish" 
        : "Este formulario aún no está disponible en español");
      return;
    }
    
    window.open(formUrl, '_blank', 'noopener,noreferrer');
  };

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
            
            <h2 className="font-semibold text-xl mb-4 text-gray-900">
              {language === 'en' ? 'Future Clinical Trials Application' : 'Solicitud para Futuros Ensayos Clínicos'}
            </h2>
            
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

export default ApplyGeneral;
