import AppLayout from '../../components/layout/AppLayout.jsx'
import { users } from '../../data/users.js'
import { useParams } from 'react-router-dom'

function UserDetails() {
  const { id } = useParams()
  const user = users.find((item) => item.id === id) || users[0]

  return (
    <AppLayout title={user.name} subtitle={user.role}>
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-lg font-bold text-white">
              {user.name
                .split(' ')
                .map((part) => part[0])
                .slice(0, 2)
                .join('')}
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{user.name}</p>
              <p className="text-slate-500">{user.email}</p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-slate-500">Department</p>
              <p className="mt-1 font-semibold text-slate-800">{user.department}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Location</p>
              <p className="mt-1 font-semibold text-slate-800">{user.location}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Manager</p>
              <p className="mt-1 font-semibold text-slate-800">{user.manager}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Status</p>
              <p className="mt-1 font-semibold text-slate-800">{user.status}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
          <h3 className="text-xl font-bold text-slate-900">Recent reports</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            {['Q3 operations review', 'Safety compliance form', 'Department update'].map((report) => (
              <div key={report} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                {report}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default UserDetails
