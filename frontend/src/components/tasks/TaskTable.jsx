import { Link } from 'react-router-dom'
import Badge from '../ui/Badge.jsx'

const rows = [
  { id: 'TSK-101', title: 'Approve weekly logistics summary', department: 'Admin', assignedUser: 'Alex Doe', priority: 'High', dueDate: '2026-08-30', status: 'Pending' },
  { id: 'TSK-113', title: 'Inspect filter unit performance', department: 'Water / Cleaners', assignedUser: 'Musa Ali', priority: 'Medium', dueDate: '2026-08-29', status: 'In Progress' },
  { id: 'TSK-129', title: 'Check generator output', department: 'Electrical Department', assignedUser: 'Samuel Reed', priority: 'Critical', dueDate: '2026-08-28', status: 'Overdue' },
  { id: 'TSK-134', title: 'Update waste segregation checklist', department: 'Recycling', assignedUser: 'Lina Hassan', priority: 'Low', dueDate: '2026-09-01', status: 'Completed' },
]

const priorityTone = {
  Low: 'slate',
  Medium: 'amber',
  High: 'cyan',
  Critical: 'rose',
}

const statusTone = {
  Pending: 'amber',
  'In Progress': 'cyan',
  Completed: 'emerald',
  Overdue: 'rose',
}

function TaskTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/50">
      <table className="min-w-full text-left">
        <thead className="bg-slate-50">
          <tr className="border-b border-slate-200 text-sm text-slate-500">
            <th className="px-4 py-3 font-medium">Title</th>
            <th className="px-4 py-3 font-medium">Department</th>
            <th className="px-4 py-3 font-medium">Assigned user</th>
            <th className="px-4 py-3 font-medium">Priority</th>
            <th className="px-4 py-3 font-medium">Due date</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 font-medium">Action</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-slate-100 last:border-0">
              <td className="px-4 py-3 font-semibold text-slate-800">{row.title}</td>
              <td className="px-4 py-3 text-slate-600">{row.department}</td>
              <td className="px-4 py-3 text-slate-600">{row.assignedUser}</td>
              <td className="px-4 py-3">
                <Badge tone={priorityTone[row.priority] || 'slate'}>{row.priority}</Badge>
              </td>
              <td className="px-4 py-3 text-slate-600">{row.dueDate}</td>
              <td className="px-4 py-3">
                <Badge tone={statusTone[row.status] || 'slate'}>{row.status}</Badge>
              </td>
              <td className="px-4 py-3">
                <Link to={`/tasks/${row.id}`} className="text-sm font-medium text-cyan-700 hover:text-cyan-800">
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

export default TaskTable
