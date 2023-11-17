import { createBrowserRouter } from 'react-router-dom'
import Form from './pages/form'
import Home from './pages/welcome'
import PrivateRouter from './pages/privateRouter'
import App from './App'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <PrivateRouter />
      },
      {
        path: '/form',
        element: <Form />
      },
      {
        path: '/welcome',
        element: <Home />
      }
    ]
  }
])

export default Router
