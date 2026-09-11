import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api.js'
import { useRole } from '../../context/useRole.js'

function Login() {
  const [employeeId, setEmployeeId] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [activeRole, setActiveRole] = useState('Manager')
  const [departments, setDepartments] = useState([])
  const [selectedDepartmentId, setSelectedDepartmentId] = useState('')
  const [departmentLoading, setDepartmentLoading] = useState(false)

  const navigate = useNavigate()
  const { login } = useRole()

  useEffect(() => {
    const loadDepartments = async () => {
      setDepartmentLoading(true)
      try {
        const data = await api.get('/departments')
        setDepartments(data)
        if (data.length > 0) {
          setSelectedDepartmentId(String(data[0].id))
        }
      } catch (err) {
        console.error('Failed to load departments:', err)
        setError(err.message || 'Unable to load departments')
      } finally {
        setDepartmentLoading(false)
      }
    }

    loadDepartments()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (!name.trim() || !employeeId.trim()) {
      setError('Please enter your name and employee ID.')
      return
    }

    if (activeRole === 'Manager' && !selectedDepartmentId) {
      setError('Please select a department.')
      return
    }

    setIsSubmitting(true)

    try {
      if (activeRole === 'Admin') {
        const payload = await api.post('/auth/admin/login', {
          name: name.trim(),
          staffId: employeeId.trim(),
        })

        login(payload.user, payload.token)
        navigate('/admin/dashboard')
        return
      }

      const payload = await api.post('/auth/manager/login', {
        name: name.trim(),
        staffId: employeeId.trim(),
        departmentId: Number(selectedDepartmentId),
        password,
      })

      login(payload.user, payload.token)
      navigate('/manager/dashboard')
    } catch (err) {
      setError(err.message || 'Login failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isManager = activeRole === 'Manager'

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)] md:grid-cols-[1.05fr_1.4fr]">
        <div className="hidden flex-col justify-between bg-slate-950 p-8 text-white md:flex">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-800 text-sm font-semibold tracking-[0.2em] text-white">
                RF
              </div>
              <div>
                <p className="text-2xl font-semibold">ReportFlow</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Workflow platform</p>
              </div>
            </div>

            <h2 className="max-w-sm text-3xl font-semibold leading-tight text-white">Operational reporting for plant teams.</h2>
          </div>

          <div className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/80 p-5">
            <p className="text-sm leading-6 text-slate-300">
              Track reports, requests, approvals, and departmental activity from a single operational view designed for manufacturing teams.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-3">
                <p className="text-slate-400">Departments</p>
                <p className="mt-1 text-xl font-semibold text-white">8</p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-3">
                <p className="text-slate-400">Reports</p>
                <p className="mt-1 text-xl font-semibold text-white">1.2k</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-8">
          <div className="mx-auto max-w-md">
            <div className="mb-6 text-center md:text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Welcome</p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900">Sign in</h1>
            </div>

            <div className="mb-5 grid grid-cols-2 rounded-xl border border-slate-200 bg-slate-50 p-1">
              {['Manager', 'Admin'].map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setActiveRole(role)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    activeRole === role ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200' : 'text-slate-500'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>

            {error ? (
              <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {error}
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="employeeId" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Employee ID / Staff ID
                </label>
                <input
                  id="employeeId"
                  name="employeeId"
                  type="text"
                  value={employeeId}
                  onChange={(event) => setEmployeeId(event.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
                  placeholder="e.g. MGR-118 or ADM-204"
                />
              </div>

              {isManager ? (
                <div className="space-y-1">
                  <div className="mb-1 flex items-center justify-between">
                    <label htmlFor="department" className="text-sm font-medium text-slate-700">
                      Department
                    </label>
                  </div>
                  <div className="relative">
                    <select
                      id="department"
                      name="department"
                      value={selectedDepartmentId}
                      disabled={departmentLoading || departments.length === 0}
                      onChange={(event) => setSelectedDepartmentId(event.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
                    >
                      {departments.map((department) => (
                        <option key={department.id} value={department.id}>
                          {department.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 pr-10 text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-sm text-slate-500"
                      onClick={() => setShowPassword((value) => !value)}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>
              ) : null}

              <div className="flex items-center justify-between gap-3">
                <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe((value) => !value)}
                    className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || departmentLoading}
                className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Signing in...' : 'Sign in'}
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-slate-500">
              Need help?{' '}
              <span className="font-medium text-blue-700">Contact administrator</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
