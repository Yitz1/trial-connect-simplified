
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("clinicalTrialsConnect")}</h3>
            <p className="text-muted-foreground text-sm">
              {t("footerDescription")}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              <li><a href="https://floridacrc.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("aboutUs")}</a></li>
              <li><a href="https://floridacrc.com/faqs/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("contact")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">{t("legal")}</h4>
            <ul className="space-y-2">
              <li><a href="https://floridacrc.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("privacyPolicy")}</a></li>
              <li><a href="https://floridacrc.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("termsOfService")}</a></li>
              <li><a href="https://floridacrc.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("cookiePolicy")}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} {t("clinicalTrialsConnect")}. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
