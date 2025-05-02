import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

import sampleLogo from "@assets/images/bird/7.jpg";

function VendorsSection() {
  return (
    <section className="p-4 space-y-8">
      <h2 className="text-3xl font-bold">Our Vendors</h2>
      <div>
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/5 flex justify-center"
              >
                <div>
                  <Card className="py-0 shadow-none border-none">
                    <CardContent className="p-0">
                      <img src={sampleLogo} className="max-w-[150px]" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default VendorsSection;
