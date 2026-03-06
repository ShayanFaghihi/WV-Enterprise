import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
        {/* Scrolling Background Images */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 animate-scroll-1">
            <img
              src="images/banner/Pic-1.jpg"
              alt="Infrastructure Background 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 animate-scroll-2">
            <img
              src="images/banner/Pic-2.jpg"
              alt="Infrastructure Background 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 animate-scroll-3">
            <img
              src="images/banner/Pic-3.jpg"
              alt="Infrastructure Background 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-white">
          <div className="max-w-5xl pt-16 md:pt-20 lg:pt-24">
            <p className="text-lg md:text-xl mb-6 font-light tracking-wide">
              Building the Future
            </p>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-4 leading-[0.95]">
              INFRASTRUCTURE
            </h1>
            <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-10 text-primary">
              DEVELOPMENT
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl font-light leading-relaxed">
              Advancing communities through mission-critical infrastructure
              development, construction delivery, and built environment services
              across the United States.
            </p>
            <Button size="lg" className="text-base md:text-lg px-10 py-7">
              Explore Our Work <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            <h2 className="text-2xl md:text-6xl font-bold mb-8">
              Developing infrastructure that supports critical missions.
            </h2>
            <p className="text-l md:text-xl mb-6 leading-relaxed opacity-95">
              WV Development delivers full-spectrum infrastructure solutions —
              from site development and transportation planning to construction,
              environmental compliance, and regulatory approvals.
            </p>
            <p className="text-l md:text-xl mb-6 leading-relaxed opacity-95">
              Our multidisciplinary teams partner with government agencies,
              developers, and community stakeholders to transform complex
              challenges into infrastructure that powers operations, supports
              growth, and improves quality of life.
            </p>
            <p className="text-l md:text-xl leading-relaxed opacity-95">
              From airports and multimodal transit systems to commercial
              facilities and resilient public infrastructure, we deliver results
              that perform today and endure tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Expertise
            </h2>
            <p className="text-l md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive infrastructure solutions tailored to mission success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl mb-2">
                  Transportation Planning & Infrastructure
                </CardTitle>
                <div className="w-12 h-1 bg-primary mb-4"></div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Strategic planning and engineering for airports, highways,
                  transit systems, and multimodal mobility projects that improve
                  accessibility and operational efficiency.
                </CardDescription>
                <Button variant="ghost" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl mb-2">
                  Real Estate Development & Master Planning
                </CardTitle>
                <div className="w-12 h-1 bg-primary mb-4"></div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-6">
                  End-to-end development services for commercial, municipal, and
                  federal facilities — including feasibility, zoning, design
                  coordination, and construction oversight.
                </CardDescription>
                <Button variant="ghost" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl mb-2">
                  Construction & Regulatory Services
                </CardTitle>
                <div className="w-12 h-1 bg-primary mb-4"></div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-6">
                  General building construction, asphalt & paving operations,
                  and complete regulatory navigation including permitting,
                  compliance, and environmental approvals.
                </CardDescription>
                <Button variant="ghost" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl md:text-8xl font-bold mb-4">30+</div>
              <div className="text-xl md:text-2xl opacity-90">
                Years of Team Experience
              </div>
            </div>
            <div>
              <div className="text-5xl md:text-8xl font-bold mb-4">20+</div>
              <div className="text-xl md:text-2xl opacity-90">
                Major Projects Delivered
              </div>
            </div>
            <div>
              <div className="text-5xl md:text-8xl font-bold mb-4">10+</div>
              <div className="text-xl md:text-2xl opacity-90">
                Government & Industry Partners
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl md:text-3xl font-light leading-relaxed mb-8 text-center">
              "WV Development took a complex mission-critical project and
              delivered with precision. Their coordination, regulatory
              expertise, and execution exceeded expectations every step of the
              way."
            </blockquote>
            <div className="text-center">
              <p className="font-bold text-xl">Public Infrastructure Client</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-l md:text-xl text-muted-foreground max-w-2xl">
              Infrastructure development that drives operational success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-lg h-[400px]">
              <div className="absolute inset-0 opacity-50">
                <img
                  src="/images/services/airport-project.jpg"
                  alt="Airport Ramp & Pavement Modernization"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8">
                <div className="text-white relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    Airport Ramp & Pavement Modernization
                  </h3>
                  <p className="text-sm mb-4 opacity-90">
                    TRANSPORTATION INFRASTRUCTURE
                  </p>
                  <Button variant="secondary" size="sm" className="group/btn">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg h-[400px]">
              <div className="absolute inset-0 opacity-50">
                <img
                  src="/images/services/facility-project.jpg"
                  alt="Government Facility Redevelopment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8">
                <div className="text-white relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    Government Facility Redevelopment
                  </h3>
                  <p className="text-sm mb-4 opacity-90">
                    REAL ESTATE DEVELOPMENT
                  </p>
                  <Button variant="secondary" size="sm" className="group/btn">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-6">
            Ready to build what's next?
          </h2>
          <p className="text-l md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how WV Development can support your infrastructure
            goals with proven delivery and expert execution.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
