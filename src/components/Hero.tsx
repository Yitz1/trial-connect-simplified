
interface HeroProps {
  onFindTrialsClick: () => void;
}

const Hero = ({ onFindTrialsClick }: HeroProps) => {
  return (
    <section className="relative bg-accent overflow-hidden">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block animate-fadeIn text-primary text-sm font-medium bg-secondary px-4 py-2 rounded-full mb-6">
            Advancing Healthcare Together
          </span>
          <h1 className="animate-fadeIn text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Clinical Trials That Shape the Future of Medicine
          </h1>
          <p className="animate-fadeIn text-lg text-muted-foreground mb-8">
            Connect with groundbreaking medical research opportunities. Your participation could help develop treatments that change lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onFindTrialsClick}
              className="animate-fadeIn bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Find Trials
            </button>
            <button className="animate-fadeIn bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-primary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
