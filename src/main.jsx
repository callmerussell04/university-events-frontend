import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ErrorPage from './pages/ErrorPage.jsx';
import Homepage from './pages/Homepage.jsx';
import EventAdminPage from './pages/EventAdminPage.jsx';
import FacultiesPage from './pages/FacultiesPage.jsx';
import GroupsPage from './pages/GroupsPage.jsx';
import LocationsPage from './pages/LocationsPage.jsx';
import InvitationsPage from './pages/InvitationsPage.jsx';
import SurveysPage from './pages/SurveysPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import EventsStudentPage from './pages/EventsStudentPage.jsx';
import ResetPasswordPage from './pages/ResetPasswordPage.jsx';
import ForgotUsernamePage from './pages/ForgotUsernamePage.jsx';
import UsersPage from './pages/UsersPage.jsx';
import ProtectedRoute from './components/auth/ProtectedRoute.jsx';
import SupportTicketsPage from './pages/SupportTicketsPage.jsx';


const routes = [
  {
    index: true,
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/reset-password',
    element: <ResetPasswordPage />,
  },
  {
    path: '/forgot-username',
    element: <ForgotUsernamePage />,
  },
  // *** Защищенные маршруты начинаются здесь ***
  {
    path: '/admin/events',
    element: (
      <ProtectedRoute>
        <EventAdminPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin/invitations',
    element: (
      <ProtectedRoute>
        <InvitationsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin/faculties',
    element: (
      <ProtectedRoute>
        <FacultiesPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin/groups',
    element: (
      <ProtectedRoute>
        <GroupsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin/locations',
    element: (
      <ProtectedRoute>
        <LocationsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/profile/survey',
    element: (
      <ProtectedRoute>
        <SurveysPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/events',
    element: (
      <ProtectedRoute>
        <EventsStudentPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin/users',
    element: (
      <ProtectedRoute>
        <UsersPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin/support-tickets',
    element: (
      <ProtectedRoute>
        <SupportTicketsPage />
      </ProtectedRoute>
    ),
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App routes={routes} />,
    children: routes,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
