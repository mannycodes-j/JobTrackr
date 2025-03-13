import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SeverityIndicator } from '@/components/ui/severity-indicator'
import type { ResumeFeedback } from '@/lib/types'
import { cn } from '@/lib/utils'
import styles from '@/styles/animations.module.css'

interface ResumeFeedbackCardProps {
  feedback: ResumeFeedback
}

export function ResumeFeedbackCard({ feedback }: ResumeFeedbackCardProps) {
  return (
    <Card className={cn(styles.cardHover, styles.fadeIn)}>
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div>
          <CardTitle className="text-base">{feedback.section}</CardTitle>
        </div>
        <SeverityIndicator severity={feedback.severity} />
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <h4 className="mb-1 text-sm font-medium">Feedback</h4>
          <p className="text-sm text-muted-foreground">{feedback.feedback}</p>
        </div>
        <div>
          <h4 className="mb-1 text-sm font-medium">Suggestion</h4>
          <p className="text-sm text-muted-foreground">{feedback.suggestion}</p>
        </div>
      </CardContent>
    </Card>
  )
}
