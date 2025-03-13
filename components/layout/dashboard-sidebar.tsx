"use client"

import { cn } from "@/lib/utils"
import type { User } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart3, Briefcase, FileText, Home, Lightbulb, LogOut, Settings, UserIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "@/styles/animations.module.css"

interface DashboardSidebarProps {
  user: User
}

export function DashboardSidebar({ user }: DashboardSidebarProps) {
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: Home,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Applications",
      icon: Briefcase,
      href: "/dashboard/applications",
      active: pathname === "/dashboard/applications",
    },
    {
      label: "Resume Feedback",
      icon: FileText,
      href: "/dashboard/resume",
      active: pathname === "/dashboard/resume",
    },
    {
      label: "Job Recommendations",
      icon: Lightbulb,
      href: "/dashboard/recommendations",
      active: pathname === "/dashboard/recommendations",
    },
    {
      label: "Analytics",
      icon: BarChart3,
      href: "/dashboard/analytics",
      active: pathname === "/dashboard/analytics",
    },
  ]

  return (
    <div className="flex h-full flex-col border-r bg-muted/40">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <Briefcase className="h-5 w-5 text-primary" />
          <span>JobTrackr</span>
        </Link>
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-2 p-4">
          <div className="flex items-center gap-3 rounded-lg px-3 py-2">
            <Avatar>
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{user.name}</span>
              <span className="text-xs text-muted-foreground">{user.email}</span>
            </div>
          </div>
          <div className="mt-4 space-y-1">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={route.active ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  route.active && "bg-secondary",
                  styles.navItemHover,
                  styles.fadeIn,
                )}
                asChild
              >
                <Link href={route.href}>
                  <route.icon className="mr-2 h-4 w-4" />
                  {route.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
      <div className="mt-auto border-t p-4">
        <div className="flex flex-col gap-2">
          <Button variant="ghost" className={cn("w-full justify-start", styles.navItemHover)} asChild>
            <Link href="/dashboard/settings">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </Button>
          <Button variant="ghost" className={cn("w-full justify-start", styles.navItemHover)} asChild>
            <Link href="/dashboard/profile">
              <UserIcon className="mr-2 h-4 w-4" />
              Profile
            </Link>
          </Button>
          <Button variant="ghost" className={cn("w-full justify-start text-red-500", styles.deleteButtonHover)}>
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </Button>
        </div>
      </div>
    </div>
  )
}

