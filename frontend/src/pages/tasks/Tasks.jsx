import AppLayout from '../../components/layout/AppLayout.jsx'
import Button from '../../components/ui/Button.jsx'
import { Link } from 'react-router-dom'
import TaskTable from '../../components/tasks/TaskTable.jsx'

function Tasks() {
  return (
    <AppLayout title="Tasks" subtitle="Operational task tracking" actions={
      <Link to="/tasks/new">
        <Button>+ Create task</Button>
      </Link>
    }>
      <div className="space-y-6">
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/50 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <input className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none" placeholder="Search tasks" />
            <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none">
              <option>All statuses</option>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Overdue</option>
            </select>
          </div>
        </div>

        <TaskTable />
      </div>
    </AppLayout>
  )
}

export default Tasks
