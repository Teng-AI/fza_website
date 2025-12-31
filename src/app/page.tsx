import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const mediaLinks = [
    { publication: "Slate", title: "Little America", url: "https://slate.com/news-and-politics/2008/04/china-s-great-migration-little-america.html" },
    { publication: "New York Times", title: "The Death of a Family, and an American Dream", url: "https://www.nytimes.com/2013/12/30/nyregion/the-death-of-a-family-and-an-american-dream.html" },
    { publication: "BBC", title: "The slow decline of American Chinatowns", url: "https://www.bbc.com/news/magazine-25920980" },
    { publication: "The New Yorker", title: "Requiem for a Snakehead", url: "https://www.newyorker.com/news/news-desk/requiem-for-a-snakehead" },
    { publication: "The New Yorker", title: "The Kitchen Network", url: "https://www.newyorker.com/magazine/2014/10/13/cookas-tale" },
    { publication: "The Atlantic", title: "'Satellite Babies' Are Raised Abroad, Then Return to the U.S.—And Their Parents", url: "https://www.theatlantic.com/family/archive/2019/10/satellite-babies-years-china-east-asia/599596/" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 sm:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif italic mb-6">
            Welcome to Fuzhou America
          </h1>
          <Link
            href="/about"
            className="inline-block bg-white text-foreground px-8 py-3 rounded font-semibold hover:bg-cream-dark transition-colors uppercase tracking-wider text-sm"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* What We Believe In */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary font-display tracking-wider mb-4">WHAT WE BELIEVE IN</p>
          <p className="text-xl sm:text-2xl text-foreground max-w-2xl mx-auto">
            Connecting Fuzhou Americans to socialize, network, and celebrate heritage
          </p>
        </div>
      </section>

      {/* WEB - Online Community Section: Text LEFT, Image RIGHT */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center md:text-left">
              <p className="text-primary font-display tracking-wider mb-2">WEB</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-foreground mb-6">
                Online Community
              </h2>
              <p className="uppercase tracking-wider text-sm text-foreground/80">
                Join our Facebook Group & Newsletter to connect with our community of 8000+ Fuzhou Americans
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/sections/community.jpg"
                alt="Fuzhou American community gathering"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MEETUP - Social Hangouts Section: Image LEFT, Text RIGHT */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <Image
                src="/images/sections/meetup.jpg"
                alt="Fuzhou American meetup event"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center md:text-left order-1 md:order-2">
              <p className="text-primary font-display tracking-wider mb-2">MEETUP</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-foreground mb-6">
                Social + Cultural Hangouts
              </h2>
              <p className="uppercase tracking-wider text-sm text-foreground/80">
                We meet every week from recurring socials to holiday parades, so our members can connect in-person
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GETAWAY - Retreats Section: Text LEFT, Image RIGHT */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center md:text-left">
              <p className="text-primary font-display tracking-wider mb-2">GETAWAY</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-foreground mb-6">
                Inclusive Retreats
              </h2>
              <p className="uppercase tracking-wider text-sm text-foreground/80">
                We host multiple retreats each year for smaller group gatherings where people can bond over shared experiences and aspirations
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/sections/activity.jpg"
                alt="Community activity"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEWS - Media Section */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary font-display tracking-wider mb-2">NEWS</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-foreground mb-12">
            Fuzhou Americans in the Media
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            {mediaLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground hover:text-primary transition-colors underline"
              >
                {link.publication}: &ldquo;{link.title}&rdquo;
              </a>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
