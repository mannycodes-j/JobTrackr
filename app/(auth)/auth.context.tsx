'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react'
import { createUserFromForm } from '@/lib/auth-utils'
import type { User } from '@/lib/types'

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const savedUser = localStorage.getItem('jobTrackerUser')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const login = async (email: string) => {
    setIsLoading(true)
    try {
      
      await new Promise((resolve) => setTimeout(resolve, 1000))

     
      const newUser = createUserFromForm({ email })

      // Save to localStorage
      localStorage.setItem('jobTrackerUser', JSON.stringify(newUser))
      setUser(newUser)
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (name: string, email: string,) => {
    setIsLoading(true)
    try {
  
      await new Promise((resolve) => setTimeout(resolve, 1000))

  
      const newUser = createUserFromForm({ name, email })

      // Save to localStorage
      localStorage.setItem('jobTrackerUser', JSON.stringify(newUser))
      setUser(newUser)
    } catch (error) {
      console.error('Registration failed:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('jobTrackerUser')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
