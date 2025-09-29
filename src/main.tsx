import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import Agendamento from './routes/Agendamento/index.tsx'
import Consultas from './routes/Consultas/index.tsx'
import Error from './routes/Error/index.tsx'
<<<<<<< HEAD
import Contato from './routes/Contato/index.tsx'
import Faq from './routes/Faq/index.tsx'
import QuemSomos from './routes/QuemSomos/index.tsx'
=======
>>>>>>> 6f4fe4cffeff15a89bf8316a0aadcb186387a98f

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
<<<<<<< HEAD
      },
      {
        path: '/Contato',
        element: <Contato/>,
      },
      {
        path: '/Faq',
        element: <Faq/>,
      },
      {
        path: '/QuemSomos',
        element: <QuemSomos/>,
=======
>>>>>>> 6f4fe4cffeff15a89bf8316a0aadcb186387a98f
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)