import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <main className="main">
            <h1 className="main__title">
            word party
            </h1>
            <Link to="/rooms" className="main__btn">
                PLAY
            </Link>
      </main>
    )
}