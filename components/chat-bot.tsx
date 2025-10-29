"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"  // ✅ ALL IN ONE LINE
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { X, Send, Bot, User } from "lucide-react"

interface ChatBotProps {
  onClose: () => void
}

interface Message {
  id: string
  role: "user" | "assistant"
  parts: { type: string; text: string }[]
}

export function ChatBot({ onClose }: ChatBotProps) {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isLoading])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !isLoading) {
      const userMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        parts: [{ type: "text", text: input }],
      }

      // Add user message immediately
      setMessages(prev => [...prev, userMessage])
      
      const currentInput = input
      setInput("")
      setIsLoading(true)

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [...messages, { ...userMessage, text: currentInput }]
          })
        })

        const botReply = await response.json()
        
        // Add bot response
        setMessages(prev => [...prev, botReply])
      } catch (error) {
        console.error("Error:", error)
        // Add error message
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: "assistant",
          parts: [{ type: "text", text: "Sorry, something went wrong. Please try again." }]
        }])
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <Card className="fixed bottom-24 right-6 w-96 h-[500px] shadow-2xl border-2 border-primary/20 z-50 flex flex-col">
      {/* HEADER */}
      <CardHeader className="bg-linear-to-r from-primary to-primary/80 text-primary-foreground p-4 rounded-t-lg shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5 animate-pulse" />
            <CardTitle className="text-lg font-semibold">Vyantra AI Assistant</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-primary-foreground hover:bg-primary-foreground/20 p-1"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-sm opacity-90">I'm here to support your mental wellness 🌱</p>
      </CardHeader>

      {/* CHAT MESSAGES */}
      <CardContent className="flex-1 p-0 flex flex-col overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex-1 p-4 bg-background/50 overflow-y-auto"
        >
          <div className="space-y-4 flex flex-col">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground py-6 flex flex-col items-center">
                <Bot className="h-16 w-16 mx-auto mb-4 text-primary opacity-80" />
                <p className="text-sm">Hi! I'm your Vyantra AI assistant. I can help you with:</p>
                <ul className="text-xs mt-3 space-y-1">
                  <li>✨ Mental health resources</li>
                  <li>🧘 Stress management tips</li>
                  <li>📚 Study anxiety support</li>
                  <li>💡 Crisis intervention guidance</li>
                </ul>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end space-x-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}

                <div
                  className={`max-w-[75%] px-4 py-2 rounded-2xl shadow-sm text-sm transition ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground ml-auto rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none"
                  }`}
                >
                  {message.parts.map((part, index) => {
                    if (part.type === "text") {
                      return <div key={index}>{part.text}</div>
                    }
                    return null
                  })}
                </div>

                {message.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <User className="h-4 w-4 text-secondary" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-end space-x-2 justify-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="bg-muted text-foreground px-4 py-2 rounded-2xl rounded-bl-none">
                  <div className="flex space-x-1">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce delay-100">.</span>
                    <span className="animate-bounce delay-200">.</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* INPUT AREA */}
        <div className="p-3 border-t bg-background/70 backdrop-blur-md">
          <form onSubmit={handleSubmit} className="flex space-x-2 items-center">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about mental health support..."
              className="flex-1 rounded-full px-4 py-2 shadow-sm focus:ring-2 focus:ring-primary"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={!input.trim() || isLoading}
              size="sm"
              className="px-4 h-10 rounded-full flex items-center justify-center"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}
