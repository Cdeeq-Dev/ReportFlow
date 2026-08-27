import { useState } from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
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

            <h2 className="max-w-sm text-3xl font-bold leading-tight">Reset access to keep operations moving.</h2>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm leading-6 text-slate-300">
            Use your company phone number to continue with the secure recovery flow for your work account.
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="mx-auto max-w-md">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">Reset access</p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900">Forgot your password?</h1>
              <p className="mt-2 text-sm text-slate-500">Enter your phone number below to continue the recovery process.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="phoneNumber" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Phone number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none transition focus:border-cyan-400 focus:bg-white"
                  placeholder="+2547..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Continue
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Remembered your password?{' '}
              <Link to="/login" className="font-medium text-cyan-700 hover:text-cyan-800">
                Back to login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
