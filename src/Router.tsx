import { createBrowserRouter } from 'react-router-dom'
import Form from './pages/form'
import Home from './pages/home'
import App from './App'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/form',
        element: <Form />
      }
    ]
  }
])

export default Router
