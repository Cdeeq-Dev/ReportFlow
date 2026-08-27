import { Link } from 'react-router-dom'
import Badge from '../ui/Badge.jsx'

const rows = [
  { id: 'RF-2048', department: 'Admin', submittedBy: 'Maya Chen', date: '2026-08-25', priority: 'High', status: 'Approved' },
  { id: 'RF-2051', department: 'Water / Cleaners', submittedBy: 'Samir Ali', date: '2026-08-24', priority: 'Medium', status: 'Pending' },
  { id: 'RF-2056', department: 'Electrical Department', submittedBy: 'Nora Bell', date: '2026-08-22', priority: 'Critical', status: 'Under Review' },
  { id: 'RF-2060', department: 'Recycling', submittedBy: 'Lina Hassan', date: '2026-08-20', priority: 'Medium', status: 'Rejected' },
]

const priorityTone = {
  Low: 'slate',
  Medium: 'amber',
  High: 'cyan',
  Critical: 'rose',
}

const statusTone = {
  Approved: 'emerald',
  Pending: 'amber',
  'Under Review': 'violet',
  Rejected: 'rose',
}

function RecentReports() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Recent reports</h3>
          <p className="text-sm text-slate-500">Latest company updates</p>
        </div>

        <Link to="/reports" className="text-sm font-medium text-slate-700 hover:text-slate-900">
          View all
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b border-slate-200 text-sm text-slate-500">
              <th className="pb-3 pr-4 font-medium">Report</th>
              <th className="pb-3 pr-4 font-medium">Department</th>
              <th className="pb-3 pr-4 font-medium">Submitted By</th>
              <th className="pb-3 pr-4 font-medium">Date</th>
              <th className="pb-3 pr-4 font-medium">Priority</th>
              <th className="pb-3 pr-4 font-medium">Status</th>
              <th className="pb-3 font-medium">Action</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-slate-100 last:border-0">
                <td className="py-3 pr-4 font-semibold text-slate-800">{row.id}</td>
                <td className="py-3 pr-4 text-slate-600">{row.department}</td>
                <td className="py-3 pr-4 text-slate-600">{row.submittedBy}</td>
                <td className="py-3 pr-4 text-slate-600">{row.date}</td>
                <td className="py-3 pr-4">
                  <Badge tone={priorityTone[row.priority] || 'slate'}>{row.priority}</Badge>
                </td>
                <td className="py-3 pr-4">
                  <Badge tone={statusTone[row.status] || 'slate'}>{row.status}</Badge>
                </td>
                <td className="py-3">
                  <Link to={`/reports/${row.id}`} className="text-sm font-medium text-cyan-700 hover:text-cyan-800">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentReports
