import { useState, useEffect } from "react";
import { useNavigate, useParams, Outlet, useLocation } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  const navigate = useNavigate();
  const { projectId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  if (projects.length === 0) return null;

  // FIX 1: Swapped the order here.
  // URL Param (projectId) MUST take priority over hoveredId so mobile clicks aren't overridden.
  const activeProjectId = projectId || hoveredId || projects[0].id;
  const activeProject =
    projects.find((p) => p.id === activeProjectId) || projects[0];

  const activeIndex = projects.findIndex((p) => p.id === activeProjectId);
  const finalActiveIndex = activeIndex >= 0 ? activeIndex : 0;

  const isDetailView =
    location.pathname.includes(projectId) && projectId != null;

  return (
    <div className="fixed inset-0 z-10 pt-[110px] pb-6 flex flex-col lg:relative lg:inset-auto lg:pt-0 lg:pb-0 lg:flex-row w-full h-[100dvh] lg:h-full lg:overflow-hidden bg-transparent">
      {/* LEFT: Contextual Media Wrap (Laptop Frame + Video) */}
      <div
        className={`flex items-center justify-center transition-all duration-700 ease-in-out z-20 
          /* MOBILE: Fixed padding, constrained width */
          relative w-full px-4 shrink-0 mb-2 sm:mb-4
          /* DESKTOP: Absolute positioning (Matches Original) */
          lg:absolute lg:p-0 lg:mx-0 lg:mb-0
          ${
            isDetailView
              ? "lg:left-[5%] lg:top-[20%] lg:w-[45%] lg:transform lg:rotate-0 lg:z-20"
              : "lg:-left-[12%] lg:top-[8%] lg:w-[70%] lg:transform lg:-rotate-[1deg] lg:z-10"
          }`}
      >
        <div
          className={`relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none transition-transform duration-700 ease-in-out ${
            isDetailView ? "scale-x-100" : "scale-100 lg:scale-x-[1.15]"
          }`}
        >
          <img
            src="/assets/laptop-frame.png"
            alt="Laptop Mockup"
            className={`relative z-10 w-full h-auto drop-shadow-2xl pointer-events-none transition-opacity duration-700 ease-in-out ${
              isDetailView ? "opacity-0" : "opacity-100"
            }`}
          />

          <video
            key={activeProject.id}
            src={
              activeProject.laptopVideoUrl ||
              `/assets/${activeProject.videoSrc}`
            }
            autoPlay
            loop
            muted
            playsInline
            className={`absolute object-fill transition-all duration-700 ease-in-out ${
              isDetailView
                ? "z-20 shadow-2xl top-[5%] left-0 w-full h-[90%] rounded-[1rem] origin-center [transform:perspective(1000px)_rotateY(0deg)_rotateX(0deg)_rotateZ(0deg)]"
                : "z-0 rounded-none origin-left " +
                  "top-[18.5%] left-[24.2%] w-[49.8%] h-[56%] [transform:perspective(500px)_rotateY(14deg)_rotateX(8deg)_rotateZ(-1.3deg)] " +
                  "lg:top-[17.4%] lg:left-[24%] lg:w-[55%] lg:h-[60%] lg:[transform:perspective(900px)_rotateY(14deg)_rotateX(8deg)_rotateZ(-1.3deg)]"
            }`}
          />
        </div>
      </div>

      {/* RIGHT: Dynamic Content Area */}
      <div
        className={`flex flex-col items-center transition-all duration-500 ease-in-out
          /* MOBILE: flex-1 ensures it spans the entire remainder of the screen */
          relative w-full flex-1 px-4 overflow-hidden max-w-[600px] mx-auto
          /* DESKTOP: Absolute positioned panel (Matches Original) */
          lg:absolute lg:max-w-none lg:p-0 lg:mx-0 lg:overflow-visible
          ${
            isDetailView
              ? "lg:right-[4%] lg:top-[12%] lg:w-[40%] lg:h-[75%] opacity-100 z-30 lg:z-30"
              : "lg:right-[3%] lg:top-[15%] lg:w-[32%] lg:h-[65%] opacity-100 z-30 lg:z-10"
          }`}
      >
        {!isDetailView ? (
          <>
            {/* Glassmorphism Panel */}
            <div className="w-full h-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 lg:p-10 lg:pb-6 shadow-2xl flex flex-col overflow-hidden">
              <h3 className="shrink-0 font-sans text-xs sm:text-sm lg:text-sm font-bold tracking-widest uppercase mb-4 lg:mb-6 text-white/90">
                My Projects
              </h3>

              <div className="flex flex-col gap-8 lg:gap-12 flex-1 overflow-y-auto no-scrollbar mask-image-fade pr-2 lg:pr-4 pt-2 lg:pt-4">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    // FIX 2: Clear the hover state strictly on click, and on mouse leave
                    onClick={() => {
                      setHoveredId(null);
                      navigate(`/projects/${proj.id}`);
                    }}
                    onMouseEnter={() => setHoveredId(proj.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`cursor-pointer transition-all duration-300 ease-in-out shrink-0 ${
                      activeProjectId === proj.id
                        ? "opacity-100 translate-x-2"
                        : "opacity-60 lg:opacity-40 hover:opacity-90 lg:hover:opacity-70"
                    }`}
                  >
                    <h2 className="font-serif text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] leading-none font-bold text-white mb-2 lg:mb-3">
                      {proj.title}
                    </h2>
                    <p className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/80 uppercase">
                      {proj.tags ? proj.tags.join(" • ") : ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dot Tracker */}
            <div className="mt-4 lg:mt-6 shrink-0 flex bg-black/10 backdrop-blur-xl border border-white/5 px-4 lg:px-5 py-2 lg:py-3 rounded-full gap-2.5 lg:gap-3 shadow-lg">
              {projects.map((proj, idx) => (
                <div
                  key={proj.id}
                  className={`w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-all duration-300 ${
                    finalActiveIndex === idx ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="w-full h-full overflow-y-auto no-scrollbar">
            <Outlet context={{ projects }} />
          </div>
        )}
      </div>
    </div>
  );
}
