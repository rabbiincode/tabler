import { useState } from 'react'
import { RootState } from '../../redux/store'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, Visibility, VisibilityOff } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { loginRequest } from '../../redux/actions/authActions'
import './_login.scss'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [show, setShow] = useState(false)
  const [address, setAddress] = useState('')
  const { user, loading, error } = useSelector((state: RootState) => state.auth)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(loginRequest(email, address))
  }

  return (
    <section className='login'>
      <ChevronLeft onClick={() => navigate('/')} fontSize='large' className='back'/>
      <div className='content'>
        <h2>Login</h2>
        {user && <p>Welcome, {user.email}!</p>}
        <form onSubmit={handleSubmit}>
          <div className='input'>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              placeholder='you@tabler.com'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='input'>
            <label>Password:</label>
            <div className='inputs'>
              <input
                type={show ? 'text' : 'password'}
                value={address}
                placeholder='123456@Aa'
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <div onClick={() => setShow(!show)}>
                {show ? <Visibility cursor='pointer'/> : <VisibilityOff cursor='pointer'/>}
              </div>
            </div>
          </div>
          <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
        </form>
        {error && <p className='error'>Error: {error}</p>}
      </div>
    </section>
  )
}

export default Login