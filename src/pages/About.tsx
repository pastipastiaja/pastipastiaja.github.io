import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Care",
      description: "We put patient health and wellness at the center of everything we do",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong relationships with the communities we serve",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in pharmaceutical care and service",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Embracing technology to improve healthcare accessibility",
    },
  ];

  const stats = [
    { number: "9,000+", label: "Locations" },
    { number: "10M+", label: "Customers Served" },
    { number: "50+", label: "Years of Service" },
    { number: "25,000+", label: "Team Members" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/20 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold">About HealthPlus</h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            For over 50 years, we've been dedicated to providing trusted pharmacy services and healthcare solutions to communities across the nation
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardContent className="p-8">
                  <p className="mb-2 text-4xl font-bold text-primary">{stat.number}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
            <p className="mb-4 text-lg">
              To be America's most-loved pharmacy-led health, well-being, and beauty company. We aspire to champion everyone's right to be happy and healthy by providing the best care, service, and product innovation.
            </p>
            <p className="text-lg text-muted-foreground">
              Every day, we help people across the country lead healthier and happier lives by providing accessible and affordable healthcare solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-primary/10 p-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Story</h2>
            <div className="space-y-6 text-lg">
              <p>
                Founded in 1970, HealthPlus Pharmacy started as a single neighborhood drugstore with a simple mission: to provide quality healthcare products and exceptional service to our community.
              </p>
              <p>
                Over the decades, we've grown into one of the nation's leading pharmacy chains, but our commitment to personalized care has remained unchanged. We've expanded our services to include immunizations, health testing, and digital health solutions, always keeping pace with our customers' evolving needs.
              </p>
              <p className="text-muted-foreground">
                Today, with thousands of locations nationwide and millions of customers served annually, we continue to be guided by the same principles that founded our company: integrity, compassion, and a dedication to improving lives through better health.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
