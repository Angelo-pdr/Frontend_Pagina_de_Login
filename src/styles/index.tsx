import { createGlobalStyle } from 'styled-components'

export const colors = {
  bg: '#F2F2F2',
  bgPage: '#ffff',
  title: '#18345E',
  text: '#F4F2F2',
  button: '#F0AB20'
}

const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Spectral', serif;
    list-style: none;
    text-decoration: none;
  }

  body{
    background-color: ${colors.bg};
    color: ${colors.text};
    width: 100%;
    height: 100%;
    padding: 20px 0px;
  }

  .container{
    max-width: 900px;
    max-height: 600px;
    height: 100%;
    margin: 0px auto;
    display: flex;
    background-color:${colors.bgPage};
    border-radius: .5rem;
  }

  .form{
    height: 100%;
    width: 600px;
    padding: 2rem 2rem;
    text-align: center;
    font-weight: 700;
  }

  .flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
`

export default GlobalCss
