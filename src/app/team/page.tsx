"use client";

import Image from "next/image";
import { useState } from "react";

interface TeamMember {
  name: string;
  chineseName?: string;
  title: string;
  linkedIn?: string;
  image?: string;
}

const executiveBoard: TeamMember[] = [
  {
    name: "Allen Cao",
    title: "Co-Founder",
    linkedIn: "https://www.linkedin.com/in/allencao1/",
    image: "/images/team/allen-cao.png",
  },
  {
    name: "Teng Zheng",
    title: "Co-Founder",
    linkedIn: "https://www.linkedin.com/in/yuntengzheng/",
    image: "/images/team/teng-zheng.jpg",
  },
  {
    name: "Angela Li",
    chineseName: "李芷晴",
    title: "Executive Director",
    linkedIn: "https://www.linkedin.com/in/angelali0824/",
    image: "/images/team/angela-li.jpg",
  },
];

const advisoryBoard: TeamMember[] = [
  {
    name: "George Dong",
    title: "Google, Teach for America",
    linkedIn: "https://www.linkedin.com/in/georgedong/",
    image: "/images/team/george-dong.jpg",
  },
  {
    name: "Jacky Chen",
    title: "Columbia MHA '20",
    linkedIn: "https://www.linkedin.com/in/jacky-chen/",
    image: "/images/team/jacky-chen.jpg",
  },
  {
    name: "Stanley Wong",
    title: "Google, 12+",
    linkedIn: "https://www.linkedin.com/in/stanleyywong/",
    image: "/images/team/stanley-wong.jpg",
  },
];

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="text-center group">
      <a
        href={member.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-full bg-cream-dark flex items-center justify-center overflow-hidden group-hover:ring-4 ring-primary transition-all">
          {member.image && !imageError ? (
            <Image
              src={member.image}
              alt={member.name}
              width={160}
              height={160}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-4xl text-foreground/30">
              {member.name.charAt(0)}
            </span>
          )}
        </div>
        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
          {member.name}
          {member.chineseName && (
            <span className="text-foreground/60 font-normal">
              {" "}{member.chineseName}
            </span>
          )}
        </h3>
        <p className="text-foreground/70">{member.title}</p>
      </a>
    </div>
  );
}

export default function Team() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display mb-6">
            Meet the Team
          </h1>
        </div>
      </section>

      {/* Executive Board Section */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-4">
              EXECUTIVE BOARD
            </h2>
            <p className="text-lg text-foreground/70">
              We lay out the vision for the organization
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {executiveBoard.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground mb-4">
              ADVISORY BOARD
            </h2>
            <p className="text-lg text-foreground/70">
              Our advisors carry expertise across industries
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {advisoryBoard.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
