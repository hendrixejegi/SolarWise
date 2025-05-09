import { Link } from "react-router-dom";
import { useRef } from "react";

import { Button } from "./ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import thumbnail from "@/assets/images/placeholder.jpg";

const articles = [
  {
    title: "The Economics of Solar Energy in Africa",
    thumbnail,
    date: "April 10, 2025",
  },
  {
    title: "Solar vs. Generator: Which is Right for You?",
    thumbnail,
    date: "April 5, 2025",
  },
  {
    title: "How to Calculate Your Solar Power Needs",
    thumbnail,
    date: "March 28, 2025",
  },
  {
    title: "The Future of Solar Technology",
    thumbnail,
    date: "March 15, 2025",
  },
];

export function ArticlesSection() {
  const swiperRef = useRef(null);

  return (
    <section>
      <div className="py-12 px-4 space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Articles</h2>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={4}
            spaceBetween={20}
            modules={[Navigation]}
            breakpoints={{
              400: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {articles.map((article, index) => (
              <SwiperSlide key={index}>
                <Link>
                  <Card className="p-0 overflow-hidden">
                    <CardContent className="p-0">
                      <div>
                        <img src={article.thumbnail} alt={article.title} />
                      </div>
                      <div className="p-4">
                        <small className="text-neutral-700">
                          {article.date}
                        </small>
                        <h3 className="font-semibold">{article.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
