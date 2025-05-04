import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

import energyIndependenceImg from "@assets/images/solar-facts/energy-independence/energy-independence.jpg";
import environmentalImpactImg from "@assets/images/solar-facts/environmental-impact/environmental-impact.jpg";
import howSolarWorksImg from "@assets/images/solar-facts/how-solar-works/how-solar-works.jpg";
import solarInvestmentReturnsImg from "@assets/images/solar-facts/solar-investment-returns/solar-investment-returns.jpg";
import solarLifespanImg from "@assets/images/solar-facts/solar-lifespan/solar-lifespan.jpg";

const factCards = [
  {
    title: "How Do Solar Panels Work?",
    image: {
      src: howSolarWorksImg,
      alt: "Illustration showing solar panels converting sunlight into electricity for buildings. Artwork by vectorjuice on Freepik",
    },
    description: "Turning sunlight into electricity through photovoltaic cells",
  },
  {
    title: "Solar Panel Lifespan",
    image: {
      src: solarLifespanImg,
      alt: "Illustration showing people maintaining machinery, representing the long lifespan and maintenance of solar energy systems. Artwork by vectorjuice / Freepik",
    },
    description:
      "Modern solar panels can last 25+ years with proper maintenance",
  },
  {
    title: "Energy Independence",
    image: {
      src: energyIndependenceImg,
      alt: "Illustration of Balanced scale showing renewable energy outweighing fossil fuel industry, symbolizing energy independence",
    },
    description: "Reduce reliance on the grid and save on energy costs",
  },
  {
    title: "Environmental Impact",
    image: {
      src: environmentalImpactImg,
      alt: "Person using solar-powered charging station, highlighting the environmental benefits of clean, renewable solar energy in urban areas. Artwork by vectorjuice on Freepik",
    },
    description:
      "Solar energy reduces carbon footprint and promotes sustainability",
  },
  {
    title: "Solar Investment Returns",
    image: {
      src: solarInvestmentReturnsImg,
      alt: "Illustration with people working alongside a rising financial graph, dollar signs, and a rocket, conveying the concept of strong investment returns in the solar energy sector. Artwork by vectorjuice on Freepik",
    },
    description: "Calculate your ROI and long-term savings with solar",
  },
];

export function SolarFactSection() {
  return (
    <section className="full-bleed wrapper bg-primary-500">
      <div className="px-4 py-8 space-y-8">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold text-white">
            Solar Facts & Insights
          </h2>
          <p className="text-white">Did You Know?</p>
        </div>

        <div>
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {factCards.map((fact) => (
                <CarouselItem key={fact.title} className="basis-1/4">
                  <div>
                    <Card>
                      <CardHeader>
                        <div>
                          <img src={fact.image.src} alt={fact.image.alt} />
                        </div>
                        <CardTitle>{fact.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-900">{fact.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Read More
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
