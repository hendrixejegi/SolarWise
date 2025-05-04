import { useState } from "react";
import { rc } from "@/lib/utils";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

export function MarketplaceHeader(props) {
  const [query, setQuery] = useState("");

  const updateSearchQuery = () => {
    props.setFilterObj((prev) => ({
      ...prev,
      sq: rc(query),
    }));
  };
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
            <Search
              className="absolute aspect-square w-6 left-2 top-1/2 -translate-y-1/2"
              color="#a6a6a7"
            />
            <Input
              type="search"
              className="border-none bg-transparent pl-10"
              placeholder="Search for vendors, services, or products..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <Button
            variant="secondary"
            className="bg-success-700 hover:bg-success-800"
            onClick={updateSearchQuery}
          >
            Search
          </Button>
        </div>
      </div>
    </section>
  );
}
