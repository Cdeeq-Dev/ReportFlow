import AppLayout from '../../components/layout/AppLayout.jsx'
import { departments } from '../../data/departments.js'
import { useParams } from 'react-router-dom'

function DepartmentDetails() {
  const { id } = useParams()
  const department = departments.find((item) => item.id === id) || departments[0]

  return (
    <AppLayout title={department.name} subtitle={department.manager}>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
            <h3 className="text-xl font-bold text-slate-900">Department overview</h3>
            <p className="mt-4 text-slate-600">{department.description}</p>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-sm text-slate-500">Employees</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">{department.employees}</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-sm text-slate-500">Pending reports</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">{department.pendingReports}</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <p className="text-sm text-slate-500">Open tasks</p>
                <p className="mt-2 text-2xl font-bold text-slate-900">{department.openTasks}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
            <h3 className="text-xl font-bold text-slate-900">Reports</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="rounded-xl border border-slate-100 bg-slate-50 p-3">Monthly quality audit</li>
              <li className="rounded-xl border border-slate-100 bg-slate-50 p-3">Process safety checklist</li>
              <li className="rounded-xl border border-slate-100 bg-slate-50 p-3">Operational efficiency report</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
            <h3 className="text-xl font-bold text-slate-900">Employees</h3>
            <div className="mt-4 space-y-3">
              {['Maya Chen', 'Nora Bell', 'Daniel Green'].map((person) => (
                <div key={person} className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm text-slate-700">
                  {person}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
            <h3 className="text-xl font-bold text-slate-900">Recent activity</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">Quality report approved</div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">New task assigned this morning</div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default DepartmentDetails
