'use client'

import { cn } from '@/lib/utils'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Bell, Menu, Search } from 'lucide-react'
import type { User } from '@/lib/types'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { DashboardSidebar } from './dashboard-sidebar'
import styles from '@/styles/animations.module.css'

interface DashboardHeaderProps {
  user: User
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <DashboardSidebar user={user} />
        </SheetContent>
      </Sheet>

      <div className="flex-1">
        <h1 className="text-xl font-semibold md:text-2xl">Job Tracker</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex">
          <Button
            variant="outline"
            size="icon"
            className={cn('mr-2', styles.buttonHover)}
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>

        <Button
          variant="outline"
          size="icon"
          className={cn('relative', styles.buttonHover)}
        >
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
            3
          </span>
        </Button>

        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn('rounded-full', styles.buttonHover)}
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className={styles.fadeIn}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className={styles.navItemHover}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className={styles.navItemHover}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className={styles.navItemHover}>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
