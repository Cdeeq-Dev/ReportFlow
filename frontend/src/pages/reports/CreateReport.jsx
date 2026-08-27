import AppLayout from '../../components/layout/AppLayout.jsx'
import Button from '../../components/ui/Button.jsx'

function CreateReport() {
  return (
    <AppLayout title="Create report" subtitle="Submit a new company report">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
        <form className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Report title</label>
              <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-400" placeholder="Weekly quality summary" />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Department</label>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-400">
                <option>Admin</option>
                <option>Water / Cleaners</option>
                <option>Electrical Department</option>
                <option>Recycling</option>
                <option>Extruder 1</option>
              </select>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Report type</label>
              <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-400" placeholder="Inspection / Audit / Summary" />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Priority</label>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-400">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Description</label>
            <textarea rows="5" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-400" placeholder="Describe the report context, findings, and actions required." />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Due date</label>
              <input type="date" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-400" />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Attachments</label>
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3 py-3 text-sm text-slate-500">
                No files attached yet
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end gap-3 pt-4 sm:flex-row">
            <Button variant="secondary" type="button">Save draft</Button>
            <Button type="submit">Submit report</Button>
          </div>
        </form>
      </div>
    </AppLayout>
  )
}

export default CreateReport
