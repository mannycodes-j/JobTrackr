import { cn, getMatchScoreColor } from '@/lib/utils'
import styles from '@/styles/animations.module.css'

interface MatchScoreProps {
  score: number
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
}

export function MatchScore({
  score,
  size = 'md',
  showLabel = true,
}: MatchScoreProps) {
  const colorClass = getMatchScoreColor(score)

  const sizeClasses = {
    sm: 'h-1.5 w-16',
    md: 'h-2 w-24',
    lg: 'h-3 w-32',
  }

  return (
    <div className="flex flex-col gap-1">
      {showLabel && (
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Match</span>
          <span className="font-medium">{score}%</span>
        </div>
      )}
      <div
        className={cn(
          'bg-muted rounded-full overflow-hidden',
          sizeClasses[size]
        )}
      >
        <div
          className={cn(colorClass, 'h-full rounded-full', styles.fadeIn)}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  )
}
