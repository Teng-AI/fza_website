import Image from "next/image";

export default function Conference2023() {
  const speakers = [
    { name: "Ivy Teng Lei", pronouns: "(she/her)", description: "VP of Growth at Exygy, Founder of Shop Causes, Baruch College Alumni", image: "/images/conference/2023/speakers/ivy-teng-lei.jpg", linkedIn: "https://www.linkedin.com/in/ivytenglei/" },
    { name: "Yobe Qiu", pronouns: "(she/her)", description: "Educator, Entrepreneur, Mom, and Bestselling Author, The New School '11", image: "/images/conference/2023/speakers/yobe-qiu.jpg", linkedIn: "https://www.linkedin.com/in/yobe-qiu/" },
    { name: "Richard Lou", pronouns: "(he/him)", description: "Founder, CEO at LCRE Group, LGTBQ2S+, Cornell '07, HBS'12", image: "/images/conference/2023/speakers/richard-lou.jpg", linkedIn: "https://www.linkedin.com/in/richardlou/" },
    { name: "Anna Lin", pronouns: "(she/her)", description: "Mental Health Counselor in New York, Digital Content Creator, NYU'17", image: "/images/conference/2023/speakers/anna-lin.jpg", linkedIn: "https://www.linkedin.com/in/annafaithlin/" },
    { name: "Chan Lin", pronouns: "(she/her)", description: "Multidisciplinary Artist in Queens, Member of United Scenic Artist Local 829, NYU '13", image: "/images/conference/2023/speakers/chan-lin.png" },
    { name: "Jimmy Zhang", pronouns: "(he/him)", description: "Small Business Owner, Golden Venture Lead Translator", image: "/images/conference/2023/speakers/jimmy-zhang.png" },
    { name: "Susan Kai Lin", pronouns: "(they/them)", description: "Inter-media artist, Filmmaker, and Poet, USC'18", image: "/images/conference/2023/speakers/susan-kai-lin.jpg", linkedIn: "https://www.skailin.com/" },
  ];

  const mcs = [
    { name: "Fanny Fang", description: "Connecting Communities through Sports and Food, NYU'18", image: "/images/conference/2023/mcs/fanny-fang.jpg", linkedIn: "https://www.linkedin.com/in/mffang/" },
    { name: "Diane Yeung", description: "Journalist and Writer at The Rover", image: "/images/conference/2023/mcs/diane-yeung.jpg", link: "https://therover.ca/author/diane-yeung/" },
  ];

  const conferenceTeam = [
    { name: "Allen Cao", role: "Program Lead", image: "/images/conference/2023/team/allen-cao.jpg", linkedIn: "https://www.linkedin.com/in/allencao1/" },
    { name: "Teng Zheng", role: "Sponsorship Lead", image: "/images/conference/2023/team/teng-zheng.jpg", linkedIn: "https://www.linkedin.com/in/yuntengzheng/" },
    { name: "Vivian Ng", role: "Operations Lead", image: "/images/conference/2023/team/vivian-ng.jpg", linkedIn: "https://www.linkedin.com/in/vivian-ng-a6339a77/" },
    { name: "Linda Liu", role: "Marketing Lead", image: "/images/conference/2023/team/linda-liu.jpg", linkedIn: "https://www.linkedin.com/in/lindaliu1312/" },
    { name: "Xue Shao", role: "Content Lead", image: "/images/conference/2023/team/xue-shao.jpg", linkedIn: "https://www.linkedin.com/in/xue-shao/" },
    { name: "Earl Lin", role: "Design Lead", image: "/images/conference/2023/team/earl-lin.jpg", linkedIn: "https://www.linkedin.com/in/earllin/" },
  ];

  const whyAttend = [
    { title: "HONOR", description: "Connect with your roots and learn more about Fuzhou history and culture", image: "/images/conference/2023/why-attend-honor.jpg" },
    { title: "EXPRESS", description: "Challenge the FJ stereotype and own it. Unpack and express our differences, stories, and experiences.", image: "/images/conference/2023/why-attend-express.jpg" },
    { title: "CONNECT", description: "Meet fellow FJs, share stories, and make long-lasting memories", image: "/images/conference/2023/why-attend-connect.jpg" },
  ];

  const communityChapters = [
    { name: "NEW YORK", image: "/images/conference/2023/chapters/new-york.jpg" },
    { name: "DMV", image: "/images/conference/2023/chapters/dmv.jpg" },
    { name: "", image: "/images/conference/2023/chapters/chapter-3.jpg" },
    { name: "BOSTON", image: "/images/conference/2023/chapters/boston.jpg" },
    { name: "", image: "/images/conference/2023/chapters/chapter-5.jpg" },
    { name: "BAY AREA", image: "/images/conference/2023/chapters/bay-area.jpg" },
  ];

  const schedule = [
    { type: "session", time: "10:30 AM", title: "Opening Remarks", speakers: ["Fuzhou America"] },
    { type: "session", time: "10:45 AM", title: "AAPI Representation in Media & Literature", speakers: ["Yobe Qiu"] },
    { type: "session", time: "11:30 AM", title: "Embracing Our Voice: Stories of Love & Resilience", speakers: ["Richard Lou", "Susan Kai Lin", "Lenny Zou", "Fanny Fang"] },
    { type: "break", time: "12:30 PM", title: "Lunch Break" },
    { type: "session", time: "1:30 PM", title: "Generation FJ Live Performance", speakers: ["Chan Lin"] },
    { type: "session", time: "2:00 PM", title: '"For Her" Short Film', speakers: ["Anna Lin"] },
    { type: "break", time: "2:30 PM", title: "Mini Health Break" },
    { type: "session", time: "2:45 PM", title: "Reflections: Golden Venture 30th Year", speakers: ["Jimmy Zhang", "Diane Yeung"] },
    { type: "session", time: "3:30 PM", title: "Memorializing East Broadway", speakers: ["Angela Li", "Chris Deng"] },
    { type: "session", time: "4:15 PM", title: "Undocumented to Tech Executive", speakers: ["Ivy Teng Lei"] },
    { type: "session", time: "4:45 PM", title: "Closing Remarks & Raffle Winners", speakers: ["Fuzhou America"] },
    { type: "break", time: "5:00 PM", title: "Networking" },
  ];

  const sponsors = [
    { name: "ZBS POS", image: "/images/conference/2023/sponsors/zbs-pos.png" },
    { name: "Wonders", image: "/images/conference/2023/sponsors/wonders.png" },
    { name: "MDZ Real Estate", image: "/images/conference/2023/sponsors/mdz-real-estate.png" },
    { name: "ikki", image: "/images/conference/2023/sponsors/ikki.png" },
    { name: "Baruch College CUNY", image: "/images/conference/2023/sponsors/baruch-college.png" },
    { name: "Yick Lam Photography", image: "/images/conference/2023/sponsors/yick-lam.png" },
    { name: "Lemon Perfect", image: "/images/conference/2023/sponsors/lemon-perfect.png" },
  ];

  const faqs = [
    { question: "Will there be networking sessions?", answer: "Doors open at 9:30AM. People are free to mingle and connect freely before the conference starts at 10:30AM. There will be mini-breaks for socializing in between segments. The last program will be dedicated time for networking. There will also be an afterparty as well!" },
    { question: "Will there be break out workshops?", answer: "There won't be individual break out sessions." },
    { question: "Will the talks and panels be recorded?", answer: "All talks will be recorded and shared on our social media channels." },
    { question: "Will food be provided? And are there vegan options?", answer: "Lunch will be included in the cost of the ticket. We will have a vegan option." },
    { question: "Where and when is the conference?", answer: "The conference will run on Sept 9th, 2023 EST from 10:00am-5:00pm @ St. John's University - D'Angelo Ballroom, 8000 Utopia Parkway Queens NY 11439." },
    { question: "Who do I reach out to for questions?", answer: "You can reach us at conference@fuzhouamerica.org or message us on Instagram/Facebook at @fuzhouamerica." },
    { question: "Is there a student discount?", answer: "Yes! Please have your student ID ready day of during conference check in. Those who fail to present student ID will be required to pay full price GA tickets." },
    { question: "What should I bring?", answer: "ID, Ticket, Good vibes, and maybe a friend(s) :)" },
    { question: "Is there parking?", answer: "Yes! Guests are permitted to park on campus. Please enter through Gates 2 and 3 on Utopia Parkway or for drop offs, through Gate 4 on Union Turnpike." },
    { question: "What is included in the cost of my registration?", answer: "Your registration includes entry into the event, lunch, and lifelong memories :)" },
    { question: "Is there transportation?", answer: "We will be providing shuttle buses from NYC Chinatown. Please check off when purchasing tickets. Other public transportation options available." },
    { question: "Is there an option to attend virtually?", answer: "We will not be live-streaming the event, but there will be recap clips that will be shared." },
    { question: "I'm not Fuzhounese, can I still benefit from attending?", answer: "Of course! Bring your friends! All the shared experiences and stories from the event will resonate with you, regardless of your background." },
    { question: "Is there a dress code?", answer: "Wear something that is comfortable!" },
    { question: "Can I sponsor the conference?", answer: "If you're interested in sponsoring our event, please send an email to conference@fuzhouamerica.org." },
    { question: "I cannot make it to conference, can I still go to afterparty?", answer: "Yes! We sell individual tickets to the afterparty! Please note you must be 21+ to attend afterparty. Location: Flushing, NY Venue: TBD" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/conference/2023/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg sm:text-xl mb-2 text-white/80">09 SEPT 2023</p>
              <p className="text-lg mb-8 text-white/80">ST. JOHN&apos;S UNIVERSITY</p>
            </div>
            <div>
              <p className="uppercase tracking-wider text-sm mb-2">FUZHOU AMERICA PRESENTS 2023 CONFERENCE:</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f0c808] mb-4">
                TALK TOO MUCH
              </h1>
              <p className="text-2xl sm:text-3xl font-serif italic mb-8">
                Echoes from East Broadway
              </p>
              <a
                href="https://www.eventbrite.com/e/talk-too-much-echos-from-east-broadway-registration-670982415467"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
              >
                Buy Tickets
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="about" className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-8 text-center">
            OUR STORY
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-foreground/80">
            <p>
              You know how the story goes: someone in your family — likely your father,
              uncle, or grandfather — crossed the Atlantic by boat.
            </p>
            <p>
              Then, they opened a take-out restaurant in a corner of this country. From the
              rural villages back in Fuzhou, they succeeded in carving out a space in America.
            </p>
            <p>
              But with success came sacrifice. Not only did our parents give up their personal
              freedoms, but many of us also grew up in socially disconnected environments,
              stranded between assimilating into American life and helping out at the family
              restaurant. We lacked a community that fully understood our struggles with family
              relations, social dynamics, and personal identity.
            </p>
            <p>
              Fuzhou America is that safe space. Here, the kids of East Broadway find peers
              who think like us, sound like us, and feel like us. In four years, we&apos;ve
              united over 8,200 Fuzhounese Americans on Subtle Fuzhou Traits and hosted over
              125 events across eight cities.
            </p>
            <p>
              Last year, we gathered to celebrate success stories and break down important
              issues in our community like mental health and intergenerational dynamics.
            </p>
            <p>
              This year, we&apos;re narrowing our focus to the voices defining the past, present,
              and future of what it means to be Fuzhounese and American.
            </p>
            <p>
              <span className="font-bold">TALK TOO MUCH</span> will feature authors, artists, and journalists to lead discussions
              about our history and representation. And most importantly, you&apos;ll be in a room
              surrounded by peers and their stories.
            </p>
            <p className="font-semibold text-foreground text-center text-xl">
              <span className="font-bold">JOIN US</span> for a day of learning, networking, and growing as a collective!
            </p>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-8 text-center">
            WHY ATTEND
          </h2>
          <p className="text-center text-lg text-foreground/80 mb-12 max-w-2xl mx-auto">
            Join a community of motivated <span className="text-green-500 font-semibold">Fuzhounese Americans</span> navigating life challenges
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyAttend.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-8 h-0.5 bg-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-foreground/70 mb-6">{item.description}</p>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2022 Conference Recap */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-8 text-center">
            TAKE-OUT ONLY<br />2022 Conference Recap
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/eN_dGTTWizE"
                title="2022 Fuzhou America Conference: TAKE-OUT ONLY Recap"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Spot CTA */}
      <section className="py-16 sm:py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="uppercase tracking-[0.3em] text-sm mb-4">ARE YOU READY?</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display mb-8">
            Book Your Spot!
          </h2>
          <a
            href="https://www.eventbrite.com/e/talk-too-much-echos-from-east-broadway-registration-670982415467"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Buy Tickets
          </a>
        </div>
      </section>

      {/* Our Community Chapters */}
      <section id="community" className="py-16 sm:py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-8 text-center">
            Our Community
          </h2>
          <p className="text-center text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
            Fuzhou America, a 501(c)(3) nonprofit, is the primary organization dedicated to promoting Fuzhounese American history, culture, and community. Founded in 2019, we have an online community, Subtle Fuzhou Traits, of over 8,000 members and 8 regional community chapters across the country.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {communityChapters.map((chapter, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={chapter.image}
                  alt={chapter.name || `Community chapter ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
                {chapter.name && (
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-sm font-semibold">
                    {chapter.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NYC Picnic Video */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl text-foreground/70 mb-4 text-center">FZA 2023 NYC Picnic</h3>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/VjbWsyUwIo8"
                title="FZA 2023 NYC Picnic"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-4 text-center">
            Speakers
          </h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">
            Meet our 2023 TALK TOO MUCH Speakers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {speakers.map((speaker) => (
              <a
                key={speaker.name}
                href={speaker.linkedIn}
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
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{speaker.name}</h3>
                <p className="text-sm text-foreground/60">{speaker.pronouns}</p>
                <p className="text-sm text-foreground/70">{speaker.description}</p>
              </a>
            ))}
          </div>
          <h3 className="text-2xl sm:text-3xl font-display text-foreground mt-16 text-center">
            Announcing More Speakers Soon!
          </h3>
        </div>
      </section>

      {/* MCs Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-4 text-center">
            MCs
          </h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">
            Meet our 2023 TALK TOO MUCH MCs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {mcs.map((mc) => (
              <a
                key={mc.name}
                href={mc.linkedIn || mc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center group"
              >
                <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden group-hover:ring-4 ring-primary transition-all">
                  <Image
                    src={mc.image}
                    alt={mc.name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{mc.name}</h3>
                <p className="text-foreground/70">{mc.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-primary mb-4 text-center">
              Schedule
            </h2>
            <p className="text-center text-foreground/70 mb-8 text-lg">
              MC: Fanny Fang & Diane Yeung
            </p>

            {/* Quick Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <p className="text-sm text-foreground/60 uppercase tracking-wider">Registration</p>
                <p className="text-lg font-semibold text-foreground">9:30 - 10:30 AM</p>
              </div>
              <div className="bg-primary text-white rounded-lg p-4 text-center shadow-sm">
                <p className="text-sm uppercase tracking-wider opacity-80">Conference</p>
                <p className="text-lg font-semibold">10:30 AM - 5:00 PM</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <p className="text-sm text-foreground/60 uppercase tracking-wider">21+ Afterparty</p>
                <p className="text-lg font-semibold text-foreground">9:00 PM</p>
              </div>
            </div>

            {/* Timeline Schedule */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[60px] sm:left-[80px] top-0 bottom-0 w-0.5 bg-primary/20 hidden sm:block" />

              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className={`flex gap-4 sm:gap-6 ${item.type === 'break' ? '' : ''}`}>
                    {/* Time */}
                    <div className="w-[60px] sm:w-[80px] flex-shrink-0 text-right">
                      <span className={`text-sm sm:text-base font-medium ${item.type === 'break' ? 'text-primary' : 'text-foreground/60'}`}>
                        {item.time}
                      </span>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden sm:flex flex-shrink-0 w-3 h-3 mt-1.5 rounded-full bg-primary relative z-10" />

                    {/* Content */}
                    <div className={`flex-1 pb-4 ${item.type === 'break' ? '' : ''}`}>
                      {item.type === 'break' ? (
                        <div className="bg-primary/10 rounded-lg px-4 py-2 inline-block">
                          <p className="text-primary font-semibold uppercase tracking-wide text-sm">
                            {item.title}
                          </p>
                        </div>
                      ) : (
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <h3 className="font-semibold text-foreground text-lg mb-1">{item.title}</h3>
                          {item.speakers && (
                            <p className="text-foreground/60 text-sm">
                              {item.speakers.join(' · ')}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Spot CTA 2 */}
      <section className="py-16 sm:py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="uppercase tracking-[0.3em] text-sm mb-4">ARE YOU READY?</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display mb-8">
            Book Your Spot!
          </h2>
          <a
            href="https://www.eventbrite.com/e/talk-too-much-echos-from-east-broadway-registration-670982415467"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Buy Tickets
          </a>
        </div>
      </section>

      {/* Conference Team Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-4 text-center">
            Conference Team
          </h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">
            Meet our 2023 TALK TOO MUCH Conference Team!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {conferenceTeam.map((member) => (
              <a
                key={member.name}
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center group"
              >
                <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden group-hover:ring-4 ring-primary transition-all">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-foreground/70">{member.role}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* The Venue Section */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-12 text-center">
            The Venue
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="text-center md:text-left">
              <p className="text-lg text-foreground/80 mb-4">
                <span className="font-bold">TALK TOO MUCH</span> will be hosted at the D&apos;Angelo Ball Room at St. Johns University
              </p>
              <p className="text-lg text-foreground/70 mb-8">
                81-98 170th St, Jamaica, NY 11432
              </p>
              <a
                href="https://www.eventbrite.com/e/talk-too-much-echos-from-east-broadway-registration-670982415467"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-foreground text-foreground px-8 py-3 rounded font-semibold hover:bg-foreground hover:text-white transition-colors"
              >
                Tickets
              </a>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/conference/2023/venue.png"
                alt="D'Angelo Ball Room at St. Johns University"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Spot CTA 3 */}
      <section className="py-16 sm:py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="uppercase tracking-[0.3em] text-sm mb-4">ARE YOU READY?</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display mb-8">
            Book Your Spot!
          </h2>
          <a
            href="https://www.eventbrite.com/e/talk-too-much-echos-from-east-broadway-registration-670982415467"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Buy Tickets
          </a>
        </div>
      </section>

      {/* Past Sponsors Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-display text-foreground mb-12 text-center">
            Past Sponsors
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-5xl mx-auto">
            {sponsors.map((sponsor) => (
              <div key={sponsor.name} className="text-xl md:text-2xl font-bold text-foreground/80 hover:text-primary transition-colors">
                {sponsor.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-16 sm:py-24 bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-12 text-center">
            FAQs
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-foreground/20 pb-6">
                <h3 className="font-semibold text-lg text-foreground mb-2">{faq.question}</h3>
                <p className="text-foreground/70">{faq.answer}</p>
              </div>
            ))}
            <div className="border-b border-foreground/20 pb-6">
              <h3 className="font-semibold text-lg text-foreground mb-2">Important Notice: Conference Photography and Videography</h3>
              <p className="text-foreground/70">
                Photographers and videographers will be present at the conference to capture moments for promotional and archival purposes. By attending, you grant permission for your likeness to be used in event materials. Your privacy matters; if you have concerns, please inform staff. Contact us at{" "}
                <a href="mailto:conference@fuzhouamerica.org" className="text-primary hover:underline">
                  conference@fuzhouamerica.org
                </a>{" "}
                for questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Spot CTA 4 */}
      <section className="py-16 sm:py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="uppercase tracking-[0.3em] text-sm mb-4">ARE YOU READY?</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display mb-8">
            Book Your Spot!
          </h2>
          <a
            href="https://www.eventbrite.com/e/talk-too-much-echos-from-east-broadway-registration-670982415467"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            Buy Tickets
          </a>
        </div>
      </section>

      {/* This Event Has Passed */}
      <section className="py-16 sm:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display mb-6">
            THIS EVENT HAS PASSED
          </h2>
          <p className="text-xl">
            Thank you to everyone who attended Talk Too Much 2023!
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-foreground/80">
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
