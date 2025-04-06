import React from "react";
import { Users, GraduationCap, Briefcase, Sparkles } from "lucide-react";

const teamMembers = [
  {
    name: "Krima Viktória",
    university: "Budapesti Gazdasági Egyetem",
    role: "CEO",
    image: "/team/perje.jpg",
  },
  {
    name: "Fábián Borbála",
    university: "Budapesti Gazdasági Egyetem",
    role: "CEO",
    image: "/team/member2.jpg",
  },
  {
    name: "Purgel Péter",
    university: "Budapesti Gazdasági Egyetem",
    role: "CTO",
    image: "/team/member3.jpg",
  },
  {
    name: "Perjési Szabolcs",
    university: "Szegedi Tudományegyetem",
    role: "CIO",
    image: "public/team/perjesi.jpg",
  },
];

const About = () => {
  return (
    <div
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(92, 225, 230, 0.2) 0%, rgba(255, 192, 77, 0.2) 100%)",
      }}
    >
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-6 h-6 text-[#5ce1e6] mr-2" />
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#5ce1e6] via-[#ffc04d] to-[#5ce1e6] animate-gradient">
              Rólunk
            </h1>
            <div className="w-6 h-6 text-[#ffc04d] ml-2" />
          </div>
          <p className="text-lg text-slate-700">
            A SQUO csapata egy fiatal, innovatív és szenvedélyes csapat, akik
            elkötelezettek a fenntartható jövőért.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative card gradient-border p-6 transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-xl bg-white/90"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5ce1e6]/10 via-[#ffc04d]/5 to-[#5ce1e6]/10 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out rounded-xl" />
              <div className="relative flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-4 ring-[#5ce1e6]/20 group-hover:ring-[#ffc04d]/40 transition-all duration-700 ease-out">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#5ce1e6] transition-all duration-700 ease-out">
                  {member.name}
                </h3>
                <div className="flex items-center text-gray-600 mb-2 group-hover:text-gray-800 transition-all duration-700 ease-out">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  <p className="text-center">{member.university}</p>
                </div>
                <div className="flex items-center text-[#5ce1e6] font-medium group-hover:text-[#ffc04d] transition-all duration-700 ease-out">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
