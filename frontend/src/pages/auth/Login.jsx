import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [employeeId, setEmployeeId] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')

    if (!employeeId.trim() || !password.trim()) {
      setError('Please enter your employee ID and password.')
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      navigate('/dashboard')
    }, 600)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/60 md:grid-cols-2">
        <div className="hidden flex-col justify-between bg-slate-950 p-8 text-white md:flex">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 text-sm font-black shadow-lg shadow-cyan-500/20">
                RF
              </div>
              <div>
                <p className="text-2xl font-bold">ReportFlow</p>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-300">Workflow system</p>
              </div>
            </div>

            <h2 className="max-w-sm text-3xl font-bold leading-tight">Department reporting built for operational clarity.</h2>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-sm leading-6 text-slate-300">
              Track reports, approvals, tasks, and department activity from a single operational view designed for company teams.
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3">
                <p className="text-slate-400">Departments</p>
                <p className="mt-1 text-xl font-bold text-white">9</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3">
                <p className="text-slate-400">Reports</p>
                <p className="mt-1 text-xl font-bold text-white">1.2k</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="mx-auto max-w-md">
            <div className="mb-8 text-center md:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">Welcome</p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900">Sign in to ReportFlow</h1>
              <p className="mt-2 text-sm text-slate-500">Access your department workflow and reporting portal.</p>
            </div>

            {error ? (
              <div className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                {error}
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="employeeId" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Employee ID / Phone number
                </label>
                <input
                  id="employeeId"
                  name="employeeId"
                  type="text"
                  value={employeeId}
                  onChange={(event) => setEmployeeId(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-cyan-400 focus:bg-white"
                  placeholder="e.g. EMP-001 or +2547..."
                />
              </div>

              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-sm font-medium text-cyan-700 hover:text-cyan-800">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 pr-10 text-slate-800 outline-none transition focus:border-cyan-400 focus:bg-white"
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

              <div className="flex items-center justify-between gap-3">
                <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe((value) => !value)}
                    className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                  />
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Signing in...' : 'Sign in'}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Need help?{' '}
              <span className="font-medium text-cyan-700">Contact administrator</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
