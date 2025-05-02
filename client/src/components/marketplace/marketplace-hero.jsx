import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

function MarketplaceHero() {
  return (
    <section className="px-4 py-8 full-bleed bg-primary-500">
      <div className="max-w-3xl m-auto text-center space-y-4">
        <h1 className="text-white text-3xl font-bold">
          Find the Perfect Solar Service Provider
        </h1>
        <p className="text-white text-lg">
          Browse our marketplace of verified solar vendors and service providers
          to find the right match for your needs.
        </p>
        <div className="flex items-center gap-2">
          <div className="relative rounded-lg bg-white grow-1">
            <Search className="absolute aspect-square w-6 left-2 top-1/2 -translate-y-1/2 text-neutral-900" />
            <Input
              type="search"
              className="border-none bg-transparent pl-10"
              placeholder="Search for vendors, services, or products..."
            />
          </div>
          <Button
            variant="secondary"
            className="bg-success-700 hover:bg-success-800"
          >
            Search
          </Button>
        </div>
      </div>
    </section>
  );
}

export default MarketplaceHero;
