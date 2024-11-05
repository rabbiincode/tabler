import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginRequest } from '../../redux/actions/authActions'
import { RootState } from '../../redux/store'
import './_login.scss'

const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const { user, loading, error } = useSelector((state: RootState) => state.auth)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(loginRequest(email, address))
  }

  return (
    <section className='login'>
      <div className='content'>
        <h2>Login</h2>
        {user && <p>Welcome, {user.email}!</p>}
        <form onSubmit={handleSubmit}>
          <div className='input'>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              placeholder='Input your email address'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='input'>
            <label>Address:</label>
            <input
              type="text"
              value={address}
              placeholder='Input your home address'
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
        </form>
        {error && <p className='error'>Error: {error}</p>}
      </div>
    </section>
  )
}

export default Login