"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  Shield,
  Calendar,
  TrendingUp,
  Bell,
  Settings,
  User,
  LogOut,
  Activity,
  Brain,
  Moon,
  ChevronRight,
  BarChart3,
  Database,
  Lock,
  Cpu,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Dashboard() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const mentalHealthServices = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Session Database",
      description: "Every session is a full therapy record, the world's most trusted mental health database.",
      features: ["100% confidential", "Built-in privacy with HIPAA", "Easy to access"],
      status: "Active",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Privacy & Security",
      description: "Add user authentication and secure your data with enterprise-level security.",
      features: ["End-to-end encryption", "Secure data storage", "HIPAA compliant"],
      status: "Protected",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "AI Wellness Insights",
      description: "Easily get personalized insights without compromising your privacy.",
      features: ["Mood analysis", "Progress tracking", "Personalized recommendations"],
      status: "Learning",
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Real-time Monitoring",
      description: "Build comprehensive wellness tracking with real-time data synchronization.",
      features: ["Live mood tracking", "Instant alerts", "24/7 monitoring"],
      status: "Monitoring",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics Dashboard",
      description: "Integrate your wellness data to track progress and identify patterns.",
      features: ["Progress visualization", "Trend analysis", "Custom reports"],
      status: "Analyzing",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Cognitive Training",
      description: "Instant ready-to-use cognitive behavioral therapy exercises and tools.",
      features: ["CBT exercises", "Mindfulness training", "Skill building"],
      status: "Training",
    },
  ]

  const wellnessMetrics = [
    { label: "Mood Stability", value: 72, trend: "+5%", color: "text-primary" },
    { label: "Sleep Quality", value: 68, trend: "+12%", color: "text-chart-2" },
    { label: "Stress Management", value: 58, trend: "-8%", color: "text-chart-4" },
    { label: "Social Connection", value: 81, trend: "+15%", color: "text-chart-3" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-05%20at%2021.59.47_da4245b5.jpg-QOyLIFzygmNWyamTy1OedyNeXUktm7.jpeg"
                  alt="Vyantra Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <h1 className="text-lg font-semibold text-foreground">Vyantra</h1>
                  <p className="text-xs text-muted-foreground">Mental Health Platform</p>
                </div>
              </Link>
            </div>
            {/* <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <User className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div> */}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold mb-2 text-foreground">Welcome back, Alex</h1>
          <p className="text-muted-foreground">{currentDate}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {wellnessMetrics.map((metric, index) => (
            <Card key={index} className="bg-card border-border hover:bg-card/80 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                    <p className="text-2xl font-semibold text-foreground">{metric.value}%</p>
                    <p className={`text-sm ${metric.color} font-medium`}>{metric.trend}</p>
                  </div>
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                    <TrendingUp className={`h-6 w-6 ${metric.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mentalHealthServices.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:bg-card/80 transition-all duration-200 group cursor-pointer"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {service.icon}
                  </div>
                  <Badge variant="secondary" className="bg-muted text-muted-foreground">
                    {service.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="w-full mt-4 justify-between bg-transparent hover:bg-muted group-hover:bg-primary/10"
                >
                  <span>Access {service.title}</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold text-foreground">Wellness Analytics</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Your mental health progress over time
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="bg-transparent">
                      Last 30 days
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <BarChart3 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Activity className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Wellness chart visualization</p>
                    <p className="text-sm text-muted-foreground">Progress tracking and mood analytics</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">Quick Actions</CardTitle>
                <CardDescription className="text-muted-foreground">Start your wellness journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent hover:bg-muted">
                  <MessageCircle className="h-4 w-4 mr-3" />
                  Start Therapy Session
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent hover:bg-muted">
                  <Calendar className="h-4 w-4 mr-3" />
                  Schedule Appointment
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent hover:bg-muted">
                  <Brain className="h-4 w-4 mr-3" />
                  Mood Check-in
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent hover:bg-muted">
                  <Moon className="h-4 w-4 mr-3" />
                  Sleep Tracking
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-destructive/5 border-destructive/20">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-destructive">Crisis Support</CardTitle>
                <CardDescription className="text-muted-foreground">24/7 immediate assistance available</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="destructive" className="w-full">
                  <Shield className="h-4 w-4 mr-2" />
                  Emergency Hotline
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent border-destructive/20 hover:bg-destructive/10"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Crisis Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
