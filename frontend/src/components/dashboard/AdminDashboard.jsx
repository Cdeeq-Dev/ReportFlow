import { Link } from 'react-router-dom'
import { departments } from '../../data/departments.js'

const operationalDepartments = departments.filter((department) => department.name !== 'Admin')

const departmentActivity = {
  'water-cleaners': { manager: 'Ibrahim Musa', pending: 4, processing: 2, reports: 10, lastActivity: '12 minutes ago' },
  'electrical-department': { manager: 'Aisha Bello', pending: 3, processing: 2, reports: 7, lastActivity: '20 minutes ago' },
  recycling: { manager: 'Musa Abdullahi', pending: 2, processing: 1, reports: 6, lastActivity: '35 minutes ago' },
  'extruder-1': { manager: 'Fatima Sani', pending: 5, processing: 3, reports: 9, lastActivity: '48 minutes ago' },
  'extruder-2': { manager: 'Yusuf Garba', pending: 3, processing: 2, reports: 8, lastActivity: '1 hour ago' },
  twin: { manager: 'Maryam Aliyu', pending: 1, processing: 1, reports: 5, lastActivity: '1 hour ago' },
  'mat-finishing-store': { manager: 'Umar Hassan', pending: 4, processing: 2, reports: 11, lastActivity: '2 hours ago' },
  weaving: { manager: 'Ahmad Kabir', pending: 6, processing: 3, reports: 13, lastActivity: '2 hours ago' },
}

const summaryCards = [
  { title: 'Total Departments', value: '8', detail: 'Operational departments', tone: 'blue', icon: 'building' },
  { title: 'Active Managers', value: '14', detail: 'Managers currently active', tone: 'slate', icon: 'users' },
  { title: 'Pending Requests', value: '24', detail: 'Awaiting admin action', tone: 'amber', icon: 'inbox' },
  { title: 'Reports Awaiting Review', value: '12', detail: 'Need review today', tone: 'red', icon: 'report' },
  { title: 'Requests Processing', value: '9', detail: 'Currently in progress', tone: 'blue', icon: 'progress' },
  { title: 'Delivered Requests', value: '67', detail: 'Completed this period', tone: 'green', icon: 'check' },
]

const attentionItems = [
  { label: 'Pending requests waiting for approval', count: '5', detail: 'Requires admin review', to: '/requests', tone: 'amber' },
  { label: 'Reports waiting for review', count: '3', detail: 'Submitted by departments', to: '/reports', tone: 'blue' },
  { label: 'High-priority requests', count: '2', detail: 'Needs prompt attention', to: '/requests', tone: 'red' },
]

const recentActivity = [
  { description: 'Submitted a new request', department: 'Electrical Department', time: '20 minutes ago' },
  { description: 'Submitted a weekly report', department: 'Recycling', time: '35 minutes ago' },
  { description: 'Request REQ-104 marked as Processing', department: 'Admin', time: '1 hour ago' },
  { description: 'Request was Delivered', department: 'Extruder 1', time: '2 hours ago' },
]

const toneClasses = {
  blue: { icon: 'bg-blue-50 text-blue-700', status: 'bg-blue-50 text-blue-700' },
  slate: { icon: 'bg-slate-100 text-slate-700', status: 'bg-slate-100 text-slate-700' },
  amber: { icon: 'bg-amber-50 text-amber-700', status: 'bg-amber-50 text-amber-700' },
  red: { icon: 'bg-red-50 text-red-700', status: 'bg-red-50 text-red-700' },
  green: { icon: 'bg-emerald-50 text-emerald-700', status: 'bg-emerald-50 text-emerald-700' },
}

function Icon({ name }) {
  const paths = {
    building: <><path d="M4 20V8.5L12 4l8 4.5V20" /><path d="M9 20v-6h6v6M8 10h.01M12 10h.01M16 10h.01" /></>,
    users: <><circle cx="9" cy="8" r="3" /><path d="M3.5 19c.8-3 2.8-4.5 5.5-4.5s4.7 1.5 5.5 4.5M16 5.5a2.7 2.7 0 0 1 0 5.1M17 14.8c1.8.7 2.9 2 3.5 4.2" /></>,
    inbox: <><path d="M4 5h16v14H4z" /><path d="M4 14h4l1.5 2h5L16 14h4M8 9h8" /></>,
    report: <><path d="M7 4h7l5 5v11H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /><path d="M14 4v5h5M9 13h6M9 17h4" /></>,
    progress: <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l2.5 2M4.5 5.5 3 4M19.5 5.5 21 4" /></>,
    check: <><circle cx="12" cy="12" r="8" /><path d="m8.5 12 2.3 2.3 4.7-5" /></>,
  }

  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

function SummaryCard({ card }) {
  const tone = toneClasses[card.tone]

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/40">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium text-slate-500">{card.title}</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{card.value}</p>
        </div>
        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${tone.icon}`}>
          <Icon name={card.icon} />
        </span>
      </div>
      <p className="mt-2 text-xs text-slate-500">{card.detail}</p>
    </div>
  )
}

function DepartmentCard({ department }) {
  const activity = departmentActivity[department.id]

  return (
    <div className="flex min-h-[248px] flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/40">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-slate-900">{department.name}</h3>
          <p className="mt-1 text-xs text-slate-500">Manager: {activity.manager}</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-700">Active</span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-slate-100 pt-4">
        <div>
          <p className="text-[11px] text-slate-500">Pending requests</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">{activity.pending}</p>
        </div>
        <div>
          <p className="text-[11px] text-slate-500">Processing</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">{activity.processing}</p>
        </div>
        <div>
          <p className="text-[11px] text-slate-500">Reports</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">{activity.reports}</p>
        </div>
        <div>
          <p className="text-[11px] text-slate-500">Last activity</p>
          <p className="mt-1 text-xs font-medium text-slate-700">{activity.lastActivity}</p>
        </div>
      </div>

      <Link to={`/departments/${department.id}`} className="mt-auto pt-4 text-sm font-medium text-blue-700 hover:text-blue-800">
        View department <span aria-hidden="true">→</span>
      </Link>
    </div>
  )
}

function AdminDashboard() {
  return (
    <div className="space-y-7">
      <section aria-label="Quick summary" className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
        {summaryCards.map((card) => <SummaryCard key={card.title} card={card} />)}
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-slate-900">Departments</h2>
          <p className="mt-1 text-sm text-slate-500">Monitor activity across all company departments.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {operationalDepartments.map((department) => <DepartmentCard key={department.id} department={department} />)}
        </div>
      </section>

      <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/30">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Needs Attention</h2>
            <p className="mt-1 text-sm text-slate-500">Items that require admin action.</p>
          </div>
          <div className="space-y-2">
            {attentionItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-3">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-semibold ${toneClasses[item.tone].status}`}>{item.count}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-slate-800">{item.label}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{item.detail}</p>
                </div>
                <Link to={item.to} className="shrink-0 rounded-md border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">Review</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/30">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Recent Activity</h2>
            <p className="mt-1 text-sm text-slate-500">The latest updates across the company.</p>
          </div>
          <div className="space-y-3">
            {recentActivity.map((item) => (
              <div key={`${item.department}-${item.description}`} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                <div className="min-w-0">
                  <p className="text-sm text-slate-800">{item.description}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.department} · {item.time}</p>
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
