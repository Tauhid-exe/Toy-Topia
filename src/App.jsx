import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import Register from './pages/Register'

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
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App