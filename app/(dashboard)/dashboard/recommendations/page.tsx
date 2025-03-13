'use client'

import { useEffect } from 'react'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { JobRecommendationCard } from '@/components/dashboard/job-recommendation-card'
import { mockJobRecommendations, mockUser } from '@/lib/mock-data'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Search, SlidersHorizontal } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/(auth)/auth.context'

export default function RecommendationsPage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  }, [user, router])

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    )
  }
  return (
    <DashboardLayout user={user}>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Job Recommendations
          </h1>
          <p className="text-muted-foreground">
            Personalized job recommendations based on your skills and experience
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search jobs..." className="pl-8" />
          </div>
          <Select defaultValue="match">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="match">Match Score</SelectItem>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="salary">Salary (High to Low)</SelectItem>
            </SelectContent>
          </Select>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Jobs</SheetTitle>
                <SheetDescription>
                  Refine your job recommendations
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Location</h3>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="usa">Nigeria</SelectItem>
                      <SelectItem value="europe">Ogun state</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Job Type</h3>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="fulltime">Full-time</SelectItem>
                      <SelectItem value="parttime">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="text-sm font-medium">Minimum Match Score</h3>
                    <span className="text-sm text-muted-foreground">60%</span>
                  </div>
                  <Slider defaultValue={[60]} max={100} step={5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Experience Level</h3>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="entry">Entry Level</SelectItem>
                      <SelectItem value="mid">Mid Level</SelectItem>
                      <SelectItem value="senior">Senior Level</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="pt-4">
                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="col-span-full md:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2">
              {mockJobRecommendations.map((job) => (
                <JobRecommendationCard
                  key={job.id}
                  job={job}
                  userSkills={mockUser.skills}
                />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Skills</CardTitle>
                <CardDescription>Skills used for job matching</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {mockUser.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Match Insights</CardTitle>
                <CardDescription>
                  How your profile matches with jobs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>React</span>
                    <span className="font-medium">High Demand</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[90%] rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>TypeScript</span>
                    <span className="font-medium">High Demand</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[85%] rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>Next.js</span>
                    <span className="font-medium">Medium Demand</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[70%] rounded-full bg-yellow-500"></div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Skills to Learn</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                      GraphQL
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                      AWS
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-500"></span>
                      Vue.js
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
