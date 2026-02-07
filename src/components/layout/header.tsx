'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Building, Sparkles, Info, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Projects', href: '#projects', icon: Building },
  { name: 'New Launches', href: '#new-launches', icon: Sparkles },
  { name: 'About', href: '#about', icon: Info },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-primary/20' : 'bg-transparent'
      )}
      data-testid="main-header"
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center h-20">
        <Link href="/" className="font-headline text-2xl font-bold text-primary" data-testid="logo">
          E&F
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors"
              data-testid={`nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-block border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none uppercase tracking-widest px-6 py-2 text-sm transition-all duration-300"
          data-testid="contact-button"
        >
          Enquire Now
        </a>
      </nav>
    </header>
  );
}
