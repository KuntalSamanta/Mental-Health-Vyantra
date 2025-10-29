"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import {
  Heart,
  Users,
  BookOpen,
  MessageCircle,
  Shield,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Bot,
  LogIn,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";  
import { ChatBot } from "@/components/chat-bot"

export default function VyantraHomepage() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isChatBotOpen, setIsChatBotOpen] = useState(false)
  const [openFaqItems, setOpenFaqItems] = useState<number[]>([])

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "/vyantra-animations.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(".animate-on-scroll")
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const toggleFaqItem = (index: number) => {
    setOpenFaqItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const navigateToService = (servicePath: string) => {
    router.push(`/services/${servicePath}`)
  }

  const navigateToGetStarted = () => {
    router.push("/get-started")
  }

  const navigateToConsultation = () => {
    router.push("/consultation")
  }

  return (
  <div className="min-h-screen bg-background scroll-smooth">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-background/60 backdrop-blur-sm"
        } border-b border-border`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-05%20at%2021.59.47_da4245b5.jpg-QOyLIFzygmNWyamTy1OedyNeXUktm7.jpeg"
                alt="Vyantra Logo"
                width={50}
                height={50}
                className="rounded-full animate-pulse-glow hover:scale-110 transition-transform duration-300"
              />
              <div>
                <h1 className="text-xl font-serif font-bold text-primary">Vyantra</h1>
                <p className="text-xs text-muted-foreground">The mantra of life breath</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
              >
                Stories
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
              >
                Contact
              </button>
              {/* SOS Button */}
              {/* <Button className="bg-red-600 hover:bg-red-700 text-white hover:scale-105 transform transition-all duration-200 animate-pulse">
                <Phone className="h-4 w-4 mr-2" />
                SOS
              </Button> */}
            
              {/* Mobile Login Button (hidden on desktop) */}
              <SignedOut>
                <Button 
                  onClick={() => router.push("/api/login")}
                  variant="outline" size="sm" className="w-full justify-start bg-transparent text-sm h-8">
                  <LogIn className="h-3 w-3 mr-2" />
                  Login
                </Button>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center w-full justify-start">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1 h-8 w-8 hover:bg-muted/50 transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 hover:bg-muted/50 px-3 rounded text-sm"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 hover:bg-muted/50 px-3 rounded text-sm"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 hover:bg-muted/50 px-3 rounded text-sm"
                >
                  Stories
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 hover:bg-muted/50 px-3 rounded text-sm"
                >
                  Contact
                </button>
                <div className="pt-2 space-y-2">
                  <SignedOut>
                    <Button
                      onClick={() => router.push("/api/login")}
                      variant="outline"
                      size="sm"
                      className="w-full justify-start bg-transparent text-sm h-8"
                    >
                      <LogIn className="h-3 w-3 mr-2" />
                      Login
                    </Button>
                  </SignedOut>
                  <SignedIn>
                    <div className="flex items-center w-full justify-start">
                      <UserButton afterSignOutUrl="/" />
                    </div>
                  </SignedIn>
                  <Button
                    size="sm"
                    className="bg-red-600 hover:bg-red-700 text-white w-full justify-start animate-pulse text-sm h-8"
                  >
                    <Phone className="h-3 w-3 mr-2" />
                    SOS Emergency
                  </Button>
                  <Button size="sm" onClick={navigateToGetStarted} className="bg-primary hover:bg-primary/90 w-full text-sm h-8">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden mt-20">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-accent/5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full animate-float delay-1000 opacity-60"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <Badge className="mb-6 bg-primary/30 text-primary-foreground border-primary/40 hover:bg-primary/40 transition-colors font-semibold">
              Digital Mental Health Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">
              Your Mental Health,
              <span className="text-primary block animate-pulse">Our Priority</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Empowering students in higher education with comprehensive digital mental health support, counseling
              services, and wellness resources tailored for your academic journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={navigateToGetStarted}
                className="bg-primary hover:bg-primary/90 text-lg px-8 hover:scale-105 transform transition-all duration-200"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent hover:scale-105 transform transition-all duration-200"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="mt-16 animate-float">
            <Image
              src="/diverse-group-of-happy-college-students-studying-t.jpg"
              alt="Students supporting each other"
              width={600}
              height={400}
              className="mx-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-serif font-bold mb-4">Comprehensive Support Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored mental health solutions designed specifically for the unique challenges of student life
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="h-8 w-8" />,
                title: "1-on-1 Counseling",
                description: "Private sessions with licensed therapists who understand student challenges",
                features: ["24/7 availability", "Video & chat options", "Crisis support"],
                path: "counseling",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Group Therapy",
                description: "Connect with peers facing similar challenges in supportive group settings",
                features: ["Peer support", "Guided sessions", "Topic-focused groups"],
                path: "group-therapy",
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Wellness Resources",
                description: "Comprehensive library of mental health tools and educational content",
                features: ["Self-help guides", "Meditation tools", "Academic stress management"],
                path: "wellness-resources",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Crisis Intervention",
                description: "Immediate support when you need it most, available around the clock",
                features: ["Emergency hotline", "Rapid response", "Safety planning"],
                path: "crisis-intervention",
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Wellness Tracking",
                description: "Monitor your mental health journey with personalized insights",
                features: ["Mood tracking", "Progress reports", "Goal setting"],
                path: "wellness-tracking",
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Academic Support",
                description: "Specialized help for study stress, exam anxiety, and academic pressure",
                features: ["Study strategies", "Time management", "Performance anxiety help"],
                path: "academic-support",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-on-scroll"
                onClick={() => navigateToService(service.path)}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 bg-transparent"
                    onClick={(e) => {
                      e.stopPropagation()
                      navigateToService(service.path)
                    }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <Badge className="mb-6 bg-accent/30 text-accent-foreground border-accent/40 font-semibold">
                About Vyantra
              </Badge>
              <h2 className="text-4xl font-serif font-bold mb-6">Bridging the Gap in Student Mental Health</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Vyantra was born from the understanding that students in higher education face unique mental health
                challenges. Academic pressure, social transitions, financial stress, and future uncertainties create a
                perfect storm that traditional mental health services often fail to address adequately.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform combines cutting-edge technology with evidence-based therapeutic approaches, creating a
                safe, accessible, and comprehensive support system that fits into the busy lives of modern students.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    10K+
                  </div>
                  <div className="text-sm text-muted-foreground">Students Supported</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    95%
                  </div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="relative animate-on-scroll">
              <Image
                src="/peaceful-meditation-space-with-lotus-flowers-and-c.jpg"
                alt="Peaceful wellness environment"
                width={500}
                height={500}
                className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-serif font-bold mb-4">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from students who found their path to better mental health through Vyantra
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Graduate Student, Psychology",
                content:
                  "Vyantra helped me navigate the overwhelming pressure of grad school. The 24/7 support and understanding counselors made all the difference during my thesis defense anxiety.",
                rating: 5,
              },
              {
                name: "Marcus Johnson",
                role: "Undergraduate, Engineering",
                content:
                  "I was skeptical about online therapy, but Vyantra's platform is incredibly user-friendly. The group sessions helped me realize I wasn't alone in my struggles with imposter syndrome.",
                rating: 5,
              },
              {
                name: "Priya Patel",
                role: "Medical Student",
                content:
                  "The crisis intervention service literally saved my life during my darkest moment. The immediate response and ongoing support helped me get back on track with my studies and life.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card hover:shadow-lg transition-all duration-300 animate-on-scroll hover:scale-105"
              >
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-primary text-primary animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold mr-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-serif font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? Need immediate support? We're here for you 24/7.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="h-8 w-8" />,
                title: "Crisis Hotline",
                subtitle: "24/7 immediate support",
                contact: "2441139",
              },
              {
                icon: <Mail className="h-8 w-8" />,
                title: "Email Support",
                subtitle: "General inquiries",
                contact: "vyantra25@gmail.com",
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Campus Locations",
                subtitle: "Find us on your campus",
                contact: "JIS Rd Block A5 Kanchrapara, Kalyani, West Bengal IN",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center animate-on-scroll hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 hover:rotate-12">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.subtitle}</p>
                  <p className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer">
                    {item.contact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our mental health services and platform
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Is Vyantra confidential and secure?",
                answer:
                  "Yes, absolutely. We follow HIPAA compliance standards and use end-to-end encryption to protect your privacy. All conversations with counselors are completely confidential, and your data is never shared without your explicit consent.",
              },
              {
                question: "How quickly can I get help in a crisis?",
                answer:
                  "Our crisis intervention service is available 24/7. You can reach our emergency hotline immediately, and we guarantee a response within 5 minutes. For non-emergency support, you can typically connect with a counselor within 24 hours.",
              },
              {
                question: "Do you accept insurance or offer financial aid?",
                answer:
                  "We work with most major insurance providers and offer sliding scale fees based on financial need. We also have partnerships with many universities to provide free or reduced-cost services to students. Contact us to discuss your specific situation.",
              },
              {
                question: "What types of mental health issues do you help with?",
                answer:
                  "We support students with a wide range of concerns including anxiety, depression, academic stress, relationship issues, eating disorders, substance abuse, trauma, and adjustment difficulties. Our licensed therapists are trained in various evidence-based approaches.",
              },
              {
                question: "Can I use Vyantra if I'm already seeing a therapist?",
                answer:
                  "Yes! Vyantra can complement your existing therapy. We can coordinate with your current therapist (with your permission) to provide additional support, crisis intervention, or specialized student-focused resources.",
              },
              {
                question: "How do I know if I need professional help?",
                answer:
                  "If you're experiencing persistent sadness, anxiety, difficulty concentrating, changes in sleep or appetite, thoughts of self-harm, or if daily activities feel overwhelming, it's time to reach out. Remember, seeking help is a sign of strength, not weakness.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="animate-on-scroll hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => toggleFaqItem(index)}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-primary pr-4">{faq.question}</h3>
                    <div
                      className={`transition-transform duration-300 ${openFaqItems.includes(index) ? "rotate-180" : ""}`}
                    >
                      <ArrowRight className="h-5 w-5 text-primary rotate-90" />
                    </div>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openFaqItems.includes(index) ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12 animate-on-scroll">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button className="bg-primary hover:bg-primary/90 hover:scale-105 transform transition-all duration-200">
              <Mail className="h-4 w-4 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-05%20at%2021.59.47_da4245b5.jpg-QOyLIFzygmNWyamTy1OedyNeXUktm7.jpeg"
                  alt="Vyantra Logo"
                  width={40}
                  height={40}
                  className="rounded-full hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h3 className="text-lg font-serif font-bold">Vyantra</h3>
                  <p className="text-xs opacity-80">The mantra of life breath</p>
                </div>
              </div>
              <p className="text-sm opacity-80">
                Empowering students with comprehensive digital mental health support and wellness resources.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity hover:text-primary">
                    1-on-1 Counseling
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity hover:text-primary">
                    Group Therapy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity hover:text-primary">
                    Crisis Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity hover:text-primary">
                    Wellness Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity hover:text-primary">
                    Mental Health Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity hover:text-primary">
                    Self-Help Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity hover:text-primary">
                    Campus Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity hover:text-primary">
                    Student Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity hover:text-primary">
                    Mobile App
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity hover:text-primary">
                    Support Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity hover:text-primary">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 Vyantra. All rights reserved. | Confidential mental health support for students.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50">
        {/* <a
          href="http://localhost:8501"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <Bot className="h-6 w-6" />
          </Button>
        </a>
      </div>
    </div> */}
    <Button
          onClick={() => setIsChatBotOpen(!isChatBotOpen)}
          className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Bot className="h-6 w-6" />
        </Button>
      </div>

      {isChatBotOpen && <ChatBot onClose={() => setIsChatBotOpen(false)} />}
    </div>
  )
}


