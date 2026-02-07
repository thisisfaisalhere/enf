'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-main');

  return (
    <section className="relative h-screen w-full" data-testid="hero-section">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" style={{ backgroundImage: "linear-gradient(to bottom, rgba(10,10,10,0) 0%, #0a0a0a 100%)" }} />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground"
        >
          Timeless Luxury,
          <br />
          <span className="text-primary">Masterfully Built.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-6 max-w-2xl font-body text-lg text-secondary-foreground tracking-wide"
        >
          Since 1971, Evangelou & Frantzis has been crafting Cyprus's most exclusive residences with an unwavering commitment to quality and prestige.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-10"
        >
          <a
            href="#projects"
            className="btn-primary"
            data-testid="hero-cta-button"
          >
            Explore Our Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
