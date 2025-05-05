import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { DollarSign, PiggyBank, CreditCard, Info } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export function BudgetStep(props) {
  const data = props.data.budget;

  const [budgetRange, setBudgetRange] = useState(data.range || [1000, 5000]);
  const [useFinancing, setUseFinancing] = useState(data.financing || false);

  const handleBudgetChange = (value) => {
    setBudgetRange(value);
    props.updateData({
      budget: {
        range: value,
        financing: useFinancing,
      },
    });
  };

  const handleFinancingChange = (checked) => {
    setUseFinancing(checked);
    props.updateData({
      budget: {
        range: budgetRange,
        financing: checked,
      },
    });
  };

  const calculateMonthlyPayment = () => {
    const averageBudget = (budgetRange[0] + budgetRange[1]) / 2;
    // Assuming 5-year financing with 10% interest
    const monthlyPayment = (averageBudget * 1.1) / 60;
    return Math.round(monthlyPayment);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Budget Information</h2>
        <p>Let us know your budget to recommend affordable solar solutions</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between">
            <Label>Budget Range (USD)</Label>
            <span>
              ${budgetRange[0]} - ${budgetRange[1]}
            </span>
          </div>
          <Slider
            defaultValue={budgetRange}
            min={0}
            max={20000}
            step={100}
            onValueChange={(value) => handleBudgetChange(value)}
          />
        </div>
        <div className="rounded-lg border border-primary-200 bg-primary-50 p-4">
          <div className="flex items-start gap-4">
            <DollarSign className="h-8 w-8 text-success-600 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">Investment Range</h3>
              <p className="text-neutral-800 mb-2">
                With a budget of{" "}
                <strong>
                  ${budgetRange[0]} - ${budgetRange[1]}
                </strong>
                , you can expect:
              </p>
              <ul className="text-sm text-neutral-800 space-y-1 list-disc pl-4">
                {budgetRange[1] < 2000 && (
                  <>
                    <li>Small solar system (up to 1kW)</li>
                    <li>Basic power for essential appliances</li>
                    <li>Suitable for minimal energy needs</li>
                  </>
                )}
                {budgetRange[1] >= 2000 && budgetRange[1] < 5000 && (
                  <>
                    <li>Medium solar system (1-3kW)</li>
                    <li>Power for multiple appliances</li>
                    <li>Suitable for small homes or partial energy coverage</li>
                  </>
                )}
                {budgetRange[1] >= 5000 && budgetRange[1] < 10000 && (
                  <>
                    <li>Large solar system (3-5kW)</li>
                    <li>Power for most household appliances</li>
                    <li>Suitable for average-sized homes</li>
                  </>
                )}
                {budgetRange[1] >= 10000 && (
                  <>
                    <li>Premium solar system (5kW+)</li>
                    <li>Complete home power solution</li>
                    <li>Potential for energy storage with batteries</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="financing" className="cursor-pointer">
                  Interested in Financing Options
                </Label>
                <p className="text-sm text-neutral-700">
                  Spread the cost over monthly payments
                </p>
              </div>
              <Switch
                id="financing"
                checked={useFinancing}
                onCheckedChange={(checked) => handleFinancingChange(!!checked)}
              />
            </div>
          </div>
        </div>
        {useFinancing && (
          <div className="rounded-lg border border-success-100 p-4">
            <div className="flex items-start gap-4">
              <CreditCard className="h-8 w-8 text-success-700 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Financing Options
                </h3>
                <p className="text-neutral-800 mb-2">
                  With financing, you could pay approximately{" "}
                  <strong>${calculateMonthlyPayment()}/month</strong> for a
                  system in your budget range.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <PiggyBank className="h-4 w-4" />
                  <span>
                    Many customers save more on electricity than their monthly
                    payment
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="pt-2">
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <Info className="h-4 w-4" />
            Solar systems typically pay for themselves within 3-7 years through
            energy savings
          </p>
        </div>
      </div>
    </div>
  );
}
