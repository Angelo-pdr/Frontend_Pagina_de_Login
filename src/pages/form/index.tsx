import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import * as C from './styles'
import imgForm from '../../asserts/img_form.png'
import { User, EyeOff, Eye, Mail, XCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Form() {
  const navigate = useNavigate()
  const [isEye, setIsEye] = useState('password')
  const [status, setStatus] = useState<number>()

  function toggle() {
    if (isEye == 'password') {
      setIsEye('text')
    } else {
      setIsEye('password')
    }
  }

  const form = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      last_name: Yup.string()
        .min(3, 'O sobrenome precisa ter pelo mais de 5 caracteres')
        .required('O campo é obrigatório'),
      email: Yup.string().email().required('O campo é obrigatório'),
      password: Yup.string()
        .min(8, 'A senha precisa ter pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      confirmPassword: Yup.string()
        .min(8, 'A senha precisa ter pelo menos 8 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit(values) {
      register({
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  function register({
    email,
    first_name,
    last_name,
    confirmPassword,
    password
  }: FormProps) {
    if (confirmPassword === password) {
      const url = 'http://127.0.0.1:8000/api/register/'
      const requestOption = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          email: email,
          first_name: first_name,
          last_name: last_name,
          password: password
        })
      }
      fetch(url, requestOption)
        .then((respose) => respose)
        .then((data) => setStatus(data.status))
    }
  }

  return (
    <>
      <div className="container">
        <C.ContentImg>
          <C.Img src={imgForm} />
        </C.ContentImg>
        <form className="form" onSubmit={form.handleSubmit}>
          <C.Title>Create Account</C.Title>
          <div className="flex">
            <C.InputGroup maxWidth="225px">
              <label htmlFor="first_name">First Name</label>
              <div
                className={checkInputHasError('password') ? 'bgError' : 'bg'}
              >
                <input
                  id="first_name"
                  type="text"
                  name="first_name"
                  value={form.values.first_name}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('first_name') ? 'error' : ''}
                />
                <User className="icon" color="#737373" />
              </div>
            </C.InputGroup>
            <C.InputGroup maxWidth="225px">
              <label htmlFor="last_name">Last Name</label>
              <div
                className={checkInputHasError('password') ? 'bgError' : 'bg'}
              >
                <input
                  id="last_name"
                  type="text"
                  name="last_name"
                  value={form.values.last_name}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <User className="icon" color="#737373" />
              </div>
            </C.InputGroup>
          </div>
          <C.InputGroup>
            <label htmlFor="email">Email</label>
            <div className={checkInputHasError('password') ? 'bgError' : 'bg'}>
              <input
                id="email"
                type="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <Mail className="icon" color="#737373" />
            </div>
          </C.InputGroup>
          <div className="flex">
            <C.InputGroup maxWidth="225px">
              <label htmlFor="password">Password</label>
              <div
                className={checkInputHasError('password') ? 'bgError' : 'bg'}
              >
                <input
                  id="password"
                  name="password"
                  type={isEye}
                  value={form.values.password}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {isEye == 'text' ? (
                  <Eye onClick={toggle} className="icon" color="#737373" />
                ) : (
                  <EyeOff onClick={toggle} className="icon" color="#737373" />
                )}
              </div>
            </C.InputGroup>
            <C.InputGroup maxWidth="225px">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div
                className={checkInputHasError('password') ? 'bgError' : 'bg'}
              >
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={isEye}
                  value={form.values.confirmPassword}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {isEye == 'text' ? (
                  <Eye onClick={toggle} className="icon" color="#737373" />
                ) : (
                  <EyeOff onClick={toggle} className="icon" color="#737373" />
                )}
              </div>
            </C.InputGroup>
          </div>
          <C.Button type="submit">Sign Up</C.Button>
          <C.option>
            Already a member?{' '}
            <button onClick={() => navigate('/')}> Sign In</button>
          </C.option>
        </form>
      </div>
      <C.Screen onClick={() => setStatus(0)} className={status ? 'is-visible' : ''}>
        <C.Modal color={status == 400 ? 'red' : 'green'}>
          <h1>{status == 400 ? 'E-mail já está em uso' : 'Usuario cadastrado com sucesso'}</h1>
          <XCircle className='close' />
        </C.Modal>
      </C.Screen>
    </>
  )
}

export default Form
