import { useState } from 'react'
import Sidebar from './Sidebar.jsx'
import Navbar from './Navbar.jsx'

function AppLayout({ title, subtitle, actions, children, role }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} role={role} />

        <div className="flex min-h-screen flex-1 flex-col">
          <Navbar
            title={title}
            subtitle={subtitle}
            actions={actions}
            role={role}
            onMenuToggle={() => setMobileOpen((value) => !value)}
          />

          <main className="flex-1 p-4 sm:p-6 lg:p-7">{children}</main>
        </div>
      </div>
    </div>
  )
}

export default AppLayout
