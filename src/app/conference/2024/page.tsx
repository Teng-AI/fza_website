import Image from "next/image";

export default function Conference2024() {
  const speakers = [
    { name: "Ling Ma", pronouns: "(she/her)", role: "Keynote Speaker", description: "Writer", link: "https://lingma.tumblr.com/", image: "/images/conference/2024/speaker-ling-ma.jpg" },
    { name: "Lu Zhang", pronouns: "(she/her)", role: "Speaker", description: "Co-founder of Chinatown Basketball Club", link: "https://www.chinatownbasketball.club/", image: "/images/conference/2024/speaker-lu-zhang.jpg" },
    { name: "Herb Tam", pronouns: "(he/him)", role: "Speaker", description: "Co-founder of Chinatown Basketball Club", link: "https://www.chinatownbasketball.club/", image: "/images/conference/2024/speaker-herb-tam.png" },
    { name: "Qixin & Shuyu", pronouns: "(she/her)", role: "Panel", description: "Fuzhou Sisters", link: "https://www.instagram.com/fuzhousisters/", image: "/images/conference/2024/speaker-fuzhou-sisters.jpg" },
    { name: "Kai Lin", pronouns: "(they/them)", role: "Speaker", description: "Fuzhounese American writer, artist, and cultural organizer", link: "https://www.skailin.com/", image: "/images/conference/2024/speaker-kai-lin.jpg" },
    { name: "David Yang", pronouns: "(he/him)", role: "Speaker", description: "Owner and Founder of Tangy Crab, Ohana Sushi, Fuel'd Stir Fry and Salads", link: "#", image: "/images/conference/2024/speaker-david-yang.png" },
    { name: "Brandon Lin", pronouns: "(he/him)", role: "Speaker", description: "CEO and Founder of Steam Boys", link: "https://www.steamboys.com/", image: "/images/conference/2024/speaker-brandon-lin.png" },
    { name: "Ken Guest", pronouns: "(he/him)", role: "Speaker", description: "Professor, Author, and Public Speaker", link: "https://www.linkedin.com/in/ken-guest-989a3825/", image: "/images/conference/2024/speaker-ken-guest.png" },
    { name: "Min Opera Group", pronouns: "", role: "Performer", description: "Fuzhou Opera", link: "#", image: "/images/conference/2024/speaker-min-opera.png" },
    { name: "Ada Wu", pronouns: "(she/her)", role: "Speaker", description: "Student at Tufts University", link: "https://www.linkedin.com/in/wu-ada/", image: "/images/conference/2024/speaker-ada-wu.png" },
    { name: "Nora Chen", pronouns: "(she/her)", role: "Speaker", description: "Food Explorer", link: "https://www.instagram.com/noraeatsgood/", image: "/images/conference/2024/speaker-nora-chen.png" },
    { name: "Maxi Lau", pronouns: "(she/her)", role: "Speaker", description: "Owner of Maxi's Noodle", link: "https://maxisnoodle.com", image: "/images/conference/2024/speaker-maxi-lau.jpg" },
  ];

  const mcs = [
    { name: "Clifford Robin Temprosa", pronouns: "(He/him)", description: "Community Leader/Activist", link: "https://www.instagram.com/crt4ny/", image: "/images/conference/2024/mc-clifford.png" },
    { name: "Anna Lin", pronouns: "(she/her)", description: "Mental Health Counselor/Prevention Consultant", link: "https://www.linkedin.com/in/annafaithlin/", image: "/images/conference/2024/mc-anna-lin.jpg" },
  ];

  const conferenceTeam = [
    { name: "Vivian Ng", pronouns: "(she/her)", role: "Co-Director", link: "https://www.linkedin.com/in/vivian-168-ng/", image: "/images/conference/2024/team-vivian.png" },
    { name: "Linda Liu", pronouns: "(she/her)", role: "Co-Director", link: "https://www.linkedin.com/in/lindaliu1312/", image: "/images/conference/2024/team-linda.png" },
    { name: "Xue Lin Wang", pronouns: "(she/her)", role: "Operations", link: "https://www.linkedin.com/in/xue-lin-wang/", image: "/images/conference/2024/team-xuelin.jpg" },
    { name: "Charlie Chen", pronouns: "(he/him)", role: "Operations", link: "#", image: "/images/conference/2024/team-charlie.jpg" },
    { name: "Allen Cao", pronouns: "(he/him)", role: "Co-Founder", link: "https://www.linkedin.com/in/allencao1/", image: "/images/conference/2024/team-allen.png" },
    { name: "Angela Li", pronouns: "(she/they)", role: "Executive Director", link: "https://www.linkedin.com/in/angelali0824/", image: "/images/conference/2024/team-angela.jpg" },
    { name: "Teng Zheng", pronouns: "(he/him)", role: "Co-Founder", link: "https://www.linkedin.com/in/yuntengzheng/", image: "/images/conference/2024/team-teng.png" },
  ];

  const whyAttend = [
    { title: "HONOR", description: "Connect with your roots and learn more about Fuzhou history and culture" },
    { title: "EXPRESS", description: "Challenge the FJ stereotype and own it. Unpack and express our differences, stories, and experiences." },
    { title: "CONNECT", description: "Meet fellow FJs, share stories, and make long-lasting memories" },
  ];

  const faqs = [
    {
      question: "Will there be networking sessions?",
      answer: "Doors open at 9:30AM. People are free to mingle and connect freely before the conference starts at 11:00AM. There will be mini-breaks for socializing in between segments. The last program will be dedicated time for networking. There will also be an afterparty as well!"
    },
    {
      question: "What is included in the cost of my registration?",
      answer: "Your registration includes entry into the event, lunch, and lifelong memories :)"
    },
    {
      question: "Is there a dress code?",
      answer: "Wear something that is comfortable! The venue will have AC blasting, if you get chilly easily bring a sweater!"
    },
    {
      question: "Is there an option to attend virtually?",
      answer: "We will not be live-streaming the event, but there will be recap clips that will be shared."
    },
    {
      question: "Will there be break out workshops?",
      answer: "There won't be individual break out sessions."
    },
    {
      question: "Can I sponsor the conference?",
      answer: "If you're interested in sponsoring our event, please send an email to conference@fuzhouamerica.org"
    },
    {
      question: "Will food be provided? And are there vegan options?",
      answer: "Lunch will be included in the cost of the ticket. We will have a vegan option."
    },
    {
      question: "What should I bring?",
      answer: "ID, Ticket, Good vibes, and maybe a friend(s) :)"
    },
    {
      question: "I cannot make it to conference, can I still go to afterparty?",
      answer: "Yes! We sell individual tickets to the afterparty! Please note you must be 21+ to attend afterparty. Location: Flushing, NY Venue: TBD"
    },
    {
      question: "Where and when is the conference?",
      answer: "The conference will run on Aug 3rd, 2024 EST from 9:30am-5:00pm @ St. John's University - D'Angelo Ballroom, 81-98 170th Street Jamaica, New York"
    },
    {
      question: "Who do I reach out to for questions?",
      answer: "You can reach us at conference@fuzhouamerica.org or message us on Instagram/Facebook at @fuzhouamerica."
    },
    {
      question: "Will the talks and panels be recorded?",
      answer: "All talks will be recorded and shared on our social media channels."
    },
    {
      question: "I'm not Fuzhounese, can I still benefit from attending?",
      answer: "Of course! Bring your friends! All the shared experiences and stories from the event will resonate with you, regardless of your background."
    },
    {
      question: "Is there a student discount?",
      answer: "Yes! Please have your student ID ready day of during conference check in. Those who fail to present student ID will be required to pay full price GA tickets."
    },
    {
      question: "Is there transportation?",
      answer: "We will not be providing transportation this year. However, lots of us are carpooling. Feel free to shoot us a message if you need to carpool."
    },
    {
      question: "Is there parking?",
      answer: "Yes! Guests are permitted to park on campus. Please enter through Gates 2 and 3 on Utopia Parkway or for drop offs, through Gate 4 on Union Turnpike."
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-[#1a1a1a] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/images/conference/2024/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xl sm:text-2xl font-bold mb-2">03 AUG 2024</p>
              <div className="w-16 h-0.5 bg-white/50 my-4" />
              <p className="text-lg">ST. JOHN&apos;S UNIVERSITY</p>
            </div>
            <div>
              <p className="uppercase tracking-wider text-sm mb-2">FUZHOU AMERICA PRESENTS 2024 CONFERENCE:</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#f0c808] mb-4">
                TALK TOO MUCH
              </h1>
              <p className="text-2xl sm:text-3xl mb-8">
                Navigating Fuzhounese Identity
              </p>
              <a
                href="https://www.eventbrite.com/e/talk-too-much-2024-navigating-fuzhou-identity-registration-881632625917"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Buy Tickets
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="about" className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            OUR STORY
          </h2>
          <div className="space-y-6 text-lg text-foreground/80">
            <p>
              You know how the story goes: someone in your family — likely your father/mother,
              uncle/aunt, or grandfather/grandmother — crossed the Atlantic by boat.
            </p>
            <p>
              Then, they opened a take-out restaurant in a corner of this country. From the
              rural villages back in Fuzhou, they succeeded in carving out a space in America.
            </p>
            <p>
              But with success came sacrifice. Not only did our parents give up their personal
              freedoms, but many of us also grew up in socially disconnected environments,
              stranded between assimilating into American life and helping out at the family
              restaurant.
            </p>
            <p>
              We lacked a community that fully understood our struggles with family
              relations, social dynamics, and personal identity.
            </p>
            <p>
              Fuzhou America (FZA) is that safe space. Here, at FZA, the next generation find
              peers who think like us, sound like us, and feel like us. In four years, we&apos;ve
              united over 8,300 Fuzhounese Americans on{" "}
              <a href="https://www.facebook.com/groups/subtlefuzhoutraits/" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                Subtle Fuzhou Traits
              </a>{" "}
              and hosted over 125 events across eight cities.
            </p>
            <p>
              As we continue to grow our organization - developing our team, cementing{" "}
              <strong>TALK TOO MUCH</strong> as our annual conference name, and engaging in
              meaningful storytelling, we hope to continue creating spaces where our
              community can empower one another.
            </p>
            <p>
              In addition to celebrating our <strong>Five-Year Anniversary</strong>, this year&apos;s conference{" "}
              <strong>&quot;TTM2024: Navigating Fuzhounese Identity&quot;</strong> will focus on the complexities of
              our Fuzhounese Identity. From exploring our rich cultural heritage to unpacking
              the unique challenges and success of the Fuzhou community, our conference
              offers something for everyone.
            </p>
            <p className="font-semibold text-foreground text-center text-xl pt-4">
              JOIN US for a day of learning, networking, and growing as a collective!
            </p>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8">
            WHY ATTEND
          </h2>
          <p className="text-center text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
            Join a community of motivated <span className="text-green-500 font-semibold">Fuzhounese Americans</span> navigating life challenges
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {whyAttend.map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Images */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/conference/2024/community-1.jpg"
                alt="Community gathering"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/conference/2024/community-2.jpg"
                alt="Community gathering"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/conference/2024/community-3.jpg"
                alt="Community gathering"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2023 Conference Recap */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            TALK TOO MUCH 2023:<br />
            Echoes From East Broadway Conference Recap
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/gKsRCIJnp-U"
                title="2023 Fuzhou America Conference - TALK TOO MUCH: Echoes from East Broadway"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2023 Conference Photo Grid */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={`/images/conference/2024/2023-photo-${i}.jpg`}
                  alt={`2023 Conference Photo ${i}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Community Section */}
      <section id="community" className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8">
            Our Community
          </h2>
          <p className="text-center text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
            Fuzhou America, a 501(c)(3) nonprofit, is the primary organization dedicated to promoting Fuzhounese American history,
            culture, and community. Founded in 2019, we have an online community, Subtle Fuzhou Traits, of over 8,000 members
            and 8 regional community chapters across the country.
          </p>

          {/* Regional Chapter Photos */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { city: "NEW YORK", image: "chapter-ny.jpg" },
              { city: "DMV", image: "chapter-dmv.jpg" },
              { city: "BOSTON", image: "chapter-boston.jpg" },
              { city: "BAY AREA", image: "chapter-bayarea.jpg" },
              { city: "PHILLY", image: "chapter-philly.jpg" },
              { city: "AND MORE", image: "chapter-more.jpg" },
            ].map((chapter) => (
              <div key={chapter.city} className="aspect-[4/3] rounded-lg relative overflow-hidden">
                <Image
                  src={`/images/conference/2024/${chapter.image}`}
                  alt={`${chapter.city} Chapter`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-white/90 px-2 py-1 text-sm font-bold rounded">{chapter.city}</span>
              </div>
            ))}
          </div>

          {/* Past Conference Videos */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/eN_dGTTWizE"
                  title="2022 Fuzhou America Conference: TAKE-OUT ONLY"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
            <div>
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/VjbWsyUwIo8"
                  title="FZA 2023 NYC Picnic"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            Schedule
          </h2>
          <div className="max-w-3xl mx-auto">
            {/* Schedule Image Placeholder */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary mb-4">TALK TOO MUCH 2024: SCHEDULE</h3>
                <div className="space-y-2 text-left max-w-md mx-auto">
                  <p><strong>REGISTRATION</strong> 9:30AM - 10:30AM</p>
                  <p><strong>CONFERENCE TIME</strong> 10:30AM - 5:00PM</p>
                  <p><strong>21+ AFTERPARTY</strong> 9:00PM</p>
                  <p className="pt-4"><strong>MC:</strong> Anna Lin & Clifford Temprosa</p>
                  <hr className="my-4" />
                  <p><strong>INTERACTIVE ACTIVITY</strong></p>
                  <p><strong>OPENING REMARKS</strong></p>
                  <p className="pl-4">• Fuzhou America 5 Year Anniversary •</p>
                  <p><strong>FJ IMMIGRATION TODAY</strong></p>
                  <p className="pl-4">• Kenneth Guest •</p>
                  <p><strong>RESTAURANTS REIMAGINED</strong></p>
                  <p className="pl-4">• Brandon Lin • David Yang • Maxi Lau • Nora Chen •</p>
                  <p><strong>LEGACIES OF FJ IMMIGRATION</strong></p>
                  <p className="pl-4">• Ada Wu •</p>
                  <p><strong>LUNCHBREAK</strong></p>
                  <p><strong>CHINATOWN BASKETBALL CLUB</strong></p>
                  <p className="pl-4">• Lu Zhang • Herb Tam •</p>
                  <p><strong>FUZHOU SISTERS</strong></p>
                  <p className="pl-4">• Shuyu Fang • Qixin Zhang •</p>
                  <p><strong>HEALTH BREAK</strong></p>
                  <p><strong>A FJ WRITER&apos;S JOURNEY</strong></p>
                  <p className="pl-4">• Ling Ma • Susan Kai Lin •</p>
                  <p><strong>TRADITIONAL FUZHOUNESE OPERA</strong></p>
                  <p className="pl-4">• Min Opera Group •</p>
                  <p><strong>CLOSING REMARKS & RAFFLE WINNERS</strong></p>
                  <p className="pl-4">• Fuzhou America •</p>
                  <p><strong>NETWORKING</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speaker" className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Speakers
          </h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">
            Meet our 2024 TALK TOO MUCH Speakers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {speakers.map((speaker) => (
              <a
                key={speaker.name}
                href={speaker.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center group"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden group-hover:ring-4 ring-primary transition-all">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{speaker.name}</h3>
                <p className="text-sm text-foreground/60">{speaker.pronouns}</p>
                <p className="text-sm text-primary font-medium">{speaker.role}</p>
                <p className="text-sm text-foreground/60">{speaker.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MCs Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            MCs
          </h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">
            Meet our 2024 TALK TOO MUCH MCs
          </p>
          <div className="grid grid-cols-2 gap-12 max-w-2xl mx-auto">
            {mcs.map((mc) => (
              <a
                key={mc.name}
                href={mc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center group"
              >
                <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden group-hover:ring-4 ring-primary transition-all">
                  <Image
                    src={mc.image}
                    alt={mc.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors">{mc.name}</h3>
                <p className="text-foreground/60">{mc.pronouns}</p>
                <p className="text-foreground/70">{mc.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="uppercase tracking-widest text-sm mb-4">ARE YOU READY?</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Book Your Spot!
          </h2>
          <a
            href="https://www.eventbrite.com/e/talk-too-much-2024-navigating-fuzhou-identity-registration-881632625917"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Buy Tickets
          </a>
        </div>
      </section>

      {/* Conference Team Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Conference Team
          </h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">
            Meet our 2024 TALK TOO MUCH Conference Team!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {conferenceTeam.map((member) => (
              <a
                key={member.name}
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center group"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden group-hover:ring-4 ring-primary transition-all">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-sm text-foreground/60">{member.pronouns}</p>
                <p className="text-sm text-foreground/70">{member.role}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            The Venue
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <p className="text-lg mb-6">
                <strong>TALK TOO MUCH</strong> will be hosted at the D&apos;Angelo Ball Room at St. Johns University
              </p>
              <p className="text-foreground/70 mb-8">
                81-98 170th St, Jamaica, NY 11432
              </p>
              <a
                href="https://www.eventbrite.com/e/talk-too-much-2024-navigating-fuzhou-identity-registration-881632625917"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-8 py-3 rounded font-semibold hover:bg-gray-800 transition-colors"
              >
                TICKETS
              </a>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/conference/2024/venue.jpg"
                alt="D'Angelo Ball Room at St. John's University"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Past Sponsors Section - Placeholder */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            Past Sponsors
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center max-w-4xl mx-auto">
            {["VERTEX", "LCRE", "ZBS POS", "SANZO", "ESW BEAUTY", "MDZ Real Estate", "byYQ", "Zhang Holdings", "Sippy Cafe", "Mama Tang's"].map((sponsor) => (
              <div key={sponsor} className="h-16 flex items-center justify-center bg-gray-100 rounded px-4">
                <span className="text-sm text-gray-600 font-medium text-center">{sponsor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-16 sm:py-24 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            FAQs
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 pb-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-foreground/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Subscribe Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-8">
            Subscribe TO OUR NEWSLETTER!
          </h2>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <div className="flex justify-center gap-4 mt-8">
            <a href="https://www.facebook.com/groups/subtlefuzhoutraits" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <span className="sr-only">Facebook</span>
              f
            </a>
            <a href="https://www.instagram.com/fuzhouamerica" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <span className="sr-only">Instagram</span>
              ig
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-foreground/80">
            Questions? Contact us at{" "}
            <a href="mailto:conference@fuzhouamerica.org" className="text-primary hover:underline">
              conference@fuzhouamerica.org
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
