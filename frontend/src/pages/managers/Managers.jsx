import AppLayout from '../../components/layout/AppLayout.jsx'
import Badge from '../../components/ui/Badge.jsx'
import { users } from '../../data/users.js'

const managers = users.filter((user) => user.role.toLowerCase().includes('manager') || user.role.toLowerCase().includes('admin'))

function Managers() {
  return (
    <AppLayout title="Managers" subtitle="Manager directory and access overview">
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/50">
        <table className="min-w-full text-left">
          <thead className="bg-slate-50">
            <tr className="border-b border-slate-200 text-sm text-slate-500">
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Manager ID</th>
              <th className="px-4 py-3 font-medium">Department</th>
              <th className="px-4 py-3 font-medium">Phone</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Last active</th>
            </tr>
          </thead>
          <tbody>
            {managers.map((user) => (
              <tr key={user.id} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-3 font-semibold text-slate-800">{user.name}</td>
                <td className="px-4 py-3 text-slate-600">{user.id}</td>
                <td className="px-4 py-3 text-slate-600">{user.department}</td>
                <td className="px-4 py-3 text-slate-600">{user.phone}</td>
                <td className="px-4 py-3"><Badge tone={user.status === 'Active' ? 'emerald' : 'amber'}>{user.status}</Badge></td>
                <td className="px-4 py-3 text-slate-600">{user.lastActive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppLayout>
  )
}

export default Managers
