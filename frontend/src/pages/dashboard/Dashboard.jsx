import { Navigate, useLocation } from 'react-router-dom'
import AppLayout from '../../components/layout/AppLayout.jsx'
import ManagerDashboard from '../../components/dashboard/ManagerDashboard.jsx'
import AdminDashboard from '../../components/dashboard/AdminDashboard.jsx'
import { useRole } from '../../context/useRole.js'

function Dashboard() {
  const { user, role, loading } = useRole()
  const location = useLocation()

  if (!loading && !user) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  const resolvedRole = role === 'ADMIN' ? 'Admin' : 'Manager'

  return (
    <AppLayout
      title={resolvedRole === 'Admin' ? 'Admin Dashboard' : 'Department overview'}
      subtitle={resolvedRole === 'Admin' ? 'Company-wide operations overview' : 'Electrical Department'}
      role={resolvedRole}
    >
      {resolvedRole === 'Admin' ? <AdminDashboard /> : <ManagerDashboard />}
    </AppLayout>
  )
}

export default Dashboard
