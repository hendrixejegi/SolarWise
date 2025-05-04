function AboutUs() {
  return (
    <main className="wrapper space-y-4">
      {/* Hero section */}
      <section
        className={`full-bleed wrapper bg-[url('/src/assets/images/about-us.jpg')] bg-no-repeat bg-cover bg-center relative`}
      >
        <div className="full-bleed absolute bg-linear-to-r from-[rgba(13,_13,_13,_0.7)] from-0% to-[rgba(255,_255,_255,_0)] to-90% w-full h-full top-0 left-0"></div>
        <div className="p-4 relative z-10">
          <h1 className="my-[150px] text-5xl max-w-2xl font-bold text-white">
            Welcome to SolarWise Powering Africa, One Home at a Time
          </h1>
        </div>
      </section>

      {/* Details section */}
      <section>
        <div className="p-4 max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            SolarWise was founded on the belief that access to clean, reliable
            energy is a fundamental human right. In many parts of Africa due to
            infrastructure limitations, extreme power outages, and the cost of
            electricity, many households continue to use fuel. But there's a
            better way&mdash;a greener, cleaner, and more affordable solution:
            solar power.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Who We Are</h2>
          <p>
            SolarWise is more than just a platform&mdash;it's a movement. We are
            a digital bridge connecting individuals, businesses, and communities
            to the best solar solutions, ensuring access to reliable energy
            without confusion or exploitation
          </p>

          <ul className="mt-6 list-disc pl-6 marker:text-neutral-700">
            <li>
              <strong>Our mission is simple:</strong> To make solar
              accessible&mdash;whether you're new to solar or looking fro an
              upgrade. To empower you with knowledge&mdash;so you can make
              informed decisions. To provide you with trusted
              solutions&mdash;because quality and affordability should go hand
              in hand.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">What We Do</h2>
          <p>
            We bring clarity and accessibility to solar energy adoption through:
          </p>

          <ul className="mt-6 list-disc pl-6 space-y-4 marker:text-neutral-700">
            <li>
              <strong>Solar Needs Assessment Tool</strong> - Not sure where to
              start? Our step-by-step calculator helps you determine the right
              system size based on your energy consumption.
            </li>
            <li>
              <strong>Vetted Solar Marketplace</strong> - We've done the hard
              work for you. Browse through a carefully curated marketplace with
              certified products, transparency pricing, and top customer
              reviews.
            </li>
            <li>
              <strong>Knowledge Hub</strong> - Knowledge is power! Our
              collection of articles, tutorials, and guides will guide you
              through everything, from choosing the right solar system to
              maintenance tips.
            </li>
            <li>
              <strong>Vendor Matching & Installation Support</strong> - No more
              guesswork! We connect you with the best solar installers near you
              for hassle-free installation and ongoing support. We also partner
              with banks, microfinance institutions, and other flexible payment
              plans,including Buy Now, Pay Later (BNPL) and leasing options.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">
            Why Choose SolarWise?
          </h2>

          <ul className="mt-6 list-disc pl-6 space-y-4 marker:text-neutral-700">
            <li>
              <strong>Tailored to Your Needs</strong> - We don't just sell
              solar; we help you find what's right for you.
            </li>
            <li>
              <strong>Transparency & Trust</strong> - No hidden fees, no
              unrealistic promises&mdash;just quality, verified solar solutions.
            </li>
            <li>
              <strong>Accessible Solar for All</strong> - From mega-cities to
              remote villages, we're here to serve everyone.
            </li>
            <li>
              <strong>Sustainability at Heart</strong> - We believe in a
              greener, cleaner Africa powered by the sun.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6">
            Join the SolarWise Movement
          </h2>
          <p>
            Electricity shouldn't be a privilege&mdash;it should be a right.
            Whether you're a homeowner, business owner, or just exploring your
            options, SolarWise is here t guide you every step of the way.
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
