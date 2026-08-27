import AppLayout from '../../components/layout/AppLayout.jsx'

const settingsSections = [
  {
    title: 'Company information',
    items: [
      { label: 'Organization name', value: 'ReportFlow' },
      { label: 'Primary office', value: 'Seattle, WA' },
      { label: 'Timezone', value: 'Pacific Standard Time (UTC-8)' },
    ],
  },
  {
    title: 'Notifications',
    items: [
      { label: 'Daily digest', value: 'Enabled' },
      { label: 'Escalation alerts', value: 'Enabled' },
      { label: 'Task reminders', value: 'Enabled' },
    ],
  },
  {
    title: 'Security',
    items: [
      { label: '2FA', value: 'Required for managers' },
      { label: 'Session timeout', value: '30 minutes' },
      { label: 'Access review', value: 'Scheduled weekly' },
    ],
  },
]

function Settings() {
  return (
    <AppLayout title="Settings" subtitle="Workspace configuration and preferences">
      <div className="space-y-6">
        {settingsSections.map((section) => (
          <div key={section.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
            <h3 className="text-xl font-bold text-slate-900">{section.title}</h3>
            <div className="mt-4 space-y-3">
              {section.items.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm">
                  <p className="font-medium text-slate-700">{item.label}</p>
                  <p className="text-slate-500">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AppLayout>
  )
}

export default Settings
