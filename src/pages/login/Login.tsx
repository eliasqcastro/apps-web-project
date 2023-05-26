import { useContext, useEffect, useState } from "react"
import "./Login.css"
import { UserContext } from "../../context/User"
import { Link, useNavigate } from "react-router-dom"

function Login() {

    const { user, signIn, loading }: any = useContext(UserContext)

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const navigate = useNavigate()

    useEffect(() => {

        if (user) navigate("/dashboard")

    }, [user])

    if (loading) {

        return <p>Loading...</p>
    }

    return (
 
        <div className="RootNode">

            <div className="LoginBox">

                <h1>Login</h1>

                <div className="InputData">
                    <h2>E-mail</h2>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" />
                </div>

                <div className="InputData">
                    <h2>Password</h2>
                    <input onChange={(e) => setPassword(e.target.value)} type="text" />
                </div>

                <div className="OptionButtons">
                    <button onClick={() => signIn(email, password)}>Sigin In</button>
                    <button onClick={() => alert("Not inplemented.")}>Sigin Up</button>
                </div>
            </div>
        </div>
    )
}

export default Login