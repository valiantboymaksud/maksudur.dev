import { notFound } from 'next/navigation';
import ProjectDetailContent from '@/components/ProjectDetailContent';

export const dynamicParams = false;

const projectsData = {
  'payment-gateway': {
    id: 'payment-gateway',
    title: 'Enterprise Payment Gateway',
    role: 'Lead Systems Architect',
    duration: '2023 - Present',
    overview: 'A mission-critical financial processing engine designed for high-availability and sub-second transaction finality across multiple banking networks.',
    tech: ['Laravel', 'MySQL', 'Redis', 'Vue.js', 'Docker', 'AWS'],
    challenges: [
      'Managing race conditions during high-concurrency payment callbacks.',
      'Ensuring 99.99% uptime during peak transaction windows.',
      'Complex error mapping between inconsistent banking API responses.'
    ],
    solutions: [
      'Implemented distributed locking mechanisms using Redis.',
      'Developed a robust retry-and-reconcile architecture for failed callbacks.',
      'Engineered an abstracted banking gateway layer to normalize external API data.'
    ],
    impact: 'Successfully processed 1M+ transactions daily with zero financial data loss and a 45% improvement in processing latency.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200'
  },
  'school': {
    id: 'school',
    title: 'School Management System',
    role: 'Full Stack Engineer',
    duration: '2022 - 2023',
    overview: 'A comprehensive educational ERP system that digitalizes student lifecycles, from admission and attendance to grading and parent communication.',
    tech: ['Laravel', 'MySQL', 'Livewire', 'Alpine.js', 'Tailwind CSS'],
    challenges: [
      'Handling complex dynamic scheduling for varied institutional calendars.',
      'Generating high-fidelity PDF reports for thousands of students simultaneously.',
      'Real-time communication synchronization between teachers and parents.'
    ],
    solutions: [
      'Utilized Livewire for high-interactivity features without page reloads.',
      'Implemented background job processing for heavy report generation.',
      'Built a centralized notification engine for real-time alerts.'
    ],
    impact: 'Automated administrative workflows for 50+ institutions, reducing manual data entry time by approximately 70%.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200'
  },
  'pos': {
    id: 'pos',
    title: 'Point of Sale System',
    role: 'Senior Developer',
    duration: '2021 - 2022',
    overview: 'A retail-focused POS solution optimized for rapid checkout, inventory synchronization, and multi-location retail management.',
    tech: ['PHP', 'Laravel', 'MySQL', 'Redis'],
    challenges: [
      'Synchronizing inventory across offline-capable local terminals.',
      'Managing large-scale product catalogs with varied SKU attributes.',
      'Integrating with diverse hardware peripherals (printers, scanners).'
    ],
    solutions: [
      'Developed a sophisticated local-first synchronization protocol.',
      'Optimized database indexing for sub-millisecond product searches.',
      'Built a modular driver layer for peripheral hardware compatibility.'
    ],
    impact: 'Deployed across 200+ retail outlets with real-time inventory accuracy maintained at 99.8%.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200'
  },
  'hrm': {
    id: 'hrm',
    title: 'HRM Platform',
    role: 'Backend Lead',
    duration: '2020 - 2021',
    overview: 'An enterprise human resource management suite focused on payroll precision, employee compliance, and performance metrics.',
    tech: ['PHP', 'Laravel', 'MySQL', 'React'],
    challenges: [
      'Complex payroll calculation logic involving varied tax jurisdictions.',
      'Ensuring data privacy and audit trails for sensitive employee information.',
      'Scaling the reporting engine for multi-thousand employee organizations.'
    ],
    solutions: [
      'Architected a plugin-based payroll engine for flexible tax rules.',
      'Implemented comprehensive field-level auditing and AES encryption.',
      'Integrated an ElasticSearch layer for rapid multi-dimensional reporting.'
    ],
    impact: 'Streamlined HR operations for major regional enterprises, handling payroll for over 5,000 employees monthly.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200'
  }
};

export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug, 
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

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
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}