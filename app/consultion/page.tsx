"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { ArrowLeft, CalendarIcon, Clock, Video, Phone, MessageSquare, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function ConsultationPage() {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState("")
  const [consultationType, setConsultationType] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    concerns: "",
    preferredTherapist: "",
  })

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  const handleSubmit = () => {
    console.log("Consultation scheduled:", { selectedDate, selectedTime, consultationType, formData })
    // Handle consultation booking
    router.push("/consultation/confirmation")
  }

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
            <Badge variant="outline">Free Consultation</Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4">Schedule Your Free Consultation</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with one of our licensed mental health professionals to discuss your needs and explore how Vyantra
              can support your wellness journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Consultation Options */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    <span>Choose Consultation Type</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      type: "video",
                      icon: <Video className="h-5 w-5" />,
                      title: "Video Call",
                      description: "Face-to-face consultation via secure video",
                      duration: "30 minutes",
                    },
                    {
                      type: "phone",
                      icon: <Phone className="h-5 w-5" />,
                      title: "Phone Call",
                      description: "Voice consultation over the phone",
                      duration: "30 minutes",
                    },
                    {
                      type: "chat",
                      icon: <MessageSquare className="h-5 w-5" />,
                      title: "Text Chat",
                      description: "Written consultation via secure messaging",
                      duration: "45 minutes",
                    },
                  ].map((option) => (
                    <Card
                      key={option.type}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                        consultationType === option.type ? "ring-2 ring-primary bg-primary/5" : ""
                      }`}
                      onClick={() => setConsultationType(option.type)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-primary">{option.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{option.title}</h3>
                            <p className="text-sm text-muted-foreground">{option.description}</p>
                          </div>
                          <Badge variant="outline">{option.duration}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>

              {/* Date & Time Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Select Date & Time</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                    />

                    {selectedDate && (
                      <div>
                        <Label className="text-base font-medium mb-3 block">Available Times</Label>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              variant={selectedTime === time ? "default" : "outline"}
                              size="sm"
                              onClick={() => setSelectedTime(time)}
                              className="text-sm"
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Information</CardTitle>
                  <CardDescription>Please provide your details so we can prepare for your consultation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                    />
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
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="concerns">What would you like to discuss?</Label>
                    <Textarea
                      id="concerns"
                      value={formData.concerns}
                      onChange={(e) => setFormData({ ...formData, concerns: e.target.value })}
                      placeholder="Briefly describe what you'd like to talk about..."
                      rows={4}
                    />
                  </div>
                  <div>
                    <Label htmlFor="therapist">Therapist Preference (Optional)</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, preferredTherapist: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any available therapist" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any available therapist</SelectItem>
                        <SelectItem value="dr-smith">Dr. Sarah Smith - Anxiety & Depression</SelectItem>
                        <SelectItem value="dr-johnson">Dr. Michael Johnson - Academic Stress</SelectItem>
                        <SelectItem value="dr-williams">Dr. Emily Williams - Relationship Issues</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Consultation Summary */}
              {consultationType && selectedDate && selectedTime && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Consultation Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Type:</span>
                      <span className="font-medium capitalize">{consultationType} consultation</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-medium">{selectedDate.toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time:</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">30 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Cost:</span>
                      <span className="font-medium text-primary">Free</span>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Button
                onClick={handleSubmit}
                disabled={!consultationType || !selectedDate || !selectedTime || !formData.name || !formData.email}
                className="w-full bg-primary hover:bg-primary/90"
                size="lg"
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
