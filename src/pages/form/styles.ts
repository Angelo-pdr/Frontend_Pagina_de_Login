import styled from 'styled-components'
import { colors } from '../../styles'

type InputProps = {
  maxWidth?: string
}

type ModalProps = {
  color: string
}

export const ContentImg = styled.div`
  width: 600px;
  height: 600px;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem 0px 0px 0.5rem;
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  color: ${colors.title};
  text-align: left;
`

export const InputGroup = styled.div<InputProps>`
  flex: auto;
  height: 100%;
  max-width: ${(props) => props.maxWidth || 'auto'};
  margin-top: 2rem;
  text-align: left;

  label {
    font-size: 16px;
    margin-bottom: 8px;
    display: block;
    color: ${colors.title};
  }

  .bg {
    height: 45px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.text};
    border-radius: 0.2rem;
  }

  .bgError {
    height: 45px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.text};
    border: 1px solid red;
    border-radius: 0.2rem;
  }

  input {
    font-size: 20px;
    flex: 1;
    background-color: ${colors.text};
    height: 42px;
    width: 100%;
    padding: 0px 8px;
    border-radius: 0.2rem;
    border: none;
    outline: none;
  }

  .icon {
    display: block;
    margin-right: 5px;
  }
`

export const Button = styled.button`
  display: inline-block;
  border: none;
  width: 100%;
  height: 40px;
  margin-top: 2rem;
  margin-bottom: 8px;
  padding: 4px 0px;
  font-weight: 800;
  font-size: 20px;
  cursor: pointer;
  background-color: ${colors.button};
  color: ${colors.title};
  border-radius: 0.2rem;

  &:hover {
    opacity: 0.9;
  }
`
export const option = styled.div`
  width: 100%;
  margin-top: 1rem;
  color: black;

  button{
    font-size: 18px;
    font-weight: 800;
    border-none;
    background-color: transparent;
    border: none;
    color: ${colors.title};
    cursor: pointer;
  }
`

export const Screen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: end;
  justify-content: right;

  &.is-visible {
    display: flex;
    animation: loade 6s;
  }

  @keyframes loade {
    from {
      display: flex;
    }
    to {
      display: none;
    }
  }
`

export const Modal = styled.div<ModalProps>`
  width: 280px;
  height: 80px;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: ${(props) => props.color};
  padding: 0.5rem;
  color: white;
  position: relative;
  transition: 1s;

  h1 {
    margin-top: 25px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }

  .close {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }
`
