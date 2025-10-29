"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Users,
  Calendar,
  Clock,
  MapPin,
  Heart,
  MessageSquare,
  Shield,
  Star,
  CheckCircle,
  UserPlus,
} from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export default function GroupTherapyPage() {
  const router = useRouter()

  const groupSessions = [
    {
      title: "Anxiety Support Circle",
      facilitator: "Dr. Sarah Chen",
      schedule: "Tuesdays, 6:00 PM - 7:30 PM",
      participants: "6-8 students",
      duration: "8 weeks",
      nextStart: "March 15, 2024",
      description: "A supportive environment to learn coping strategies and connect with others experiencing anxiety.",
      topics: ["Breathing techniques", "Cognitive restructuring", "Mindfulness practices", "Peer support"],
      spotsLeft: 3,
    },
    {
      title: "Academic Stress Management",
      facilitator: "Dr. Michael Rodriguez",
      schedule: "Thursdays, 4:00 PM - 5:30 PM",
      participants: "8-10 students",
      duration: "6 weeks",
      nextStart: "March 20, 2024",
      description: "Learn effective strategies to manage academic pressure and improve study-life balance.",
      topics: ["Time management", "Study strategies", "Perfectionism", "Goal setting"],
      spotsLeft: 5,
    },
    {
      title: "Social Connection Workshop",
      facilitator: "Dr. Emily Johnson",
      schedule: "Saturdays, 2:00 PM - 3:30 PM",
      participants: "6-8 students",
      duration: "4 weeks",
      nextStart: "March 25, 2024",
      description: "Build meaningful relationships and overcome social anxiety in a supportive group setting.",
      topics: ["Communication skills", "Building confidence", "Social anxiety", "Friendship building"],
      spotsLeft: 2,
    },
    {
      title: "Mindfulness & Meditation",
      facilitator: "Dr. Lisa Park",
      schedule: "Wednesdays, 7:00 PM - 8:00 PM",
      participants: "10-12 students",
      duration: "Ongoing",
      nextStart: "Join anytime",
      description: "Weekly mindfulness practice sessions to reduce stress and improve mental clarity.",
      topics: ["Guided meditation", "Body awareness", "Stress reduction", "Present moment focus"],
      spotsLeft: 7,
    },
  ]

  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Peer Support",
      description: "Connect with students facing similar challenges and build lasting friendships",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Shared Experiences",
      description: "Learn from others' stories and realize you're not alone in your struggles",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Safe Space",
      description: "Express yourself freely in a confidential, judgment-free environment",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Professional Guidance",
      description: "Licensed therapists facilitate every session with evidence-based techniques",
    },
  ]

  const testimonials = [
    {
      name: "Alex M.",
      year: "Junior, Psychology",
      content:
        "The anxiety support group changed my life. I finally found people who understood what I was going through.",
      rating: 5,
      group: "Anxiety Support Circle",
    },
    {
      name: "Jordan K.",
      year: "Senior, Engineering",
      content: "Academic stress management helped me find balance. My grades improved and I feel so much better.",
      rating: 5,
      group: "Academic Stress Management",
    },
    {
      name: "Sam R.",
      year: "Sophomore, Business",
      content: "I was so shy before joining the social connection workshop. Now I have real friends and confidence.",
      rating: 5,
      group: "Social Connection Workshop",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <Badge className="bg-primary/10 text-primary border-primary/20">Group Therapy</Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <Badge variant="outline">Peer Support</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-balance">Group Therapy Sessions</h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Join supportive group sessions where you can connect with fellow students, share experiences, and learn
                together in a safe, guided environment led by licensed professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Join a Group
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent">
                  <Calendar className="mr-2 h-5 w-5" />
                  View Schedule
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/Group Therapy Sessions2.png"
                alt="Group therapy session"
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

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Why Choose Group Therapy?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the power of peer support and shared healing
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Available Groups */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Available Group Sessions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the right group for your needs and schedule
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {groupSessions.map((session, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{session.title}</CardTitle>
                      <CardDescription className="text-base">{session.description}</CardDescription>
                    </div>
                    <Badge
                      variant={session.spotsLeft <= 2 ? "destructive" : "secondary"}
                      className={session.spotsLeft <= 2 ? "bg-orange-100 text-orange-800" : ""}
                    >
                      {session.spotsLeft} spots left
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{session.schedule}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{session.participants}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{session.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Next: {session.nextStart}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Facilitator</h4>
                    <p className="text-sm text-muted-foreground">{session.facilitator}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Topics Covered</h4>
                    <div className="flex flex-wrap gap-1">
                      {session.topics.map((topic, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-transparent" variant="outline">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Join This Group
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">How Group Therapy Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A simple process to join and participate in supportive group sessions
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Choose Your Group",
                description: "Browse available groups and find one that matches your needs and schedule",
                icon: <Users className="h-6 w-6" />,
              },
              {
                step: "2",
                title: "Brief Screening",
                description: "Quick conversation with facilitator to ensure group is a good fit",
                icon: <MessageSquare className="h-6 w-6" />,
              },
              {
                step: "3",
                title: "Join Sessions",
                description: "Attend weekly sessions and participate at your comfort level",
                icon: <Calendar className="h-6 w-6" />,
              },
              {
                step: "4",
                title: "Grow Together",
                description: "Build connections, learn new skills, and support each other's growth",
                icon: <Heart className="h-6 w-6" />,
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from students who found support and growth through group therapy
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.year}</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.group}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Affordable Group Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cost-effective mental health support through group sessions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Drop-in Session",
                price: "$25",
                period: "per session",
                features: ["Single session access", "No commitment", "Try before joining", "All groups available"],
                popular: false,
              },
              {
                name: "Group Package",
                price: "$180",
                period: "8 sessions",
                features: [
                  "Complete group cycle",
                  "Consistent group members",
                  "Progress tracking",
                  "Take-home materials",
                  "Follow-up support",
                ],
                popular: true,
              },
              {
                name: "Unlimited Access",
                price: "$120",
                period: "per month",
                features: [
                  "All group sessions",
                  "Multiple groups",
                  "Flexible attendance",
                  "Priority booking",
                  "Individual check-ins",
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

      {/* FAQ */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What if I'm nervous about joining a group?",
                a: "It's completely normal to feel nervous! Our facilitators create a welcoming environment, and you can participate at your own pace. Many students find groups less intimidating than they expected.",
              },
              {
                q: "How many people are in each group?",
                a: "Group sizes vary from 6-12 participants depending on the type of group. We keep them small enough for everyone to participate meaningfully.",
              },
              {
                q: "What if I miss a session?",
                a: "We understand life happens! You can make up missed sessions with another group or receive session materials to stay connected.",
              },
              {
                q: "Is everything shared in group confidential?",
                a: "Yes, all group members agree to confidentiality. What's shared in group stays in group, creating a safe space for everyone.",
              },
              {
                q: "Can I switch to a different group?",
                a: "If you find a group isn't the right fit, we'll help you find one that better matches your needs.",
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready to Connect and Grow?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join a supportive community of students and start your journey toward better mental health together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <UserPlus className="mr-2 h-5 w-5" />
              Join a Group Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Ask Questions
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
