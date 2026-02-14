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
        <div className="flex items-center gap-2 justify-center px-6 py-3 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300">
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
            className="flex-1 px-5 py-3 rounded-full bg-white/5 border border-purple-500/20 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30 text-white placeholder:text-purple-300/30 text-sm"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 transition-all text-white font-medium text-sm glow-purple disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === "loading" ? "Joining..." : "Join Waitlist"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="text-red-400/80 text-sm mt-2 text-center">{message}</p>
      )}
    </div>
  );
}
