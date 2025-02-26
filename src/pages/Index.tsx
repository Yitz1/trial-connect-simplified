import { ArrowRight, CheckCircle2, Heart, Search, Calculator } from "lucide-react";
import { useState } from "react";
import TrialCard from "@/components/TrialCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const featuredTrials = [
  {
    title: "Major Depressive Disorder Study",
    description: "Participating in innovative research for treatment-resistant major depressive disorder. Join us in advancing mental health care.",
    location: "Miami-Ft. Lauderdale, FL",
    compensation: "Up to $1,050",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfkW3Z3eLUAM5ixpw03NTaGJYGoqntug1OH4VOQ3cLWdL-3dQ/viewform?usp=header",
  },
];

const benefits = [
  {
    title: "Advance Medical Science",
    description: "Contribute to groundbreaking research that helps future generations.",
    icon: Heart,
  },
  {
    title: "Expert Medical Care",
    description: "Receive attention from leading healthcare professionals.",
    icon: CheckCircle2,
  },
  {
    title: "Fair Compensation",
    description: "Get compensated for your valuable time and participation.",
    icon: Search,
  },
];

const Index = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string>("");

  const scrollToTrials = () => {
    const trialsSection = document.getElementById('featured-trials');
    if (trialsSection) {
      trialsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = Number(height) / 100;
      const weightInKg = Number(weight);
      const bmi = weightInKg / (heightInMeters * heightInMeters);
      setBmiResult(Number(bmi.toFixed(1)));

      if (bmi < 18.5) setBmiCategory("Underweight");
      else if (bmi < 25) setBmiCategory("Normal weight");
      else if (bmi < 30) setBmiCategory("Overweight");
      else setBmiCategory("Obese");
    }
  };

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
                onClick={scrollToTrials}
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              BMI Calculator
            </h2>
            <p className="text-muted-foreground">
              Calculate your Body Mass Index (BMI) to better understand your health status.
            </p>
          </div>
          <div className="max-w-md mx-auto bg-accent p-6 rounded-xl shadow-sm">
            <div className="space-y-4">
              <div>
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="Enter height in centimeters"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="Enter weight in kilograms"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <Button 
                onClick={calculateBMI}
                className="w-full"
              >
                <Calculator className="mr-2" />
                Calculate BMI
              </Button>
              {bmiResult !== null && (
                <div className="mt-4 p-4 bg-white rounded-lg border">
                  <p className="text-lg font-medium text-gray-900">
                    Your BMI: {bmiResult}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Category: {bmiCategory}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Participate?
            </h2>
            <p className="text-muted-foreground">
              Join us in advancing medical research while receiving personal benefits.
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
