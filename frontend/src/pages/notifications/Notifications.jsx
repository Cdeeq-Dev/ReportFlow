import AppLayout from '../../components/layout/AppLayout.jsx'

const notifications = [
  { id: 1, title: 'Your report has been approved.', detail: 'Electrical Department audit was approved by Admin.', time: '10 minutes ago', tone: 'emerald' },
  { id: 2, title: 'Admin requested changes to your report.', detail: 'Please include the machine reading before resubmission.', time: '1 hour ago', tone: 'amber' },
  { id: 3, title: 'Your request was rejected.', detail: 'The material request requires extra stock confirmation.', time: 'Yesterday', tone: 'rose' },
]

function Notifications() {
  return (
    <AppLayout title="Notifications" subtitle="Team updates and approval alerts">
      <div className="space-y-4">
        {notifications.map((item) => (
          <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/50">
            <div className="flex items-start gap-3">
              <div className={`mt-1 h-3 w-3 rounded-full ${
                item.tone === 'emerald' ? 'bg-emerald-500' : item.tone === 'amber' ? 'bg-amber-500' : 'bg-rose-500'
              }`} />
              <div className="flex-1">
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
              </div>
              <span className="text-xs text-slate-500">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </AppLayout>
  )
}

export default Notifications
