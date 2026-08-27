import AppLayout from '../../components/layout/AppLayout.jsx'

const activityFeed = [
  { id: 1, title: 'New report submitted', detail: 'Operations review was filed by Maya Chen', time: '10 minutes ago' },
  { id: 2, title: 'Task escalation', detail: 'Compliance follow-up moved to high priority', time: '1 hour ago' },
  { id: 3, title: 'Department update', detail: 'Procurement team approved this week’s summary', time: '3 hours ago' },
  { id: 4, title: 'User access changed', detail: 'Cameron Lee received manager access', time: 'Yesterday' },
]

function Activity() {
  return (
    <AppLayout title="Activity" subtitle="Recent system and team actions">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
        <div className="space-y-4">
          {activityFeed.map((item) => (
            <div key={item.id} className="flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
              <div className="flex-1">
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
              </div>
              <span className="text-xs font-medium text-slate-500">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  )
}

export default Activity
