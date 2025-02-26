
import Hero from "@/components/Hero";
import BMICalculator from "@/components/BMICalculator";
import TrialsSection from "@/components/TrialsSection";
import Benefits from "@/components/Benefits";
import TestimonialCard from "@/components/TestimonialCard";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
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
          A part of{" "}
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
      <BMICalculator />
      <TrialsSection />
      <Benefits />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Participants Say
            </h2>
            <p className="text-muted-foreground">
              Real experiences from people who have participated in our clinical trials.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="The team was professional and caring throughout the entire process. I felt well-informed and supported."
              author="Sarah Johnson"
              title="Trial Participant"
              rating={5}
            />
            <TestimonialCard
              quote="Participating in this trial gave me access to cutting-edge treatment options I wouldn't have had otherwise."
              author="Michael Chen"
              title="Research Participant"
              rating={5}
            />
            <TestimonialCard
              quote="The entire experience was well-organized and the staff was incredibly helpful and knowledgeable."
              author="Emily Rodriguez"
              title="Study Volunteer"
              rating={5}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about participating in clinical trials.
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
