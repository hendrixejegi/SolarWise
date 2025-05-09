import { Link } from "react-router-dom";

import { Card, CardContent } from "./ui/card";
import placeholderImg from "@/assets/images/placeholder.jpg";

const categories = [
  {
    title: "Getting Started",
    image: placeholderImg,
    description: "Learn the solar basics",
    link: "/solar-hub/getting-started",
  },
  {
    title: "Installation & Setup",
    image: placeholderImg,
    description: "Guide to successful installation",
    link: "/solar-hub/installation",
  },
  {
    title: "Maintenance & Care",
    image: placeholderImg,
    description: "Keeping your system optimal",
    link: "/solar-hub/maintenance",
  },
  {
    title: "Financing & Incentives",
    image: placeholderImg,
    description: "Finding the best financial options",
    link: "/solar-hub/financing",
  },
  {
    title: "Off-Grid Solutions",
    image: placeholderImg,
    description: "Complete energy independence",
    link: "/solar-hub/off-grid",
  },
  {
    title: "Commercial Solar",
    image: placeholderImg,
    description: "Solutions for businesses",
    link: "/solar-hub/commercial",
  },
  {
    title: "Solar Technology",
    image: placeholderImg,
    description: "Latest innovations",
    link: "/solar-hub/technology",
  },
  {
    title: "Success Stories",
    image: placeholderImg,
    description: "Real-world solar transformations",
    link: "/solar-hub/success-stories",
  },
];

export function CategoriesSection() {
  return (
    <section>
      <div className="px-4 py-12 space-y-8">
        <h2 className="font-bold text-2xl">Categories</h2>
        <div className="grid grid-cols-4 gap-5">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.link}
              className="basis-1/4 hover:scale-103 transition-transform"
            >
              <Card className="p-0 overflow-hidden">
                <CardContent className="p-0">
                  <div>
                    <img src={category.image} alt={category.title} />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">{category.title}</h3>
                    <p className="text-sm text-neutral-800">
                      {category.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
