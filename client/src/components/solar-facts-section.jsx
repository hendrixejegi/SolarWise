import { useLoaderData, Link } from "react-router-dom";

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
import { buttonVariants } from "./ui/button";

export function SolarFactSection() {
  const { facts } = useLoaderData();

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
              {facts.map((fact) => (
                <CarouselItem key={fact.id} className="basis-1/4">
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
                        <Link
                          to={`solar-facts/${fact.id}`}
                          className={`${buttonVariants({
                            variant: "outline",
                          })} w-full`}
                          onClick={() =>
                            window.scrollTo({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            })
                          }
                        >
                          Read More
                        </Link>
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
