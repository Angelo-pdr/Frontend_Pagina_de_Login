import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    height: 50px;
  }

  h1 {
    font-size: 50px;
    white-space: nowrap;
    overflow: hidden;
    text-transform: full-width;
    animation:
      typewriter 3s steps(13),
      blink 1s steps(13) infinite normal;
    border-right: 2px solid black;
  }
  @keyframes typewriter {
    from {
      width: 0%;
    }
    to {
      width: 109%;
    }
  }
  @keyframes blink {
    from {
      border-color: black;
    }
    to {
      border-color: transparent;
    }
  }
`

export const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  padding: 4px 1rem;
  font-weight: 800;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${colors.button};
  color: ${colors.title};
  border-radius: 0.2rem;
  border: none;

  &:hover {
    opacity: 0.9;
  }
`
