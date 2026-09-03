import Badge from '../ui/Badge.jsx'
import StatCard from '../StatCard.jsx'

const departmentReports = [
  { id: 'REP-1021', title: 'Compressor room inspection', status: 'Approved', date: '02 Sep' },
  { id: 'REP-1034', title: 'Power quality check', status: 'Pending', date: '01 Sep' },
  { id: 'REP-1042', title: 'Routine maintenance log', status: 'Review', date: '29 Aug' },
]

const departmentRequests = [
  { id: 'REQ-1048', title: 'Motor replacement', status: 'Processing', date: '02 Sep', priority: 'High' },
  { id: 'REQ-1051', title: 'Line cleaning kit', status: 'Approved', date: '31 Aug', priority: 'Medium' },
  { id: 'REQ-1056', title: 'Cable rerouting', status: 'Rejected', date: '28 Aug', priority: 'Low' },
]

const feedbackItems = [
  { title: 'Admin feedback on electrical fault log', detail: 'Please include the machine readings and confirm the cause before resubmission.', date: 'Today' },
  { title: 'Request revision required', detail: 'Add the maintenance window and estimated downtime for approval.', date: 'Yesterday' },
]

const activity = [
  'Manager submitted a maintenance report.',
  'Admin approved the safety inspection request.',
  'Electrical task was reassigned to the maintenance team.',
]

function ManagerDashboard() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <StatCard title="Reports" value="18" change="+4" tone="blue" />
        <StatCard title="Pending" value="6" change="+2" tone="amber" />
        <StatCard title="Approved" value="11" change="+3" tone="green" />
        <StatCard title="Requests" value="5" change="+1" tone="slate" />
        <StatCard title="Open tasks" value="9" change="-1" tone="red" />
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.45fr_0.95fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Recent department reports</h3>
              <p className="text-sm text-slate-500">Electrical Department activity</p>
            </div>
            <Badge tone="blue">Live</Badge>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-3 py-3 font-medium">Report ID</th>
                  <th className="px-3 py-3 font-medium">Title</th>
                  <th className="px-3 py-3 font-medium">Date</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {departmentReports.map((report) => (
                  <tr key={report.id} className="border-t border-slate-200 hover:bg-slate-50">
                    <td className="px-3 py-3 font-medium text-slate-700">{report.id}</td>
                    <td className="px-3 py-3 text-slate-600">{report.title}</td>
                    <td className="px-3 py-3 text-slate-500">{report.date}</td>
                    <td className="px-3 py-3">
                      <Badge tone={report.status === 'Approved' ? 'success' : report.status === 'Pending' ? 'warning' : 'blue'}>{report.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">Admin feedback</h3>
          <div className="mt-4 space-y-3">
            {feedbackItems.map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="font-medium text-slate-800">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-slate-400">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">Request status</h3>
          <div className="mt-4 space-y-3">
            {departmentRequests.map((request) => (
              <div key={request.id} className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 bg-slate-50 p-3">
                <div>
                  <p className="font-medium text-slate-800">{request.title}</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-400">{request.id}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge tone={request.status === 'Approved' ? 'success' : request.status === 'Processing' ? 'blue' : request.status === 'Rejected' ? 'danger' : 'warning'}>{request.status}</Badge>
                  <span className="text-xs text-slate-500">{request.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">Department activity</h3>
          <div className="mt-4 space-y-3">
            {activity.map((entry, index) => (
              <div key={entry} className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                <div>
                  <p className="text-sm text-slate-700">{entry}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-slate-400">{['Today', 'Yesterday', '2 days ago'][index % 3]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManagerDashboard
