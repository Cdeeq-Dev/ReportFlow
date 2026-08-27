import Badge from '../ui/Badge.jsx'

function ReportStatusBadge({ status }) {
  const tones = {
    Draft: 'slate',
    Pending: 'amber',
    'Under Review': 'violet',
    Approved: 'emerald',
    Rejected: 'rose',
  }

  return <Badge tone={tones[status] || 'slate'}>{status}</Badge>
}

export default ReportStatusBadge
