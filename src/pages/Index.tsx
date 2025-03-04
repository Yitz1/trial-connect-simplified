
import Hero from "@/components/Hero";
import GeneralApplication from "@/components/GeneralApplication";
import BMICalculator from "@/components/BMICalculator";
import TrialsSection from "@/components/TrialsSection";
import Benefits from "@/components/Benefits";
import TestimonialCard from "@/components/TestimonialCard";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  const scrollToTrials = () => {
    const trialsSection = document.getElementById('featured-trials');
    if (trialsSection) {
      trialsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <div className="bg-primary text-white text-sm py-2">
        <div className="container mx-auto px-6 text-center">
          {t("partOf")}{" "}
          <a 
            href="https://floridacrc.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-white/90 font-medium"
          >
            Florida CRC
          </a>
        </div>
      </div>

      <Hero onFindTrialsClick={scrollToTrials} />
      <GeneralApplication />
      <TrialsSection />
      <BMICalculator />
      <Benefits />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("whatParticipantsSay")}
            </h2>
            <p className="text-muted-foreground">
              {t("realExperiences")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote={t("testimonial1")}
              author="Sarah Johnson"
              title={t("trialParticipant")}
              rating={5}
            />
            <TestimonialCard
              quote={t("testimonial2")}
              author="Michael Chen"
              title={t("researchParticipant")}
              rating={5}
            />
            <TestimonialCard
              quote={t("testimonial3")}
              author="Emily Rodriguez"
              title={t("studyVolunteer")}
              rating={5}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("faq")}
            </h2>
            <p className="text-muted-foreground">
              {t("findAnswers")}
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
