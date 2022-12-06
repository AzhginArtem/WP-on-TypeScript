import { Link } from 'react-router-dom'
import React from 'react'
import newsImage from './../assets/contacts.svg'

export default function Rooms() {
    return(
        <main>
            <div className="news">
                <h2 className="news__title">
                    NEWS
                </h2>
                <div className="news__block">
                    <img src={newsImage} alt="News" className="news__img"/>
                    <h4 className="news__header">
                        Text
                    </h4>
                    <p className="news__subheader">
                        text for news
                    </p>
                </div>
                <div className="news__block">
                    <img src={newsImage} alt="News" className="news__img"/>
                    <h4 className="news__header">
                        Text
                    </h4>
                    <p className="news__subheader">
                        text for news
                    </p>
                </div>
            </div>
            <div className="rooms">
                <Link to='../lobby'>
                    <div className="rooms__block">
                        <h2 className="rooms__title">
                            Name
                        </h2>
                        <p className="rooms__subtitle">
                            ID - Language
                        </p>
                        <p className="rooms__subtitle">
                            Count of players
                        </p>
                    </div>
                </Link>
                <Link to='../lobby'>
                    <div className="rooms__block">
                        <h2 className="rooms__title">
                            Name
                        </h2>
                        <p className="rooms__subtitle">
                            ID - Language
                        </p>
                        <p className="rooms__subtitle">
                            Count of players
                        </p>
                    </div>
                </Link>
                <Link to='../lobby'>
                    <div className="rooms__block">
                        <h2 className="rooms__title">
                            Name
                        </h2>
                        <p className="rooms__subtitle">
                            ID - Language
                        </p>
                        <p className="rooms__subtitle">
                            Count of players
                        </p>
                    </div>
                </Link>
                <Link to='../lobby'>
                    <div className="rooms__block">
                        <h2 className="rooms__title">
                            Name
                        </h2>
                        <p className="rooms__subtitle">
                            ID - Language
                        </p>
                        <p className="rooms__subtitle">
                            Count of players
                        </p>
                    </div>
                </Link>
                <Link to='../lobby'>
                    <div className="rooms__block">
                        <h2 className="rooms__title">
                            Name
                        </h2>
                        <p className="rooms__subtitle">
                            ID - Language
                        </p>
                        <p className="rooms__subtitle">
                            Count of players
                        </p>
                    </div>
                </Link>
                <Link to='../lobby'>
                    <div className="rooms__block">
                        <h2 className="rooms__title">
                            Name
                        </h2>
                        <p className="rooms__subtitle">
                            ID - Language
                        </p>
                        <p className="rooms__subtitle">
                            Count of players
                        </p>
                    </div>
                </Link>
                <Link to='../lobby'>
                    <div className="rooms__block">
                        <h2 className="rooms__title">
                            Name
                        </h2>
                        <p className="rooms__subtitle">
                            ID - Language
                        </p>
                        <p className="rooms__subtitle">
                            Count of players
                        </p>
                    </div>
                </Link>
                <Link to='../lobby'>
                    <div className="rooms__block">
                        <h2 className="rooms__title">
                            Name
                        </h2>
                        <p className="rooms__subtitle">
                            ID - Language
                        </p>
                        <p className="rooms__subtitle">
                            Count of players
                        </p>
                    </div>
                </Link>
                <Link to='../lobby'>
                    <div className="rooms__block">
                        <h2 className="rooms__title">
                            Name
                        </h2>
                        <p className="rooms__subtitle">
                            ID - Language
                        </p>
                        <p className="rooms__subtitle">
                            Count of players
                        </p>
                    </div>
                </Link>
            </div>
        </main>
    )
}