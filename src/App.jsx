import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/MainLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <div className="text-3xl font-bold text-primary p-10">🏠 Home Page</div>
      },
      {
        path: 'about',
        element: <div className="text-3xl font-bold text-secondary p-10">About Page</div>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App