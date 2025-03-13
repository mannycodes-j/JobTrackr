import type {
  DashboardStats,
  JobApplication,
  JobRecommendation,
  ResumeFeedback,
  User,
} from './types'

export const mockUser: User = {
  id: 'user-1',
  name: 'Femi Kuti',
  email: 'alex.johnson@example.com',
  avatar: '/placeholder.svg?height=40&width=40',
  skills: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'CSS'],
}

export const mockApplications: JobApplication[] = [
  {
    id: 'app-1',
    jobTitle: 'Senior Frontend Developer',
    company: 'TechCorp',
    status: 'Interview Scheduled',
    appliedDate: '2023-03-15',
    notes: 'Scheduled for technical interview on March 25th',
    logo: '/placeholder.svg?height=40&width=40',
  },
  {
    id: 'app-2',
    jobTitle: 'UI Engineer',
    company: 'DesignPro',
    status: 'Applied',
    appliedDate: '2023-03-10',
    notes: 'Applied through company website',
    logo: '/placeholder.svg?height=40&width=40',
  },
  {
    id: 'app-3',
    jobTitle: 'Full Stack Developer',
    company: 'WebSolutions',
    status: 'Rejected',
    appliedDate: '2023-02-28',
    notes: 'Received rejection email on March 10th',
    logo: '/placeholder.svg?height=40&width=40',
  },
  {
    id: 'app-4',
    jobTitle: 'React Developer',
    company: 'AppWorks',
    status: 'Offer Received',
    appliedDate: '2023-02-15',
    notes: 'Offer: $95,000/year. Need to respond by March 30th',
    logo: '/placeholder.svg?height=40&width=40',
  },
  {
    id: 'app-5',
    jobTitle: 'Frontend Architect',
    company: 'InnovateTech',
    status: 'Applied',
    appliedDate: '2023-03-18',
    notes: 'Referred by John from marketing',
    logo: '/placeholder.svg?height=40&width=40',
  },
]

export const mockJobRecommendations: JobRecommendation[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Corp',
    location: 'Remote',
    salary: '$70,000 - $90,000',
    requiredSkills: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS'],
    matchScore: 85,
    description:
      "We're looking for a Frontend Developer to join our team. You'll be responsible for building user interfaces for our web applications.",
    logo: '/placeholder.svg?height=40&width=40',
  },
  {
    id: 2,
    title: 'UI Engineer',
    company: 'DesignPro',
    location: 'New York, USA',
    salary: '$80,000 - $100,000',
    requiredSkills: ['Figma', 'React', 'CSS'],
    matchScore: 70,
    description:
      'Join our team as a UI Engineer and help us create beautiful, intuitive user interfaces for our products.',
    logo: '/placeholder.svg?height=40&width=40',
  },
  {
    id: 3,
    title: 'React Developer',
    company: 'WebSolutions',
    location: 'San Francisco, USA',
    salary: '$90,000 - $110,000',
    requiredSkills: ['React', 'Redux', 'TypeScript', 'Node.js'],
    matchScore: 90,
    description:
      "We're seeking a React Developer to join our team and help build our next-generation web applications.",
    logo: '/placeholder.svg?height=40&width=40',
  },
  {
    id: 4,
    title: 'Frontend Architect',
    company: 'InnovateTech',
    location: 'Remote',
    salary: '$100,000 - $130,000',
    requiredSkills: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'AWS'],
    matchScore: 65,
    description:
      'Looking for a Frontend Architect to lead our frontend development team and establish best practices.',
    logo: '/placeholder.svg?height=40&width=40',
  },
  {
    id: 5,
    title: 'JavaScript Developer',
    company: 'CodeCraft',
    location: 'Austin, USA',
    salary: '$75,000 - $95,000',
    requiredSkills: ['JavaScript', 'HTML', 'CSS', 'Vue.js'],
    matchScore: 60,
    description:
      'Join our team as a JavaScript Developer and help us build interactive web applications.',
    logo: '/placeholder.svg?height=40&width=40',
  },
]

export const mockResumeFeedback: ResumeFeedback[] = [
  {
    id: 'feedback-1',
    section: 'Skills',
    feedback: 'Your skills section is strong but could be more specific.',
    suggestion:
      "Add specific versions or frameworks, e.g., 'React 18' instead of just 'React'.",
    severity: 'low',
  },
  {
    id: 'feedback-2',
    section: 'Work Experience',
    feedback: 'Your work experience lacks quantifiable achievements.',
    suggestion:
      "Add metrics to your achievements, e.g., 'Improved site performance by 40%'.",
    severity: 'high',
  },
  {
    id: 'feedback-3',
    section: 'Summary',
    feedback:
      "Your summary is too generic and doesn't highlight your unique value.",
    suggestion:
      'Tailor your summary to emphasize your expertise in frontend development.',
    severity: 'medium',
  },
  {
    id: 'feedback-4',
    section: 'Education',
    feedback: 'Your education section is well-structured.',
    suggestion:
      "Consider adding relevant coursework or projects if you're a recent graduate.",
    severity: 'low',
  },
]

export const mockDashboardStats: DashboardStats = {
  totalApplications: 12,
  interviewRate: 42,
  offerRate: 25,
  activeApplications: 8,
}
