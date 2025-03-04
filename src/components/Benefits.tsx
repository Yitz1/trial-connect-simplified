
import { Heart, CheckCircle2, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Benefits = () => {
  const { t } = useLanguage();
  
  const benefits = [
    {
      title: t("advanceMedicalScience"),
      description: t("contributeTo"),
      icon: Heart,
    },
    {
      title: t("expertMedicalCare"),
      description: t("receiveAttention"),
      icon: CheckCircle2,
    },
    {
      title: t("fairCompensation"),
      description: t("getCompensated"),
      icon: Search,
    },
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("whyParticipate")}
          </h2>
          <p className="text-muted-foreground">
            {t("joinUsAdvancing")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
