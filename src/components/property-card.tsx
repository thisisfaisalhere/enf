'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Project } from '@/lib/data';
import { motion } from 'framer-motion';

type PropertyCardProps = {
  project: Project;
};

export function PropertyCard({ project }: PropertyCardProps) {
  const image = PlaceHolderImages.find(p => p.id === project.imageId);

  return (
    <motion.div
      className="group relative overflow-hidden bg-card border border-border/10 hover:border-primary/30 transition-all duration-500 shadow-card"
      data-testid={`property-card-${project.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className='overflow-hidden'>
        {image && (
            <Image
            src={image.imageUrl}
            alt={image.description}
            width={600}
            height={800}
            className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
            data-ai-hint={image.imageHint}
            />
        )}
      </div>
      {project.status === 'New Launch' && (
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-bold px-3 py-1">
          New Launch
        </div>
      )}
      <div className="p-6">
        <p className="text-sm text-primary tracking-widest uppercase">{project.location}</p>
        <h3 className="font-headline text-2xl mt-1 text-foreground">{project.name}</h3>
        <p className="text-muted-foreground mt-2 font-body text-sm h-10">{project.description}</p>
        <a href="#" className="mt-4 inline-block text-primary font-bold tracking-wider group-hover:translate-x-2 transition-transform duration-300">
          View Details &rarr;
        </a>
      </div>
    </motion.div>
  );
}
