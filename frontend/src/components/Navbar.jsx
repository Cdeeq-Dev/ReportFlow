function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/80 px-4 py-4 backdrop-blur-sm sm:px-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Dashboard</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Welcome back, Alex
          </h1>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
          >
            Search reports
          </button>

          <button
            type="button"
            className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
          >
            + New report
          </button>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-2.5 py-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-cyan-100 to-blue-100 text-sm font-bold text-cyan-700">
              AD
            </div>
            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-slate-800">Alex Doe</p>
              <p className="text-[11px] text-slate-500">Operations Director</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
