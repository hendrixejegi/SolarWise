import { useState } from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Home, Building, Warehouse, Building2, ArrowRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export function PropertyTypeStep(props) {
  const [size, setSize] = useState(props.data.propertySize);
  const [type, setType] = useState(props.data.propertyType);
  const [roofSpace, setRoofSpace] = useState(props.data.roofSpace);

  const handleTypeChange = (value) => {
    setType(value);
    props.updateData({ propertyType: value });
  };

  const handleSizeChange = (value) => {
    setSize(value);
    props.updateData({ propertySize: value });
  };

  const handleRoofSpaceChange = (value) => {
    setRoofSpace(value);
    props.updateData({ roofSpace: value });
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Property Information</h2>
        <p>
          Tell us about your property to help determine the right solar solution
        </p>
      </div>

      <div className="space-y-6">
        <Label>Property Type</Label>
        <RadioGroup
          value={type}
          onValueChange={(value) => handleTypeChange(value)}
          className="grid grid-cols-2 gap-4"
        >
          <Label
            htmlFor="residential"
            className={`cursor-pointer rounded-lg border-2 p-4 ${
              type === "residential"
                ? "border-primary-500"
                : "border-neutral-200"
            }`}
          >
            <div className="flex items-center gap-4">
              <Home
                className={`h-8 w-8 ${
                  type === "residential"
                    ? "text-primary-500"
                    : "text-neutral-500"
                }`}
              />
              <div>
                <RadioGroupItem
                  value="residential"
                  id="residential"
                  className="sr-only"
                />
                <span className="font-medium">Residential Home</span>
                <p className="text-sm text-gray-500">
                  Single-family or multi-family residence
                </p>
              </div>
            </div>
          </Label>

          <Label
            htmlFor="apartment"
            className={`cursor-pointer rounded-lg border-2 p-4 ${
              type === "apartment" ? "border-primary-500" : "border-neutral-200"
            }`}
          >
            <div className="flex items-center gap-4">
              <Building
                className={`h-8 w-8 ${
                  type === "apartment" ? "text-primary-500" : "text-neutral-500"
                }`}
              />
              <div>
                <RadioGroupItem
                  value="apartment"
                  id="apartment"
                  className="sr-only"
                />
                <span className="font-medium">Apartment/Flat</span>
                <p className="text-sm text-neutral-500">
                  Apartment building or condominium
                </p>
              </div>
            </div>
          </Label>

          <Label
            htmlFor="commercial"
            className={`cursor-pointer rounded-lg border-2 p-4 ${
              type === "commercial"
                ? "border-primary-500"
                : "border-neutral-200"
            }`}
          >
            <div className="flex items-center gap-4">
              <Building2
                className={`h-8 w-8 ${
                  type === "commercial"
                    ? "text-primary-500"
                    : "text-neutral-500"
                }`}
              />
              <div>
                <RadioGroupItem
                  value="commercial"
                  id="commercial"
                  className="sr-only"
                />
                <span className="font-medium">Commercial Building</span>
                <p className="text-sm text-neutral-500">
                  Office, retail, or other commercial space
                </p>
              </div>
            </div>
          </Label>

          <Label
            htmlFor="industrial"
            className={`cursor-pointer rounded-lg border-2 p-4 ${
              type === "industrial"
                ? "border-primary-500"
                : "border-neutral-200"
            }`}
          >
            <div className="flex items-center gap-4">
              <Warehouse
                className={`h-8 w-8 ${
                  type === "industrial"
                    ? "text-primary-500"
                    : "text-neutral-500"
                }`}
              />
              <div>
                <RadioGroupItem
                  value="industrial"
                  id="industrial"
                  className="sr-only"
                />
                <span className="font-medium">Industrial Facility</span>
                <p className="text-sm text-neutral-500">
                  Factory, warehouse, or industrial space
                </p>
              </div>
            </div>
          </Label>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>Property Size (square meters)</Label>
            <span>
              {size} m
              <sup>
                <small>2</small>
              </sup>
            </span>
          </div>
          <Slider
            value={[size]}
            min={20}
            max={1000}
            step={10}
            onValueChange={(value) => handleSizeChange(value)}
          />
          <div className="flex justify-between">
            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label>Available Roof/Space for Solar Panels (square meters)</Label>
            <span>
              {roofSpace} m
              <sup>
                <small>2</small>
              </sup>
            </span>
          </div>
          <Slider
            value={[roofSpace]}
            min={20}
            max={500}
            step={5}
            onValueChange={(value) => handleRoofSpaceChange(value)}
          />
          <div className="flex justify-between">
            <span>Limited</span>
            <span>Moderate</span>
            <span>Extensive</span>
          </div>
        </div>
      </div>

      {type && (
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 mt-6">
          <div className="flex items-center gap-2 text-blue-700">
            <ArrowRight className="h-4 w-4" />
            <p className="text-sm">
              {type === "residential" &&
                "Residential properties typically need 15-20 m² of roof space for a standard solar installation."}
              {type === "apartment" &&
                "Apartment buildings may require community solar solutions or smaller installations for individual units."}
              {type === "commercial" &&
                "Commercial buildings often have flat roofs ideal for larger solar installations with optimal positioning."}
              {type === "industrial" &&
                "Industrial facilities can benefit from large-scale solar installations, potentially with ground-mounted options."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
