import Badge from '../ui/Badge.jsx'
import StatCard from '../StatCard.jsx'
import { reports } from '../../data/reports.js'
import { tasks } from '../../data/tasks.js'

const myReports = reports.slice(0, 3)
const myTasks = tasks.slice(0, 3)

const feedbackItems = [
  { title: 'Admin feedback on electrical fault log', detail: 'Please include the machine readings and confirm the cause before resubmission.', date: 'Today' },
  { title: 'Request revision required', detail: 'Add the maintenance window and estimated downtime for approval.', date: 'Yesterday' },
]

function ManagerDashboard() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <StatCard title="My Reports" value="18" change="+4" tone="cyan" />
        <StatCard title="Pending Reports" value="6" change="+2" tone="amber" />
        <StatCard title="Approved Reports" value="11" change="+3" tone="emerald" />
        <StatCard title="Pending Requests" value="5" change="+1" tone="violet" />
        <StatCard title="Open Tasks" value="9" change="-1" tone="rose" />
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Recent reports</h3>
              <p className="text-sm text-slate-500">Your department updates</p>
            </div>
            <Badge tone="cyan">Live</Badge>
          </div>

          <div className="space-y-3">
            {myReports.map((report) => (
              <div key={report.id} className="flex flex-col gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-800">{report.title}</p>
                  <p className="text-sm text-slate-500">{report.department} • {report.date}</p>
                </div>
                <Badge tone={report.status === 'Approved' ? 'emerald' : report.status === 'Pending' ? 'amber' : report.status === 'Rejected' ? 'rose' : 'violet'}>{report.status}</Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
          <h3 className="text-xl font-bold text-slate-900">Admin feedback</h3>
          <div className="mt-4 space-y-3">
            {feedbackItems.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                <p className="font-semibold text-slate-800">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
                <p className="mt-2 text-xs text-slate-500">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
          <h3 className="text-xl font-bold text-slate-900">Department tasks</h3>
          <div className="mt-4 space-y-3">
            {myTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-3">
                <div>
                  <p className="font-medium text-slate-800">{task.title}</p>
                  <p className="text-sm text-slate-500">{task.assignedUser}</p>
                </div>
                <Badge tone={task.status === 'Completed' ? 'emerald' : task.status === 'Overdue' ? 'rose' : 'amber'}>{task.status}</Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
          <h3 className="text-xl font-bold text-slate-900">Department activity</h3>
          <div className="mt-4 space-y-3">
            {[
              'Ahmed submitted a new weekly report',
              'Admin approved the maintenance request',
              'Electrical task was reassigned for urgent review',
            ].map((entry) => (
              <div key={entry} className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm text-slate-600">
                {entry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManagerDashboard
