import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";

import heroImg from "@assets/images/hero.jpg";

function HeroSection() {
  return (
    <section className="flex items-center justify-between p-4">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-5xl">
          Find the <span className="text-primary-500">Right Solar</span>{" "}
          Solution Today
        </h1>
        <p className="text-neutral-900">
          Discover the perfect solar energy solution for your home or business
        </p>
        <div className="flex gap-2">
          <Link
            to="marketplace"
            className={buttonVariants({ variant: "outline" })}
          >
            Explore Marketplace
          </Link>
          <Link
            to="register"
            className={buttonVariants({ variant: "secondary" })}
          >
            Get Started
          </Link>
        </div>
      </div>
      <img
        src={heroImg}
        className="block w-1/2 rounded-xl"
        alt="Group of African engineers wearing safety gear and working at a solar power plant, with a woman smiling and gesturing in front of solar panels"
      />
    </section>
  );
}

export default HeroSection;
