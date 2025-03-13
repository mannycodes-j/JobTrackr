'use client'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { StatusBadge } from '@/components/ui/status-badge'
import type { JobApplication } from '@/lib/types'
import { formatDate } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Edit, Trash2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import styles from '@/styles/animations.module.css'

interface JobApplicationCardProps {
  application: JobApplication
  onEdit?: (application: JobApplication) => void
  onDelete?: (application: JobApplication) => void
}

export function JobApplicationCard({
  application,
  onEdit,
  onDelete,
}: JobApplicationCardProps) {
  return (
    <Card className={cn('overflow-hidden', styles.cardHover, styles.fadeIn)}>
      <CardContent className="p-0">
        <div className="flex items-center gap-4 border-b p-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={application.logo} alt={application.company} />
            <AvatarFallback>{application.company.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <h3 className="font-medium leading-none">{application.jobTitle}</h3>
            <p className="text-sm text-muted-foreground">
              {application.company}
            </p>
          </div>
          <StatusBadge status={application.status} />
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Applied on</span>
            <span className="text-xs font-medium">
              {formatDate(application.appliedDate)}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{application.notes}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t bg-muted/50 px-4 py-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onEdit?.(application)}
          className={styles.buttonHover}
        >
          <Edit className="mr-2 h-4 w-4" />
          Edit
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={cn('text-destructive', styles.deleteButtonHover)}
          onClick={() => onDelete?.(application)}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}
