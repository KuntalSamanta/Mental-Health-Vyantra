"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowLeft,
  MessageCircle,
  Video,
  Phone,
  Calendar,
  Clock,
  Shield,
  Heart,
  Star,
  CheckCircle,
  Award,
} from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export default function CounselingPage() {
  const router = useRouter()

  const therapists = [
    {
      name: "Dr. Sarah Chen",
      title: "Licensed Clinical Psychologist",
      specialties: ["Anxiety", "Depression", "Academic Stress"],
      experience: "8 years",
      rating: 4.9,
      reviews: 127,
      image: "/professional-therapist-woman.png",
      bio: "Dr. Chen specializes in helping students navigate academic pressures and mental health challenges.",
    },
    {
      name: "Dr. Michael Rodriguez",
      title: "Licensed Professional Counselor",
      specialties: ["Relationship Issues", "Self-Esteem", "Life Transitions"],
      experience: "12 years",
      rating: 4.8,
      reviews: 203,
      image: "/professional-therapist-man.jpg",
      bio: "Dr. Rodriguez focuses on helping young adults build confidence and healthy relationships.",
    },
    {
      name: "Dr. Emily Johnson",
      title: "Licensed Marriage & Family Therapist",
      specialties: ["Family Dynamics", "Social Anxiety", "Identity Issues"],
      experience: "10 years",
      rating: 4.9,
      reviews: 156,
      image: "/professional-therapist-woman.png",
      bio: "Dr. Johnson helps students understand themselves and improve their relationships with others.",
    },
  ]

  const sessionTypes = [
    {
      icon: <Video className="h-6 w-6" />,
      title: "Video Sessions",
      description: "Face-to-face therapy from anywhere",
      features: ["HD video quality", "Screen sharing", "Recording available"],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Sessions",
      description: "Voice-only counseling sessions",
      features: ["No video required", "Call recording", "Flexible scheduling"],
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Chat Therapy",
      description: "Text-based counseling support",
      features: ["Asynchronous messaging", "24/7 availability", "Written records"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <Badge className="bg-primary/10 text-primary border-primary/20">1-on-1 Counseling</Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-linear-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <Badge variant="outline">Professional Support</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">
                Personal 1-on-1 Counseling
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Connect with licensed mental health professionals who understand the unique challenges of student life.
                Get personalized support tailored to your specific needs and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => router.push("/consultation")}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent">
                  <Video className="mr-2 h-5 w-5" />
                  Start Session Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/therapist-consultation-session.jpg"
                alt="Counseling session"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Why Choose 1-on-1 Counseling?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Personalized mental health support designed specifically for students
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Confidential & Secure",
                description: "HIPAA-compliant platform with end-to-end encryption",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Flexible Scheduling",
                description: "Book sessions that fit your academic schedule",
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Student-Focused",
                description: "Therapists trained in student mental health needs",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Licensed Professionals",
                description: "All therapists are licensed and experienced",
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Choose Your Session Type</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer multiple ways to connect with your therapist based on your preferences
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {sessionTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    Select This Option
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Therapists Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Meet Our Therapists</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Licensed professionals with expertise in student mental health
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {therapists.map((therapist, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={therapist.image || "/placeholder.svg"} alt={therapist.name} />
                    <AvatarFallback>
                      {therapist.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{therapist.name}</CardTitle>
                  <CardDescription>{therapist.title}</CardDescription>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-medium ml-1">{therapist.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({therapist.reviews} reviews)</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-1">
                        {therapist.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Experience</h4>
                      <p className="text-sm text-muted-foreground">{therapist.experience}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{therapist.bio}</p>
                    <Button className="w-full bg-transparent" variant="outline">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book with {therapist.name.split(" ")[1]}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Affordable Student Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mental health support that fits your student budget
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Single Session",
                price: "$45",
                period: "per session",
                features: ["50-minute session", "Licensed therapist", "Secure platform", "Session notes"],
                popular: false,
              },
              {
                name: "Monthly Plan",
                price: "$160",
                period: "per month",
                features: [
                  "4 sessions included",
                  "Priority booking",
                  "Crisis support",
                  "Progress tracking",
                  "Homework assignments",
                ],
                popular: true,
              },
              {
                name: "Semester Plan",
                price: "$600",
                period: "per semester",
                features: [
                  "16 sessions included",
                  "Same therapist",
                  "Flexible scheduling",
                  "Academic support",
                  "Family sessions",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-lg transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-primary scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">Most Popular</Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="sessions">Sessions</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
            </TabsList>
            <TabsContent value="general" className="space-y-4">
              {[
                {
                  q: "How do I get started with 1-on-1 counseling?",
                  a: "Simply book a free consultation to discuss your needs and get matched with the right therapist.",
                },
                {
                  q: "Are your therapists licensed?",
                  a: "Yes, all our therapists are licensed mental health professionals with experience in student counseling.",
                },
                {
                  q: "Can I switch therapists if needed?",
                  a: "Absolutely. We want you to feel comfortable, so you can request a different therapist at any time.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="sessions" className="space-y-4">
              {[
                {
                  q: "How long are counseling sessions?",
                  a: "Standard sessions are 50 minutes long, which is the industry standard for therapeutic sessions.",
                },
                {
                  q: "Can I schedule sessions around my classes?",
                  a: "Yes, we offer flexible scheduling including evenings and weekends to accommodate your academic schedule.",
                },
                {
                  q: "What if I need to cancel or reschedule?",
                  a: "You can cancel or reschedule up to 24 hours before your session without any fees.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="privacy" className="space-y-4">
              {[
                {
                  q: "Is my information kept confidential?",
                  a: "Yes, we follow strict HIPAA guidelines and all sessions are completely confidential.",
                },
                {
                  q: "Are sessions recorded?",
                  a: "Sessions are only recorded with your explicit consent and for your own reference.",
                },
                {
                  q: "Will my school know I'm using counseling services?",
                  a: "No, your use of our services is completely private and not shared with your educational institution.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready to Start Your Healing Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Take the first step towards better mental health with personalized 1-on-1 counseling support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => router.push("/consultation")} className="text-lg px-8">
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Chat Session
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
