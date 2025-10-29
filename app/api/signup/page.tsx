"use client"

import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-linear-to-br from-blue-50 to-indigo-100">
      <SignUp path="/api/signup" routing="path" signInUrl="/api/login" />
    </div>
  );
}
