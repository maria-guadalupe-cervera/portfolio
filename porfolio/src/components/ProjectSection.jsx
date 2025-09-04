import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % projects.length;
    goToSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + projects.length) % projects.length;
    goToSlide(newIndex);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one reflects my
          focus on performance, accessibility, and creating seamless user
          experiences.
        </p>

        <div className="relative px-8 sm:px-12 overflow-hidden" ref={carouselRef}>
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  "w-full flex-shrink-0 px-4 transition-all duration-500",
                  index === currentIndex ? "scale-100 opacity-100" : "scale-95 opacity-50"
                )}
              >
                <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg">
                  <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-md hover:bg-background transition-colors duration-200"
            aria-label="Previous project"
            disabled={isAnimating}
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-md hover:bg-background transition-colors duration-200"
            aria-label="Next project"
            disabled={isAnimating}
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

        </div>

        {/* Slide Counter */}
        <div className="mt-2 flex justify-center">
          <div className="py-2 px-4 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-md">
            <span className="font-medium">
              {currentIndex + 1}/{projects.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
