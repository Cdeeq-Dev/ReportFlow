import { Link } from 'react-router-dom'
import Badge from '../ui/Badge.jsx'
import StatCard from '../StatCard.jsx'
import { departments } from '../../data/departments.js'
import { reports } from '../../data/reports.js'
import { requests } from '../../data/requests.js'

const pendingReports = reports.filter((report) => report.status === 'Pending' || report.status === 'Under Review')
const recentReports = reports.slice(0, 4)
const recentRequests = requests.slice(0, 4)

const requestPipeline = [
  { label: 'Pending', value: 18 },
  { label: 'Processing', value: 12 },
  { label: 'Accepted', value: 31 },
  { label: 'Rejected', value: 5 },
  { label: 'Delivered', value: 22 },
]

const quickActions = [
  { label: 'Review Requests', to: '/requests' },
  { label: 'Review Reports', to: '/reports' },
  { label: 'View Departments', to: '/departments' },
  { label: 'View Managers', to: '/managers' },
]

const activity = [
  'Manager from Electrical Department submitted a request.',
  'Admin approved request REQ-1021.',
  'Manager from Recycling submitted a report.',
  'Admin requested changes to REP-0042.',
  'Request REQ-1018 marked as delivered.',
]

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        <StatCard title="Total Departments" value="8" change="+1" tone="blue" />
        <StatCard title="Active Managers" value="14" change="+2" tone="slate" />
        <StatCard title="Pending Requests" value="24" change="+6" tone="amber" />
        <StatCard title="Reports Awaiting Review" value="12" change="+3" tone="red" />
        <StatCard title="Processing" value="9" change="+2" tone="blue" />
        <StatCard title="Delivered" value="67" change="+5" tone="green" />
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Department overview</h3>
              <p className="text-sm text-slate-500">Operational status by department</p>
            </div>
            <Badge tone="blue">Across plant</Badge>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-3 py-3 font-medium">Department</th>
                  <th className="px-3 py-3 font-medium">Manager</th>
                  <th className="px-3 py-3 font-medium">Pending</th>
                  <th className="px-3 py-3 font-medium">Processing</th>
                  <th className="px-3 py-3 font-medium">Reports</th>
                  <th className="px-3 py-3 font-medium">Last Activity</th>
                </tr>
              </thead>
              <tbody>
                {departments.filter((department) => department.name !== 'Admin').map((department) => (
                  <tr key={department.id} className="border-t border-slate-200 hover:bg-slate-50">
                    <td className="px-3 py-3 text-slate-800">{department.name}</td>
                    <td className="px-3 py-3 text-slate-600">{department.manager}</td>
                    <td className="px-3 py-3 text-slate-600">{department.pendingReports}</td>
                    <td className="px-3 py-3 text-slate-600">{department.openTasks}</td>
                    <td className="px-3 py-3 text-slate-600">{department.pendingReports + 2}</td>
                    <td className="px-3 py-3 text-slate-500">12 min ago</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">Quick actions</h3>
          <div className="mt-4 space-y-2">
            {quickActions.map((action) => (
              <Link key={action.label} to={action.to} className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-100">
                <span>{action.label}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Pending approvals</h3>
              <p className="text-sm text-slate-500">Requests and reports requiring admin review</p>
            </div>
            <Badge tone="amber">Review queue</Badge>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-3 py-3 font-medium">Request ID</th>
                  <th className="px-3 py-3 font-medium">Department</th>
                  <th className="px-3 py-3 font-medium">Manager</th>
                  <th className="px-3 py-3 font-medium">Request</th>
                  <th className="px-3 py-3 font-medium">Priority</th>
                  <th className="px-3 py-3 font-medium">Date</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                  <th className="px-3 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentRequests.map((request) => (
                  <tr key={request.id} className="border-t border-slate-200 hover:bg-slate-50">
                    <td className="px-3 py-3 font-medium text-slate-700">{request.id}</td>
                    <td className="px-3 py-3 text-slate-600">{request.department}</td>
                    <td className="px-3 py-3 text-slate-600">{request.submittedBy}</td>
                    <td className="px-3 py-3 text-slate-600">{request.title}</td>
                    <td className="px-3 py-3"><Badge tone={request.priority === 'High' ? 'danger' : request.priority === 'Critical' ? 'warning' : 'blue'}>{request.priority}</Badge></td>
                    <td className="px-3 py-3 text-slate-500">{request.date}</td>
                    <td className="px-3 py-3"><Badge tone={request.status === 'Approved' ? 'success' : request.status === 'Pending' ? 'warning' : 'blue'}>{request.status}</Badge></td>
                    <td className="px-3 py-3"><button type="button" className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100">Review</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">Request status</h3>
          <div className="mt-4 space-y-3">
            {requestPipeline.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5">
                <span className="text-sm text-slate-600">{item.label}</span>
                <span className="text-sm font-semibold text-slate-900">{item.value}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-slate-900">Recent reports</h3>
            <Link to="/reports" className="text-sm font-medium text-blue-700">View all</Link>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-3 py-3 font-medium">Report ID</th>
                  <th className="px-3 py-3 font-medium">Title</th>
                  <th className="px-3 py-3 font-medium">Department</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                  <th className="px-3 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentReports.map((report) => (
                  <tr key={report.id} className="border-t border-slate-200 hover:bg-slate-50">
                    <td className="px-3 py-3 font-medium text-slate-700">{report.id}</td>
                    <td className="px-3 py-3 text-slate-600">{report.title}</td>
                    <td className="px-3 py-3 text-slate-600">{report.department}</td>
                    <td className="px-3 py-3"><Badge tone={report.status === 'Approved' ? 'success' : report.status === 'Under Review' ? 'warning' : 'blue'}>{report.status}</Badge></td>
                    <td className="px-3 py-3"><button type="button" className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100">View</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-slate-900">Feedback requiring attention</h3>
            <Badge tone="blue">3 items</Badge>
          </div>
          <div className="space-y-3">
            {[
              { dept: 'Electrical Department', req: 'Motor replacement', detail: 'Please provide the current machine condition.', status: 'Waiting for Manager Response' },
              { dept: 'Weaving', req: 'Filter media order', detail: 'Share current stock numbers before final approval.', status: 'Pending review' },
              { dept: 'Recycling', req: 'Waste recovery summary', detail: 'Attach backup documentation and resubmit.', status: 'Changes requested' },
            ].map((item) => (
              <div key={item.req} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="font-medium text-slate-800">{item.dept}</p>
                <p className="mt-1 text-sm text-slate-600">Request: {item.req}</p>
                <p className="mt-2 text-sm text-slate-700">Admin feedback: “{item.detail}”</p>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="text-[11px] uppercase tracking-[0.12em] text-slate-500">{item.status}</span>
                  <button type="button" className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100">View</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">Recent requests</h3>
          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-3 py-3 font-medium">Request ID</th>
                  <th className="px-3 py-3 font-medium">Department</th>
                  <th className="px-3 py-3 font-medium">Manager</th>
                  <th className="px-3 py-3 font-medium">Request</th>
                  <th className="px-3 py-3 font-medium">Date</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                  <th className="px-3 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentRequests.map((request) => (
                  <tr key={request.id} className="border-t border-slate-200 hover:bg-slate-50">
                    <td className="px-3 py-3 font-medium text-slate-700">{request.id}</td>
                    <td className="px-3 py-3 text-slate-600">{request.department}</td>
                    <td className="px-3 py-3 text-slate-600">{request.submittedBy}</td>
                    <td className="px-3 py-3 text-slate-600">{request.title}</td>
                    <td className="px-3 py-3 text-slate-500">{request.date}</td>
                    <td className="px-3 py-3"><Badge tone={request.status === 'Approved' ? 'success' : request.status === 'Pending' ? 'warning' : 'blue'}>{request.status}</Badge></td>
                    <td className="px-3 py-3"><button type="button" className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100">View</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">Recent activity</h3>
          <div className="mt-4 space-y-3">
            {activity.map((entry, index) => (
              <div key={entry} className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-500" />
                <div>
                  <p className="text-sm text-slate-700">{entry}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-slate-400">{['Today', 'Today', 'Yesterday', '2 days ago', '3 days ago'][index]}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdminDashboard
