'use client';

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion } from "framer-motion";

export function About() {
    const aboutImage1 = PlaceHolderImages.find(p => p.id === 'about-1');
    const aboutImage2 = PlaceHolderImages.find(p => p.id === 'about-2');
    
    return (
        <section id="about" className="py-24 md:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <p className="text-primary uppercase tracking-widest">Our Legacy</p>
                        <h2 className="font-headline text-4xl md:text-5xl mt-2 tracking-tight">
                            Over 50 Years of Excellence
                        </h2>
                        <div className="mt-6 space-y-4 text-muted-foreground font-body leading-relaxed">
                            <p>
                                Founded in 1971 in the heart of Limassol, Cyprus, Evangelou & Frantzis Developers has grown from a humble beginning into a beacon of luxury real estate. Our name is synonymous with prestige, trust, and timeless design.
                            </p>
                            <p>
                                We don't just build properties; we craft legacies. Each project is a masterpiece of architectural innovation and uncompromising quality, designed to offer an exclusive lifestyle to our discerning clientele.
                            </p>
                            <blockquote className="border-l-2 border-primary pl-6 py-2 my-4 font-accent italic text-lg text-secondary-foreground">
                                "Our philosophy is simple: to create exceptional spaces that stand the test of time, both in quality and in style."
                            </blockquote>
                        </div>
                    </motion.div>
                    <div className="grid grid-cols-2 gap-4 h-[500px]">
                        <motion.div 
                            className="relative"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            {aboutImage1 && (
                                <Image
                                    src={aboutImage1.imageUrl}
                                    alt={aboutImage1.description}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={aboutImage1.imageHint}
                                />
                            )}
                        </motion.div>
                        <motion.div 
                            className="relative mt-16"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        >
                            {aboutImage2 && (
                                <Image
                                    src={aboutImage2.imageUrl}
                                    alt={aboutImage2.description}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={aboutImage2.imageHint}
                                />
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
