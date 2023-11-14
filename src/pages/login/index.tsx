import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import * as C from './styles'
import imgLogin from '../../asserts/img_login.png'
import { Mail, EyeOff, Eye } from 'lucide-react'
import { enviar } from '../../services/api'
import Welcome from '../welcome'
import { useNavigate } from 'react-router-dom'

function Form() {
  const navigate = useNavigate()
  const [isEye, setIsEye] = useState('password')
  const [istoken, setIsToken] = useState<string | null>()

  function toggle() {
    if (isEye == 'password') {
      setIsEye('text')
    } else {
      setIsEye('password')
    }
  }

  const form = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().required('O campo é obrigatório'),
      password: Yup.string()
        .min(8, 'A senha precisa ter pelo menos 8 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit(values) {
      enviar({ email: values.email, password: values.password })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }
  useEffect(() => {
    const user = localStorage.getItem('user')
    setIsToken(user)
  }, [])
  return (
    <div className="container">
      <C.ContentImg>
        <C.Img src={imgLogin} />
      </C.ContentImg>
      <form className="form" onSubmit={form.handleSubmit}>
        <C.Title>Sign In</C.Title>
        <C.InputGroup>
          <label htmlFor="email">Email</label>
          <div className={checkInputHasError('password') ? 'bgError' : 'bg'}>
            <input
              id="email"
              type="text"
              name="email"
              value={form.values.email}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <Mail className="icon" color="#737373" />
          </div>
        </C.InputGroup>
        <div className="flex">
          <C.InputGroup>
            <label htmlFor="password">Password</label>
            <div className={checkInputHasError('password') ? 'bgError' : 'bg'}>
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
        </div>
        <C.Button type="submit">Sign In</C.Button>
        <C.option>
          Already a member?{' '}
          <button onClick={() => navigate('/form')}> Sign Up</button>
        </C.option>
      </form>
    </div>
  )
}

export default Form
