import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/User"

import "./Dashboard.css"

function Dashboard() {//className sufix: 45C (pages/dashboard/Dashboard) 

    const { signOut, gameRecords }: any = useContext(UserContext)

    const [maxGameDuration, setMaxGameDuretion] = useState<number>(0)
    const [maxHits, setMaxHits] = useState<number>(0)
    const [maxMistakes, setMaxMistakes] = useState<number>(0)

    useEffect(() => { 

        setMaxGameDuretion(gameRecords.maxGameDuration) 
        setMaxHits(gameRecords.maxHits)
        setMaxMistakes(gameRecords.maxMistakes)
        
    }, [gameRecords])

    return (

        <div className="rootNode_45C">

            <p className="pageTitle_45C">Dashboard</p>

            <div className="bodyArea_45C">

                <div className="statisticsArea_45C">

                    <h1>Estatísticas</h1>

                    <div className="statisticsData_45C">

                        <p className="gameStatistics_45C">Acertos: {maxHits}</p>

                        <p className="gameStatistics_45C">Erros: {maxMistakes}</p>

                        <p className="gameStatistics_45C">Tempo de jogo: {maxGameDuration}</p>

                    </div>


                </div>

                <div className="optionButtons_45C">

                    <Link className="buttonStyle_45C" to="/game">Jogar</Link>

                    <button className="buttonStyle_45C" onClick={() => signOut()}>Deslogar</button>

                </div>
            </div>
        </div>
    )
}

export default Dashboard