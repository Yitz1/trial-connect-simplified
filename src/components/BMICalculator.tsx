
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string>("");

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
  );
};

export default BMICalculator;
