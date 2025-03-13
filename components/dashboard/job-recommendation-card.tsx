import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { MatchScore } from '@/components/ui/match-score'
import type { JobRecommendation } from '@/lib/types'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Check, ExternalLink, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import styles from '@/styles/animations.module.css'

interface JobRecommendationCardProps {
  job: JobRecommendation
  userSkills: string[]
}

export function JobRecommendationCard({
  job,
  userSkills,
}: JobRecommendationCardProps) {
  const missingSkills = job.requiredSkills.filter(
    (skill) => !userSkills.includes(skill)
  )

  return (
    <Card className={cn('overflow-hidden', styles.cardHover, styles.fadeIn)}>
      <CardContent className="p-0">
        <div className="flex items-center gap-4 border-b p-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={job.logo} alt={job.company} />
            <AvatarFallback>{job.company.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <h3 className="font-medium leading-none">{job.title}</h3>
            <p className="text-sm text-muted-foreground">{job.company}</p>
          </div>
          <MatchScore score={job.matchScore} size="sm" />
        </div>
        <div className="p-4">
          <div className="mb-3 flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            {job.location}
          </div>
          <div className="mb-3 text-sm font-medium">{job.salary}</div>
          <div className="flex flex-wrap gap-1.5">
            {job.requiredSkills.map((skill) => (
              <Badge
                key={skill}
                variant={userSkills.includes(skill) ? 'default' : 'outline'}
                className="flex items-center gap-1"
              >
                {userSkills.includes(skill) && <Check className="h-3 w-3" />}
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t bg-muted/50 px-4 py-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className={styles.buttonHover}>
              View Details
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>{job.title}</DialogTitle>
              <DialogDescription>{job.company}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={job.logo} alt={job.company} />
                    <AvatarFallback>{job.company.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{job.company}</p>
                    <p className="text-xs text-muted-foreground">
                      {job.location}
                    </p>
                  </div>
                </div>
                <MatchScore score={job.matchScore} />
              </div>
              <div>
                <h4 className="mb-2 text-sm font-medium">Salary Range</h4>
                <p className="text-sm">{job.salary}</p>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-medium">Description</h4>
                <p className="text-sm text-muted-foreground">
                  {job.description}
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-medium">Required Skills</h4>
                <div className="flex flex-wrap gap-1.5">
                  {job.requiredSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant={
                        userSkills.includes(skill) ? 'default' : 'outline'
                      }
                      className="flex items-center gap-1"
                    >
                      {userSkills.includes(skill) && (
                        <Check className="h-3 w-3" />
                      )}
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              {missingSkills.length > 0 && (
                <div className="rounded-lg bg-yellow-50 p-3 dark:bg-yellow-950/30">
                  <h4 className="mb-1 text-sm font-medium text-yellow-800 dark:text-yellow-300">
                    Missing Skills
                  </h4>
                  <p className="text-xs text-yellow-700 dark:text-yellow-400">
                    Consider learning: {missingSkills.join(', ')}
                  </p>
                </div>
              )}
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline" className={styles.buttonHover}>
                Save Job
              </Button>
              <Button className={styles.buttonHover}>
                Apply Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        <Button variant="default" size="sm" className={styles.buttonHover}>
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  )
}
