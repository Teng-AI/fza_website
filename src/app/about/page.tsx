import Image from "next/image";

export default function About() {
  const stats = [
    { number: "8000+", label: "Active online members" },
    { number: "100+", label: "Cities represented in our community" },
    { number: "58%", label: "Females" },
    { number: "93%", label: "Ages 18-34" },
    { number: "1000+", label: "People gathered through events" },
    { number: "25+", label: "Countries represented in our community" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display mb-6">
            About Us
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto">
            We are the primary organization dedicated to fostering Fuzhou American
            history, culture, and community.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-6">
                Our Mission: Why We Exist
              </h2>
              <div className="space-y-4 text-lg text-foreground/80">
                <p>
                  You know how the story goes: someone in your family — likely your
                  father/mother, uncle/aunt, or grandfather/grandmother — crossed the
                  Atlantic by boat. Then, they opened a take-out restaurant in a corner
                  of this country. From the rural villages back in Fuzhou, they succeeded
                  in carving out a space in America.
                </p>
                <p>
                  But with success came sacrifice. Not only did our parents give up their
                  personal freedoms, but many of us also grew up in socially disconnected
                  environments, stranded between assimilating into American life and
                  helping out at the family restaurant. We lacked a community that fully
                  understood our struggles with family relations, social dynamics, and
                  personal identity. Fuzhou America (FZA) is that safe space. Here, at
                  FZA, the next generation find peers who think like us, sound like us,
                  and feel like us.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/sections/about-mission.jpg"
                alt="Fuzhou America team gathering"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-8 text-center">
            Our Vision: What We&apos;re Building
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-foreground/80">
            <p>
              We have core programs serving high schoolers, college students, and young
              professionals. We have an extensive library of content and resources
              promoting our history and culture. We have a motivated leadership team,
              seasoned veterans willing to devote time and resources, and promising
              members ready to carry our organization forward. We have organizational
              infrastructure promoting sustainability built upon institutional knowledge.
            </p>
            <p>
              We have strong external credibility and presence established through
              community involvement, partnerships, and narrative sharing.
            </p>
            <p className="font-semibold text-foreground">
              We are the primary organization for first-generation Fuzhounese people
              across the world.
            </p>
          </div>
        </div>
      </section>

      {/* Progress/Stats Section */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-4">
              Our Progress
            </h2>
            <p className="text-xl text-foreground/70">What We&apos;ve Accomplished</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-display text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
