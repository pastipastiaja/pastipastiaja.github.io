import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Pill, Syringe, TestTube, Clock } from "lucide-react";
import multivitaminImg from "@/assets/products/multivitamin.jpg";
import painReliefImg from "@/assets/products/pain-relief.jpg";
import allergyReliefImg from "@/assets/products/allergy-relief.jpg";
import firstAidKitImg from "@/assets/products/first-aid-kit.jpg";

const Index = () => {
  const categories = [
    { name: "Pharmacy", icon: Pill, desc: "Prescriptions & Refills" },
    { name: "Health & Wellness", icon: TestTube, desc: "Vitamins & Supplements" },
    { name: "Immunizations", icon: Syringe, desc: "Vaccines & Shots" },
    { name: "24/7 Care", icon: Clock, desc: "Always Available" },
  ];

  const featuredProducts = [
    { name: "Multivitamin Daily", price: "$12.99", category: "Vitamins", image: multivitaminImg },
    { name: "Pain Relief Extra Strength", price: "$8.99", category: "Pain Relief", image: painReliefImg },
    { name: "Allergy Relief", price: "$15.99", category: "Allergy", image: allergyReliefImg },
    { name: "First Aid Kit", price: "$24.99", category: "Health", image: firstAidKitImg },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/20 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight">
              Your Health, Our Priority
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Trusted pharmacy services, expert care, and wellness products all in one place
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/shop">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">How We Can Help</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.name} className="transition-shadow hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-primary/10 p-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Button variant="outline" asChild>
              <Link to="/shop">View All</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Card key={product.name} className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square overflow-hidden bg-secondary/20">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="mb-1 text-xs text-muted-foreground">{product.category}</p>
                  <h3 className="mb-2 font-semibold">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-primary">{product.price}</p>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Need a Prescription Refill?</h2>
              <p className="mb-8 text-lg opacity-90">
                Quick and easy refills with delivery or in-store pickup
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/services">Get Started</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
