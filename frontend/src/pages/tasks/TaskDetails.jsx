import AppLayout from '../../components/layout/AppLayout.jsx'
import Badge from '../../components/ui/Badge.jsx'
import { tasks } from '../../data/tasks.js'
import { useParams } from 'react-router-dom'

function TaskDetails() {
  const { id } = useParams()
  const task = tasks.find((item) => item.id === id) || tasks[0]

  return (
    <AppLayout title={task.title} subtitle={`Task ${task.id}`}>
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
          <div className="flex flex-wrap gap-3">
            <Badge tone={task.priority === 'Critical' ? 'rose' : task.priority === 'High' ? 'cyan' : task.priority === 'Medium' ? 'amber' : 'slate'}>{task.priority}</Badge>
            <Badge tone={task.status === 'Completed' ? 'emerald' : task.status === 'Overdue' ? 'rose' : task.status === 'In Progress' ? 'cyan' : 'amber'}>{task.status}</Badge>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-slate-500">Department</p>
              <p className="mt-1 font-semibold text-slate-800">{task.department}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Assigned user</p>
              <p className="mt-1 font-semibold text-slate-800">{task.assignedUser}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Due date</p>
              <p className="mt-1 font-semibold text-slate-800">{task.dueDate}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Status</p>
              <p className="mt-1 font-semibold text-slate-800">{task.status}</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50">
          <h3 className="text-xl font-bold text-slate-900">Activity</h3>
          <div className="mt-4 space-y-3">
            {[
              { label: 'Task created', time: '2026-08-25' },
              { label: 'Assigned to department lead', time: '2026-08-26' },
              { label: 'Awaiting approval', time: '2026-08-27' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                <p className="font-medium text-slate-800">{item.label}</p>
                <p className="mt-1 text-xs text-slate-500">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default TaskDetails
