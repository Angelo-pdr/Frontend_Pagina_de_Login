import { useEffect, useState } from 'react'
import * as C from './styles'
import { useNavigate } from 'react-router-dom'

function Welcome() {

  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  function getUser(){
    const user = localStorage.getItem('user')
    if (user) {
      const { first_name, last_name } = JSON.parse(user as string)
      setFirstName(first_name)
      setLastName(last_name)
    }
  }

  function logout() {
    localStorage.removeItem('user')
    return navigate('/')
  }

  const capitalize = (str: string) => {
    if (typeof str !== 'string') {
      return ''
    }
    return str.charAt(0).toUpperCase() + str.substr(1)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <C.Container>
      <C.Button onClick={() => logout()}>Logout</C.Button>
      <div>
        <h1>Bem-vindo {capitalize(firstName)} {capitalize(lastName)}</h1>
      </div>
    </C.Container>
  )
}

export default Welcome
