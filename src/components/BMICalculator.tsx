
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

const BMICalculator = () => {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string>("");

  const calculateBMI = () => {
    if (feet && inches && weight) {
      // Convert height to total inches
      const heightInInches = (Number(feet) * 12) + Number(inches);
      const weightInPounds = Number(weight);
      
      // BMI Formula for imperial units: (weight in pounds * 703) / (height in inches)²
      const bmi = (weightInPounds * 703) / (heightInInches * heightInInches);
      setBmiResult(Number(bmi.toFixed(1)));

      if (bmi < 18.5) setBmiCategory("Underweight");
      else if (bmi < 25) setBmiCategory("Normal weight");
      else if (bmi < 30) setBmiCategory("Overweight");
      else setBmiCategory("Obese");
    }
  };

  return (
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
        <div className="max-w-md mx-auto bg-accent p-6 rounded-xl shadow-sm border-2 border-purple-200">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="feet">Height (feet)</Label>
                <Input
                  id="feet"
                  type="number"
                  placeholder="Feet"
                  value={feet}
                  onChange={(e) => setFeet(e.target.value)}
                  min="0"
                  max="8"
                  className="border-purple-100 focus-visible:ring-purple-200"
                />
              </div>
              <div>
                <Label htmlFor="inches">Height (inches)</Label>
                <Input
                  id="inches"
                  type="number"
                  placeholder="Inches"
                  value={inches}
                  onChange={(e) => setInches(e.target.value)}
                  min="0"
                  max="11"
                  className="border-purple-100 focus-visible:ring-purple-200"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="weight">Weight (lb)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="Enter weight in pounds"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                min="0"
                className="border-purple-100 focus-visible:ring-purple-200"
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
              <div className="mt-4 p-4 bg-white rounded-lg border-2 border-purple-100">
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
  );
};

export default BMICalculator;
