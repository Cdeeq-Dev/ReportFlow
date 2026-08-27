import AppLayout from '../../components/layout/AppLayout.jsx'
import ReportFilters from '../../components/reports/ReportFilters.jsx'
import ReportTable from '../../components/reports/ReportTable.jsx'
import Button from '../../components/ui/Button.jsx'
import { Link } from 'react-router-dom'

function Reports() {
  return (
    <AppLayout title="Reports" subtitle="Department reporting overview" actions={
      <Link to="/reports/create">
        <Button>+ Create report</Button>
      </Link>
    }>
      <div className="space-y-6">
        <ReportFilters />
        <ReportTable />
      </div>
    </AppLayout>
  )
}

export default Reports
