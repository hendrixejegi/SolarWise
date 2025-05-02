import logo from "@/assets/logo-white.svg";
import { Link } from "react-router-dom";

const renderFooterNav = () =>
  [
    {
      title: "Company",
      links: [
        { path: "about-us", label: "About Us" },
        { path: "careers", label: "Careers" },
        { path: "blog", label: "Blog" },
      ],
    },
    {
      title: "Legal",
      links: [
        { path: "terms-of-service", label: "Terms of Service" },
        { path: "privacy-policy", label: "Privacy Policy" },
        { path: "cookie-policy", label: "Cookie Policy" },
      ],
    },
  ].map((item) => (
    <div key={item.title}>
      <h4 className="font-bold text-white mb-2">{item.title}</h4>
      <ul>
        {item.links.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className="text-white hover:text-neutral-200">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ));

function Footer() {
  return (
    <footer className="wrapper bg-primary-500 rounded-t-4xl mt-10">
      <div className="px-4 py-8 flex justify-between w-full">
        <div className="space-y-2 text-white">
          <img src={logo} alt="Solarwise company logo" />
          <p>
            SolarWise is your trusted partner is sustainable energy solution
          </p>
          <p>
            <small>&copy; 2025 SolarWise. All rights reserved</small>
          </p>
        </div>
        <div className="flex space-x-8">{renderFooterNav()}</div>
      </div>
    </footer>
  );
}

export default Footer;
