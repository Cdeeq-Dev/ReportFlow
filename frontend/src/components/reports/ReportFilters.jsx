import Button from '../ui/Button.jsx'

function ReportFilters() {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/50 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <input
          type="text"
          placeholder="Search reports"
          className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-slate-300"
        />

        <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-slate-300">
          <option>All departments</option>
          <option>Admin</option>
          <option>Water / Cleaners</option>
          <option>Electrical Department</option>
          <option>Recycling</option>
        </select>

        <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-slate-300">
          <option>All statuses</option>
          <option>Draft</option>
          <option>Pending</option>
          <option>Under Review</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
      </div>

      <Button>+ Create report</Button>
    </div>
  )
}

export default ReportFilters
