import {useState} from 'react'
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router';
import "../style/form.scss";

const Register = () => {
    const {user, loading, handleRegister} = useAuth()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();

        await handleRegister(username, email, password)

        navigate('/login')
    }
    if(loading){
        return(
            <main>
                <h1>Loading...</h1>
            </main>
        )
    }

  return (
    <main>
      <div className="form-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} method='POST'>
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
              setEmail(e.target.value);
            }}
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
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
          <button className="button primary-button">Create an account</button>
          <p>
            Already have an account?<Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default Register
