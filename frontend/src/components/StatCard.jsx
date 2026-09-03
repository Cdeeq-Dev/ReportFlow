function StatCard({ title, value, change, tone = 'blue' }) {
  const tones = {
    blue: {
      badge: 'bg-blue-100 text-blue-700',
      accent: 'bg-blue-600',
    },
    amber: {
      badge: 'bg-amber-100 text-amber-700',
      accent: 'bg-amber-500',
    },
    green: {
      badge: 'bg-emerald-100 text-emerald-700',
      accent: 'bg-emerald-600',
    },
    red: {
      badge: 'bg-red-100 text-red-700',
      accent: 'bg-red-500',
    },
    slate: {
      badge: 'bg-slate-200 text-slate-700',
      accent: 'bg-slate-700',
    },
  }

  const selectedTone = tones[tone] || tones.blue

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <span className={`inline-flex rounded-full px-2 py-1 text-[11px] font-semibold ${selectedTone.badge}`}>
          {change}
        </span>
      </div>

      <div className="mt-5 flex items-end justify-between gap-3">
        <p className="text-2xl font-semibold tracking-tight text-slate-900">{value}</p>
        <div className={`h-9 w-9 rounded-md ${selectedTone.accent}`} />
      </div>
    </div>
  )
}

export default StatCard
