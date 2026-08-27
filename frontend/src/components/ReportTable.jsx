const reportRows = [
  { id: 'RF-2048', client: 'Northwind', type: 'Quarterly Review', owner: 'Maya Chen', date: '2026-08-25', status: 'Approved' },
  { id: 'RF-2051', client: 'Summit Labs', type: 'Monthly Ops', owner: 'Lucas Park', date: '2026-08-24', status: 'Pending' },
  { id: 'RF-2056', client: 'Helio Group', type: 'Compliance Audit', owner: 'Noah Smith', date: '2026-08-22', status: 'In Review' },
  { id: 'RF-2060', client: 'Apex Works', type: 'Executive Summary', owner: 'Emma Lewis', date: '2026-08-20', status: 'Rejected' },
]

const statusClasses = {
  Approved: 'bg-emerald-100 text-emerald-700',
  Pending: 'bg-amber-100 text-amber-700',
  'In Review': 'bg-violet-100 text-violet-700',
  Rejected: 'bg-rose-100 text-rose-700',
}

function ReportTable() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Recent reports</h2>
          <p className="text-sm text-slate-500">Latest report activity across departments</p>
        </div>

        <button
          type="button"
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Export
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b border-slate-200 text-sm text-slate-500">
              <th className="pb-3 pr-4 font-medium">Report</th>
              <th className="pb-3 pr-4 font-medium">Client</th>
              <th className="pb-3 pr-4 font-medium">Type</th>
              <th className="pb-3 pr-4 font-medium">Owner</th>
              <th className="pb-3 pr-4 font-medium">Date</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {reportRows.map((report) => (
              <tr key={report.id} className="border-b border-slate-100 last:border-0">
                <td className="py-3 pr-4 font-semibold text-slate-800">{report.id}</td>
                <td className="py-3 pr-4 text-slate-600">{report.client}</td>
                <td className="py-3 pr-4 text-slate-600">{report.type}</td>
                <td className="py-3 pr-4 text-slate-600">{report.owner}</td>
                <td className="py-3 pr-4 text-slate-600">{report.date}</td>
                <td className="py-3">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClasses[report.status]}`}>
                    {report.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ReportTable
