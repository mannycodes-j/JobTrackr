import type { User } from './types'

/**
 * Extracts a name from an email address
 * @param email The email address to extract from
 * @returns A formatted name based on the email
 */
export function extractNameFromEmail(email: string): string {
  // Get the part before the @ symbol
  const namePart = email.split('@')[0]

  // Replace dots, underscores, etc. with spaces
  const nameWithSpaces = namePart.replace(/[._-]/g, ' ')

  // Capitalize each word
  const formattedName = nameWithSpaces
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return formattedName
}

/**
 * Creates a user object from form data
 */
export function createUserFromForm(formData: {
  name?: string
  email: string
}): User {
  const { name, email } = formData

  // If name is not provided, extract it from email
  const userName = name || extractNameFromEmail(email)

  return {
    id: `user-${Date.now()}`, // Generate a unique ID
    name: userName,
    email: email,
    avatar: '/placeholder.svg?height=40&width=40',
    skills: [], // Empty skills array by default
  }
}
