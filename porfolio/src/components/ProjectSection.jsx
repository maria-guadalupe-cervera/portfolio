import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Barry University",
    description:
      "Website maintenance and improvements with a focus on performance and accessibility.",
    tags: ["React", "TypeScript", "Muban", "Node.js"],
  },
  {
    id: 2,
    title: "Ralph Lauren – Fragrance Quiz",
    description:
      "Interactive quiz experience for Ralph Lauren Fragrances.",
    tags: ["React", "TypeScript"],
  },
  {
    id: 3,
    title: "McLaren",
    description:
      "Site maintenance, feature updates and Google Track Manager implementation for McLaren’s global website.",
    tags: ["React", "TypeScript", "GSAP", "GTM"],
  },
  {
    id: 4,
    title: "DayOne",
    description:
      "Site maintenance and redesign for the career portal. Work included accessibility improvements and Storybook components.",
    tags: ["React", "Storybook", "Muban", "GSAP", "Accessibility"],
  },
  {
    id: 5,
    title: "PayPal – Parent Brandkits",
    description:
      "Frontify-based brand kit implementation for PayPal parent brand assets.",
    tags: ["Frontify", "Design Systems"],
  },
  {
    id: 6,
    title: "AirForce",
    description:
      "Site maintenance and accessibility updates for the U.S. AirForce website.",
    tags: ["React", "TypeScript", "Muban", "GSAP", "Accessibility", "AEM"],
  },
  {
    id: 7,
    title: "Transcend – Cookie Banner",
    description:
      "Custom cookie banner design and implementation with modern tooling.",
    tags: ["React", "TypeScript", "Vite", "Storybook"],
  },
  {
    id: 8,
    title: "LG ThinQ",
    description:
      "Site maintenance with a focus on responsiveness and accessibility improvements.",
    tags: ["React", "TypeScript", "Accessibility"],
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I’ve worked on. Each one reflects my
          focus on performance, accessibility, and creating seamless user
          experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/maria-guadalupe-cervera"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
