'use client'

import type { FormEvent } from 'react'
import React from 'react'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useAuth } from "../auth.context"

export default function AuthSection() {
 const router = useRouter()
 const { login, register, isLoading } = useAuth()
 const [activeTab, setActiveTab] = useState('login')

 const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
   event.preventDefault()

   // Get form data using the correct form reference
   const form = event.currentTarget
   const email = form.elements.namedItem('email') as HTMLInputElement
   const password = form.elements.namedItem('password') as HTMLInputElement

   if (!email || !password) return

   try {
     await login(email.value, password.value)
     router.push('/dashboard')
   } catch (error) {
     console.error('Login failed:', error)
   }
 }

 const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
   event.preventDefault()

   // Get form data using the correct form reference
   const form = event.currentTarget
   const name = form.elements.namedItem('name') as HTMLInputElement
   const email = form.elements.namedItem('email') as HTMLInputElement
   const password = form.elements.namedItem('password') as HTMLInputElement

   if (!name || !email || !password) return

   try {
     await register(name.value, email.value, password.value)
     router.push('/dashboard')
   } catch (error) {
     console.error('Registration failed:', error)
   }
 }


  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="auth">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <h2 className="text-3xl md:pl-12 text-[#2563eb] font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get Started Today
          </h2>
          <p className="max-w-[600px] md:pl-12 text-muted-foreground md:text-xl">
            Create an account to start tracking your job applications and get
            personalized recommendations.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-4">
          <Tabs
            defaultValue="login"
            className="w-full"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleLogin}>
                <Card>
                  <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                      Enter your email and password to login to your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input
                        id="login-email"
                        name="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="login-password">Password</Label>
                        <Link
                          href="#"
                          className="text-xs text-muted-foreground hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <Input
                        id="login-password"
                        name="password"
                        type="password"
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      type="submit"
                      className="w-full cursor-pointer"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
                          Logging in...
                        </>
                      ) : (
                        'Login'
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form onSubmit={handleRegister}>
                <Card>
                  <CardHeader>
                    <CardTitle>Register</CardTitle>
                    <CardDescription>
                      Create a new account to get started
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-name">Name</Label>
                      <Input
                        id="register-name"
                        name="name"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-email">Email</Label>
                      <Input
                        id="register-email"
                        name="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password">Password</Label>
                      <Input
                        id="register-password"
                        name="password"
                        type="password"
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      type="submit"
                      className="w-full cursor-pointer"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
                          Registering...
                        </>
                      ) : (
                        'Register'
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
