'use client'

import { projects } from '@/lib/data';
import { TracingBeam } from '@/components/tracing-beam';
import { PropertyCard } from '@/components/property-card';

export function NewLaunches() {
  const newLaunchProjects = projects.filter(p => p.status === 'New Launch');

  return (
    <section id="new-launches" className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="font-headline text-4xl md:text-5xl text-center tracking-tight">New Launches</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
          Be the first to discover our latest masterpieces, setting new standards in luxury living.
        </p>
        <div className="mt-16">
          <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
              {newLaunchProjects.map((project, i) => (
                <div key={`content-${i}`} className="mb-16">
                   <PropertyCard project={project} />
                </div>
              ))}
            </div>
          </TracingBeam>
        </div>
      </div>
    </section>
  );
}
