import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Progress } from "@components/ui/progress";
import { Button } from "@components/ui/button";

import { LocationStep } from "./steps/location-step";
import { PropertyTypeStep } from "./steps/properties-step";
import { EnergyUsageStep } from "./steps/energy-usage-step";
import { BudgetStep } from "./steps/budget-step";
import { PrioritiesStep } from "./steps/priorities-step";
import { ResultsStep } from "./steps/results-step";

const initialData = {
  location: {
    city: "",
    country: "",
  },
  propertyType: "",
  propertySize: 100,
  roofSpace: 50,
  energyUsage: {
    monthly: 0,
    appliances: [],
  },
  budget: {
    range: [1000, 5000],
    financing: false,
  },
  priorities: [],
};

export function AssessmentTool() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialData);

  const totalSteps = 6;
  const progress = Math.round((step / totalSteps) * 100);

  const updateData = (newData) => {
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  // Navigation
  const nextStep = function () {
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      submitAssessment();
    }
  };

  const prevStep = function () {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  const navigate = useNavigate();
  const submitAssessment = function () {
    sessionStorage.setItem("tempAssessment", JSON.stringify(data));
    navigate("/result");
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span>
            Step {step} of {totalSteps}
          </span>
          <span>{progress}% Complete</span>
        </div>
        <Progress value={progress} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm space-y-8">
        {step === 1 && <LocationStep data={data} updateData={updateData} />}
        {step === 2 && <PropertyTypeStep data={data} updateData={updateData} />}
        {step === 3 && <EnergyUsageStep data={data} updateData={updateData} />}
        {step === 4 && <BudgetStep data={data} updateData={updateData} />}
        {step === 5 && <PrioritiesStep data={data} updateData={updateData} />}
        {step === 6 && <ResultsStep data={data} />}

        <div className="flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={step === 1}
          >
            Previous
          </Button>
          <Button
            type="button"
            onClick={nextStep}
            className={`bg-${
              step === 6 ? "success-700" : "primary-500"
            } hover:bg-${step === 6 ? "success-800" : "primary-300"}`}
          >
            {step === totalSteps ? "Submit Assessment" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
