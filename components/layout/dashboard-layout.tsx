import { cn } from '@/lib/utils'
import type React from 'react'
import type { User } from '@/lib/types'
import { DashboardHeader } from './dashboard-header'
import { DashboardSidebar } from './dashboard-sidebar'
import styles from '@/styles/animations.module.css'

interface DashboardLayoutProps {
  user: User
  children: React.ReactNode
}

export function DashboardLayout({ user, children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader user={user} />
      <div className="flex flex-1">
        <aside className="hidden w-64 md:block">
          <DashboardSidebar user={user} />
        </aside>
        <main
          className={cn(
            'flex-1 overflow-y-auto bg-muted/40 p-4 md:p-6',
            styles.fadeIn
          )}
        >
          {children}
        </main>
      </div>
    </div>
  )
}
