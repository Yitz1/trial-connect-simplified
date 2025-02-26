
import { Heart, CheckCircle2, Search } from "lucide-react";

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

const Benefits = () => {
  return (
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
  );
};

export default Benefits;
