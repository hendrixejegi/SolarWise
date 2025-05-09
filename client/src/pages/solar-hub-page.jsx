import { CategoriesSection } from "@/components/hub-categories-section";
import { VideosSection } from "@/components/hub-videos-section";
import { ArticlesSection } from "@/components/hub-articles-section";
import { BlogSection } from "@/components/hub-blog-section";

function SolarHubPage() {
  return (
    <main className="wrapper bg-neutral-50">
      {/* Hero section */}
      <section
        className={`full-bleed wrapper bg-[url('/src/assets/images/about-us.jpg')] bg-no-repeat bg-cover bg-center relative`}
      >
        <div className="full-bleed absolute bg-linear-to-r from-[rgba(13,_13,_13,_0.7)] from-0% to-[rgba(255,_255,_255,_0)] to-90% w-full h-full top-0 left-0"></div>
        <div className=" my-[150px] space-y-4 p-4 relative z-10">
          <h1 className="text-5xl font-bold text-white">
            Empower Yourself with Solar Knowledge
          </h1>
          <p className="text-white font-semibold max-w-lg">
            Learn everything about solar energy&mdash;from choosing the right
            system to installation and maintenance.
          </p>
        </div>
      </section>
      <CategoriesSection />
      <VideosSection />
      <ArticlesSection />
      <BlogSection />
    </main>
  );
}

export default SolarHubPage;
