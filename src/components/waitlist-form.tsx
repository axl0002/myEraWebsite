"use client";

import { useState } from "react";

export function WaitlistForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error);
        return;
      }

      setStatus("success");
      setMessage(data.message);
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className={className}>
      {status === "success" ? (
        <div className="flex items-center gap-2 justify-center px-6 py-3 rounded-full border border-pink-300/40 bg-pink-50 text-pink-400">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-medium">{message}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            className="flex-1 px-5 py-3 rounded-full bg-white border border-pink-200/50 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200/50 text-gray-800 placeholder:text-gray-400 text-sm shadow-sm"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-300 to-blue-300 hover:from-pink-400 hover:to-blue-400 transition-all text-white font-medium text-sm glow-accent disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-sm"
          >
            {status === "loading" ? "Joining..." : "Join Waitlist"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm mt-2 text-center">{message}</p>
      )}
    </div>
  );
}
