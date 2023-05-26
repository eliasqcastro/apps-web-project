import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/User"

import "./Dashboard.css"

function Dashboard() {

    const { signOut }:any = useContext(UserContext)
 
    return (
        <div className="RootNode">
            <h1>Dashboard</h1>
            <Link to="/game">Jogar</Link>
            <Link to="/dev">Dev</Link>
            <button onClick={() => signOut()}>Deslogar</button>
        </div>
    )
}

export default Dashboard