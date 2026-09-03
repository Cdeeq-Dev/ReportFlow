import AppLayout from '../../components/layout/AppLayout.jsx'
import Badge from '../../components/ui/Badge.jsx'
import Button from '../../components/ui/Button.jsx'
import { reports } from '../../data/reports.js'
import { requests } from '../../data/requests.js'

const managerDepartment = 'Electrical Department'

const reportHistory = reports
  .filter((report) => report.department === managerDepartment)
  .map((report) => ({
    id: report.id,
    title: report.title,
    type: 'Report',
    department: report.department,
    status: report.status,
    date: report.date,
    priority: report.priority,
  }))

const requestHistory = requests
  .filter((request) => request.department === managerDepartment)
  .map((request) => ({
    id: request.id,
    title: request.title,
    type: 'Request',
    department: request.department,
    status: request.status,
    date: request.date,
    priority: request.priority,
  }))

const rows = [...reportHistory, ...requestHistory].sort((a, b) => new Date(b.date) - new Date(a.date))

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
  Processing: 'blue',
  Delivered: 'success',
}

function History() {
  return (
    <AppLayout title="History" subtitle="Electrical Department records" role="Manager">
      <div className="space-y-6">
        <div className="no-print flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4">
          <div>
            <p className="text-sm font-medium text-slate-700">Department archive</p>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Manager record review</p>
          </div>
          <Button type="button" variant="secondary" onClick={() => window.print()}>
            Print history
          </Button>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr className="border-b border-slate-200">
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Reference</th>
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Priority</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={`${row.type}-${row.id}`} className="border-b border-slate-200 last:border-0 hover:bg-slate-50">
                  <td className="px-4 py-3">
                    <Badge tone={row.type === 'Report' ? 'blue' : 'slate'}>{row.type}</Badge>
                  </td>
                  <td className="px-4 py-3 font-medium text-slate-800">{row.id}</td>
                  <td className="px-4 py-3 text-slate-700">{row.title}</td>
                  <td className="px-4 py-3">
                    <Badge tone={priorityTone[row.priority] || 'slate'}>{row.priority}</Badge>
                  </td>
                  <td className="px-4 py-3">
                    <Badge tone={statusTone[row.status] || 'slate'}>{row.status}</Badge>
                  </td>
                  <td className="px-4 py-3 text-slate-500">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  )
}

export default History
