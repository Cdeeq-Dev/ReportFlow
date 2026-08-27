import { useState } from 'react'
import AppLayout from '../../components/layout/AppLayout.jsx'
import Button from '../../components/ui/Button.jsx'

const profile = {
  name: 'Ahmed Musa',
  id: 'MGR-001',
  phone: '+254712345678',
  department: 'Electrical Department',
  role: 'Manager',
  status: 'Active',
}

function Profile() {
  const [form, setForm] = useState(profile)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  return (
    <AppLayout title="Profile" subtitle="Manager and admin account details">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-400" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Manager/Admin ID</label>
            <input name="id" value={form.id} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-400" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-400" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Department</label>
            <input name="department" value={form.department} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-400" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Role</label>
            <input name="role" value={form.role} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-400" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Account status</label>
            <input name="status" value={form.status} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 outline-none focus:border-cyan-400" />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button variant="secondary" type="button">Cancel</Button>
          <Button type="button">Save changes</Button>
        </div>
      </div>
    </AppLayout>
  )
}

export default Profile
