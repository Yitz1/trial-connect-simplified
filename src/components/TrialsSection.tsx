
import { toast } from "sonner";
import TrialCard from "@/components/TrialCard";

const featuredTrials = [
  {
    title: "Major Depressive Disorder Study",
    description: "Participating in innovative research for treatment-resistant major depressive disorder. Join us in advancing mental health care.",
    location: "Miami-Ft. Lauderdale, FL",
    compensation: "Up to $1,050",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdpwdmYvWOQ9o5TTc2pChHTRxBqyaHRVaJAblQ9HKHD7Ud00g/viewform?usp=header",
  },
];

const TrialsSection = () => {
  const handleTrialClick = (formUrl: string) => {
    console.log('Opening form URL:', formUrl);
    try {
      window.open(formUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening form:', error);
      toast.error("Unable to open the form. Please try again later.");
    }
  };

  return (
    <section id="featured-trials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Clinical Trials
          </h2>
          <p className="text-muted-foreground">
            Explore our current research opportunities and find the right trial for you.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          {featuredTrials.map((trial, index) => (
            <TrialCard
              key={index}
              {...trial}
              onClick={() => handleTrialClick(trial.formUrl)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrialsSection;
