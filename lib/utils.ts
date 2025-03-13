import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  return new Date(dateString).toLocaleDateString('en-US', options)
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'Applied':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
    case 'Interview Scheduled':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
    case 'Offer Received':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
    case 'Rejected':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
  }
}

export function getMatchScoreColor(score: number): string {
  if (score >= 80) {
    return 'bg-green-500'
  } else if (score >= 50) {
    return 'bg-yellow-500'
  } else {
    return 'bg-red-500'
  }
}

export function getSeverityColor(severity: string): string {
  switch (severity) {
    case 'low':
      return 'text-blue-500 dark:text-blue-400'
    case 'medium':
      return 'text-yellow-500 dark:text-yellow-400'
    case 'high':
      return 'text-red-500 dark:text-red-400'
    default:
      return 'text-gray-500 dark:text-gray-400'
  }
}
