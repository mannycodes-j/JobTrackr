'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { ResumeFeedbackCard } from '@/components/dashboard/resume-feedback-card'
import { ResumeUploader } from '@/components/dashboard/resume-uploader'
import { mockResumeFeedback } from '@/lib/mock-data'
import { useState, useEffect } from 'react'
import type { ResumeFeedback } from '@/lib/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Download, RefreshCw } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/(auth)/auth.context'

export default function ResumePage() {
  const [feedback, setFeedback] = useState<ResumeFeedback[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasUploaded, setHasUploaded] = useState(false)
  const [activeTab, setActiveTab] = useState('upload')

  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  }, [user, router])

  const handleUpload = () => {
    setIsLoading(true)

    // Switch to the feedback tab
    setActiveTab('feedback')

    // Simulate API call delay
    setTimeout(() => {
      setFeedback(mockResumeFeedback)
      setIsLoading(false)
      setHasUploaded(true)
    }, 2000)
  }

  const handleRefresh = () => {
    setIsLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      setFeedback(mockResumeFeedback)
      setIsLoading(false)
    }, 2000)
  }

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
          <h1 className="text-2xl font-bold tracking-tight">Resume Feedback</h1>
          <p className="text-muted-foreground">
            Get AI-powered feedback to improve your resume
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="upload" id="upload-tab">
              Upload Resume
            </TabsTrigger>
          </TabsList>
          <TabsContent value="feedback" className="mt-4">
            {isLoading ? (
              <div className="flex h-40 flex-col items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Analyzing your resume...
                </p>
              </div>
            ) : hasUploaded ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium">AI Feedback Results</h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handleRefresh}>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Refresh
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {feedback.map((item) => (
                    <ResumeFeedbackCard key={item.id} feedback={item} />
                  ))}
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Overall Score</CardTitle>
                    <CardDescription>
                      Based on our analysis, here&apos;s how your resume scores
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Resume Strength</p>
                        <p className="text-2xl font-bold">72/100</p>
                      </div>
                      <div className="h-24 w-24 rounded-full border-8 border-primary/30 text-center leading-[5.5rem] text-2xl font-bold text-primary">
                        72%
                      </div>
                    </div>
                    <div className="mt-6 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Content Quality</span>
                        <span className="font-medium">75%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[75%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Formatting</span>
                        <span className="font-medium">80%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[80%] rounded-full bg-primary"></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Keyword Optimization</span>
                        <span className="font-medium">60%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[60%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="flex h-40 flex-col items-center justify-center rounded-lg border border-dashed text-center">
                <p className="text-muted-foreground">No resume uploaded yet</p>
                <Button variant="link" onClick={() => setActiveTab('upload')}>
                  Upload your resume to get feedback
                </Button>
              </div>
            )}
          </TabsContent>
          <TabsContent value="upload" className="mt-4">
            <ResumeUploader onUpload={handleUpload} />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
