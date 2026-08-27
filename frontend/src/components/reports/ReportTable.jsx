import { Link } from 'react-router-dom'
import Badge from '../ui/Badge.jsx'

const rows = [
  { id: 'RF-2048', title: 'Monthly Quality Audit', department: 'Admin', submittedBy: 'Maya Chen', date: '2026-08-25', priority: 'High', status: 'Approved' },
  { id: 'RF-2051', title: 'Water Treatment Routine Check', department: 'Water / Cleaners', submittedBy: 'Samir Ali', date: '2026-08-24', priority: 'Medium', status: 'Pending' },
  { id: 'RF-2056', title: 'Electrical Fault Log', department: 'Electrical Department', submittedBy: 'Nora Bell', date: '2026-08-22', priority: 'Critical', status: 'Under Review' },
  { id: 'RF-2060', title: 'Waste Recovery Summary', department: 'Recycling', submittedBy: 'Lina Hassan', date: '2026-08-20', priority: 'Medium', status: 'Rejected' },
]

const priorityTone = {
  Low: 'slate',
  Medium: 'amber',
  High: 'cyan',
  Critical: 'rose',
}

const statusTone = {
  Draft: 'slate',
  Pending: 'amber',
  'Under Review': 'violet',
  Approved: 'emerald',
  Rejected: 'rose',
}

function ReportTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/50">
      <table className="min-w-full text-left">
        <thead className="bg-slate-50">
          <tr className="border-b border-slate-200 text-sm text-slate-500">
            <th className="px-4 py-3 font-medium">Report title</th>
            <th className="px-4 py-3 font-medium">Department</th>
            <th className="px-4 py-3 font-medium">Submitted by</th>
            <th className="px-4 py-3 font-medium">Date</th>
            <th className="px-4 py-3 font-medium">Priority</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 font-medium">Actions</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-slate-100 last:border-0">
              <td className="px-4 py-3 font-semibold text-slate-800">{row.title}</td>
              <td className="px-4 py-3 text-slate-600">{row.department}</td>
              <td className="px-4 py-3 text-slate-600">{row.submittedBy}</td>
              <td className="px-4 py-3 text-slate-600">{row.date}</td>
              <td className="px-4 py-3">
                <Badge tone={priorityTone[row.priority] || 'slate'}>{row.priority}</Badge>
              </td>
              <td className="px-4 py-3">
                <Badge tone={statusTone[row.status] || 'slate'}>{row.status}</Badge>
              </td>
              <td className="px-4 py-3">
                <Link to={`/reports/${row.id}`} className="text-sm font-medium text-cyan-700 hover:text-cyan-800">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ReportTable
