import AppLayout from '../../components/layout/AppLayout.jsx'
import Badge from '../../components/ui/Badge.jsx'
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
    submittedBy: report.submittedBy,
    description: report.description,
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
    submittedBy: request.submittedBy,
    description: request.description,
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

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function printHistory(row) {
  const printWindow = window.open('', '_blank', 'noopener,noreferrer')

  if (!printWindow) return

  printWindow.document.write(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>${escapeHtml(row.id)} - ${escapeHtml(row.title)}</title>
        <style>
          body { color: #1e293b; font-family: Arial, sans-serif; margin: 40px; }
          h1 { margin-bottom: 8px; }
          p { line-height: 1.5; }
          dl { display: grid; grid-template-columns: 140px 1fr; gap: 10px 16px; margin: 24px 0; }
          dt { color: #64748b; font-weight: 700; }
          dd { margin: 0; }
          @media print { body { margin: 0; } }
        </style>
      </head>
      <body>
        <h1>${escapeHtml(row.title)}</h1>
        <p>${escapeHtml(row.type)} ${escapeHtml(row.id)}</p>
        <dl>
          <dt>Department</dt><dd>${escapeHtml(row.department)}</dd>
          <dt>Submitted by</dt><dd>${escapeHtml(row.submittedBy)}</dd>
          <dt>Priority</dt><dd>${escapeHtml(row.priority)}</dd>
          <dt>Status</dt><dd>${escapeHtml(row.status)}</dd>
          <dt>Date</dt><dd>${escapeHtml(row.date)}</dd>
        </dl>
        <h2>Description</h2>
        <p>${escapeHtml(row.description)}</p>
      </body>
    </html>
  `)
  printWindow.document.close()
  printWindow.focus()
  printWindow.print()
  printWindow.close()
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
                <th className="px-4 py-3 font-medium">Print</th>
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
                  <td className="px-4 py-3">
                    <button
                      type="button"
                      onClick={() => printHistory(row)}
                      aria-label={`Print ${row.type.toLowerCase()} ${row.id}`}
                      className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
                    >
                      Print
                    </button>
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
