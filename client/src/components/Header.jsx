import logo from "@assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@components/ui/navigation-menu";
import { buttonVariants } from "./ui/button";

function Header() {
  return (
    <header className="flex items-center bg-white p-4 space-x-12">
      <img src={logo} alt="Solarwise company logo" className="" />

      <NavigationMenu>
        <NavigationMenuList>
          {[
            { path: "/", label: "Home" },
            { path: "/marketplace", label: "Marketplace" },
            { path: "/products", label: "Products" },
            { path: "/solar-hub", label: "Solar Hub" },
            { path: "/about-us", label: "About Us" },
          ].map((item) => (
            <NavigationMenuItem key={item.path}>
              <NavigationMenuLink asChild>
                <NavLink to={item.path}>
                  {({ isActive }) => (
                    <span
                      className={`font-semibold p-2 ${
                        isActive
                          ? "text-primary-500 border-b-2 border-b-primary-500"
                          : "text-neutral-900"
                      }`}
                    >
                      {item.label}
                    </span>
                  )}
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Authentication Buttons */}
      <div className="flex gap-2 ml-auto">
        <Link to="/login" className={buttonVariants({ variant: "ghost" })}>
          Log in{" "}
        </Link>
        <Link
          to="/register"
          className={buttonVariants({ variant: "secondary" })}
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}

export default Header;
