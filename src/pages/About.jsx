import AsyncState from "../components/AsyncState";
import { useJsonResource } from "../hooks/useJsonResource";

function ToolkitGroup({ category, skills }) {
  return (
    <div className="relative mt-2 xl:mt-0">
      <div className="absolute left-[-2.5rem] top-[2.5rem] -z-10 hidden h-px w-[2.5rem] bg-[#3d3329]/20 xl:block" />

      <div className="relative rounded-[1.5rem] border border-[#3d3329]/15 bg-transparent p-4 pl-5 sm:pl-6 lg:p-5">
        <div className="absolute -top-3 left-5 rounded-full border border-white/50 bg-[#efe2d6] px-3 py-1 text-[0.7rem] font-bold text-[#3d3329] shadow-sm lg:px-4 lg:py-1.5 lg:text-[0.75rem]">
          {category}
        </div>

        <div className="mt-2 flex flex-wrap gap-2 sm:gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/60 bg-[#fcfbf9] px-3 py-1.5 text-[0.7rem] font-medium text-[#3d3329] shadow-sm sm:px-4 sm:py-2 sm:text-[0.75rem]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const { data: profile, error, isLoading } =
    useJsonResource("/data/profile.json");

  if (isLoading || error || !profile) {
    return <AsyncState error={error} label="Profile" />;
  }

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
    <section className="fixed inset-0 z-10 h-[100dvh] w-full overflow-y-auto overflow-x-hidden font-sans text-[#3d3329] lg:relative lg:inset-auto lg:h-full">
      <div className="flex min-h-full w-full items-start justify-center px-4 pb-6 pt-[96px] sm:px-6 sm:pt-[120px] lg:items-center lg:p-8 xl:p-12">
        <div className="flex w-full max-w-[1400px] flex-col items-center justify-between gap-5 lg:gap-8 xl:flex-row xl:items-start xl:gap-12">
          <div className="relative z-10 mx-auto w-full max-w-[600px] shrink-0 rounded-[1.75rem] bg-[#efe2d6] p-5 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] sm:p-8 lg:mx-0 lg:rounded-[2.5rem] lg:p-10 xl:w-[42%] xl:max-w-none">
            <div className="mb-4 flex items-center justify-between gap-4 lg:mb-8">
              <h1 className="font-serif text-[1.1rem] text-[#3d3329] lg:text-[1.5rem]">
                About
              </h1>
              <div className="flex shrink-0 gap-2 sm:gap-3">
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-[#fcfbf9] text-xs font-bold text-[#3d3329] shadow-sm transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:text-sm"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-10 items-center justify-center rounded-full border border-white/60 bg-[#fcfbf9] px-3 py-1.5 text-[9px] font-bold tracking-widest text-[#3d3329] shadow-sm transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:px-4 lg:py-2 lg:text-xs"
                >
                  RESUME
                </a>
              </div>
            </div>

            <h2 className="mb-2 font-serif text-3xl text-[#3d3329] lg:mb-6 lg:text-5xl">
              {profile.greeting || "Hello!"}
            </h2>

            <div className="mb-4 text-[0.85rem] font-medium leading-[1.55] text-[#4a3f35] lg:mb-10 lg:text-[0.9rem] lg:leading-[1.65]">
              <p className="mb-3 lg:mb-4">{profile.bioParagraph1}</p>
              <p>{profile.bioParagraph2}</p>
            </div>

            <div className="border-t border-[#3d3329]/10 pt-4 lg:pt-6">
              <p className="mb-0.5 text-[10px] font-bold tracking-wide lg:mb-1 lg:text-xs">
                Reach me at
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="break-all border-b border-[#3d3329]/40 pb-[1px] text-[0.8rem] transition-colors hover:border-[#3d3329] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3d3329] lg:text-[0.9rem]"
              >
                {profile.email}
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[600px] shrink-0 justify-center pt-4 lg:mx-0 lg:pt-12 xl:mt-0 xl:w-[58%] xl:max-w-none xl:justify-end">
            <div className="relative w-full max-w-[700px]">
              <div className="absolute left-1/2 top-0 z-20 -mt-5 -translate-x-1/2 rounded-full border border-white/60 bg-[#efe2d6] px-5 py-2 text-[0.6rem] font-bold tracking-[0.2em] text-[#3d3329] shadow-[0_4px_15px_-3px_rgba(0,0,0,0.05)] lg:px-6 lg:py-2.5 lg:text-[0.65rem]">
                TOOLKIT
              </div>

              <div className="hidden xl:block">
                <div className="absolute left-1/2 top-[1.5rem] -z-10 h-[2.5rem] w-px bg-[#3d3329]/20" />
                <div className="absolute right-1/2 top-[4rem] -z-10 h-px w-[calc(50%-1.5rem)] bg-[#3d3329]/20" />
                <div className="absolute left-[1.5rem] top-[4rem] -z-10 h-[calc(100%-8rem)] w-px bg-[#3d3329]/20" />
              </div>

              <div className="mt-6 flex flex-col gap-4 lg:mt-[4rem] lg:gap-8 xl:pl-[4rem]">
                {toolkit.map((item) => (
                  <ToolkitGroup key={item.category} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
