import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MessageSquare, Clock } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      content: "1-800-HEALTH-1",
      subtext: "Available 24/7",
    },
    {
      icon: Mail,
      title: "Email",
      content: "support@healthplus.com",
      subtext: "Response within 24 hours",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      content: "Chat with us",
      subtext: "Mon-Fri: 8AM-8PM EST",
    },
    {
      icon: Clock,
      title: "Support Hours",
      content: "We're here to help",
      subtext: "7 days a week",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/20 to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Have a question? We're here to help and answer any questions you might have
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Card key={method.title} className="text-center transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="mb-1 font-semibold">{method.title}</h3>
                    <p className="mb-1 text-sm font-medium text-primary">{method.content}</p>
                    <p className="text-xs text-muted-foreground">{method.subtext}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold">How do I refill my prescription?</h4>
                    <p className="text-sm text-muted-foreground">
                      You can refill your prescription online through our website, mobile app, or by calling your local pharmacy.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">Do you offer home delivery?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes! We offer free home delivery on eligible prescriptions. Contact your local pharmacy for details.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">Can I get vaccinated without an appointment?</h4>
                    <p className="text-sm text-muted-foreground">
                      Walk-ins are welcome, but we recommend scheduling an appointment to minimize wait time.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">What insurance do you accept?</h4>
                    <p className="text-sm text-muted-foreground">
                      We accept most major insurance plans. Contact us to verify your specific coverage.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold">Need Immediate Assistance?</h3>
                  <p className="mb-4 text-sm opacity-90">
                    For urgent matters, please call our 24/7 support line
                  </p>
                  <Button variant="secondary" size="lg" className="w-full">
                    Call Now: 1-800-HEALTH-1
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
