import { notFound } from 'next/navigation';
import ProjectDetailContent from '@/components/ProjectDetailContent';
import { projects } from '@/lib/data/projects';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id, 
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);

  return {
    title: project?.title ?? 'Project Not Found',
    description: project?.overview,
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}