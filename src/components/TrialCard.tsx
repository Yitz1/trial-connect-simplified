
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TrialCardProps {
  title: string;
  description: string;
  location: string;
  compensation: string;
  formUrl: string;
  onClick: () => void;
}

const TrialCard = ({ title, description, location, compensation, onClick }: TrialCardProps) => {
  const { t } = useLanguage();
  
  return (
    <div 
      className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100"
      onClick={onClick}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs font-medium text-primary/80 bg-secondary px-3 py-1 rounded-full">
              {t("activeTrial")}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
        <div className="flex flex-col gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="font-medium">{t("location")}</span> {location}
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">{t("compensation")}</span> {compensation}
          </div>
        </div>
        <div className="flex items-center gap-2 text-primary group-hover:translate-x-1 transition-transform">
          <span className="text-sm font-medium">{t("applyNow")}</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
};

export default TrialCard;
