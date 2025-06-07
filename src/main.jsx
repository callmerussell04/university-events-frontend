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

const routes = [
  {
    index: true,
    path: '/',
    element: <Homepage />
  },
  {
    path: '/admin/events',
    element: <EventAdminPage />
  },
  {
    path: '/admin/invitations',
    element: <InvitationsPage />
  },
  {
    path: '/admin/faculties',
    element: <FacultiesPage />
  },
  {
    path: '/admin/groups',
    element: <GroupsPage />
  },
  {
    path: '/admin/locations',
    element: <LocationsPage />
  },
  {
    path: '/profile/survey',
    element: <SurveysPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
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
