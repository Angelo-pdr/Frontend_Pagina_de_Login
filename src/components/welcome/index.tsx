import * as C from './styles'
import { useEffect, useState } from 'react'


function Welcome() {
  const capitalize = (str: string) => {
    if (typeof str !== 'string') {
      return ''
    }
    return str.charAt(0).toUpperCase() + str.substr(1)
  }

  const [first_name, setFirst_name] = useState('')
  const [last_name, setLast_name] = useState('')

  const isUsers = () => {
    const users = localStorage.getItem('user')
    if (users) {
      const { first_name, last_name } = JSON.parse(users as string)
      setFirst_name(first_name)
      setLast_name(last_name)
    }
  }

  function logout() {
    localStorage.removeItem('user')
  }

  useEffect(() => {
    isUsers()
  }, [])

  return (
    <C.Container>
      <C.Button onClick={logout}>Logout</C.Button>
      <div>
        <h1>
          Bem-vindo {capitalize(first_name)} {capitalize(last_name)}
        </h1>
      </div>
    </C.Container>
  )
}

export default Welcome
