
import { toast } from "sonner";
import TrialCard from "@/components/TrialCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { getFeaturedTrials } from "@/utils/trialData";

const TrialsSection = () => {
  const { language } = useLanguage();
  const trials = getFeaturedTrials(language);

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
