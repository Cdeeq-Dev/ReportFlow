const navItems = [
  { label: 'Overview', active: true },
  { label: 'Reports', badge: '24' },
  { label: 'Departments' },
  { label: 'Approvals' },
  { label: 'Analytics' },
  { label: 'Settings' },
]

function Sidebar() {
  return (
    <aside className="w-full md:w-72 shrink-0 border-r border-slate-800 bg-slate-950 px-4 py-6 text-slate-200 md:min-h-screen">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-blue-500 text-sm font-black text-white shadow-lg shadow-cyan-500/30">
          RF
        </div>
        <div>
          <p className="text-lg font-bold tracking-tight text-white">ReportFlow</p>
          <p className="text-xs text-slate-400">Operations Suite</p>
        </div>
      </div>

      <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">Workspace</p>
        <p className="mt-2 text-lg font-semibold text-white">Executive Review</p>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
              item.active
                ? 'bg-slate-800 text-white shadow-inner shadow-cyan-500/10'
                : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
            }`}
          >
            <span>{item.label}</span>
            {item.badge ? (
              <span className="rounded-full bg-cyan-500/15 px-2 py-0.5 text-[10px] font-semibold text-cyan-300">
                {item.badge}
              </span>
            ) : null}
          </button>
        ))}
      </nav>

      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">Queue</p>
        <p className="mt-3 text-3xl font-bold text-white">18</p>
        <p className="mt-1 text-sm text-slate-400">Reports awaiting approval</p>
      </div>
    </aside>
  )
}

export default Sidebar
