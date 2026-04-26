import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'forgot-password',
        element: <div className="text-center py-20 text-2xl font-bold text-primary">🔑 Forgot Password — Coming Soon!</div>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App