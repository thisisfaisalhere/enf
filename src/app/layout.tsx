import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Header } from '@/components/layout/header';
import { SmoothScroll } from '@/components/smooth-scroll';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Evangelou & Frantzis Developers',
  description: 'Building prestigious, timeless, and exclusive properties in Limassol, Cyprus since 1971.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Manrope:wght@300;400;500&family=Cormorant+Garamond:ital,wght@1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased", "bg-background text-foreground")}>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <Toaster />
      </body>
    </html>
  );
}
