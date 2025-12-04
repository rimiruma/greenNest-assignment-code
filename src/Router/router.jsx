
import { createBrowserRouter } from 'react-router';
import Root from '../components/Root';
import HomeLayouts from '../Layouts/HomeLayouts';
import PlantsDetails from '../components/PlantsDetails';
import AllPlants from '../components/AllPlants'
import Register from '../Pages/Register'
import PrivateRoute from '../provider/PrivateRoute';
import ErrorPage from '../components/ErrorPage';
import AuthLayout from '../Layouts/AuthLayout';
import Login from '../Pages/Login';
import Profile from '../components/Profile';
import UpdateProfile from '../components/UpdateProfile';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactUs';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: HomeLayouts,
        loader: () => fetch("/plants.json")

      },
      {
        path: "/all-plants",
        element: <AllPlants></AllPlants>,
        loader: () => fetch("/plants.json"),
      },
      {
        path: '/plants-details/:id',
        Component: PlantsDetails,
        loader: () => fetch("/plants.json")
      },
      {
        path: '/about-us',
        Component: AboutSection
      },
      {
        path: '/contact-us',
        Component: ContactSection
      }
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        Component: Login
      },
      {
        path: '/auth/register',
        Component: Register
      },
      {
        path: "/auth/profile",
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },
      {
        path: "/auth/updateProfile",
       Component: UpdateProfile,
      },
    ]
  },
  {
    path: "*",
    Component: ErrorPage,

  }
]);

export default router;
