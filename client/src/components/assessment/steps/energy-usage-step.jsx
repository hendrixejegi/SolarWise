import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Zap, Info } from "lucide-react";

const commonAppliances = [
  { id: "refrigerator", label: "Refrigerator", consumption: 150 },
  { id: "ac", label: "Air Conditioner", consumption: 1000 },
  { id: "tv", label: "Television", consumption: 100 },
  { id: "washer", label: "Washing Machine", consumption: 500 },
  { id: "computer", label: "Computer/Laptop", consumption: 200 },
  { id: "lights", label: "Lighting", consumption: 100 },
  { id: "water-heater", label: "Water Heater", consumption: 400 },
  { id: "microwave", label: "Microwave", consumption: 800 },
  { id: "fan", label: "Ceiling/Standing Fan", consumption: 75 },
  { id: "iron", label: "Electric Iron", consumption: 1000 },
  { id: "water-pump", label: "Water Pump", consumption: 750 },
];

export function EnergyUsageStep(props) {
  const data = props.data.energyUsage;

  const [monthlyUsage, setMonthlyUsage] = useState(data.monthly || 0);
  const [selectedAppliances, setSelectedAppliances] = useState(
    data.appliances || []
  );
  const [estimatedUsage, setEstimatedUsage] = useState(0);

  const handleConsumptionChange = (value) => {
    const numValue = Number(value);
    setMonthlyUsage(numValue);
    props.updateData({
      energyUsage: {
        monthly: numValue,
        appliances: selectedAppliances,
      },
    });
  };

  const handleApplianceToggle = (applianceId, checked) => {
    let newSelectedAppliances = [];

    if (checked) {
      newSelectedAppliances = [...selectedAppliances, applianceId];
    } else {
      newSelectedAppliances = selectedAppliances.filter(
        (id) => id !== applianceId
      );
    }

    setSelectedAppliances(newSelectedAppliances);
    const estimatedUsage = calculateEstimatedUsage(newSelectedAppliances);
    setEstimatedUsage(estimatedUsage);

    props.updateData({
      energyUsage: {
        monthly: monthlyUsage,
        appliances: newSelectedAppliances,
      },
    });
  };

  const calculateEstimatedUsage = (nsa) =>
    commonAppliances
      .filter((appliance) => nsa.includes(appliance.id))
      .reduce((sum, a) => sum + a.consumption, 0);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Energy Consumption</h2>
        <p>
          Help us understand your energy needs to recommend the right system
          size
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="consumption">
          Monthly Electricity Consumption (kWh)
        </Label>
        <div className="flex gap-4 items-center">
          <Input
            id="consumption"
            type="number"
            value={monthlyUsage === 0 ? "" : monthlyUsage}
            placeholder="e.g., 300"
            onChange={(event) => handleConsumptionChange(event.target.value)}
          />
          <span className="font-semibold">kWh/month</span>
        </div>
        <span className="text-sm text-neutral-900">
          You can find this information on your electricity bill
        </span>
      </div>

      <div className="space-y-2">
        <Label>Select Your Major Appliances</Label>
        <div className="rounded-lg border p-4">
          <div className="grid grid-cols-2 gap-3">
            {commonAppliances.map((a) => (
              <div key={a.id} className="flex items-center space-x-2">
                <Checkbox
                  id={a.id}
                  checked={selectedAppliances.includes(a.id)}
                  onCheckedChange={(checked) =>
                    handleApplianceToggle(a.id, checked === true)
                  }
                />
                <div className="flex w-full justify-between">
                  <Label htmlFor={a.id}>{a.label}</Label>
                  <span>{a.consumption} W</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedAppliances.length > 0 && (
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <div className="flex items-start gap-4">
            <Zap className="h-8 w-8 text-yellow-500 mt-1" />
            <div>
              <h3 className="font-semibold text-lg mb-1">
                Estimated Power Consumption
              </h3>
              <p className="text-gray-600 mb-2">
                Based on your selected appliances, your estimated peak power
                consumption is approximately{" "}
                <strong>{estimatedUsage} watts</strong>.
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <Info className="h-4 w-4" />
                This is a rough estimate and actual consumption may vary based
                on usage patterns
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
