import { getProjects, getProject } from "@/data/projects";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let project = await getProject(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = project.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/projects/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Project({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section id="project">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            headline: project.metadata.title,
            datePublished: project.metadata.publishedAt,
            dateModified: project.metadata.publishedAt,
            description: project.metadata.summary,
            image: project.metadata.image
              ? `${DATA.url}${project.metadata.image}`
              : `${DATA.url}/og?title=${project.metadata.title}`,
            url: `${DATA.url}/projects/${project.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {project.metadata.title}
      </h1>
      <div className="flex flex-wrap gap-4 items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(project.metadata.publishedAt)}
          </p>
        </Suspense>
        {project.metadata.platform && (
          <div className="flex items-center gap-2">
            <span className="text-neutral-600 dark:text-neutral-400">Platform:</span>
            <Badge variant="secondary">{project.metadata.platform}</Badge>
          </div>
        )}
        {project.metadata.duration && (
          <div className="flex items-center gap-2">
            <span className="text-neutral-600 dark:text-neutral-400">Duration:</span>
            <span className="text-sm">{project.metadata.duration}</span>
          </div>
        )}
        {project.metadata.role && (
          <div className="flex items-center gap-2">
            <span className="text-neutral-600 dark:text-neutral-400">Role:</span>
            <span className="text-sm">{project.metadata.role}</span>
          </div>
        )}
      </div>
      {project.metadata.tools && project.metadata.tools.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8 max-w-[650px]">
          <span className="text-sm text-neutral-600 dark:text-neutral-400">Tools:</span>
          {project.metadata.tools.map((tool) => (
            <Badge key={tool} variant="outline">
              {tool}
            </Badge>
          ))}
        </div>
      )}
      <article
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: project.source }}
      ></article>
    </section>
  );
}
