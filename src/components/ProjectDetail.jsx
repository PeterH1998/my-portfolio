import { useNavigate, useParams, useOutletContext } from "react-router-dom";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { projects } = useOutletContext();

  const project = projects.find((p) => p.id === projectId);

  if (!project) return null;

  // Find next/prev for the arrows
  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const prevId =
    currentIndex > 0
      ? projects[currentIndex - 1].id
      : projects[projects.length - 1].id;
  const nextId =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1].id
      : projects[0].id;

  return (
    <div className="w-full h-full bg-[#f3e9df]/80 backdrop-blur-2xl border border-white/50 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden text-[#5c4d43]">
      {/* Top Navigation Pill */}
      <div className="p-6 pb-2">
        <div className="bg-black/10 rounded-full p-1 flex items-center justify-between backdrop-blur-md border border-white/20">
          <div className="flex items-center">
            <button
              onClick={() => navigate(`/projects/${prevId}`)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/40 transition"
            >
              &lt;
            </button>
            <button
              onClick={() => navigate(`/projects/${nextId}`)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/40 transition"
            >
              &gt;
            </button>
          </div>

          <div className="flex-1 overflow-hidden px-4">
            <p className="text-sm font-bold whitespace-nowrap opacity-60">
              {project.title} &nbsp;&nbsp;&nbsp; {project.title}{" "}
              &nbsp;&nbsp;&nbsp; {project.title}
            </p>
          </div>

          <button
            onClick={() => navigate("/projects")}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/40 hover:bg-white/70 transition font-bold"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-10 pb-10 custom-scrollbar">
        {/* Intro */}
        <div className="mb-8 mt-4">
          <p className="text-lg font-medium italic mb-6 opacity-80">
            {project.shortDescription}
          </p>
          {project.details.introParagraphs.map((text, i) => (
            <p key={i} className="text-sm leading-relaxed mb-4 opacity-90">
              {text}
            </p>
          ))}
        </div>

        {/* Highlights */}
        {project.details.highlights.length > 0 && (
          <div className="mb-10">
            <h3 className="font-serif text-3xl mb-6">Highlights</h3>
            {project.details.highlights.map((item, i) => (
              <div key={i} className="mb-6">
                <img
                  src={item.image}
                  alt="Highlight"
                  className="w-full rounded-xl mb-3 shadow-md"
                />
                <p className="text-xs font-medium opacity-70">{item.caption}</p>
              </div>
            ))}
          </div>
        )}

        {/* Main Challenge */}
        {project.details.mainChallenge && (
          <div className="mb-10">
            <h3 className="font-serif text-3xl mb-6">Main Challenge</h3>
            <p className="text-sm leading-relaxed mb-6 opacity-90">
              {project.details.mainChallenge.text}
            </p>
            {project.details.mainChallenge.image && (
              <div>
                <img
                  src={project.details.mainChallenge.image}
                  alt="Challenge"
                  className="w-full rounded-xl mb-3 shadow-md"
                />
                <p className="text-xs font-medium opacity-70">
                  {project.details.mainChallenge.caption}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Development Specs */}
        {project.details.techStack && (
          <div>
            <h3 className="font-serif text-3xl mb-6">Development Specs</h3>
            <p className="text-sm mb-4 opacity-90">
              For the stack, I used the following:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm opacity-90 font-medium">
              {project.details.techStack.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
