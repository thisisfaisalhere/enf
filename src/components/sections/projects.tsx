import { projects } from '@/lib/data';
import { PropertyCard } from '@/components/property-card';

export function Projects() {
  const regularProjects = projects.filter(p => p.status !== 'New Launch');

  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="font-headline text-4xl md:text-5xl text-center tracking-tight">Our Portfolio</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
          A curated selection of our completed and ongoing projects, each a testament to our legacy of excellence.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map(project => (
            <PropertyCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
