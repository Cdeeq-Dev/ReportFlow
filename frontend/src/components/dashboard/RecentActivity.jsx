import Badge from '../ui/Badge.jsx'

const activities = [
  { user: 'Ahmed', action: 'submitted a report', department: 'Admin', date: '2 hours ago', tone: 'cyan' },
  { user: 'Electrical Department', action: 'approved a report', department: 'Electrical Department', date: '4 hours ago', tone: 'emerald' },
  { user: 'Admin', action: 'assigned a task', department: 'Admin', date: 'Yesterday', tone: 'amber' },
  { user: 'Recycling Department', action: 'updated a task', department: 'Recycling', date: 'Yesterday', tone: 'violet' },
  { user: 'Manager', action: 'rejected a report', department: 'Weaving', date: '2 days ago', tone: 'rose' },
]

function RecentActivity() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
      <h3 className="text-xl font-bold text-slate-900">Recent activity</h3>

      <div className="mt-5 space-y-4">
        {activities.map((item) => (
          <div key={`${item.user}-${item.date}`} className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
            <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-500" />
            <div className="flex-1">
              <p className="text-sm text-slate-700">
                <span className="font-semibold text-slate-900">{item.user}</span> {item.action}
              </p>
              <div className="mt-2 flex items-center justify-between gap-2 text-xs text-slate-500">
                <span>{item.department}</span>
                <Badge tone={item.tone}>{item.date}</Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivity
