import AppLayout from '../../components/layout/AppLayout.jsx'
import Badge from '../../components/ui/Badge.jsx'
import { useParams } from 'react-router-dom'
import { reports } from '../../data/reports.js'

function ReportDetails() {
  const { id } = useParams()
  const report = reports.find((item) => item.id === id) || reports[0]

  return (
    <AppLayout title={report.title} subtitle={`Report #${report.id}`}>
      <div className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
            <div className="flex flex-wrap items-center gap-3">
              <Badge tone="cyan">{report.priority}</Badge>
              <Badge tone={report.status === 'Approved' ? 'emerald' : report.status === 'Rejected' ? 'rose' : report.status === 'Under Review' ? 'violet' : 'amber'}>{report.status}</Badge>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-slate-500">Department</p>
                <p className="mt-1 font-semibold text-slate-800">{report.department}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Author</p>
                <p className="mt-1 font-semibold text-slate-800">{report.author}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Date</p>
                <p className="mt-1 font-semibold text-slate-800">{report.date}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Type</p>
                <p className="mt-1 font-semibold text-slate-800">{report.type}</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-slate-500">Description</p>
              <p className="mt-2 text-slate-700">{report.description}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
            <h3 className="text-xl font-bold text-slate-900">Timeline</h3>
            <div className="mt-5 space-y-4">
              {report.timeline.map((item) => (
                <div key={item.label} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-cyan-500" />
                    <div className="mt-1 h-full w-px bg-slate-200" />
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="font-semibold text-slate-800">{item.label}</p>
                    <p className="text-sm text-slate-500">{item.date}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
            <h3 className="text-xl font-bold text-slate-900">Approval history</h3>
            <div className="mt-4 space-y-3">
              {report.approvals.length ? report.approvals.map((approval) => (
                <div key={`${approval.user}-${approval.date}`} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <p className="font-medium text-slate-800">{approval.user}</p>
                  <div className="mt-1 flex items-center justify-between text-xs text-slate-500">
                    <span>{approval.action}</span>
                    <span>{approval.date}</span>
                  </div>
                </div>
              )) : <p className="text-sm text-slate-500">No approval history yet.</p>}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
            <h3 className="text-xl font-bold text-slate-900">Comments</h3>
            <div className="mt-4 space-y-3">
              {report.comments.length ? report.comments.map((comment) => (
                <div key={`${comment.user}-${comment.time}`} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <p className="font-medium text-slate-800">{comment.user}</p>
                  <p className="mt-1 text-sm text-slate-600">{comment.message}</p>
                  <p className="mt-2 text-[11px] text-slate-500">{comment.time}</p>
                </div>
              )) : <p className="text-sm text-slate-500">No comments yet.</p>}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default ReportDetails
