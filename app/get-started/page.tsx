"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, CheckCircle, User, GraduationCap, Heart, Shield } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function GetStartedPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    university: "",
    year: "",
    concerns: [],
    urgency: "",
    previousTherapy: "",
    goals: "",
  })

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData)
    router.push("/dashboard")
  }

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
            <div className="flex items-center space-x-2">
              <Badge variant="outline">Step {currentStep} of 4</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">Progress</span>
              <span className="text-sm font-medium text-muted-foreground">{currentStep}/4</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step Content */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                {currentStep === 1 && <User className="h-8 w-8 text-primary" />}
                {currentStep === 2 && <GraduationCap className="h-8 w-8 text-primary" />}
                {currentStep === 3 && <Heart className="h-8 w-8 text-primary" />}
                {currentStep === 4 && <Shield className="h-8 w-8 text-primary" />}
                <div>
                  <CardTitle className="text-2xl">
                    {currentStep === 1 && "Personal Information"}
                    {currentStep === 2 && "Academic Details"}
                    {currentStep === 3 && "Mental Health Assessment"}
                    {currentStep === 4 && "Goals & Preferences"}
                  </CardTitle>
                  <CardDescription>
                    {currentStep === 1 && "Let's start with some basic information about you"}
                    {currentStep === 2 && "Tell us about your academic situation"}
                    {currentStep === 3 && "Help us understand your current mental health needs"}
                    {currentStep === 4 && "What would you like to achieve with Vyantra?"}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </>
              )}

              {/* Step 2: Academic Details */}
              {currentStep === 2 && (
                <>
                  <div>
                    <Label htmlFor="university">University/College</Label>
                    <Input
                      id="university"
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                      placeholder="Enter your university or college name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="year">Academic Year</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, year: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your academic year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="freshman">Freshman</SelectItem>
                        <SelectItem value="sophomore">Sophomore</SelectItem>
                        <SelectItem value="junior">Junior</SelectItem>
                        <SelectItem value="senior">Senior</SelectItem>
                        <SelectItem value="graduate">Graduate Student</SelectItem>
                        <SelectItem value="phd">PhD Student</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {/* Step 3: Mental Health Assessment */}
              {currentStep === 3 && (
                <>
                  <div>
                    <Label className="text-base font-medium mb-4 block">
                      What areas would you like support with? (Select all that apply)
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Anxiety",
                        "Depression",
                        "Stress Management",
                        "Academic Pressure",
                        "Relationship Issues",
                        "Sleep Problems",
                        "Self-Esteem",
                        "Social Anxiety",
                      ].map((concern) => (
                        <div key={concern} className="flex items-center space-x-2">
                          <Checkbox
                            id={concern}
                            checked={formData.concerns.includes(concern)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData({ ...formData, concerns: [...formData.concerns, concern] })
                              } else {
                                setFormData({ ...formData, concerns: formData.concerns.filter((c) => c !== concern) })
                              }
                            }}
                          />
                          <Label htmlFor={concern} className="text-sm">
                            {concern}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="urgency">How urgent is your need for support?</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - I'm doing okay but want to improve</SelectItem>
                        <SelectItem value="moderate">Moderate - I'm struggling but managing</SelectItem>
                        <SelectItem value="high">High - I need support soon</SelectItem>
                        <SelectItem value="crisis">Crisis - I need immediate help</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {/* Step 4: Goals & Preferences */}
              {currentStep === 4 && (
                <>
                  <div>
                    <Label htmlFor="previousTherapy">Have you had therapy or counseling before?</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, previousTherapy: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="never">Never had therapy</SelectItem>
                        <SelectItem value="past">Yes, in the past</SelectItem>
                        <SelectItem value="current">Currently in therapy</SelectItem>
                        <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="goals">What are your main goals for using Vyantra?</Label>
                    <Textarea
                      id="goals"
                      value={formData.goals}
                      onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                      placeholder="Tell us what you hope to achieve..."
                      rows={4}
                    />
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center space-x-2 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>

            {currentStep < 4 ? (
              <Button onClick={handleNext} className="flex items-center space-x-2">
                <span>Next</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Link href="/dashboard">
              <Button onClick={handleSubmit} className="flex items-center space-x-2 bg-primary hover:bg-primary/90">
                <CheckCircle className="h-4 w-4" />
                <span>Complete Setup</span>
              </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
