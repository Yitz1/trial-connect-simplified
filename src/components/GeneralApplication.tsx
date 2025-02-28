
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const GeneralApplication = () => {
  const handleApplicationClick = () => {
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfkW3Z3eLUAM5ixpw03NTaGJYGoqntug1OH4VOQ3cLWdL-3dQ/viewform?usp=header";
    try {
      window.open(formUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening form:', error);
      toast.error("Unable to open the form. Please try again later.");
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            General Application
          </h2>
          <p className="text-muted-foreground">
            Interested in future clinical trials? Submit a general application to be considered for upcoming studies.
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
                  <span className="text-xs font-medium text-primary/80 bg-secondary px-3 py-1 rounded-full">
                    Open for Applications
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    Future Clinical Trials Application
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Submit your information to be considered for future clinical trials. We'll contact you when studies matching your profile become available.
              </p>
              <div className="flex items-center gap-2 text-primary group-hover:translate-x-1 transition-transform">
                <span className="text-sm font-medium">Apply Now</span>
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
