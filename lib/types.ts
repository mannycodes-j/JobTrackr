export type User = {
  id: string
  name: string
  email: string
  avatar: string
  skills: string[]
}

export type JobApplication = {
  id: string
  jobTitle: string
  company: string
  status: 'Applied' | 'Interview Scheduled' | 'Offer Received' | 'Rejected'
  appliedDate: string
  notes: string
  logo?: string
}

export type JobRecommendation = {
  id: number
  title: string
  company: string
  location: string
  salary: string
  requiredSkills: string[]
  matchScore: number
  description?: string
  logo?: string
}

export type ResumeFeedback = {
  id: string
  section: string
  feedback: string
  suggestion: string
  severity: 'low' | 'medium' | 'high'
}

export type DashboardStats = {
  totalApplications: number
  interviewRate: number
  offerRate: number
  activeApplications: number
}
