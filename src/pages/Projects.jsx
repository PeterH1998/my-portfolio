import { useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import AsyncState from "../components/AsyncState";
import { useJsonResource } from "../hooks/useJsonResource";

function ProjectMedia({ activeProject, isDetailView }) {
  return (
    <div
      className={`relative z-20 mb-2 flex w-full shrink-0 items-center justify-center px-4 transition-all duration-700 ease-in-out sm:mb-4 lg:absolute lg:mb-0 lg:p-0 ${
        isDetailView
          ? "lg:left-[5%] lg:top-[20%] lg:w-[45%] lg:rotate-0"
          : "lg:-left-[12%] lg:top-[8%] lg:w-[70%] lg:-rotate-[1deg]"
      }`}
    >
      <div
        className={`relative w-full max-w-[min(78vw,320px)] transition-transform duration-700 ease-in-out sm:max-w-[400px] lg:max-w-none ${
          isDetailView ? "scale-x-100" : "scale-100 lg:scale-x-[1.15]"
        }`}
      >
        <img
          src="/assets/laptop-frame.png"
          alt=""
          aria-hidden="true"
          className={`relative z-10 h-auto w-full drop-shadow-2xl transition-opacity duration-700 ease-in-out ${
            isDetailView ? "opacity-0" : "opacity-100"
          }`}
        />

        <video
          key={activeProject.id}
          src={
            activeProject.laptopVideoUrl || `/assets/${activeProject.videoSrc}`
          }
          autoPlay
          loop
          muted
          playsInline
          aria-label={`${activeProject.title} preview`}
          className={`absolute object-fill transition-all duration-700 ease-in-out ${
            isDetailView
              ? "left-0 top-[5%] z-20 h-[90%] w-full origin-center rounded-2xl shadow-2xl [transform:perspective(1000px)_rotateY(0deg)_rotateX(0deg)_rotateZ(0deg)]"
              : "left-[24.2%] top-[18.5%] z-0 h-[56%] w-[49%] origin-left rounded-none [transform:perspective(500px)_rotateY(14deg)_rotateX(8deg)_rotateZ(-1.3deg)] lg:left-[24%] lg:top-[17.4%] lg:h-[60%] lg:w-[52.4%] lg:[transform:perspective(900px)_rotateY(14deg)_rotateX(8deg)_rotateZ(-1.3deg)]"
          }`}
        />
      </div>
    </div>
  );
}

function ProjectList({
  projects,
  activeProjectId,
  finalActiveIndex,
  onHover,
  onSelect,
}) {
  return (
    <>
      <div className="flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20 p-5 shadow-2xl backdrop-blur-xl sm:rounded-[2rem] sm:p-6 lg:p-10 lg:pb-6">
        <h1 className="mb-4 shrink-0 text-xs font-bold uppercase tracking-widest text-white/90 sm:text-sm lg:mb-6">
          My Projects
        </h1>

        <div className="mask-image-fade no-scrollbar flex flex-1 flex-col gap-7 overflow-y-auto pr-2 pt-2 sm:gap-8 lg:gap-12 lg:pr-4 lg:pt-4">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => onSelect(project.id)}
              onFocus={() => onHover(project.id)}
              onBlur={() => onHover(null)}
              onMouseEnter={() => onHover(project.id)}
              onMouseLeave={() => onHover(null)}
              className={`min-h-24 shrink-0 cursor-pointer text-left transition-all duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                activeProjectId === project.id
                  ? "translate-x-2 opacity-100"
                  : "opacity-70 hover:opacity-90 lg:opacity-45 lg:hover:opacity-75"
              }`}
            >
              <span className="mb-2 block font-serif text-[clamp(2rem,11vw,3rem)] font-bold leading-none text-white lg:mb-3 lg:text-[clamp(2.75rem,4vw,4.25rem)]">
                {project.title}
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                {project.tags ? project.tags.join(" / ") : ""}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div
        className="mt-4 flex shrink-0 gap-2.5 rounded-full border border-white/5 bg-black/10 px-4 py-2 shadow-lg backdrop-blur-xl lg:mt-6 lg:gap-3 lg:px-5 lg:py-3"
        aria-hidden="true"
      >
        {projects.map((project, index) => (
          <span
            key={project.id}
            className={`h-2 w-2 rounded-full transition-all duration-300 lg:h-2.5 lg:w-2.5 ${
              finalActiveIndex === index ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </>
  );
}

export default function Projects() {
  const {
    data: projects,
    error,
    isLoading,
  } = useJsonResource("/data/projects.json");
  const [hoveredId, setHoveredId] = useState(null);

  const navigate = useNavigate();
  const { projectId } = useParams();
  const location = useLocation();

  if (isLoading || error || !projects?.length) {
    return <AsyncState error={error} label="Projects" />;
  }

  const activeProjectId = projectId || hoveredId || projects[0].id;
  const activeProject =
    projects.find((project) => project.id === activeProjectId) || projects[0];

  const activeIndex = projects.findIndex(
    (project) => project.id === activeProjectId,
  );
  const finalActiveIndex = activeIndex >= 0 ? activeIndex : 0;
  const isDetailView = Boolean(
    projectId && location.pathname.includes(projectId),
  );

  return (
    <section className="fixed inset-0 z-10 flex h-[100dvh] w-full flex-col bg-transparent pb-6 pt-[96px] sm:pt-[110px] lg:relative lg:inset-auto lg:h-full lg:flex-row lg:overflow-hidden lg:pb-0 lg:pt-0">
      <ProjectMedia activeProject={activeProject} isDetailView={isDetailView} />

      <div
        className={`relative mx-auto flex min-h-0 w-full flex-1 flex-col items-center overflow-hidden px-4 transition-all duration-500 ease-in-out sm:max-w-[640px] lg:absolute lg:mx-0 lg:max-w-none lg:overflow-visible lg:p-0 ${
          isDetailView
            ? "z-30 lg:right-[4%] lg:top-[12%] lg:h-[75%] lg:w-[40%]"
            : "z-30 lg:right-[3%] lg:top-[15%] lg:h-[65%] lg:w-[32%]"
        }`}
      >
        {!isDetailView ? (
          <ProjectList
            projects={projects}
            activeProjectId={activeProjectId}
            finalActiveIndex={finalActiveIndex}
            onHover={setHoveredId}
            onSelect={(id) => {
              setHoveredId(null);
              navigate(`/projects/${id}`);
            }}
          />
        ) : (
          <div className="no-scrollbar h-full w-full overflow-y-auto">
            <Outlet context={{ projects }} />
          </div>
        )}
      </div>
    </section>
  );
}
