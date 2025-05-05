import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sun,
  Zap,
  DollarSign,
  Calendar,
  CheckCircle,
  Download,
  Share2,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";

export function ResultsStep(props) {
  // Calculate recommended system size based on energy usage and property
  const calculateSystemSize = () => {
    let baseSize = props.data.energyUsage.monthly / 120; // Rough estimate: monthly kWh / 120

    // Adjust based on sunlight hours
    if (props.data.location.sunlightHours) {
      baseSize = baseSize * (6 / props.data.location.sunlightHours);
    }

    // Adjust based on roof space
    const maxSizeByRoof = props.data.roofSpace / 7; // Approx 7 sq meters per kW

    // Return the smaller of the two (can't exceed roof space)
    return Math.min(baseSize, maxSizeByRoof).toFixed(1);
  };

  // Calculate estimated cost
  const calculateCost = () => {
    const systemSize = Number.parseFloat(calculateSystemSize());
    // Average cost per kW (varies by region)
    const costPerKw = 1000;
    return Math.round(systemSize * costPerKw);
  };

  // Calculate annual savings
  const calculateAnnualSavings = () => {
    const systemSize = Number.parseFloat(calculateSystemSize());
    // Estimated annual production per kW
    const annualProduction = systemSize * 1600;
    // Estimated cost per kWh
    const costPerKwh = 0.15;
    return Math.round(annualProduction * costPerKwh);
  };

  // Calculate payback period
  const calculatePaybackPeriod = () => {
    const cost = calculateCost();
    const annualSavings = calculateAnnualSavings();
    return Math.round(cost / annualSavings);
  };

  // Get recommended system type based on priorities
  const getRecommendedSystemType = () => {
    if (props.data.priorities.includes("battery-storage")) {
      return "Hybrid System with Battery Storage";
    } else if (props.data.priorities.includes("energy-independence")) {
      return "Off-Grid System";
    } else {
      return "Grid-Tied System";
    }
  };

  // Get recommended panel type based on priorities and budget
  const getRecommendedPanelType = () => {
    const avgBudget =
      (props.data.budget.range[0] + props.data.budget.range[1]) / 2;

    if (props.data.priorities.includes("aesthetics") && avgBudget > 5000) {
      return "Premium Monocrystalline (High Efficiency)";
    } else if (avgBudget > 3000) {
      return "Standard Monocrystalline";
    } else {
      return "Polycrystalline";
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Your Solar Recommendation</h2>
        <p>Based on your inputs, here's our recommended solar solution</p>
      </div>

      <Card className="bg-primary-50 border-primary-200">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Sun className="h-8 w-8 text-yellow-500" />
            <h3 className="text-xl font-bold">Recommended Solar System</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-neutral-700 mb-1">System Size</h4>
              <p className="text-2xl font-bold">{calculateSystemSize()} kW</p>
            </div>

            <div>
              <h4 className="font-medium text-neutral-700 mb-1">System Type</h4>
              <p className="text-lg font-semibold">
                {getRecommendedSystemType()}
              </p>
            </div>

            <div>
              <h4 className="font-medium text-neutral-700 mb-1">Panel Type</h4>
              <p className="text-lg font-semibold">
                {getRecommendedPanelType()}
              </p>
            </div>

            <div>
              <h4 className="font-medium text-neutral-700 mb-1">
                Number of Panels
              </h4>
              <p className="text-lg font-semibold">
                {Math.ceil(Number.parseFloat(calculateSystemSize()) * 3)} panels
              </p>
              <p className="text-xs text-neutral-700">
                (Approximately 330W per panel)
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-primary-200">
            <h4 className="font-medium mb-3">Key Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success-500" />
                <span className="text-sm">Optimized for your energy usage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success-500" />
                <span className="text-sm">Compatible with your roof space</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success-500" />
                <span className="text-sm">Designed for your climate zone</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success-500" />
                <span className="text-sm">Aligns with your budget range</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent>
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="h-5 w-5 text-success-500" />
              <h3 className="font-semibold">Estimated Cost</h3>
            </div>
            <p className="text-2xl font-bold">${calculateCost()}</p>
            {props.data.budget.financing && (
              <p className="text-sm text-neutral-700 mt-1">
                Financing available from ${Math.round(calculateCost() / 60)}
                /month
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              <h3 className="font-semibold">Annual Savings</h3>
            </div>
            <p className="text-2xl font-bold">${calculateAnnualSavings()}</p>
            <p className="text-sm text-neutral-700 mt-1">
              Approximately ${Math.round(calculateAnnualSavings() / 12)}/month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-5 w-5 text-primary-500" />
              <h3 className="font-semibold">Payback Period</h3>
            </div>
            <p className="text-2xl font-bold">
              {calculatePaybackPeriod()} years
            </p>
            <p className="text-sm text-neutral-700 mt-1">
              Return on investment:{" "}
              {Math.round((100 / calculatePaybackPeriod()) * 10) / 10}% annually
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="pt-4">
        <h3 className="font-semibold mb-3">Recommended Next Steps</h3>
        <div className="flex flex-wrap gap-2">
          <Link to="/marketplace">
            <Button className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600">
              <ShoppingCart className="h-4 w-4" />
              <span>Find Installers</span>
            </Button>
          </Link>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>Download Report</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            <span>Share Results</span>
          </Button>
        </div>
      </div>

      <Card className="bg-neutral-50 border-neutral-200 mt-4">
        <CardContent>
          <h3 className="font-semibold mb-2">Disclaimer</h3>
          <p className="text-sm text-neutral-700">
            This assessment provides an estimate based on the information you
            provided. Actual system size, costs, and savings may vary. We
            recommend consulting with a certified solar installer for a detailed
            quote and site assessment.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
