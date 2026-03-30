import {useState} from 'react'
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'
import '../style/form.scss'

const Login = () => {
    const {user, loading, handleLogin} = useAuth();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()

        await handleLogin(username, password)
        navigate('/');

    }

    if(loading){
        return (
            <main>
                <h1>Loading....</h1>
            </main>
        )
    }
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            onInput={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
          />
          <input
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <button className="button primary-button">Log In</button>
          <p>
            Don't have an account yet?<Link to="/register">Sign up</Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default Login
