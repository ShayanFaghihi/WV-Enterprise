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
              WV Development advances real estate, infrastructure, and economic
              development initiatives that strengthen communities, expand
              opportunity, and support sustainable regional growth.
            </p>
            <p className="text-l md:text-xl mb-6 leading-relaxed opacity-95">
              We support governments, public agencies, developers,
              transportation authorities, and community organizations in
              planning, launching, and managing development and infrastructure
              initiatives that drive long-term community impact.
            </p>
            <p className="text-l md:text-xl leading-relaxed opacity-95">
              We bring proven experience leading large-scale capital projects,
              land development efforts, multimodal transportation operations,
              and community revitalization initiatives—from strategy and
              planning through stakeholder engagement and execution.
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
                  Real Estate & Land Development Advisory
                </CardTitle>
                <div className="w-12 h-1 bg-primary mb-4"></div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Site evaluation, land use strategy, development feasibility,
                  disposition analysis, and public- private partnership
                  structuring.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl mb-2">
                  Economic & Community Development Strategy
                </CardTitle>
                <div className="w-12 h-1 bg-primary mb-4"></div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Market assessment, business attraction planning, small
                  business ecosystem support, workforce and talent planning, and
                  revitalization initiatives.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl mb-2">
                  Airport & Multimodal Operations Support
                </CardTitle>
                <div className="w-12 h-1 bg-primary mb-4"></div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Operational planning, vendor coordination, customer experience
                  enhancement, capital program support, and
                  stakeholder/authority engagement.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl mb-2">
                  Infrastructure & Capital Project Assistance
                </CardTitle>
                <div className="w-12 h-1 bg-primary mb-4"></div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Master planning support, project prioritization, feasibility
                  studies, scheduling and phasing support, and coordination with
                  design, engineering, and construction partners.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl mb-2">
                  Permitting & Regulatory Coordination
                </CardTitle>
                <div className="w-12 h-1 bg-primary mb-4"></div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Agency navigation, compliance alignment, community interface,
                  and facilitation across jurisdictional approvals and review
                  processes.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl mb-2">
                  Social & Community Services Integration
                </CardTitle>
                <div className="w-12 h-1 bg-primary mb-4"></div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Support for housing, transportation access, workforce
                  pipelines, and services connecting physical development to
                  resident benefit.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl mb-2">
                  Construction & Implementation Support
                </CardTitle>
                <div className="w-12 h-1 bg-primary mb-4"></div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Owner's rep support, vendor oversight, field coordination,
                  schedule alignment, and performance tracking to maintain
                  budget and timeline discipline.
                </CardDescription>
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
      <section className="relative py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Testimonials
          </h2>
          <div className="max-w-5xl mx-auto relative min-h-[320px] md:min-h-[360px]">
            <div className="absolute inset-0 animate-scroll-1 flex items-center justify-center">
              <div className="max-w-4xl mx-auto text-center">
                <blockquote className="text-xl md:text-3xl font-light leading-relaxed mb-8">
                  "WV Development took a complex mission-critical project and
                  delivered with precision. Their coordination, regulatory
                  expertise, and execution exceeded expectations every step of
                  the way."
                </blockquote>
                <div>
                  <p className="font-bold text-xl">
                    Public Infrastructure Client
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 animate-scroll-2 flex items-center justify-center">
              <div className="max-w-4xl mx-auto text-center">
                <blockquote className="text-xl md:text-3xl font-light leading-relaxed mb-8">
                  "This organization’s leaders approach their work with the
                  reverence it deserved — honoring the legacies of what has
                  stood while leading the vision for what the community could
                  become. Their leadership on the demolition and master plan
                  development was instrumental in transforming one of Atlanta’s
                  most historically significant sites into a model for
                  equitable, mixed-income development."
                </blockquote>
                <div>
                  <p className="font-bold text-xl">
                    Former Southeastern City Mayor
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 animate-scroll-3 flex items-center justify-center">
              <div className="max-w-4xl mx-auto text-center">
                <blockquote className="text-xl md:text-3xl font-light leading-relaxed mb-8">
                  "Our city’s transformation didn’t happen by accident — it took
                  leaders who understood both the complexity of urban
                  development and the human stakes behind every project. SLV
                  Enterprises brought a rare combination to our city. Their work
                  on our terminal and the broader revitalization efforts their
                  leaders led demonstrated a level of development talent that is
                  simply not common. SLV Enterprises doesn’t just plan — they
                  deliver, and our city is better for it."
                </blockquote>
                <div>
                  <p className="font-bold text-xl">Previous City Client</p>
                </div>
              </div>
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
