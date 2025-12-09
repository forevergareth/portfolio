import BlurFade from "@/components/magicui/blur-fade";
import { getProjects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Projects",
  description: "My game development projects and portfolio.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Projects</h1>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <p className="text-muted-foreground mb-8">
          A collection of game development projects showcasing my journey to game development.
          Each project represents different aspects of the game development process, from gameplay mechanics to systems and more.
        </p>
      </BlurFade>
      <div className="grid gap-6">
        {projects
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((project, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="block group"
              >
                <div className="flex flex-col md:flex-row gap-4 p-4 rounded-lg border hover:shadow-lg transition-all duration-300">
                  {project.metadata.image && (
                    <div className="w-full md:w-48 h-48 relative flex-shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={project.metadata.image}
                        alt={project.metadata.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="flex-1 space-y-2">
                    <div>
                      <h2 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                        {project.metadata.title}
                      </h2>
                      <p className="text-xs text-muted-foreground">
                        {project.metadata.publishedAt}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.metadata.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.metadata.platform && (
                        <Badge variant="secondary" className="text-xs">
                          {project.metadata.platform}
                        </Badge>
                      )}
                      {project.metadata.tools?.slice(0, 3).map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                      {project.metadata.tools && project.metadata.tools.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.metadata.tools.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
