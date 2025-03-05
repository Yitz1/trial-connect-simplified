
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const GeneralApplication = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const handleApplicationClick = () => {
    navigate('/apply/general');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("generalApplication")}
          </h2>
          <p className="text-muted-foreground">
            {t("generalAppDescription")}
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div 
            className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100"
            onClick={handleApplicationClick}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {t("futureTrials")}
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                {t("submitInfo")}
              </p>
              <div className="flex items-center gap-2 text-primary group-hover:translate-x-1 transition-transform">
                <span className="text-sm font-medium">{t("applyNow")}</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralApplication;
