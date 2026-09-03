import { useLocation } from 'react-router-dom'
import AppLayout from '../../components/layout/AppLayout.jsx'
import ManagerDashboard from '../../components/dashboard/ManagerDashboard.jsx'
import AdminDashboard from '../../components/dashboard/AdminDashboard.jsx'
import { useRole } from '../../context/RoleContext.jsx'

function Dashboard() {
  const { role } = useRole()
  const location = useLocation()
  const resolvedRole = location.pathname.startsWith('/admin')
    ? 'Admin'
    : location.pathname.startsWith('/manager')
      ? 'Manager'
      : role

  return (
    <AppLayout
      title={resolvedRole === 'Admin' ? 'Company overview' : 'Department overview'}
      subtitle={resolvedRole === 'Admin' ? 'Company-wide operational overview' : 'Electrical Department'}
      role={resolvedRole}
    >
      {resolvedRole === 'Admin' ? <AdminDashboard /> : <ManagerDashboard />}
    </AppLayout>
  )
}

export default Dashboard
