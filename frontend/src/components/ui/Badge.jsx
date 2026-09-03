function Badge({ children, tone = 'slate', className = '' }) {
  const tones = {
    slate: 'bg-slate-100 text-slate-700',
    blue: 'bg-blue-100 text-blue-700',
    cyan: 'bg-sky-100 text-sky-700',
    amber: 'bg-amber-100 text-amber-700',
    emerald: 'bg-emerald-100 text-emerald-700',
    rose: 'bg-red-100 text-red-700',
    violet: 'bg-violet-100 text-violet-700',
    info: 'bg-sky-100 text-sky-700',
    warning: 'bg-amber-100 text-amber-700',
    success: 'bg-emerald-100 text-emerald-700',
    danger: 'bg-red-100 text-red-700',
  }

  return (
    <span className={`inline-flex items-center rounded-full px-2 py-1 text-[11px] font-semibold ${tones[tone] || tones.slate} ${className}`}>
      {children}
    </span>
  )
}

export default Badge
