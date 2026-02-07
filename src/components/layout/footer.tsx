import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border/10 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-secondary-foreground">
          <div>
            <h3 className="font-headline text-2xl text-primary">Evangelou & Frantzis</h3>
            <p className="mt-2 text-sm text-muted-foreground">Developers since 1971.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold tracking-wider uppercase text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="#new-launches" className="text-muted-foreground hover:text-primary transition-colors">New Launches</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold tracking-wider uppercase text-foreground">Contact</h4>
            <p className="mt-4 text-sm text-muted-foreground">
              Limassol, Cyprus
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              <a href="mailto:info@ef.dev" className="hover:text-primary transition-colors">info@ef.dev</a>
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-border/10 pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} Evangelou & Frantzis Developers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
