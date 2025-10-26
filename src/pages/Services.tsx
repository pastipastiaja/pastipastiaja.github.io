import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pill, Syringe, TestTube, Camera, Clock, FileText } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Pill,
      title: "Prescription Services",
      description: "Fast and convenient prescription fills and refills with expert pharmacist consultations.",
      features: ["Online refills", "Auto-refill program", "Free delivery", "Medication therapy management"],
    },
    {
      icon: Syringe,
      title: "Immunizations",
      description: "Protect yourself and your family with a wide range of vaccines administered by certified pharmacists.",
      features: ["Flu shots", "COVID-19 vaccines", "Travel vaccines", "Shingles vaccines"],
    },
    {
      icon: TestTube,
      title: "Health Testing",
      description: "Convenient health screenings and tests to help you monitor and maintain your wellness.",
      features: ["Blood pressure checks", "Diabetes testing", "Cholesterol screening", "COVID-19 testing"],
    },
    {
      icon: Camera,
      title: "Photo Services",
      description: "Professional photo printing and personalized gifts for all your special moments.",
      features: ["Same-day prints", "Photo books", "Canvas prints", "Personalized gifts"],
    },
    {
      icon: Clock,
      title: "24/7 Pharmacy",
      description: "Round-the-clock access to pharmacy services at select locations for your convenience.",
      features: ["Emergency fills", "Night service", "Weekend availability", "Holiday hours"],
    },
    {
      icon: FileText,
      title: "Health Records",
      description: "Securely manage your prescriptions and health information online.",
      features: ["Digital records", "Prescription history", "Insurance management", "Health insights"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/20 to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold">Our Services</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Comprehensive healthcare services designed to keep you healthy and well
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-primary/10 p-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-center">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-center text-muted-foreground">{service.description}</p>
                    <ul className="mb-4 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <span className="mr-2 text-primary">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">Learn More</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Schedule Your Service Today</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Book an appointment or visit us at any of our convenient locations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">Book Appointment</Button>
              <Button size="lg" variant="outline">
                Find a Store
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
