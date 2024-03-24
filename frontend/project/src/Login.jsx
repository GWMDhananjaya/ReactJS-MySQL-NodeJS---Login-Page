import React from 'react'

function Login() {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
  return (
    <>
        <div>
            <form action="">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter Email' 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password' 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button>Login</button>
            </form>

        </div>
    </>
  )
}

export default Login