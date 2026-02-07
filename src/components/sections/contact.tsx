import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center">
          <h2 className="font-headline text-4xl md:text-5xl tracking-tight">Get in Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We invite you to start a conversation about your future home. Reach out to us for inquiries, viewings, or consultations.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Our Office</h3>
                <p className="text-muted-foreground">123 Luxury Avenue, Limassol, 4000, Cyprus</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-md">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Phone</h3>
                <p className="text-muted-foreground">+357 25 123 456</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-md">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Email</h3>
                <p className="text-muted-foreground">
                    <a href="mailto:info@ef.dev" className="hover:text-primary transition-colors">info@ef.dev</a>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input type="text" placeholder="Your Name" className="bg-card" data-testid="contact-name" />
                <Input type="email" placeholder="Your Email" className="bg-card" data-testid="contact-email"/>
              </div>
              <Input type="text" placeholder="Subject" className="bg-card" data-testid="contact-subject" />
              <Textarea placeholder="Your Message" rows={6} className="bg-card" data-testid="contact-message" />
              <Button type="submit" className="w-full btn-primary" data-testid="contact-submit">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
