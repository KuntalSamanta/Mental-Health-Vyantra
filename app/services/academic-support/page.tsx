"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  GraduationCap,
  BookOpen,
  Clock,
  Users,
  Target,
  Brain,
  Lightbulb,
  Calendar,
  CheckCircle,
  Star,
  Award,
} from "lucide-react"

export default function AcademicSupportPage() {
  const [selectedService, setSelectedService] = useState("all")

  const services = [
    { id: "all", name: "All Services", icon: GraduationCap },
    { id: "counseling", name: "Academic Counseling", icon: Brain },
    { id: "coaching", name: "Study Coaching", icon: Target },
    { id: "workshops", name: "Workshops", icon: Users },
    { id: "resources", name: "Resources", icon: BookOpen },
  ]

  const supportServices = [
    {
      id: 1,
      title: "Academic Stress Management",
      description: "Learn to manage academic pressure, test anxiety, and performance stress with proven techniques.",
      category: "counseling",
      duration: "50 minutes",
      format: "Individual Session",
      price: "$80",
      features: ["Stress reduction techniques", "Time management", "Anxiety coping strategies", "Goal setting"],
      rating: 4.9,
      sessions: 156,
      image: "/Academic Stress Management.png",
    },
    {
      id: 2,
      title: "Study Skills Enhancement",
      description:
        "Develop effective study strategies, note-taking methods, and memory techniques for better academic performance.",
      category: "coaching",
      duration: "45 minutes",
      format: "Individual/Group",
      price: "$60",
      features: ["Study techniques", "Note-taking methods", "Memory improvement", "Organization skills"],
      rating: 4.8,
      sessions: 203,
      image: "/Study Skills Enhancement.png",
    },
    {
      id: 3,
      title: "Test Anxiety Workshop",
      description:
        "Group workshop focused on overcoming test anxiety and improving exam performance through mindfulness and preparation strategies.",
      category: "workshops",
      duration: "2 hours",
      format: "Group Workshop",
      price: "$45",
      features: ["Anxiety reduction", "Test-taking strategies", "Mindfulness techniques", "Peer support"],
      rating: 4.7,
      sessions: 89,
      image: "/Test Anxiety Workshop.png",
    },
    {
      id: 4,
      title: "Academic Goal Setting",
      description:
        "One-on-one sessions to help set realistic academic goals, create action plans, and track progress effectively.",
      category: "counseling",
      duration: "60 minutes",
      format: "Individual Session",
      price: "$75",
      features: ["Goal setting framework", "Action planning", "Progress tracking", "Motivation techniques"],
      rating: 4.9,
      sessions: 134,
      image: "/Academic Goal.png",
    },
    {
      id: 5,
      title: "Time Management Mastery",
      description:
        "Learn effective time management strategies, prioritization techniques, and how to balance academic and personal life.",
      category: "coaching",
      duration: "45 minutes",
      format: "Individual/Group",
      price: "$65",
      features: ["Time blocking", "Priority matrix", "Productivity tools", "Work-life balance"],
      rating: 4.8,
      sessions: 178,
      image: "/Time management.png",
    },
    {
      id: 6,
      title: "Academic Motivation Workshop",
      description:
        "Group workshop designed to reignite academic motivation, overcome procrastination, and maintain long-term engagement.",
      category: "workshops",
      duration: "90 minutes",
      format: "Group Workshop",
      price: "$40",
      features: ["Motivation psychology", "Procrastination solutions", "Habit formation", "Peer accountability"],
      rating: 4.6,
      sessions: 67,
      image: "/Academic Motivation Workshop.png",
    },
  ]

  const academicResources = [
    {
      title: "Study Planner Template",
      description: "Comprehensive study planning template with goal tracking",
      type: "PDF Download",
      category: "resources",
      icon: Calendar,
    },
    {
      title: "Exam Preparation Checklist",
      description: "Step-by-step checklist for effective exam preparation",
      type: "Interactive Guide",
      category: "resources",
      icon: CheckCircle,
    },
    {
      title: "Focus & Concentration Techniques",
      description: "Audio guide with concentration exercises and techniques",
      type: "Audio Guide",
      category: "resources",
      icon: Brain,
    },
    {
      title: "Academic Success Workbook",
      description: "Complete workbook with exercises and self-assessment tools",
      type: "Digital Workbook",
      category: "resources",
      icon: BookOpen,
    },
  ]

  const successStories = [
    {
      name: "Sarah M.",
      program: "Computer Science",
      year: "Junior",
      story:
        "The academic stress management sessions helped me overcome my test anxiety. My GPA improved from 2.8 to 3.6!",
      improvement: "GPA: 2.8 → 3.6",
    },
    {
      name: "Michael R.",
      program: "Pre-Med",
      year: "Senior",
      story:
        "Study skills coaching transformed how I approach learning. I now study more efficiently and have better retention.",
      improvement: "Study time reduced by 40%",
    },
    {
      name: "Emma L.",
      program: "Psychology",
      year: "Sophomore",
      story:
        "The time management workshop was a game-changer. I can now balance academics, work, and social life effectively.",
      improvement: "Stress levels decreased significantly",
    },
  ]

  const filteredServices =
    selectedService === "all"
      ? supportServices
      : supportServices.filter((service) => service.category === selectedService)

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </div>
            <Link href="/get-started">
              <Button className="bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-linear-to-r from-indigo-100 to-purple-100 rounded-full">
              <GraduationCap className="w-12 h-12 text-indigo-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Academic Support</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Overcome academic challenges and achieve your educational goals with our specialized mental health support
            designed for students at every level.
          </p>
        </div>

        {/* Service Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Button
                key={service.id}
                variant={selectedService === service.id ? "default" : "outline"}
                onClick={() => setSelectedService(service.id)}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {service.name}
              </Button>
            )
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service) => (
            <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-indigo-600">{service.format}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-gray-900">{service.price}</span>
                  </div>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{service.rating}</span>
                    <span className="text-sm text-gray-500">({service.sessions} sessions)</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {service.duration}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-indigo-600 transition-colors">{service.title}</CardTitle>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full group-hover:bg-indigo-600 transition-colors">Book Session</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academic Resources */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Free Academic Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicResources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-linear-to-br from-indigo-50 to-purple-50 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <Icon className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {resource.type}
                  </Badge>
                </div>
              )
            })}
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Student Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-xl">
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-gray-600">
                      {story.program} • {story.year}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4 italic">"{story.story}"</p>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-green-800">{story.improvement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Challenges */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Common Academic Challenges We Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-linear-to-br from-red-50 to-red-100">
              <Brain className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Test Anxiety</h3>
              <p className="text-sm text-gray-600">
                Overwhelming nervousness before or during exams that affects performance
              </p>
            </div>
            <div className="p-6 rounded-xl bg-linear-to-br from-orange-50 to-orange-100">
              <Clock className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Procrastination</h3>
              <p className="text-sm text-gray-600">Difficulty starting or completing academic tasks on time</p>
            </div>
            <div className="p-6 rounded-xl bg-linear-to-br from-yellow-50 to-yellow-100">
              <Target className="w-8 h-8 text-yellow-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Lack of Motivation</h3>
              <p className="text-sm text-gray-600">Loss of interest or drive to pursue academic goals</p>
            </div>
            <div className="p-6 rounded-xl bg-linear-to-br from-green-50 to-green-100">
              <Users className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Social Pressure</h3>
              <p className="text-sm text-gray-600">
                Stress from comparing performance with peers or family expectations
              </p>
            </div>
            <div className="p-6 rounded-xl bg-linear-to-br from-blue-50 to-blue-100">
              <Lightbulb className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Learning Difficulties</h3>
              <p className="text-sm text-gray-600">Challenges with concentration, memory, or processing information</p>
            </div>
            <div className="p-6 rounded-xl bg-linear-to-br from-purple-50 to-purple-100">
              <BookOpen className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Study Skills</h3>
              <p className="text-sm text-gray-600">Ineffective study methods leading to poor academic performance</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-linear-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Excel Academically?</h2>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Don't let academic stress hold you back. Our specialized support services are designed to help you overcome
            challenges and achieve your educational goals with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Link href="/services/counseling">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 bg-transparent">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
