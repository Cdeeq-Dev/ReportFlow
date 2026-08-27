import { NavLink } from 'react-router-dom'
import { useRole } from '../../context/RoleContext.jsx'

function Sidebar({ mobileOpen, onClose }) {
  const { role } = useRole()

  const managerNavItems = [
    { label: 'Dashboard', to: '/dashboard' },
    { label: 'Reports', to: '/reports' },
    { label: 'Requests', to: '/requests' },
    { label: 'Tasks', to: '/tasks' },
    { label: 'Department', to: '/departments' },
    { label: 'Activity', to: '/activity' },
    { label: 'Notifications', to: '/notifications' },
    { label: 'Profile', to: '/profile' },
  ]

  const adminNavItems = [
    { label: 'Dashboard', to: '/dashboard' },
    { label: 'Reports', to: '/reports' },
    { label: 'Requests', to: '/requests' },
    { label: 'Departments', to: '/departments' },
    { label: 'Managers', to: '/managers' },
    { label: 'Tasks', to: '/tasks' },
    { label: 'Activity', to: '/activity' },
    { label: 'Notifications', to: '/notifications' },
    { label: 'Settings', to: '/settings' },
  ]

  const navItems = role === 'Admin' ? adminNavItems : managerNavItems

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-slate-950/40 transition-opacity md:hidden ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 transform border-r border-slate-800 bg-slate-950 p-4 text-slate-200 transition-transform duration-200 md:static md:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="mb-8 flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 text-sm font-black text-white shadow-lg shadow-cyan-500/20">
              RF
            </div>
            <div>
              <p className="text-lg font-bold text-white">ReportFlow</p>
              <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">{role === 'Admin' ? 'Admin' : 'Manager'}</p>
            </div>
          </div>

          <button
            type="button"
            className="rounded-lg border border-slate-700 px-2 py-1 text-xs text-slate-300 md:hidden"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === '/dashboard'}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-slate-800 text-white shadow-inner shadow-cyan-500/10'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`
              }
            >
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Queue</p>
          <p className="mt-3 text-3xl font-bold text-white">{role === 'Admin' ? '24' : '12'}</p>
          <p className="mt-1 text-sm text-slate-400">{role === 'Admin' ? 'pending approvals' : 'department items'}</p>
        </div>

        <div className="mt-6 pt-4">
          <button
            type="button"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-slate-800"
          >
            Log out
          </button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
