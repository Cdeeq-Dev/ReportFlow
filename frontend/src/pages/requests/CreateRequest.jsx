import AppLayout from '../../components/layout/AppLayout.jsx'
import Button from '../../components/ui/Button.jsx'

function CreateRequest() {
  return (
    <AppLayout title="Create request" subtitle="Submit a new support or material request">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
        <form className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Request title</label>
              <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-400" placeholder="Replace motor starter unit" />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Request type</label>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-400">
                <option>Equipment request</option>
                <option>Maintenance request</option>
                <option>Material request</option>
                <option>Electrical request</option>
                <option>Cleaning request</option>
              </select>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Department</label>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-400">
                <option>Electrical Department</option>
                <option>Water / Cleaners</option>
                <option>Weaving</option>
                <option>Recycling</option>
                <option>Admin</option>
              </select>
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
            <textarea rows="5" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-400" placeholder="Explain the request need, impact, and urgency." />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Date</label>
              <input type="date" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-400" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Status</label>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-400">
                <option>Pending</option>
                <option>Under Review</option>
                <option>Approved</option>
                <option>Rejected</option>
                <option>Completed</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col justify-end gap-3 pt-4 sm:flex-row">
            <Button variant="secondary" type="button">Save draft</Button>
            <Button type="submit">Submit request</Button>
          </div>
        </form>
      </div>
    </AppLayout>
  )
}

export default CreateRequest
