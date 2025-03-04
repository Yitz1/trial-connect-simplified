
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English and Spanish translations
const translations = {
  en: {
    // Hero section
    "advancingHealthcare": "Advancing Healthcare Together",
    "joinClinicalTrials": "Join Clinical Trials That Shape the Future of Medicine",
    "heroDescription": "Connect with groundbreaking medical research opportunities. Your participation could help develop treatments that change lives.",
    "findTrials": "Find Trials",
    "learnMore": "Learn More",
    
    // General Application
    "generalApplication": "General Application",
    "generalAppDescription": "Interested in future clinical trials? Submit a general application to be considered for upcoming studies.",
    "futureTrials": "Future Clinical Trials Application",
    "submitInfo": "Submit your information to be considered for future clinical trials. We'll contact you when studies matching your profile become available.",
    "applyNow": "Apply Now",
    
    // Featured Trials
    "featuredTrials": "Featured Clinical Trials",
    "exploreOpportunities": "Explore our current research opportunities and find the right trial for you.",
    "activeTrial": "Active Trial",
    "location": "Location:",
    "compensation": "Compensation:",
    
    // BMI Calculator
    "bmiCalculator": "BMI Calculator",
    "bmiDescription": "Calculate your Body Mass Index (BMI) to better understand your health status.",
    "heightFeet": "Height (feet)",
    "heightInches": "Height (inches)",
    "weight": "Weight (lb)",
    "feet": "Feet",
    "inches": "Inches",
    "enterWeight": "Enter weight in pounds",
    "calculateBMI": "Calculate BMI",
    "yourBMI": "Your BMI:",
    "category": "Category:",
    "underweight": "Underweight",
    "normalWeight": "Normal weight",
    "overweight": "Overweight",
    "obese": "Obese",
    
    // Benefits
    "whyParticipate": "Why Participate?",
    "joinUsAdvancing": "Join us in advancing medical research while receiving personal benefits.",
    "advanceMedicalScience": "Advance Medical Science",
    "contributeTo": "Contribute to groundbreaking research that helps future generations.",
    "expertMedicalCare": "Expert Medical Care",
    "receiveAttention": "Receive attention from leading healthcare professionals.",
    "fairCompensation": "Fair Compensation",
    "getCompensated": "Get compensated for your valuable time and participation.",
    
    // Testimonials
    "whatParticipantsSay": "What Participants Say",
    "realExperiences": "Real experiences from people who have participated in our clinical trials.",
    "testimonial1": "The team was professional and caring throughout the entire process. I felt well-informed and supported.",
    "testimonial2": "Participating in this trial gave me access to cutting-edge treatment options I wouldn't have had otherwise.",
    "testimonial3": "The entire experience was well-organized and the staff was incredibly helpful and knowledgeable.",
    "trialParticipant": "Trial Participant",
    "researchParticipant": "Research Participant",
    "studyVolunteer": "Study Volunteer",
    
    // FAQ
    "faq": "Frequently Asked Questions",
    "findAnswers": "Find answers to common questions about participating in clinical trials.",
    "question1": "What are clinical trials?",
    "answer1": "Clinical trials are research studies that test how well new medical approaches work in people. These studies help find better ways to prevent, screen for, diagnose, or treat diseases.",
    "question2": "Is participating in a clinical trial safe?",
    "answer2": "Clinical trials follow strict scientific standards and ethical guidelines to protect participants. Each trial is approved and monitored by an Institutional Review Board (IRB) that ensures risks are minimal and worth any potential benefits.",
    "question3": "How long do trials typically last?",
    "answer3": "The duration varies greatly depending on what's being studied. Some trials last days or weeks, while others may continue for months or years. The specific timeframe will be clearly communicated before you agree to participate.",
    "question4": "Will I be compensated for participating?",
    "answer4": "Most clinical trials offer compensation for participants' time and commitment. The amount varies by study and will be clearly outlined in the study information.",
    
    // Footer
    "clinicalTrialsConnect": "Clinical Trials Connect",
    "footerDescription": "Connecting people with groundbreaking clinical research opportunities. Together, we're advancing medical science and improving lives.",
    "quickLinks": "Quick Links",
    "aboutUs": "About Us",
    "contact": "Contact",
    "legal": "Legal",
    "privacyPolicy": "Privacy Policy",
    "termsOfService": "Terms of Service",
    "cookiePolicy": "Cookie Policy",
    "allRightsReserved": "All rights reserved.",
    "partOf": "A part of",
  },
  es: {
    // Hero section
    "advancingHealthcare": "Avanzando en la Salud Juntos",
    "joinClinicalTrials": "Únete a Ensayos Clínicos que Moldean el Futuro de la Medicina",
    "heroDescription": "Conéctate con oportunidades innovadoras de investigación médica. Tu participación podría ayudar a desarrollar tratamientos que cambian vidas.",
    "findTrials": "Buscar Ensayos",
    "learnMore": "Aprender Más",
    
    // General Application
    "generalApplication": "Solicitud General",
    "generalAppDescription": "¿Interesado en futuros ensayos clínicos? Envía una solicitud general para ser considerado para próximos estudios.",
    "futureTrials": "Solicitud para Futuros Ensayos Clínicos",
    "submitInfo": "Envía tu información para ser considerado para futuros ensayos clínicos. Te contactaremos cuando haya estudios que coincidan con tu perfil.",
    "applyNow": "Aplicar Ahora",
    
    // Featured Trials
    "featuredTrials": "Ensayos Clínicos Destacados",
    "exploreOpportunities": "Explora nuestras oportunidades de investigación actuales y encuentra el ensayo adecuado para ti.",
    "activeTrial": "Ensayo Activo",
    "location": "Ubicación:",
    "compensation": "Compensación:",
    
    // BMI Calculator
    "bmiCalculator": "Calculadora de IMC",
    "bmiDescription": "Calcula tu Índice de Masa Corporal (IMC) para comprender mejor tu estado de salud.",
    "heightFeet": "Altura (pies)",
    "heightInches": "Altura (pulgadas)",
    "weight": "Peso (lb)",
    "feet": "Pies",
    "inches": "Pulgadas",
    "enterWeight": "Ingrese el peso en libras",
    "calculateBMI": "Calcular IMC",
    "yourBMI": "Tu IMC:",
    "category": "Categoría:",
    "underweight": "Bajo peso",
    "normalWeight": "Peso normal",
    "overweight": "Sobrepeso",
    "obese": "Obesidad",
    
    // Benefits
    "whyParticipate": "¿Por qué Participar?",
    "joinUsAdvancing": "Únete a nosotros en el avance de la investigación médica mientras recibes beneficios personales.",
    "advanceMedicalScience": "Avanzar la Ciencia Médica",
    "contributeTo": "Contribuye a investigaciones innovadoras que ayudan a las generaciones futuras.",
    "expertMedicalCare": "Atención Médica Experta",
    "receiveAttention": "Recibe atención de profesionales de la salud líderes.",
    "fairCompensation": "Compensación Justa",
    "getCompensated": "Obtén compensación por tu valioso tiempo y participación.",
    
    // Testimonials
    "whatParticipantsSay": "Lo que Dicen los Participantes",
    "realExperiences": "Experiencias reales de personas que han participado en nuestros ensayos clínicos.",
    "testimonial1": "El equipo fue profesional y atento durante todo el proceso. Me sentí bien informado y apoyado.",
    "testimonial2": "Participar en este ensayo me dio acceso a opciones de tratamiento de vanguardia que de otro modo no hubiera tenido.",
    "testimonial3": "Toda la experiencia estuvo bien organizada y el personal fue increíblemente útil y conocedor.",
    "trialParticipant": "Participante del Ensayo",
    "researchParticipant": "Participante de Investigación",
    "studyVolunteer": "Voluntario del Estudio",
    
    // FAQ
    "faq": "Preguntas Frecuentes",
    "findAnswers": "Encuentra respuestas a preguntas comunes sobre la participación en ensayos clínicos.",
    "question1": "¿Qué son los ensayos clínicos?",
    "answer1": "Los ensayos clínicos son estudios de investigación que prueban qué tan bien funcionan los nuevos enfoques médicos en las personas. Estos estudios ayudan a encontrar mejores formas de prevenir, detectar, diagnosticar o tratar enfermedades.",
    "question2": "¿Es seguro participar en un ensayo clínico?",
    "answer2": "Los ensayos clínicos siguen estrictos estándares científicos y directrices éticas para proteger a los participantes. Cada ensayo es aprobado y supervisado por un Comité de Revisión Institucional (IRB) que garantiza que los riesgos sean mínimos y valgan la pena por los beneficios potenciales.",
    "question3": "¿Cuánto tiempo duran típicamente los ensayos?",
    "answer3": "La duración varía considerablemente según lo que se esté estudiando. Algunos ensayos duran días o semanas, mientras que otros pueden continuar durante meses o años. El plazo específico se comunicará claramente antes de que aceptes participar.",
    "question4": "¿Seré compensado por participar?",
    "answer4": "La mayoría de los ensayos clínicos ofrecen compensación por el tiempo y el compromiso de los participantes. La cantidad varía según el estudio y se indicará claramente en la información del estudio.",
    
    // Footer
    "clinicalTrialsConnect": "Conexión de Ensayos Clínicos",
    "footerDescription": "Conectando personas con oportunidades innovadoras de investigación clínica. Juntos, estamos avanzando la ciencia médica y mejorando vidas.",
    "quickLinks": "Enlaces Rápidos",
    "aboutUs": "Sobre Nosotros",
    "contact": "Contacto",
    "legal": "Legal",
    "privacyPolicy": "Política de Privacidad",
    "termsOfService": "Términos de Servicio",
    "cookiePolicy": "Política de Cookies",
    "allRightsReserved": "Todos los derechos reservados.",
    "partOf": "Una parte de",
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check if language is saved in localStorage
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'en';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translate function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
