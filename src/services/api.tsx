export function register({
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
      .then((respose) => respose.json())
  }
}

export function enviar({ email, password }: UserProps) {
  console.log({ email, password })
  const url = 'http://127.0.0.1:8000/api-token-auth/'
  const requestOption = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      email: email,
      password: password
    })
  }
  fetch(url, requestOption)
    .then((respose) => respose.json())
    .then((data) => console.log(data))
}
