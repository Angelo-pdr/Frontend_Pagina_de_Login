import GlobalCss from './styles'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <GlobalCss />
      <Outlet />
    </>
  )
}

export default App
