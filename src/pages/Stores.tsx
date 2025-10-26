import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, Phone, Search } from "lucide-react";

const Stores = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const stores = [
    {
      id: 1,
      name: "Downtown Plaza",
      address: "123 Main Street, Suite 100",
      city: "New York, NY 10001",
      phone: "(212) 555-0100",
      hours: "Mon-Fri: 8AM-10PM, Sat-Sun: 9AM-9PM",
      services: ["24/7 Pharmacy", "Photo Services", "Immunizations"],
    },
    {
      id: 2,
      name: "Riverside Center",
      address: "456 River Road",
      city: "Brooklyn, NY 11201",
      phone: "(718) 555-0200",
      hours: "Mon-Sun: 9AM-9PM",
      services: ["Pharmacy", "Health Testing", "Photo Services"],
    },
    {
      id: 3,
      name: "Uptown Square",
      address: "789 Broadway Avenue",
      city: "Manhattan, NY 10025",
      phone: "(212) 555-0300",
      hours: "Mon-Fri: 7AM-11PM, Sat-Sun: 8AM-10PM",
      services: ["24/7 Pharmacy", "Immunizations", "Drive-Thru"],
    },
    {
      id: 4,
      name: "East Side Market",
      address: "321 Park Avenue",
      city: "Queens, NY 11375",
      phone: "(718) 555-0400",
      hours: "Mon-Sun: 8AM-10PM",
      services: ["Pharmacy", "Photo Services", "Health Testing"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-4 text-4xl font-bold">Find a Store</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Locate the nearest HealthPlus Pharmacy location near you
        </p>

        {/* Search Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter city, state, or ZIP code"
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button size="lg">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map Placeholder */}
          <div className="order-2 lg:order-1">
            <Card className="sticky top-20 overflow-hidden">
              <div className="flex aspect-square items-center justify-center bg-secondary/20 lg:aspect-auto lg:h-[600px]">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 h-12 w-12 text-muted-foreground" />
                  <p className="text-muted-foreground">Map View</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Store List */}
          <div className="order-1 space-y-4 lg:order-2">
            {stores.map((store) => (
              <Card key={store.id} className="transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold">{store.name}</h3>
                  
                  <div className="mb-4 space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                      <div>
                        <p>{store.address}</p>
                        <p className="text-muted-foreground">{store.city}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <p>{store.phone}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <p className="text-muted-foreground">{store.hours}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2 text-sm font-semibold">Services:</p>
                    <div className="flex flex-wrap gap-2">
                      {store.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">Get Directions</Button>
                    <Button variant="outline" className="flex-1">
                      Store Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Stores;
