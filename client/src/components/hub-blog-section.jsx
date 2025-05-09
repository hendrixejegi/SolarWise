import { Link } from "react-router-dom";

import { Card, CardContent } from "./ui/card";
import thumbnail from "@/assets/images/placeholder.jpg";

const blogs = [
  {
    title: "Getting Started",
    image: thumbnail,
    description: "Learn the solar basics",
    link: "/solar-hub/blogs/getting-started",
  },
  {
    title: "Installation & Setup",
    image: thumbnail,
    description: "Guide to successful installation",
    link: "/solar-hub/blogs/installation",
  },
  {
    title: "Maintenance & Care",
    image: thumbnail,
    description: "Keeping your system optimal",
    link: "/solar-hub/blogs/maintenance",
  },
  {
    title: "Financing & Incentives",
    image: thumbnail,
    description: "Finding the best financial options",
    link: "/solar-hub/blogs/financing",
  },
];

export function BlogSection() {
  return (
    <section>
      <div className="py-12 px-4 space-y-8">
        <h2 className="text-2xl font-bold">Blogs</h2>
        <div className="grid grid-cols-4 gap-4">
          {blogs.map((blog, index) => (
            <div key={index}>
              <Link to={blog.link}>
                <Card className="p-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div>
                      <img src={blog.image} alt={blog.title} />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">{blog.title}</h3>
                      <small className="text-neutral-700">
                        {blog.description}
                      </small>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
