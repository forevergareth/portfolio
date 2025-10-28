import { HackathonCard } from "@/components/hackathon-card";
import { Icons } from "@/components/icons";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DATA } from "@/data/resume";
import { getProjects } from "@/data/projects";
import Link from "next/link";
import Markdown from "react-markdown";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  const projects = await getProjects();
  const featuredProjects = projects
    .sort((a, b) => {
      if (
        new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ) {
        return -1;
      }
      return 1;
    })
    .slice(0, 3);
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`${DATA.name}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      {/* <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section> */}
      {/* <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Featured Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Game Development Portfolio
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From gameplay systems to full game experiences, here are some of my featured projects
                  showcasing my transition into game development.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {featuredProjects.map((project, id) => (
              <BlurFade
                key={project.slug}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
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
                        <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                          {project.metadata.title}
                        </h3>
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
                      </div>
                    </div>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <div className="flex justify-center mt-8">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-lg bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View All Projects
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Connect via{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  (X) twitter.
                </Link>{" "}
                or...
              </p>

              <Separator/>

              <div className="mt-4">
                <Link href={"mailto:oforevergareth@gmail.com"}>
                  <RainbowButton >
                    Connect via Email <Icons.email className="ml-4"/>
                  </RainbowButton>
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
