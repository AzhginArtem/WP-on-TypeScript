/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from "react-router-dom";
import HomeImage from './../../assets/home.svg'
import RulesImage from './../../assets/rules.svg'
import AccountImage from './../../assets/profile.png'
import ContactsImage from './../../assets/contacts.svg'
import './Header.sass';
import { useState } from "react";

export default function Header() {
    let [rulesVisibility, setRulesVisibility] = useState(false);
    let [accountVisibility, setAccountVisibility] = useState(false);
    let [contactsVisibility, setContactsVisibility] = useState(false);

    const stateChanger = () => {
        setRulesVisibility(false);
        setAccountVisibility(false);
        setContactsVisibility(false);
    } 

    const handleRulesClick = () => {
        stateChanger()
        setRulesVisibility(!rulesVisibility);
    }

    const handleAccountClick = () => {
        stateChanger()
        setAccountVisibility(!accountVisibility);
    }

    const handleContactsClick = () => {
        stateChanger()
        setContactsVisibility(!contactsVisibility);
    }

    return (
        <header className='header'>
            <ul className='header__menu'>
                <li className='header__item'>
                    <Link to="/" className='header__link'>
                        <img src={HomeImage} alt='Home'/>
                    </Link>
                </li>
                <li className='header__item'>
                    <a onClick={handleRulesClick} className='header__link' href='#'>
                        <img src={RulesImage} alt='Rules'/>
                    </a>
                </li>
                <li className='header__item'>
                    <a onClick={handleAccountClick} className='header__link' href='#'>
                        <img src={AccountImage} alt='Account'/>
                    </a>
                </li>
                <li className='header__item'>
                    <a onClick={handleContactsClick} className='header__link' href='#'>
                        <img src={ContactsImage} alt='Contacts'/>
                    </a>
                </li>
            </ul>
            <div className={rulesVisibility ? "module" : "module hidden"}>
                <h2 className="module__title">Rules</h2>
                <p className="module__subtitle">asiuudhosaojcamsncpsamncipmxlknzoczsodfhueaofjidjosjfisjajfdoisdf</p>
            </div>
            <div className={accountVisibility ? "module" : "module hidden"}>
                <h2 className="module__title">Account</h2>
                <p className="module__subtitle">asiuudhosaojcamsncpsamncipmxlknzoczsodfhueaofjidjosjfisjajfdoisdf</p>
            </div>
            <div className={contactsVisibility ? "module" : "module hidden"}>
                <h2 className="module__title">Contacts</h2>
                <p className="module__subtitle">asiuudhosaojcamsncpsamncipmxlknzoczsodfhueaofjidjosjfisjajfdoisdf</p>
            </div>
        </header>
    )
}
