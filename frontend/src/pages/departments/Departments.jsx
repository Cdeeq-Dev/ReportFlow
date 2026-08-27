import AppLayout from '../../components/layout/AppLayout.jsx'
import { departments } from '../../data/departments.js'
import { Link } from 'react-router-dom'

function Departments() {
  return (
    <AppLayout title="Departments" subtitle="Company department overview">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {departments.map((department) => (
          <Link
            key={department.id}
            to={`/departments/${department.id}`}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-lg font-bold text-slate-900">{department.name}</p>
                <p className="mt-1 text-sm text-slate-500">Manager: {department.manager}</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
                {department.status}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600">{department.description}</p>

            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-slate-50 p-2">
                <p className="text-xl font-bold text-slate-900">{department.employees}</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Staff</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-2">
                <p className="text-xl font-bold text-slate-900">{department.pendingReports}</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Reports</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-2">
                <p className="text-xl font-bold text-slate-900">{department.openTasks}</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Tasks</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </AppLayout>
  )
}

export default Departments
