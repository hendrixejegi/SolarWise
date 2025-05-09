import { Link } from "react-router-dom";
import { useRef } from "react";

import thumbnail from "@/assets/images/placeholder.jpg";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const videos = [
  {
    title: "Solar Installation Guide",
    thumbnail,
    duration: "12:45",
  },
  {
    title: "Choosing the Right Solar Panels",
    thumbnail,
    duration: "8:30",
  },
  {
    title: "Solar Maintenance Tips",
    thumbnail,
    duration: "10:15",
  },
  {
    title: "Off-Grid Solar Setup",
    thumbnail,
    duration: "15:20",
  },
];

export function VideosSection() {
  const swiperRef = useRef(null);

  return (
    <section>
      <div className="px-4 py-12 space-y-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Videos</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
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
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <Link>
                  <Card className="p-0 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-video">
                        <img src={video.thumbnail} alt={video.title} />
                        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white aspect-square w-12 rounded-full grid place-content-center">
                          <Play className="text-primary-500" />
                        </div>
                        <div className="absolute right-2 bottom-2 px-1 rounded-sm text-sm bg-white text-neutral-800">
                          {video.duration}
                        </div>
                      </div>
                      <h3 className="p-4 font-semibold">{video.title}</h3>
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
