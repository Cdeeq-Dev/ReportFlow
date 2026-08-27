import AppLayout from '../../components/layout/AppLayout.jsx'
import ManagerDashboard from '../../components/dashboard/ManagerDashboard.jsx'
import AdminDashboard from '../../components/dashboard/AdminDashboard.jsx'
import { useRole } from '../../context/RoleContext.jsx'

function Dashboard() {
  const { role } = useRole()

  return (
    <AppLayout
      title={role === 'Admin' ? 'Good morning, Admin' : 'Good morning, Ahmed'}
      subtitle={role === 'Admin' ? 'Company-wide workflow overview' : 'Electrical Department'}
    >
      {role === 'Admin' ? <AdminDashboard /> : <ManagerDashboard />}
    </AppLayout>
  )
}

export default Dashboard
