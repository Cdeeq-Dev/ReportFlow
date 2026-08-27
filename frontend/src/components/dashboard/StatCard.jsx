function StatCard({ title, value, change, tone = 'slate' }) {
  const toneClasses = {
    slate: { badge: 'bg-slate-100 text-slate-700', accent: 'bg-slate-900' },
    cyan: { badge: 'bg-cyan-100 text-cyan-700', accent: 'bg-cyan-500' },
    amber: { badge: 'bg-amber-100 text-amber-700', accent: 'bg-amber-500' },
    emerald: { badge: 'bg-emerald-100 text-emerald-700', accent: 'bg-emerald-500' },
    rose: { badge: 'bg-rose-100 text-rose-700', accent: 'bg-rose-500' },
  }

  const selected = toneClasses[tone] || toneClasses.slate

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${selected.badge}`}>{change}</span>
      </div>

      <div className="mt-5 flex items-end justify-between gap-3">
        <p className="text-3xl font-bold tracking-tight text-slate-900">{value}</p>
        <div className={`h-10 w-10 rounded-xl ${selected.accent}`} />
      </div>
    </div>
  )
}

export default StatCard
