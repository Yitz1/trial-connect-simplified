
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

interface HeroProps {
  onFindTrialsClick: () => void;
}

const Hero = ({ onFindTrialsClick }: HeroProps) => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-accent overflow-hidden">
      <div className="container mx-auto px-6 py-24">
        <div className="absolute top-4 right-4 z-10">
          <LanguageToggle />
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block animate-fadeIn text-primary text-sm font-medium bg-secondary px-4 py-2 rounded-full mb-6">
            {t("advancingHealthcare")}
          </span>
          <h1 className="animate-fadeIn text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("joinClinicalTrials")}
          </h1>
          <p className="animate-fadeIn text-lg text-muted-foreground mb-8">
            {t("heroDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onFindTrialsClick}
              className="animate-fadeIn bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              {t("findTrials")}
            </button>
            <a 
              href="https://floridacrc.com/faqs/"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fadeIn bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-primary inline-flex items-center justify-center"
            >
              {t("learnMore")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
