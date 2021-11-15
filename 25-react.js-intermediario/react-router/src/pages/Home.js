import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <h1>Página Inicial</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/users">Usuários</Link>
                </li>
            </ul>
        </>
    )
}

export default Home