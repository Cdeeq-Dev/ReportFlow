import { NavLink, useLocation } from 'react-router-dom'

function Sidebar({ mobileOpen, onClose, role }) {
  const location = useLocation()
  const currentRole = role || (location.pathname.startsWith('/admin') ? 'Admin' : 'Manager')

  const managerNavItems = [
    { label: 'Dashboard', to: '/manager/dashboard' },
    { label: 'Reports', to: '/reports' },
    { label: 'Requests', to: '/requests' },
    { label: 'Tasks', to: '/tasks' },
    { label: 'History', to: '/history' },
    { label: 'Activity', to: '/activity' },
    { label: 'Notifications', to: '/notifications' },
    { label: 'Profile', to: '/profile' },
  ]

  const adminNavItems = [
    { label: 'Dashboard', to: '/admin/dashboard' },
    { label: 'Departments', to: '/departments' },
    { label: 'Reports', to: '/reports' },
    { label: 'Requests', to: '/requests' },
    { label: 'Approvals', to: '/requests' },
    { label: 'Feedback', to: '/activity' },
    { label: 'Managers', to: '/managers' },
    { label: 'Activity', to: '/activity' },
    { label: 'Notifications', to: '/notifications' },
    { label: 'Settings', to: '/settings' },
    { label: 'Profile', to: '/profile' },
    { label: 'Logout', to: '/login' },
  ]

  const navItems = currentRole === 'Admin' ? adminNavItems : managerNavItems

  const iconMap = {
    Dashboard: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M4 12.5V5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v7M4 18.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 12h8M8 16h5" strokeLinecap="round"/></svg>
    ),
    Reports: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M7 4.5h7l5 5V18a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2Z" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 4.5v5h5M9 12h6M9 16h6" strokeLinecap="round"/></svg>
    ),
    Requests: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M7 7h10M7 12h10M7 17h6" strokeLinecap="round"/><rect x="4" y="4" width="16" height="16" rx="2" strokeLinecap="round" /></svg>
    ),
    Approvals: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M5 12.5 9 16l10-10" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 20H5a1 1 0 0 1-1-1v-7" strokeLinecap="round"/></svg>
    ),
    Feedback: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M7 9h10M7 13h6" strokeLinecap="round"/><path d="M5 5.5A2.5 2.5 0 0 1 7.5 3h9A2.5 2.5 0 0 1 19 5.5v8A2.5 2.5 0 0 1 16.5 16H10l-5 5v-5.5A2.5 2.5 0 0 1 5 14v-8.5Z" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    Departments: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M4 20V8.5L12 4l8 4.5V20" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 20v-6h6v6" strokeLinecap="round"/></svg>
    ),
    Managers: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6 2a2.6 2.6 0 0 1 2.5 2.2L18 17H6l.5-1.8A2.6 2.6 0 0 1 9 13h6Z" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    Activity: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M4 13h4l2-7 4 14 2-7h4" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    History: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M4 12a8 8 0 1 0 2.3-5.7M4 4v5h5M12 8v5l3 2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    Notifications: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 20a2 2 0 0 0 4 0" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    Settings: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M12 3.5v2.1M12 18.4v2.1M4.9 4.9l1.5 1.5M17.6 17.6l1.5 1.5M3.5 12h2.1M18.4 12h2.1M4.9 19.1l1.5-1.5M17.6 6.4l1.5-1.5" strokeLinecap="round"/><circle cx="12" cy="12" r="3.2"/></svg>
    ),
    Profile: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><circle cx="12" cy="8" r="3.2"/><path d="M5 18.5c1.8-2.7 5-4 7-4s5.2 1.3 7 4" strokeLinecap="round"/></svg>
    ),
    Tasks: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M8 7h10M8 12h10M8 17h10" strokeLinecap="round"/><circle cx="4" cy="7" r="1.3" fill="currentColor" stroke="none"/><circle cx="4" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="4" cy="17" r="1.3" fill="currentColor" stroke="none"/></svg>
    ),
    Department: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M4 20V8.5L12 4l8 4.5V20" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 20v-6h6v6" strokeLinecap="round"/></svg>
    ),
    Logout: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M10 17v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" strokeLinecap="round" /><path d="M16 7l5 5-5 5M21 12H9" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-slate-950/50 transition-opacity md:hidden ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 h-screen w-72 transform border-r border-slate-800 bg-slate-950 text-slate-200 transition-transform duration-200 md:sticky md:top-0 md:h-screen md:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex h-full flex-col p-3.5">
          <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-[10px] font-semibold tracking-[0.2em] text-white">RF</div>
              <div>
                <p className="text-base font-semibold text-white">ReportFlow</p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400">{currentRole === 'Admin' ? 'Administration' : 'Operations'}</p>
              </div>
            </div>

            <button type="button" className="rounded-lg border border-slate-700 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-300 md:hidden" onClick={onClose}>Close</button>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end={item.to === '/admin/dashboard' || item.to === '/manager/dashboard'}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`
                }
              >
                <span className="flex h-4 w-4 items-center justify-center text-slate-400">{iconMap[item.label]}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto pt-4">
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-2.5">
              <p className="text-[9px] uppercase tracking-[0.18em] text-slate-400">Active queue</p>
              <div className="mt-2 flex items-end justify-between"><span className="text-xl font-semibold text-white">{currentRole === 'Admin' ? '24' : '12'}</span><span className="text-[10px] text-slate-400">{currentRole === 'Admin' ? 'approvals' : 'items'}</span></div>
            </div>

            <div className="mt-3 rounded-xl border border-slate-800 bg-slate-900/60 p-2.5">
              <p className="text-[9px] uppercase tracking-[0.16em] text-slate-400">User</p>
              <div className="mt-2 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-[10px] font-semibold text-white">{currentRole === 'Admin' ? 'AD' : 'AM'}</div>
                <div>
                  <p className="text-xs font-medium text-white">{currentRole === 'Admin' ? 'Aisha Bello' : 'Ahmed Musa'}</p>
                  <p className="text-[10px] text-slate-400">{currentRole === 'Admin' ? 'Admin ID: AD-204' : 'ID: MGR-118'}</p>
                </div>
              </div>
              <div className="mt-2 text-[10px] text-slate-300">Role: {currentRole === 'Admin' ? 'Administrator' : 'Department Manager'}</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
