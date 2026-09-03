import { useLocation, useNavigate } from 'react-router-dom'
import { useRole } from '../../context/RoleContext.jsx'

function Navbar({ title, subtitle, actions, onMenuToggle, role }) {
  const { setRole } = useRole()
  const navigate = useNavigate()
  const location = useLocation()
  const currentRole = role || (location.pathname.startsWith('/admin') ? 'Admin' : 'Manager')

  const handleRoleChange = (event) => {
    const nextRole = event.target.value
    setRole(nextRole)
    navigate(nextRole === 'Admin' ? '/admin/dashboard' : '/manager/dashboard')
  }

  return (
    <header className="border-b border-slate-200 bg-white px-4 py-4 sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 md:hidden"
            onClick={onMenuToggle}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">REPORTFLOW</p>
            <h1 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{title}</h1>
            {subtitle ? <p className="text-sm text-slate-500">{subtitle}</p> : null}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <label className="hidden rounded-xl border border-slate-200 bg-slate-50 px-2 py-2 text-xs text-slate-600 lg:flex lg:items-center lg:gap-2">
            <span className="font-medium text-slate-700">Role</span>
            <select
              value={currentRole}
              onChange={handleRoleChange}
              className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-700 outline-none"
            >
              <option value="Manager">Manager</option>
              <option value="Admin">Admin</option>
            </select>
          </label>

          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100"
            aria-label="Notifications"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
              <path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 20a2 2 0 0 0 4 0" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-amber-500" />
          </button>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
              {currentRole === 'Admin' ? 'AD' : 'AM'}
            </div>
            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-slate-800">{currentRole === 'Admin' ? 'Aisha Bello' : 'Ahmed Musa'}</p>
              <p className="text-[11px] text-slate-500">{currentRole === 'Admin' ? 'Administrator' : 'Electrical Department'}</p>
            </div>
          </div>

          {actions ? <div className="hidden sm:block">{actions}</div> : null}
        </div>
      </div>
    </header>
  )
}

export default Navbar
