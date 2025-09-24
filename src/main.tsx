import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import Agendamento from './routes/Agendamento/index.tsx'
import Consultas from './routes/Consultas/index.tsx'
import Error from './routes/Error/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/agendamento',
        element: <Agendamento/>,
      },
      {
        path: '/consultas',
        element: <Consultas/>,
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)