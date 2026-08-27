import Badge from '../ui/Badge.jsx'

function TaskStatusBadge({ status }) {
  const tones = {
    Pending: 'amber',
    'In Progress': 'cyan',
    Completed: 'emerald',
    Overdue: 'rose',
  }

  return <Badge tone={tones[status] || 'slate'}>{status}</Badge>
}

export default TaskStatusBadge
