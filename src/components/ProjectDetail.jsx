import { useNavigate, useOutletContext, useParams } from "react-router-dom";

function Figure({ image, caption, title }) {
  if (!image) {
    return null;
  }

  return (
    <figure>
      <img
        src={image}
        alt={caption || title}
        loading="lazy"
        className="mb-3 w-full rounded-xl shadow-md"
      />
      {caption && (
        <figcaption className="text-xs font-medium leading-relaxed opacity-70">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function DetailSection({ title, children }) {
  return (
    <section className="mb-10 last:mb-0">
      <h2 className="mb-5 font-serif text-[clamp(1.75rem,6vw,2.25rem)] leading-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { projects } = useOutletContext();

  const project = projects.find((item) => item.id === projectId);

  if (!project) return null;

  const currentIndex = projects.findIndex((item) => item.id === projectId);
  const prevId =
    currentIndex > 0
      ? projects[currentIndex - 1].id
      : projects[projects.length - 1].id;
  const nextId =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1].id
      : projects[0].id;

  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] border border-white/50 bg-[#f3e9df]/85 text-[#5c4d43] shadow-2xl backdrop-blur-2xl sm:rounded-[2rem]">
      <div className="p-4 pb-2 sm:p-6 sm:pb-2">
        <div className="flex items-center justify-between rounded-full border border-white/20 bg-black/10 p-1 backdrop-blur-md">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => navigate(`/projects/${prevId}`)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-lg transition hover:bg-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-8 sm:w-8"
              aria-label="Previous project"
            >
              {"<"}
            </button>
            <button
              type="button"
              onClick={() => navigate(`/projects/${nextId}`)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-lg transition hover:bg-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-8 sm:w-8"
              aria-label="Next project"
            >
              {">"}
            </button>
          </div>

          <div className="min-w-0 flex-1 overflow-hidden px-3 sm:px-4">
            <p className="truncate text-sm font-bold opacity-65">
              {project.title}
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/projects")}
            className="flex h-10 min-w-10 items-center justify-center rounded-full bg-white/45 px-3 text-xs font-bold uppercase tracking-wide transition hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-8 sm:min-w-8"
            aria-label="Close project details"
          >
            Close
          </button>
        </div>
      </div>

      <div className="custom-scrollbar flex-1 overflow-y-auto px-5 pb-6 sm:px-8 sm:pb-8 lg:px-10 lg:pb-10">
        <header className="mb-8 mt-4">
          <p className="mb-6 text-base font-medium italic leading-relaxed opacity-80 sm:text-lg">
            {project.shortDescription}
          </p>
          {project.details.introParagraphs.map((text) => (
            <p key={text} className="mb-4 text-sm leading-relaxed opacity-90">
              {text}
            </p>
          ))}
        </header>

        {project.details.highlights.length > 0 && (
          <DetailSection title="Highlights">
            <div className="space-y-6">
              {project.details.highlights.map((item) => (
                <Figure
                  key={item.image}
                  image={item.image}
                  caption={item.caption}
                  title="Project highlight"
                />
              ))}
            </div>
          </DetailSection>
        )}

        {project.details.mainChallenge && (
          <DetailSection title="Main Challenge">
            <p className="mb-6 text-sm leading-relaxed opacity-90">
              {project.details.mainChallenge.text}
            </p>
            <Figure
              image={project.details.mainChallenge.image}
              caption={project.details.mainChallenge.caption}
              title="Main challenge"
            />
          </DetailSection>
        )}

        {project.details.techStack && (
          <DetailSection title="Development Specs">
            <p className="mb-4 text-sm opacity-90">
              For the stack, I used the following:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm font-medium opacity-90">
              {project.details.techStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </DetailSection>
        )}
      </div>
    </article>
  );
}
