import AppLayout from '../../components/layout/AppLayout.jsx'
import Button from '../../components/ui/Button.jsx'
import { Link } from 'react-router-dom'
import { requests } from '../../data/requests.js'
import Badge from '../../components/ui/Badge.jsx'

const statusTone = {
  Pending: 'amber',
  'Under Review': 'violet',
  Approved: 'emerald',
  Rejected: 'rose',
  Completed: 'cyan',
}

function Requests() {
  return (
    <AppLayout
      title="Requests"
      subtitle="Department request tracking"
      actions={
        <Link to="/requests/create">
          <Button>+ Create request</Button>
        </Link>
      }
    >
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/50">
        <table className="min-w-full text-left">
          <thead className="bg-slate-50">
            <tr className="border-b border-slate-200 text-sm text-slate-500">
              <th className="px-4 py-3 font-medium">Request</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 font-medium">Department</th>
              <th className="px-4 py-3 font-medium">Priority</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Date</th>
              <th className="px-4 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-3 font-semibold text-slate-800">{request.title}</td>
                <td className="px-4 py-3 text-slate-600">{request.type}</td>
                <td className="px-4 py-3 text-slate-600">{request.department}</td>
                <td className="px-4 py-3">
                  <Badge tone={request.priority === 'Critical' ? 'rose' : request.priority === 'High' ? 'cyan' : 'amber'}>{request.priority}</Badge>
                </td>
                <td className="px-4 py-3">
                  <Badge tone={statusTone[request.status] || 'slate'}>{request.status}</Badge>
                </td>
                <td className="px-4 py-3 text-slate-600">{request.date}</td>
                <td className="px-4 py-3">
                  <Link to={`/requests/${request.id}`} className="text-sm font-medium text-cyan-700 hover:text-cyan-800">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppLayout>
  )
}

export default Requests
