import Badge from '../ui/Badge.jsx'
import StatCard from '../StatCard.jsx'
import { departments } from '../../data/departments.js'
import { reports } from '../../data/reports.js'
import { tasks } from '../../data/tasks.js'

const pendingReports = reports.filter((report) => report.status === 'Pending' || report.status === 'Under Review')

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        <StatCard title="Total Reports" value="1,284" change="+12.4%" tone="cyan" />
        <StatCard title="Pending Approval" value="186" change="+3.2%" tone="amber" />
        <StatCard title="Approved" value="942" change="+8.6%" tone="emerald" />
        <StatCard title="Rejected" value="46" change="-1.8%" tone="rose" />
        <StatCard title="Pending Requests" value="38" change="+5.0%" tone="violet" />
        <StatCard title="Active Managers" value="19" change="+2" tone="slate" />
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Reports awaiting approval</h3>
              <p className="text-sm text-slate-500">Company-wide review queue</p>
            </div>
            <Badge tone="amber">Needs review</Badge>
          </div>

          <div className="space-y-3">
            {pendingReports.map((report) => (
              <div key={report.id} className="flex flex-col gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-800">{report.title}</p>
                  <p className="text-sm text-slate-500">{report.department} • {report.submittedBy}</p>
                </div>
                <Badge tone={report.priority === 'Critical' ? 'rose' : report.priority === 'High' ? 'cyan' : 'amber'}>{report.priority}</Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
          <h3 className="text-xl font-bold text-slate-900">Feedback requiring attention</h3>
          <div className="mt-4 space-y-3">
            {[
              'Electrical Department: machine reading missing for fault log',
              'Weaving: stock numbers need confirmation before request approval',
              'Recycling: document set still incomplete for final review',
            ].map((item) => (
              <div key={item} className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
          <h3 className="text-xl font-bold text-slate-900">Department overview</h3>
          <div className="mt-4 space-y-3">
            {departments.map((department) => (
              <div key={department.id} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-slate-800">{department.name}</p>
                  <Badge tone="slate">{department.status}</Badge>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs text-slate-500">
                  <div className="rounded-lg bg-white p-2"><span className="block text-lg font-bold text-slate-900">{department.pendingReports}</span>Pending</div>
                  <div className="rounded-lg bg-white p-2"><span className="block text-lg font-bold text-slate-900">{department.employees}</span>Staff</div>
                  <div className="rounded-lg bg-white p-2"><span className="block text-lg font-bold text-slate-900">{department.openTasks}</span>Tasks</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
          <h3 className="text-xl font-bold text-slate-900">Recent activity</h3>
          <div className="mt-4 space-y-3">
            {[
              'Electrical Department submitted a new report',
              'Admin approved a site inspection request',
              'Water / Cleaners updated its preventive checklist',
              'Recycling team published a recovery summary',
            ].map((entry) => (
              <div key={entry} className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm text-slate-600">
                {entry}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
        <h3 className="text-xl font-bold text-slate-900">Company-wide task overview</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {tasks.map((task) => (
            <div key={task.id} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
              <p className="font-semibold text-slate-800">{task.title}</p>
              <p className="mt-1 text-sm text-slate-500">{task.department}</p>
              <div className="mt-3 flex items-center justify-between gap-2">
                <Badge tone={task.status === 'Completed' ? 'emerald' : task.status === 'Overdue' ? 'rose' : 'amber'}>{task.status}</Badge>
                <span className="text-xs text-slate-500">{task.dueDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
