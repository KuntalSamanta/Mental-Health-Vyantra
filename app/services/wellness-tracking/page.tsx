"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  TrendingUp,
  Calendar,
  Heart,
  Brain,
  Moon,
  Activity,
  BarChart3,
  Plus,
  CheckCircle,
  AlertCircle,
  Smile,
  Meh,
  Frown,
} from "lucide-react"

export default function WellnessTrackingPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("week")
  const [currentMood, setCurrentMood] = useState(3)

  const moodOptions = [
    { value: 1, icon: Frown, label: "Very Low", color: "text-red-500" },
    { value: 2, icon: Frown, label: "Low", color: "text-orange-500" },
    { value: 3, icon: Meh, label: "Neutral", color: "text-yellow-500" },
    { value: 4, icon: Smile, label: "Good", color: "text-green-500" },
    { value: 5, icon: Smile, label: "Excellent", color: "text-blue-500" },
  ]

  const trackingMetrics = [
    {
      title: "Mood Score",
      value: "7.2",
      change: "+0.8",
      trend: "up",
      icon: Heart,
      color: "bg-pink-500",
      description: "Average mood this week",
    },
    {
      title: "Sleep Quality",
      value: "6.8",
      change: "-0.2",
      trend: "down",
      icon: Moon,
      color: "bg-indigo-500",
      description: "Hours of quality sleep",
    },
    {
      title: "Stress Level",
      value: "4.1",
      change: "-1.2",
      trend: "up",
      icon: Brain,
      color: "bg-purple-500",
      description: "Lower is better",
    },
    {
      title: "Activity Level",
      value: "8.5",
      change: "+2.1",
      trend: "up",
      icon: Activity,
      color: "bg-green-500",
      description: "Physical activity score",
    },
  ]

  const weeklyGoals = [
    {
      title: "Meditation Practice",
      target: 7,
      completed: 5,
      unit: "sessions",
      icon: Brain,
      color: "bg-purple-100 text-purple-800",
    },
    {
      title: "Exercise",
      target: 5,
      completed: 3,
      unit: "workouts",
      icon: Activity,
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Sleep Schedule",
      target: 7,
      completed: 6,
      unit: "nights",
      icon: Moon,
      color: "bg-indigo-100 text-indigo-800",
    },
    {
      title: "Social Connection",
      target: 3,
      completed: 2,
      unit: "interactions",
      icon: Heart,
      color: "bg-pink-100 text-pink-800",
    },
  ]

  const recentEntries = [
    {
      date: "Today",
      mood: 4,
      sleep: 7.5,
      stress: 3,
      notes: "Had a productive day at work, feeling optimistic",
    },
    {
      date: "Yesterday",
      mood: 3,
      sleep: 6.0,
      stress: 5,
      notes: "Felt a bit overwhelmed with deadlines",
    },
    {
      date: "2 days ago",
      mood: 5,
      sleep: 8.0,
      stress: 2,
      notes: "Great day! Spent time with friends and felt relaxed",
    },
  ]

  const getMoodIcon = (mood: number) => {
    const moodOption = moodOptions.find((option) => option.value === mood)
    if (moodOption) {
      const Icon = moodOption.icon
      return <Icon className={`w-5 h-5 ${moodOption.color}`} />
    }
    return <Meh className="w-5 h-5 text-gray-500" />
  }

  const getMoodLabel = (mood: number) => {
    const moodOption = moodOptions.find((option) => option.value === mood)
    return moodOption ? moodOption.label : "Unknown"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
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
              <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
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
            <div className="p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-full">
              <BarChart3 className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Wellness Tracking</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Monitor your mental health journey with personalized tracking tools. Gain insights into your patterns and
            celebrate your progress.
          </p>
        </div>

        {/* Quick Mood Check-in */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Mood Check-in</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 text-center mb-6">How are you feeling right now?</p>
            <div className="flex justify-center space-x-4 mb-6">
              {moodOptions.map((option) => {
                const Icon = option.icon
                return (
                  <button
                    key={option.value}
                    onClick={() => setCurrentMood(option.value)}
                    className={`p-4 rounded-full transition-all ${
                      currentMood === option.value
                        ? "bg-blue-100 ring-2 ring-blue-500"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <Icon className={`w-8 h-8 ${option.color}`} />
                  </button>
                )
              })}
            </div>
            <div className="text-center">
              <p className="text-lg font-medium text-gray-900 mb-4">
                {getMoodLabel(currentMood)} ({currentMood}/5)
              </p>
              <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Log Entry
              </Button>
            </div>
          </div>
        </div>

        {/* Time Period Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white rounded-lg shadow-md p-1">
            {["week", "month", "quarter"].map((period) => (
              <Button
                key={period}
                variant={selectedPeriod === period ? "default" : "ghost"}
                onClick={() => setSelectedPeriod(period)}
                className="capitalize"
              >
                {period}
              </Button>
            ))}
          </div>
        </div>

        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {trackingMetrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg ${metric.color}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className={`w-4 h-4 ${metric.trend === "up" ? "text-green-500" : "text-red-500"}`} />
                      <span
                        className={`text-sm font-medium ${metric.trend === "up" ? "text-green-500" : "text-red-500"}`}
                      >
                        {metric.change}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">{metric.title}</h3>
                    <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                    <p className="text-sm text-gray-600">{metric.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Weekly Goals */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Weekly Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weeklyGoals.map((goal, index) => {
              const Icon = goal.icon
              const progress = (goal.completed / goal.target) * 100
              return (
                <div key={index} className="p-6 border border-gray-200 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${goal.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                    </div>
                    {progress >= 100 ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : progress >= 70 ? (
                      <AlertCircle className="w-6 h-6 text-yellow-500" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-red-500" />
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {goal.completed} of {goal.target} {goal.unit}
                      </span>
                      <span className="font-medium">{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Recent Entries */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Entries</h2>
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {recentEntries.map((entry, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="font-medium text-gray-900">{entry.date}</span>
                    <Badge variant="outline" className="flex items-center space-x-1">
                      {getMoodIcon(entry.mood)}
                      <span>{getMoodLabel(entry.mood)}</span>
                    </Badge>
                  </div>
                  <div className="flex space-x-4 text-sm text-gray-600">
                    <span>Sleep: {entry.sleep}h</span>
                    <span>Stress: {entry.stress}/10</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{entry.notes}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tracking Tools */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tracking Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-md transition-shadow cursor-pointer">
              <Heart className="w-8 h-8 text-pink-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Mood Journal</h3>
              <p className="text-sm text-gray-600">Track daily emotions and triggers</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 hover:shadow-md transition-shadow cursor-pointer">
              <Moon className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Sleep Tracker</h3>
              <p className="text-sm text-gray-600">Monitor sleep patterns and quality</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-md transition-shadow cursor-pointer">
              <Brain className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Anxiety Log</h3>
              <p className="text-sm text-gray-600">Record anxiety levels and coping strategies</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-md transition-shadow cursor-pointer">
              <Activity className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Habit Tracker</h3>
              <p className="text-sm text-gray-600">Build and maintain healthy habits</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Wellness Journey?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Consistent tracking leads to better self-awareness and improved mental health outcomes. Start building
            healthy habits today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
              <Plus className="w-5 h-5 mr-2" />
              Start Tracking Today
            </Button>
            <Link href="/services/counseling">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 bg-transparent">
                Get Professional Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
