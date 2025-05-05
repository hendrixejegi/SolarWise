import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  Banknote,
  Clock,
  Shield,
  Leaf,
  Home,
  Battery,
  CheckCircle,
} from "lucide-react";

const priorityOptions = [
  {
    id: "cost-savings",
    label: "Cost Savings",
    description: "Maximize return on investment and reduce electricity bills",
    icon: Banknote,
  },
  {
    id: "energy-independence",
    label: "Energy Independence",
    description: "Reduce reliance on the grid and power outages",
    icon: Zap,
  },
  {
    id: "environmental-impact",
    label: "Environmental Impact",
    description: "Reduce carbon footprint and use clean energy",
    icon: Leaf,
  },
  {
    id: "system-longevity",
    label: "System Longevity",
    description: "Prioritize durability and long-term performance",
    icon: Clock,
  },
  {
    id: "aesthetics",
    label: "Aesthetics",
    description: "Sleek design that complements your property",
    icon: Home,
  },
  {
    id: "battery-storage",
    label: "Battery Storage",
    description: "Store excess energy for use during outages or at night",
    icon: Battery,
  },
  {
    id: "warranty-support",
    label: "Warranty & Support",
    description: "Comprehensive warranty and ongoing maintenance support",
    icon: Shield,
  },
];

export function PrioritiesStep(props) {
  const [selectedPriorities, setSelectedPriorities] = useState(
    props.data.priorities || []
  );

  const handlePriorityToggle = (priorityId, checked) => {
    let newSelectedPriorities = [];

    if (checked) {
      newSelectedPriorities = [...selectedPriorities, priorityId];
    } else {
      newSelectedPriorities = selectedPriorities.filter(
        (id) => id !== priorityId
      );
    }

    setSelectedPriorities(newSelectedPriorities);
    props.updateData({
      priorities: newSelectedPriorities,
    });
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Your Priorities</h2>
        <p>
          Select what matters most to you in a solar energy system (choose up to
          3)
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {priorityOptions.map((priority) => {
            const Icon = priority.icon;
            const isSelected = selectedPriorities.includes(priority.id);

            return (
              <Card
                key={priority.id}
                className={`cursor-pointer border-2 transition-colors ${
                  isSelected
                    ? "border-primary-500 bg-primary-50"
                    : "border-neutral-200 hover:border-neutral-300"
                }`}
                onClick={() =>
                  handlePriorityToggle(
                    priority.id,
                    !selectedPriorities.includes(priority.id) &&
                      selectedPriorities.length < 3
                  )
                }
              >
                <CardContent>
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 ${
                        isSelected ? "text-primary-500" : "text-neutral-500"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <Label
                          htmlFor={priority.id}
                          className="font-medium cursor-pointer"
                        >
                          {priority.label}
                        </Label>
                        {isSelected && (
                          <CheckCircle className="h-4 w-4 text-primary-500" />
                        )}
                      </div>
                      <p className="text-sm text-neutral-700 mt-1">
                        {priority.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {selectedPriorities.length > 0 && (
        <Card className="bg-primary-50 border-primary-200">
          <CardContent>
            <h3 className="font-semibold mb-2">Your Selected Priorities</h3>
            <ul className="space-y-2">
              {selectedPriorities.map((priorityId) => {
                const priority = priorityOptions.find(
                  (p) => p.id === priorityId
                );
                if (!priority) return null;

                const Icon = priority.icon;

                return (
                  <li key={priorityId} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary-500" />
                    <span className="font-medium">{priority.label}</span>
                  </li>
                );
              })}
            </ul>
            {selectedPriorities.length < 3 && (
              <p className="text-sm text-neutral-700 mt-3">
                You can select up to {3 - selectedPriorities.length} more{" "}
                {selectedPriorities.length === 2 ? "priority" : "priorities"}
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
