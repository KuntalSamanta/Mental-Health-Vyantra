"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ArrowLeft,
  Search,
  Download,
  Play,
  BookOpen,
  Headphones,
  Video,
  FileText,
  Heart,
  Brain,
  Zap,
  Moon,
} from "lucide-react"

export default function WellnessResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Resources", icon: BookOpen },
    { id: "articles", name: "Articles", icon: FileText },
    { id: "videos", name: "Videos", icon: Video },
    { id: "audio", name: "Audio", icon: Headphones },
    { id: "tools", name: "Tools", icon: Zap },
  ]

  const resources = [
    {
      id: 1,
      title: "Understanding Anxiety: A Complete Guide",
      description: "Comprehensive guide to understanding anxiety disorders, symptoms, and coping strategies.",
      category: "articles",
      type: "Article",
      duration: "15 min read",
      tags: ["Anxiety", "Mental Health", "Coping"],
      difficulty: "Beginner",
      image: "/anxiety-guide-book.jpg",
    },
    {
      id: 2,
      title: "Mindfulness Meditation for Beginners",
      description: "Learn the basics of mindfulness meditation with guided exercises and techniques.",
      category: "videos",
      type: "Video",
      duration: "20 minutes",
      tags: ["Mindfulness", "Meditation", "Stress Relief"],
      difficulty: "Beginner",
      image: "/peaceful-meditation-scene.png",
    },
    {
      id: 3,
      title: "Sleep Hygiene Checklist",
      description: "Downloadable checklist to improve your sleep quality and establish healthy sleep habits.",
      category: "tools",
      type: "PDF Download",
      duration: "2 pages",
      tags: ["Sleep", "Wellness", "Habits"],
      difficulty: "Beginner",
      image: "/sleep-checklist.jpg",
    },
    {
      id: 4,
      title: "Breathing Exercises for Panic Attacks",
      description: "Audio-guided breathing exercises to help manage panic attacks and acute anxiety.",
      category: "audio",
      type: "Audio Guide",
      duration: "10 minutes",
      tags: ["Panic", "Breathing", "Emergency"],
      difficulty: "Beginner",
      image: "/breathing-exercises.png",
    },
    {
      id: 5,
      title: "Cognitive Behavioral Therapy Workbook",
      description: "Interactive workbook with CBT exercises and thought tracking templates.",
      category: "tools",
      type: "Interactive PDF",
      duration: "50 pages",
      tags: ["CBT", "Therapy", "Worksheets"],
      difficulty: "Intermediate",
      image: "/cbt-workbook.jpg",
    },
    {
      id: 6,
      title: "Managing Depression: Daily Strategies",
      description: "Practical video series on daily strategies for managing depression symptoms.",
      category: "videos",
      type: "Video Series",
      duration: "45 minutes",
      tags: ["Depression", "Daily Life", "Strategies"],
      difficulty: "Intermediate",
      image: "/depression-management.jpg",
    },
  ]

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Video":
      case "Video Series":
        return <Video className="w-4 h-4" />
      case "Audio Guide":
        return <Headphones className="w-4 h-4" />
      case "PDF Download":
      case "Interactive PDF":
        return <Download className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
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
            <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
              <BookOpen className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Wellness Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Access our comprehensive library of mental health resources, including articles, videos, audio guides, and
            interactive tools to support your wellness journey.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                  </Button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getDifficultyColor(resource.difficulty)}>{resource.difficulty}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">{getTypeIcon(resource.type)}</div>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {resource.type}
                  </Badge>
                  <span className="text-sm text-gray-500">{resource.duration}</span>
                </div>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{resource.title}</CardTitle>
                <CardDescription className="text-sm">{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {resource.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full group-hover:bg-blue-600 transition-colors">
                  <Play className="w-4 h-4 mr-2" />
                  Access Resource
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Access Tools */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Access Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-md transition-shadow cursor-pointer">
              <Heart className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Mood Tracker</h3>
              <p className="text-sm text-gray-600">Track your daily mood and emotions</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-md transition-shadow cursor-pointer">
              <Brain className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Thought Journal</h3>
              <p className="text-sm text-gray-600">Record and reflect on your thoughts</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-md transition-shadow cursor-pointer">
              <Zap className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Stress Relief</h3>
              <p className="text-sm text-gray-600">Quick exercises for immediate relief</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 hover:shadow-md transition-shadow cursor-pointer">
              <Moon className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Sleep Guide</h3>
              <p className="text-sm text-gray-600">Improve your sleep quality</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Need Personalized Support?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            While our resources are helpful, sometimes you need personalized guidance. Connect with our mental health
            professionals for tailored support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services/counseling">
              <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Book Counseling Session
              </Button>
            </Link>
            <Link href="/services/group-therapy">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 bg-transparent">
                Join Group Therapy
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
