import AppLayout from '../../components/layout/AppLayout.jsx'
import { users } from '../../data/users.js'
import { Link } from 'react-router-dom'

function Users() {
  return (
    <AppLayout title="Users" subtitle="Team directory and access overview">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {users.map((user) => (
          <Link
            key={user.id}
            to={`/users/${user.id}`}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                {user.name
                  .split(' ')
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join('')}
              </div>
              <div>
                <p className="font-bold text-slate-900">{user.name}</p>
                <p className="text-sm text-slate-500">{user.role}</p>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>Department: {user.department}</p>
              <p>Status: {user.status}</p>
              <p>Location: {user.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </AppLayout>
  )
}

export default Users
