import { cn, getSeverityColor } from '@/lib/utils'
import { AlertCircle, AlertTriangle, Info } from 'lucide-react'
import styles from '@/styles/animations.module.css'

interface SeverityIndicatorProps {
  severity: 'low' | 'medium' | 'high'
  size?: number
}

export function SeverityIndicator({
  severity,
  size = 16,
}: SeverityIndicatorProps) {
  const colorClass = getSeverityColor(severity)

  const Icon = () => {
    switch (severity) {
      case 'low':
        return <Info size={size} className={cn(colorClass, styles.fadeIn)} />
      case 'medium':
        return (
          <AlertTriangle
            size={size}
            className={cn(colorClass, styles.fadeIn)}
          />
        )
      case 'high':
        return (
          <AlertCircle size={size} className={cn(colorClass, styles.fadeIn)} />
        )
      default:
        return <Info size={size} className={cn(colorClass, styles.fadeIn)} />
    }
  }

  return <Icon />
}
