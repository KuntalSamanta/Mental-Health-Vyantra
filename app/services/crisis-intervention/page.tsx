"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  AlertTriangle,
  Clock,
  Shield,
  Heart,
  Users,
  Headphones,
  Video,
} from "lucide-react"

export default function CrisisInterventionPage() {
  const [selectedTab, setSelectedTab] = useState("immediate")

  const emergencyContacts = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 free and confidential support",
      type: "call",
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Free 24/7 crisis support via text",
      type: "text",
    },
    {
      name: "Emergency Services",
      number: "911",
      description: "For immediate life-threatening emergencies",
      type: "emergency",
    },
    {
      name: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Treatment referral and information service",
      type: "call",
    },
  ]

  const warningSignsData = [
    {
      category: "Emotional Signs",
      signs: [
        "Overwhelming feelings of hopelessness",
        "Intense emotional pain or distress",
        "Feeling trapped with no way out",
        "Sudden mood changes or extreme irritability",
        "Loss of interest in activities once enjoyed",
      ],
    },
    {
      category: "Behavioral Signs",
      signs: [
        "Talking about wanting to die or hurt oneself",
        "Looking for ways to kill oneself",
        "Increased use of alcohol or drugs",
        "Withdrawing from friends and family",
        "Giving away prized possessions",
      ],
    },
    {
      category: "Physical Signs",
      signs: [
        "Changes in sleep patterns",
        "Loss of appetite or overeating",
        "Fatigue or loss of energy",
        "Unexplained aches and pains",
        "Neglecting personal hygiene",
      ],
    },
  ]

  const copingStrategies = [
    {
      title: "Grounding Techniques",
      description: "Use the 5-4-3-2-1 technique to stay present",
      steps: [
        "5 things you can see",
        "4 things you can touch",
        "3 things you can hear",
        "2 things you can smell",
        "1 thing you can taste",
      ],
      icon: Shield,
    },
    {
      title: "Breathing Exercises",
      description: "Slow, deep breathing to reduce anxiety",
      steps: ["Breathe in for 4 counts", "Hold for 4 counts", "Breathe out for 6 counts", "Repeat 5-10 times"],
      icon: Heart,
    },
    {
      title: "Reach Out",
      description: "Connect with someone you trust",
      steps: [
        "Call a friend or family member",
        "Text someone who cares",
        "Join an online support group",
        "Contact a crisis helpline",
      ],
      icon: Users,
    },
  ]

  const getContactIcon = (type: string) => {
    switch (type) {
      case "call":
        return <Phone className="w-5 h-5" />
      case "text":
        return <MessageCircle className="w-5 h-5" />
      case "emergency":
        return <AlertTriangle className="w-5 h-5" />
      default:
        return <Phone className="w-5 h-5" />
    }
  }

  const getContactColor = (type: string) => {
    switch (type) {
      case "emergency":
        return "bg-red-600 hover:bg-red-700"
      case "text":
        return "bg-blue-600 hover:bg-blue-700"
      default:
        return "bg-green-600 hover:bg-green-700"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
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
              <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                Get Help Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-center">
            <AlertTriangle className="w-6 h-6 mr-3 flex-shrink-0" />
            <div>
              <p className="font-semibold">If you're in immediate danger, call 911</p>
              <p className="text-red-100 text-sm">For crisis support, call 988 (Suicide & Crisis Lifeline)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-red-100 to-orange-100 rounded-full">
              <Shield className="w-12 h-12 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Crisis Intervention</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Immediate support and resources for mental health crises. You're not alone, and help is available 24/7.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={selectedTab === "immediate" ? "default" : "outline"}
            onClick={() => setSelectedTab("immediate")}
            className="flex items-center gap-2"
          >
            <AlertTriangle className="w-4 h-4" />
            Immediate Help
          </Button>
          <Button
            variant={selectedTab === "warning" ? "default" : "outline"}
            onClick={() => setSelectedTab("warning")}
            className="flex items-center gap-2"
          >
            <Clock className="w-4 h-4" />
            Warning Signs
          </Button>
          <Button
            variant={selectedTab === "coping" ? "default" : "outline"}
            onClick={() => setSelectedTab("coping")}
            className="flex items-center gap-2"
          >
            <Heart className="w-4 h-4" />
            Coping Strategies
          </Button>
        </div>

        {/* Immediate Help Tab */}
        {selectedTab === "immediate" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Emergency Contacts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {emergencyContacts.map((contact, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{contact.name}</CardTitle>
                        {getContactIcon(contact.type)}
                      </div>
                      <CardDescription>{contact.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className={`w-full ${getContactColor(contact.type)} text-white`} size="lg">
                        {contact.number}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">24/7 Online Support</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100">
                  <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Crisis Chat</h3>
                  <p className="text-sm text-gray-600 mb-4">Anonymous chat support available 24/7</p>
                  <Button variant="outline" size="sm">
                    Start Chat
                  </Button>
                </div>
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100">
                  <Video className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Video Support</h3>
                  <p className="text-sm text-gray-600 mb-4">Face-to-face crisis counseling</p>
                  <Button variant="outline" size="sm">
                    Join Video Call
                  </Button>
                </div>
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100">
                  <Headphones className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Audio Support</h3>
                  <p className="text-sm text-gray-600 mb-4">Voice-only crisis counseling</p>
                  <Button variant="outline" size="sm">
                    Start Audio Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Warning Signs Tab */}
        {selectedTab === "warning" && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Recognizing Warning Signs</h2>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Being aware of warning signs can help you or someone you care about get help before a crisis escalates.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {warningSignsData.map((category, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 text-center">{category.category}</h3>
                  <div className="space-y-3">
                    {category.signs.map((sign, signIndex) => (
                      <div key={signIndex} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">{sign}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-200">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Note</h4>
                  <p className="text-yellow-700 text-sm">
                    If you notice multiple warning signs in yourself or someone else, don't wait. Reach out for help
                    immediately. Early intervention can save lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Coping Strategies Tab */}
        {selectedTab === "coping" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Immediate Coping Strategies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {copingStrategies.map((strategy, index) => {
                  const Icon = strategy.icon
                  return (
                    <div key={index} className="text-center">
                      <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{strategy.title}</h3>
                      <p className="text-gray-600 mb-4">{strategy.description}</p>
                      <div className="space-y-2">
                        {strategy.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="text-left p-3 bg-gray-50 rounded-lg">
                            <span className="text-sm text-gray-700">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Safety Planning</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Create Your Safety Plan</h3>
                  <div className="space-y-3">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">1. Warning Signs</h4>
                      <p className="text-sm text-gray-600">List your personal warning signs</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">2. Coping Strategies</h4>
                      <p className="text-sm text-gray-600">Activities that help you feel better</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">3. Support Network</h4>
                      <p className="text-sm text-gray-600">People you can reach out to</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">4. Professional Contacts</h4>
                      <p className="text-sm text-gray-600">Therapists, doctors, crisis lines</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Environmental Safety</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">Remove Means</h4>
                      <p className="text-sm text-blue-700">Remove or secure items that could be used for self-harm</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-2">Safe Spaces</h4>
                      <p className="text-sm text-green-700">Identify places where you feel safe and calm</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-medium text-purple-900 mb-2">Support Items</h4>
                      <p className="text-sm text-purple-700">Keep comforting items nearby (photos, music, pets)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Remember: You Are Not Alone</h2>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Crisis situations are temporary. With the right support and resources, you can get through this difficult
            time. Help is always available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
              <Phone className="w-5 h-5 mr-2" />
              Call 988 Now
            </Button>
            <Link href="/services/counseling">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 bg-transparent">
                Schedule Follow-up Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
