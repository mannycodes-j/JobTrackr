'use client'

import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { JobApplicationCard } from '@/components/dashboard/job-application-card'
import { mockApplications} from '@/lib/mock-data'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useEffect } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Plus, Search } from 'lucide-react'
import { useState } from 'react'
import type { JobApplication } from '@/lib/types'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/(auth)/auth.context'

export default function ApplicationsPage() {
  
  
  const [applications, setApplications] =
    useState<JobApplication[]>(mockApplications)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newApplication, setNewApplication] = useState<Partial<JobApplication>>(
    {
      jobTitle: '',
      company: '',
      status: 'Applied',
      appliedDate: new Date().toISOString().split('T')[0],
      notes: '',
    }
  )

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.company.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === 'all' || app.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const handleAddApplication = () => {
    if (newApplication.jobTitle && newApplication.company) {
      const newApp: JobApplication = {
        id: `app-${applications.length + 1}`,
        jobTitle: newApplication.jobTitle,
        company: newApplication.company,
        status: newApplication.status as JobApplication['status'],
        appliedDate:
          newApplication.appliedDate || new Date().toISOString().split('T')[0],
        notes: newApplication.notes || '',
      }

      setApplications([newApp, ...applications])
      setNewApplication({
        jobTitle: '',
        company: '',
        status: 'Applied',
        appliedDate: new Date().toISOString().split('T')[0],
        notes: '',
      })
      setIsAddDialogOpen(false)
    }
  }

  const handleDeleteApplication = (application: JobApplication) => {
    setApplications(applications.filter((app) => app.id !== application.id))
  }
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
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Job Applications
            </h1>
            <p className="text-muted-foreground">
              Manage and track all your job applications
            </p>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Application
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Application</DialogTitle>
                <DialogDescription>
                  Enter the details of your new job application
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="job-title">Job Title</Label>
                  <Input
                    id="job-title"
                    value={newApplication.jobTitle}
                    onChange={(e) =>
                      setNewApplication({
                        ...newApplication,
                        jobTitle: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={newApplication.company}
                    onChange={(e) =>
                      setNewApplication({
                        ...newApplication,
                        company: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={newApplication.status}
                    onValueChange={(value) =>
                      setNewApplication({
                        ...newApplication,
                        status: value as JobApplication['status'],
                      })
                    }
                  >
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Applied">Applied</SelectItem>
                      <SelectItem value="Interview Scheduled">
                        Interview Scheduled
                      </SelectItem>
                      <SelectItem value="Offer Received">
                        Offer Received
                      </SelectItem>
                      <SelectItem value="Rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="applied-date">Applied Date</Label>
                  <Input
                    id="applied-date"
                    type="date"
                    value={newApplication.appliedDate}
                    onChange={(e) =>
                      setNewApplication({
                        ...newApplication,
                        appliedDate: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    value={newApplication.notes}
                    onChange={(e) =>
                      setNewApplication({
                        ...newApplication,
                        notes: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setIsAddDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={handleAddApplication}>Add Application</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search applications..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="Applied">Applied</SelectItem>
              <SelectItem value="Interview Scheduled">
                Interview Scheduled
              </SelectItem>
              <SelectItem value="Offer Received">Offer Received</SelectItem>
              <SelectItem value="Rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredApplications.length > 0 ? (
            filteredApplications.map((application) => (
              <JobApplicationCard
                key={application.id}
                application={application}
                onDelete={handleDeleteApplication}
              />
            ))
          ) : (
            <div className="col-span-full flex h-40 flex-col items-center justify-center rounded-lg border border-dashed text-center">
              <p className="text-muted-foreground">No applications found</p>
              <Button variant="link" onClick={() => setIsAddDialogOpen(true)}>
                Add your first application
              </Button>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
