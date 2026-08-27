import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Login from './pages/auth/Login.jsx'
import ForgotPassword from './pages/auth/ForgotPassword.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Reports from './pages/reports/Reports.jsx'
import CreateReport from './pages/reports/CreateReport.jsx'
import ReportDetails from './pages/reports/ReportDetails.jsx'
import Requests from './pages/requests/Requests.jsx'
import CreateRequest from './pages/requests/CreateRequest.jsx'
import RequestDetails from './pages/requests/RequestDetails.jsx'
import Tasks from './pages/tasks/Tasks.jsx'
import TaskDetails from './pages/tasks/TaskDetails.jsx'
import Departments from './pages/departments/Departments.jsx'
import DepartmentDetails from './pages/departments/DepartmentDetails.jsx'
import Managers from './pages/managers/Managers.jsx'
import Users from './pages/users/Users.jsx'
import UserDetails from './pages/users/UserDetails.jsx'
import Activity from './pages/activity/Activity.jsx'
import Notifications from './pages/notifications/Notifications.jsx'
import Profile from './pages/profile/Profile.jsx'
import Settings from './pages/settings/Settings.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reports/create" element={<CreateReport />} />
        <Route path="/reports/:id" element={<ReportDetails />} />

        <Route path="/requests" element={<Requests />} />
        <Route path="/requests/create" element={<CreateRequest />} />
        <Route path="/requests/:id" element={<RequestDetails />} />

        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />

        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/:id" element={<DepartmentDetails />} />

        <Route path="/managers" element={<Managers />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />

        <Route path="/activity" element={<Activity />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
