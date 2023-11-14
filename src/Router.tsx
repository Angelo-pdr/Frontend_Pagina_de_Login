import { createBrowserRouter } from 'react-router-dom'
import Form from './pages/form'
import Login from './pages/login'
import Home from './pages/welcome'
import App from './App'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />
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
