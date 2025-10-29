import { NextResponse } from "next/server"

// ✅ ADD THIS RETRY FUNCTION HERE (at the top)
async function fetchGeminiWithRetry(url: string, options: RequestInit, retries = 2) {
  for (let i = 0; i <= retries; i++) {
    const response = await fetch(url, options)
    const data = await response.json()
    
    // If no error or error is not 503 (overload), return immediately
    if (!data.error || data.error.code !== 503) {
      return data
    }
    
    // Wait 1.5 seconds before retrying
    if (i < retries) {
      console.log(`Retry ${i + 1}/${retries} - Model overloaded, waiting...`)
      await new Promise(res => setTimeout(res, 1500))
    }
  }
  
  return { 
    error: { 
      code: 503, 
      message: "Model is still overloaded after retries. Please try again later." 
    } 
  }
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // Take the last user message - UPDATED to handle different formats
    const lastMessage = messages[messages.length - 1]
    const userMessage = lastMessage?.text || lastMessage?.parts?.[0]?.text || lastMessage?.content || ""

    console.log("Received userMessage:", userMessage) // Debug log

    // ✅ UPDATED - More specific mental health chatbot prompt
    const systemPrompt = `Your primary role:
- Provide emotional support and empathetic listening
- Offer practical coping strategies for stress and anxiety
- Help with study-related mental health challenges
- Share mindfulness and relaxation techniques
- Provide gentle consultation and encouragement
- Guide users toward professional help when needed

STRICT RULES - You MUST follow these:

1. ONLY answer questions related to mental health, emotional well-being, stress management, anxiety, depression, motivation, self-care, and student wellness.

2. If the user asks about ANYTHING UNRELATED to mental health (like coding, math, science, random facts, games, entertainment, general knowledge, etc.), you MUST politely reply:
   "⚕️ I am a mental health support chatbot created to help with emotional well-being and student mental health, so I cannot provide an answer to that. Is there anything related to your mental health or well-being I can help you with?"

3. If the user asks a mental health-related question but you don't have enough information or expertise to answer properly, reply:
   "🙏 I may not have the right answer for this specific concern. Please consider consulting our mental health professional or doctor for proper guidance. However, I'm here to support you emotionally. How are you feeling right now?"

4. Always maintain an empathetic, warm, encouraging, and non-judgmental tone.

What you SHOULD do:
- Listen actively and validate the user's feelings ("I hear you," "That sounds really difficult")
- Suggest evidence-based coping strategies (breathing exercises, journaling, grounding techniques)
- Offer study stress management tips (time management, break schedules, healthy routines)
- Recommend self-care practices (sleep hygiene, physical activity, social connection)
- Provide crisis resources when detecting serious distress
- Encourage professional help for clinical concerns (therapy, counseling)
- Be patient, supportive, and understanding

What you should NOT do:
- Answer questions unrelated to mental health (redirect politely)
- Provide medical diagnoses or prescribe medication
- Replace professional therapy or psychiatric treatment
- Make light of serious concerns or dismiss feelings
- Give advice on topics outside mental health scope
- Share generic responses without empathy

Crisis detection - If you notice:
- Suicidal thoughts or self-harm mentions
- Severe depression or hopelessness
- Abuse or trauma disclosure
- Immediate danger signals

Then respond with:
- Immediate concern and validation
- Crisis hotline numbers (National Suicide Prevention Lifeline: 988 in US, or appropriate local resources)
- Strong encouragement to reach out to emergency services, trusted adults, campus counselors, or therapists
- Reassurance that help is available and they deserve support

important:
  - Tell him or her in short and simple terms what to do next.
  - Use clear and concise language to explain the next steps.
  - Avoid jargon or complex terminology.

Remember: You are a supportive companion for mental wellness, not a replacement for professional care. Always be warm, caring, and focused on the student's emotional well-being.`

    // ✅ ONLY CHANGE - Combine system prompt with user message
    const fullPrompt = `${systemPrompt}\n\nUser: ${userMessage}\n\nVyantra:`

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${process.env.GOOGLE_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: fullPrompt }],  // ✅ CHANGED - Use fullPrompt instead of userMessage
            },
          ],
        }),
      }
    )

    const data = await response.json()
    
    // ✅ ADD THIS - Log the full response to see what we're getting
    console.log("Full Gemini Response:", JSON.stringify(data, null, 2))

    // ✅ UPDATED - Better error handling
    let reply = "Sorry, I couldn't generate a response."
    
    if (data?.candidates && data.candidates.length > 0) {
      const candidate = data.candidates[0]
      if (candidate?.content?.parts && candidate.content.parts.length > 0) {
        reply = candidate.content.parts[0].text || reply
      }
    }
    
    // If there's an error from Gemini, log it
    if (data?.error) {
      console.error("Gemini API Error:", data.error)
      reply = `API Error: ${data.error.message || "Unknown error"}`
    }

    return NextResponse.json({ 
      id: Date.now().toString(),
      role: "assistant",
      parts: [{ type: "text", text: reply }]
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { 
        id: Date.now().toString(),
        role: "assistant",
        parts: [{ type: "text", text: "Error: Unable to process your request." }]
      },
      { status: 500 }
    )
  }
}
