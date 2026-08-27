function StatCard({ title, value, change, tone = 'cyan' }) {
  const tones = {
    cyan: {
      badge: 'bg-cyan-100 text-cyan-700',
      strong: 'from-cyan-500 to-sky-500',
    },
    amber: {
      badge: 'bg-amber-100 text-amber-700',
      strong: 'from-amber-400 to-orange-500',
    },
    emerald: {
      badge: 'bg-emerald-100 text-emerald-700',
      strong: 'from-emerald-500 to-teal-500',
    },
    rose: {
      badge: 'bg-rose-100 text-rose-700',
      strong: 'from-rose-500 to-pink-500',
    },
  }

  const selectedTone = tones[tone] || tones.cyan

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${selectedTone.badge}`}>
          {change}
        </span>
      </div>

      <div className="mt-5 flex items-end justify-between">
        <p className="text-3xl font-bold tracking-tight text-slate-900">{value}</p>
        <div className={`h-10 w-10 rounded-xl bg-linear-to-br ${selectedTone.strong}`} />
      </div>
    </div>
  )
}

export default StatCard
