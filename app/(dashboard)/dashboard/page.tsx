'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/(auth)/auth.context'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { StatsCard } from '@/components/dashboard/stats-card'
import { JobApplicationCard } from '@/components/dashboard/job-application-card'
import { JobRecommendationCard } from '@/components/dashboard/job-recommendation-card'
import {
  mockApplications,
  mockDashboardStats,
  mockJobRecommendations,
} from '@/lib/mock-data'
import {
  BarChart3,
  Briefcase,
  Calendar,
  CheckCircle2,
  Clock,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import styles from '@/styles/animations.module.css'

export default function DashboardPage() {
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

  const recentApplications = [...mockApplications]
    .sort(
      (a, b) =>
        new Date(b.appliedDate).getTime() - new Date(a.appliedDate).getTime()
    )
    .slice(0, 3)

  const topRecommendations = [...mockJobRecommendations]
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 2)

  return (
    <DashboardLayout user={user}>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-blue-500">
            Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back, {user.name}! Here&apos;s an overview of your job
            search.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Applications"
            value={mockDashboardStats.totalApplications}
            icon={<Briefcase className="h-4 w-4" />}
            description="Last 30 days"
          />
          <StatsCard
            title="Interview Rate"
            value={`${mockDashboardStats.interviewRate}%`}
            icon={<Calendar className="h-4 w-4" />}
            trend={{ value: 12, positive: true }}
          />
          <StatsCard
            title="Offer Rate"
            value={`${mockDashboardStats.offerRate}%`}
            icon={<CheckCircle2 className="h-4 w-4" />}
            trend={{ value: 5, positive: true }}
          />
          <StatsCard
            title="Active Applications"
            value={mockDashboardStats.activeApplications}
            icon={<Clock className="h-4 w-4" />}
            description="Awaiting response"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card
            className={cn(
              'col-span-full md:col-span-1 lg:col-span-2',
              styles.cardHover,
              styles.fadeIn
            )}
          >
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-[blue] mb-8">
                  Recent Applications
                </CardTitle>
                <CardDescription>
                  Your most recently submitted job applications
                </CardDescription>
              </div>
              <Link href={`/dashboard/applications`}>
                <Button
                  variant="outline"
                  size="sm"
                  className={styles.buttonHover}
                >
                  View All
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentApplications.map((application) => (
                  <JobApplicationCard
                    key={application.id}
                    application={application}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card
            className={cn(
              'col-span-full md:col-span-1',
              styles.cardHover,
              styles.fadeIn
            )}
          >
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Top Matches</CardTitle>
                <CardDescription>
                  Jobs that match your skills and experience
                </CardDescription>
              </div>
              <Link href="/dashboard/recommendations">
                <Button
                  variant="outline"
                  size="sm"
                  className={styles.buttonHover}
                >
                  View All
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topRecommendations.map((job) => (
                  <JobRecommendationCard
                    key={job.id}
                    job={job}
                    userSkills={user.skills}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className={cn(styles.cardHover, styles.fadeIn)}>
          <CardHeader>
            <CardTitle>Application Activity</CardTitle>
            <CardDescription>
              Your application activity over the past 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex h-[200px] items-center justify-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <BarChart3 className="h-5 w-5" />
                <span>Activity chart would be displayed here</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
