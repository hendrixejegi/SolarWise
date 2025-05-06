import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import data from "../../db.json";

import { MarketplaceHeader } from "@components/marketplace/marketplace-header";
import { MarketplaceFilters } from "@components/marketplace/marketplace-filters";
import { VendorListings } from "@components/marketplace/vendor-listings";

function Marketplace() {
  var { vendors } = useLoaderData();
  vendors = vendors || data["vendors"];

  const [filterObj, setFilterObj] = useState({ sq: "", filters: null });

  const includesSq = (vendor) => {
    var result = false;

    for (let word of filterObj.sq) {
      var w = word.toLowerCase();

      result =
        vendor.name.toLowerCase().includes(w) ||
        vendor.services.join(" ").toLowerCase().includes(w);
    }

    return result;
  };

  const checkFilters = (vendor) => {
    const { filters } = filterObj;

    // Assume all checks pass
    var serviceCheck = true;
    var ratingCheck = true;
    var locationCheck = true;

    if (filters.serviceTypes?.length) {
      serviceCheck = filters.serviceTypes.some((s) =>
        vendor.services.includes(s.name)
      );
    }

    if (filters.ratings?.length) {
      ratingCheck = filters.ratings.some(
        (r) => Math.floor(vendor.rating) >= r.value
      );
    }

    if (filters.location && filters.location.length) {
      const vendorLocation =
        `${vendor.location.city} ${vendor.location.region}`.toLowerCase();
      const locationQuery = filters.location.join(" ").toLowerCase();
      locationCheck = vendorLocation.includes(locationQuery);
    }

    return serviceCheck && ratingCheck && locationCheck;
  };

  let searchResults =
    filterObj.sq === "" ? vendors : vendors.filter(includesSq);

  let filteredVendors =
    filterObj.filters === null
      ? searchResults
      : searchResults.filter(checkFilters);

  return (
    <main className="wrapper">
      <MarketplaceHeader setFilterObj={setFilterObj} />
      <section className="full-bleed wrapper bg-primary-50">
        <div className="px-4 py-8 flex gap-4">
          <div className="basis-1/4">
            <MarketplaceFilters setFilterObj={setFilterObj} />
          </div>
          <div className="basis-3/4">
            <VendorListings vendors={filteredVendors} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Marketplace;
