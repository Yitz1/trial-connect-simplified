
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Flag } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full border-2 border-purple-100">
      <Button
        variant={language === 'en' ? "default" : "ghost"}
        size="sm"
        className={`rounded-full px-3 ${language === 'en' ? 'bg-primary' : 'hover:bg-primary/10'}`}
        onClick={() => setLanguage('en')}
      >
        <Flag size={16} className="mr-1" />
        <span>EN</span>
      </Button>
      <Button
        variant={language === 'es' ? "default" : "ghost"}
        size="sm"
        className={`rounded-full px-3 ${language === 'es' ? 'bg-primary' : 'hover:bg-primary/10'}`}
        onClick={() => setLanguage('es')}
      >
        <Flag size={16} className="mr-1" />
        <span>ES</span>
      </Button>
    </div>
  );
};

export default LanguageToggle;
