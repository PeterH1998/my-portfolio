import { useState, useEffect } from "react";

export default function About() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("/data/profile.json")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  if (!profile) return null;

  const toolkit = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Java", "Python"],
    },
    {
      category: "Other",
      skills: ["Git", "GitHub Actions", "Jest"],
    },
  ];

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto overflow-x-hidden lg:relative lg:inset-auto w-full h-[100dvh] lg:h-full font-sans text-[#3d3329]">
      {/* MOBILE FIX: Reduced pt-[120px] to pt-[90px] so it sits closer to the top tabs */}
      <div className="min-h-full w-full flex items-start lg:items-center justify-center px-4 pt-[120px] lg:pt-[120px] pb-6 lg:pb-12 lg:p-8 xl:p-12">
        {/* MOBILE FIX: Reduced gap between the Card and the Toolkit from gap-8 to gap-4 */}
        <div className="flex flex-col xl:flex-row gap-4 lg:gap-8 xl:gap-12 max-w-[1400px] w-full items-center xl:items-start justify-between">
          {/* LEFT: About Card */}
          {/* MOBILE FIX: Reduced padding from p-6 to p-5 */}
          <div className="bg-[#efe2d6] mx-auto lg:mx-0 rounded-[2rem] lg:rounded-[2.5rem] p-14 lg:p-10 w-full max-w-[600px] xl:max-w-none xl:w-[42%] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] relative z-10 shrink-0">
            {/* MOBILE FIX: Reduced margin-bottom */}
            <div className="flex justify-between items-center mb-4 lg:mb-8">
              <h2 className="text-[1.1rem] lg:text-[1.5rem] font-serif text-[#3d3329]">
                About
              </h2>
              <div className="flex gap-2 sm:gap-3">
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 lg:w-10 lg:h-10 bg-[#fcfbf9] rounded-full flex items-center justify-center font-bold text-xs lg:text-sm shadow-sm hover:scale-105 transition-transform text-[#3d3329] border border-white/60"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#fcfbf9] rounded-full px-3 py-1.5 lg:px-4 lg:py-2 flex items-center justify-center text-[9px] lg:text-xs font-bold tracking-widest shadow-sm hover:scale-105 transition-transform text-[#3d3329] border border-white/60"
                >
                  RESUME
                </a>
              </div>
            </div>

            {/* MOBILE FIX: Reduced text size from 4xl to 3xl, and mb-4 to mb-2 */}
            <h1 className="text-3xl lg:text-5xl font-serif mb-2 lg:mb-6 text-[#3d3329]">
              {profile.greeting || "Hello!"}
            </h1>

            {/* MOBILE FIX: Compressed text size to 0.8rem, tightened line-height to 1.4, reduced mb-8 to mb-4 */}
            <div className="text-[0.8rem] lg:text-[0.9rem] leading-[1.4] lg:leading-[1.6] font-medium mb-4 lg:mb-10 text-[#4a3f35]">
              <p className="mb-2 lg:mb-4">{profile.bioParagraph1}</p>
              <p>{profile.bioParagraph2}</p>
            </div>

            {/* MOBILE FIX: Reduced top padding from pt-6 to pt-4 */}
            <div className="pt-4 lg:pt-6 border-t border-[#3d3329]/10">
              <p className="text-[10px] lg:text-xs font-bold mb-0.5 lg:mb-1 tracking-wide">
                Reach me at
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="text-[0.8rem] lg:text-[0.9rem] border-b border-[#3d3329]/40 pb-[1px] hover:border-[#3d3329] transition-colors break-all"
              >
                {profile.email}
              </a>
            </div>
          </div>

          {/* RIGHT: Toolkit Diagram */}
          {/* MOBILE FIX: Scaled down the entire toolkit to 90% (scale-90) so it doesn't push the screen bounds */}
          <div className="w-full max-w-[600px] mx-auto lg:mx-0 xl:max-w-none xl:w-[58%] relative xl:mt-0 pt-4 lg:pt-12 flex justify-center xl:justify-end shrink-0 transform origin-top scale-90 lg:scale-100">
            <div className="relative w-full max-w-[700px]">
              {/* TOOLKIT Header Pill */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-5 bg-[#efe2d6] rounded-full px-5 py-2 lg:px-6 lg:py-2.5 shadow-[0_4px_15px_-3px_rgba(0,0,0,0.05)] border border-white/60 text-[0.6rem] lg:text-[0.65rem] font-bold tracking-[0.2em] text-[#3d3329] z-20">
                TOOLKIT
              </div>

              {/* Desktop Connecting Lines */}
              <div className="hidden xl:block">
                <div className="absolute top-[1.5rem] left-1/2 w-px h-[2.5rem] bg-[#3d3329]/20 -z-10"></div>
                <div className="absolute top-[4rem] right-1/2 w-[calc(50%-1.5rem)] h-px bg-[#3d3329]/20 -z-10"></div>
                <div className="absolute top-[4rem] left-[1.5rem] w-px h-[calc(100%-8rem)] bg-[#3d3329]/20 -z-10"></div>
              </div>

              {/* Categories Tree Container */}
              <div className="flex flex-col gap-4 lg:gap-8 mt-6 lg:mt-[4rem] xl:pl-[4rem]">
                {toolkit.map((item) => (
                  <div key={item.category} className="relative mt-2 xl:mt-0">
                    <div className="hidden xl:block absolute left-[-2.5rem] top-[2.5rem] w-[2.5rem] h-px bg-[#3d3329]/20 -z-10"></div>

                    <div className="relative border border-[#3d3329]/15 rounded-[1.5rem] p-4 lg:p-5 pl-5 sm:pl-6 bg-transparent">
                      <div className="absolute -top-3 left-5 bg-[#efe2d6] rounded-full px-3 py-1 lg:px-4 lg:py-1.5 text-[0.7rem] lg:text-[0.75rem] font-bold text-[#3d3329] shadow-sm border border-white/50">
                        {item.category}
                      </div>

                      <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-[#fcfbf9] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[0.7rem] sm:text-[0.75rem] font-medium shadow-sm text-[#3d3329] border border-white/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
