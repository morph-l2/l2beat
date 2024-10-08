import { pluralize } from '@l2beat/shared-pure'
import CriticalIcon from '../../_assets/critical-badge.svg'
import WarningIcon from '../../_assets/warning-badge.svg'

interface WarningProps {
  count: number
}

export function CriticalWarning(props: WarningProps) {
  return (
    <div className="flex items-center gap-1 text-sm font-semibold text-red-700">
      <CriticalIcon />
      <span>{`${props.count} ${pluralize(props.count, 'critical')}`}</span>
    </div>
  )
}

export function Warning(props: WarningProps) {
  return (
    <div className="flex items-center gap-1">
      <WarningIcon />
      <span>{`${props.count} ${pluralize(props.count, 'warning')}`}</span>
    </div>
  )
}
