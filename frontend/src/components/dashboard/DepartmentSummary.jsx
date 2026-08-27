import Badge from '../ui/Badge.jsx'

const departments = [
  { name: 'Admin', performance: 92, reports: 18, tasks: 12 },
  { name: 'Water / Cleaners', performance: 84, reports: 15, tasks: 16 },
  { name: 'Electrical Department', performance: 88, reports: 14, tasks: 9 },
  { name: 'Recycling', performance: 80, reports: 11, tasks: 8 },
  { name: 'Extruder 1', performance: 89, reports: 16, tasks: 11 },
]

function DepartmentSummary() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Department performance</h3>
          <p className="text-sm text-slate-500">Current operations status</p>
        </div>
        <Badge tone="cyan">Live</Badge>
      </div>

      <div className="space-y-4">
        {departments.map((department) => (
          <div key={department.name} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="font-semibold text-slate-800">{department.name}</p>
              <span className="text-sm font-medium text-slate-600">{department.performance}%</span>
            </div>

            <div className="h-2.5 rounded-full bg-slate-200">
              <div className="h-2.5 rounded-full bg-slate-900" style={{ width: `${department.performance}%` }} />
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
              <span>{department.reports} reports</span>
              <span>{department.tasks} tasks</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DepartmentSummary
