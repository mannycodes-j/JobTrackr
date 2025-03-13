'use client'

import type React from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Lightbulb,
  LineChart,
} from 'lucide-react'
import Link from 'next/link'
import styles from '../styles/animations.module.css'
import AuthSection from './(auth)/login/page'


export default function LoginPage() {
   return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 items-center border-b px-4 lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Briefcase className="h-5 w-5 text-2xl" />
          <span>JobTrackr</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            FAQ
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section
          id="header"
          className="w-full h-screen py-12 md:py-24 lg:py-32"
        >
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter md:pl-12 sm:text-4xl md:text-[35px]">
                AI-Powered Job{' '}
                <span className="text-[#2563eb]">Application Tracker</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:pl-12 md:text-[15px]">
                Track your job applications, get AI-powered resume feedback, and
                discover personalized job recommendations.
              </p>
              <div className="flex flex-col md:pl-12 gap-2 min-[400px]:flex-row">
                <Button
                  className={`border-black border-[1.5px] py-5 bg-transparent text-black transition-all duration-300 ${styles.heroOutlineButton}`}
                  size="lg"
                  asChild
                >
                  <Link href="/login">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button className="bg-[#2563eb]" variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] overflow-hidden rounded-lg border bg-background p-2 shadow-xl">
                <div className="absolute right-2 top-2 z-10 flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <div className="h-2 w-2 rounded-full bg-yellow-500" />
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                </div>
                <div className="overflow-hidden rounded-md">
                  <div className="bg-muted px-6 py-4">
                    <div className="h-2 w-20 rounded-full bg-muted-foreground/30" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 p-4">
                    <div className="space-y-2 rounded-md bg-muted p-2">
                      <div className="h-2 w-12 rounded-full bg-muted-foreground/30" />
                      <div className="h-10 rounded-md bg-muted-foreground/20" />
                    </div>
                    <div className="space-y-2 rounded-md bg-muted p-2">
                      <div className="h-2 w-12 rounded-full bg-muted-foreground/30" />
                      <div className="h-10 rounded-md bg-muted-foreground/20" />
                    </div>
                    <div className="space-y-2 rounded-md bg-muted p-2">
                      <div className="h-2 w-12 rounded-full bg-muted-foreground/30" />
                      <div className="h-10 rounded-md bg-muted-foreground/20" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="space-y-2">
                      <div className="h-2 w-full rounded-full bg-muted-foreground/20" />
                      <div className="h-2 w-full rounded-full bg-muted-foreground/20" />
                      <div className="h-2 w-3/4 rounded-full bg-muted-foreground/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="relative w-full py-12 md:py-24 lg:py-32 bg-cover bg-center"
          id="features"
          style={{
            backgroundImage: `url('/assets/images/about.png')`,
          }}
        >
          <div className="absolute inset-0 bg-blue-900/50" />

          <div className="relative container px-4 md:px-6">
            <div className="absolute inset-0 bg-gradient-radial from-green-500/10 via-transparent to-transparent" />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-[35px]">
                  Key Features
                </h2>
                <p className="max-w-[900px] text-white  md:text-[15px]/relaxed">
                  Everything you need to streamline your job search process
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Briefcase className="h-10 w-10 text-primary" />
                  <CardTitle className="mt-4">Application Tracking</CardTitle>
                  <CardDescription>
                    Keep track of all your job applications in one place
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Track application status</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Set reminders for follow-ups</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Add notes and documents</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lightbulb className="h-10 w-10 text-primary" />
                  <CardTitle className="mt-4">AI Resume Feedback</CardTitle>
                  <CardDescription>
                    Get personalized feedback to improve your resume
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Content and formatting analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Keyword optimization suggestions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Industry-specific recommendations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <LineChart className="h-10 w-10 text-primary" />
                  <CardTitle className="mt-4">Job Recommendations</CardTitle>
                  <CardDescription>
                    Discover jobs that match your skills and experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Personalized job matching</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Skills gap analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>One-click application</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <AuthSection/>
      </main>
      <footer className="flex flex-col gap-2 border-t px-4 py-6 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-primary" />
          <span className="font-semibold">JobTrackr</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2025 JobTrackr. All rights reserved. by mannycodes
        </p>
        <nav className="flex gap-4">
          <Link
            href="#"
            className="text-xs text-muted-foreground hover:underline underline-offset-4"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-xs text-muted-foreground hover:underline underline-offset-4"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-xs text-muted-foreground hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
