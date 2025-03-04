
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BMICalculator = () => {
  const { t } = useLanguage();
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

      if (bmi < 18.5) setBmiCategory(t("underweight"));
      else if (bmi < 25) setBmiCategory(t("normalWeight"));
      else if (bmi < 30) setBmiCategory(t("overweight"));
      else setBmiCategory(t("obese"));
    }
  };

  return (
    <section className="py-20 bg-white border-y-2 border-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("bmiCalculator")}
          </h2>
          <p className="text-muted-foreground">
            {t("bmiDescription")}
          </p>
        </div>
        <div className="max-w-md mx-auto bg-accent p-6 rounded-xl shadow-sm border-2 border-purple-200">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-2 rounded-lg border border-purple-100/50">
                <Label htmlFor="feet">{t("heightFeet")}</Label>
                <Input
                  id="feet"
                  type="number"
                  placeholder={t("feet")}
                  value={feet}
                  onChange={(e) => setFeet(e.target.value)}
                  min="0"
                  max="8"
                  className="border-purple-100 focus-visible:ring-purple-200"
                />
              </div>
              <div className="p-2 rounded-lg border border-purple-100/50">
                <Label htmlFor="inches">{t("heightInches")}</Label>
                <Input
                  id="inches"
                  type="number"
                  placeholder={t("inches")}
                  value={inches}
                  onChange={(e) => setInches(e.target.value)}
                  min="0"
                  max="11"
                  className="border-purple-100 focus-visible:ring-purple-200"
                />
              </div>
            </div>
            <div className="p-2 rounded-lg border border-purple-100/50">
              <Label htmlFor="weight">{t("weight")}</Label>
              <Input
                id="weight"
                type="number"
                placeholder={t("enterWeight")}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                min="0"
                className="border-purple-100 focus-visible:ring-purple-200"
              />
            </div>
            <Button 
              onClick={calculateBMI}
              className="w-full border border-purple-100"
            >
              <Calculator className="mr-2" />
              {t("calculateBMI")}
            </Button>
            {bmiResult !== null && (
              <div className="mt-4 p-4 bg-white rounded-lg border-2 border-purple-100">
                <p className="text-lg font-medium text-gray-900">
                  {t("yourBMI")} {bmiResult}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t("category")} {bmiCategory}
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
