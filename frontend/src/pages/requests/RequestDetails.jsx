import AppLayout from '../../components/layout/AppLayout.jsx'
import Badge from '../../components/ui/Badge.jsx'
import { useParams } from 'react-router-dom'
import { requests } from '../../data/requests.js'

function RequestDetails() {
  const { id } = useParams()
  const request = requests.find((item) => item.id === id) || requests[0]

  return (
    <AppLayout title={request.title} subtitle={`Request #${request.id}`}>
      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
            <div className="flex flex-wrap gap-3">
              <Badge tone={request.priority === 'Critical' ? 'rose' : request.priority === 'High' ? 'cyan' : 'amber'}>{request.priority}</Badge>
              <Badge tone={request.status === 'Approved' ? 'emerald' : request.status === 'Rejected' ? 'rose' : request.status === 'Under Review' ? 'violet' : 'amber'}>{request.status}</Badge>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-slate-500">Department</p>
                <p className="mt-1 font-semibold text-slate-800">{request.department}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Submitted by</p>
                <p className="mt-1 font-semibold text-slate-800">{request.submittedBy}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Type</p>
                <p className="mt-1 font-semibold text-slate-800">{request.type}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Date</p>
                <p className="mt-1 font-semibold text-slate-800">{request.date}</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-slate-500">Description</p>
              <p className="mt-2 text-slate-700">{request.description}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
            <h3 className="text-xl font-bold text-slate-900">Admin feedback</h3>
            <div className="mt-4 space-y-3">
              {request.feedback.map((item) => (
                <div key={`${item.author}-${item.date}`} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-800">{item.author}</p>
                    <Badge tone="cyan">{item.role}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{item.message}</p>
                  <p className="mt-2 text-[11px] text-slate-500">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
          <h3 className="text-xl font-bold text-slate-900">Workflow</h3>
          <div className="mt-4 space-y-3">
            {['Manager submitted request', 'Admin reviewing request', 'Decision pending'].map((item) => (
              <div key={item} className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default RequestDetails
