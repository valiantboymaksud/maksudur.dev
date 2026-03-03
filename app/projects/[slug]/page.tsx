import { notFound } from 'next/navigation';
import ProjectDetailContent from '@/components/ProjectDetailContent';

// Required for static export
export const dynamicParams = false;

// --------------------
// Mock Data
// --------------------
const projectsData = {
  'payment-gateway': {
    title: 'Enterprise Payment Gateway',
    role: 'Lead Backend Engineer',
    duration: '2023 - Present',
    overview:
      'A high-throughput payment processing system capable of handling 10,000+ transactions per minute with sub-second latency.',
    tech: ['Node.js', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
    challenges: [
      'Ensuring ACID compliance during peak loads.',
      'Integrating with 15+ external banking APIs with varying protocols.',
    ],
    solutions: [
      'Implemented distributed locking using Redis for race condition handling.',
      'Built a robust retry mechanism with exponential backoff for failed transactions.',
    ],
    impact:
      'Reduced transaction failure rate by 40% and improved processing speed by 2x.',
  },
  bos: {
    title: 'Operations BOS',
    role: 'Full Stack Developer',
    duration: '2021 - 2023',
    overview: 'Real-time dashboard for tracking logistic fleets and inventory.',
    tech: ['React', 'Next.js', 'WebSockets'],
    challenges: [
      'Handling live data streams for 500+ users.',
      'Optimizing chart rendering performance.',
    ],
    solutions: [
      'Implemented WebSocket listeners.',
      'Used React.memo for expensive components.',
    ],
    impact: 'Improved fleet efficiency by 25%.',
  },
};

// --------------------
// STATIC PARAMS (MANDATORY)
// --------------------
export function generateStaticParams() {
  // ✅ CRITICAL: The key "slug" MUST match the folder name "[slug]"
  return Object.keys(projectsData).map((slug) => ({
    slug: slug, 
  }));
}

// --------------------
// METADATA
// --------------------
export async function generateMetadata({
  params,
}: {
  // ✅ CRITICAL: params is a Promise in Next.js 16
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  return {
    title: project?.title ?? 'Project Not Found',
  };
}

// --------------------
// PAGE
// --------------------
export default async function ProjectDetail({
  params,
}: {
  // ✅ CRITICAL: params is a Promise in Next.js 16
  params: Promise<{ slug: string }>;
}) {
  // ✅ CRITICAL: Await params before accessing properties
  const { slug } = await params;
  
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  // We pass the specific 'project' object, not the whole 'params' object.
  // This avoids passing Promises to client components.
  return <ProjectDetailContent project={project} />;
}