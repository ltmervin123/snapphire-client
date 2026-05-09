import type { Metadata } from "next";
import Hero from "@/components/landing-page/Hero";
import Features from "@/components/landing-page/Features";
import Footer from "@/components/landing-page/Footer";

export const metadata: Metadata = {
  title: "SnappHire AI - Modern Recruitment Platform",
  description:
    "Welcome to SnappHire AI. AI-Powered HR Recruitment & Employee Knowledge Platform.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col font-sans">
      <header className="border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-4 py-4 max-w-screen-xl mx-auto sm:px-6 lg:px-8 w-full">
          <div className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            SnappHire
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="#features"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="/sign-in"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              Log In
            </a>
            <a
              href="/sign-up"
              className="text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Start Free
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
