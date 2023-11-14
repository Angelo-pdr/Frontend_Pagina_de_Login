import * as C from './styles'

function Welcome() {

  const capitalize = (str: string) => {
    if (typeof str !== 'string') {
      return ''
    }
    return str.charAt(0).toUpperCase() + str.substr(1)
  }

  return (
    <C.Container>
      <C.Button>Logout</C.Button>
      <div>
        <h1>Bem-vindo</h1>
      </div>
    </C.Container>
  )
}

export default Welcome
