import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.navbar}>
                    <Link to="/">Home</Link>
                    <Link href="#.">Dentist</Link>
                    <Link href="#.">About</Link>
                    <Link href="#.">Services</Link>
                    <Link href="#.">Pricing</Link>
                    <Link href="#.">Blog</Link>
                    <Link href="#.">Contact</Link>
                </div>
                <div className={style.navBtn}>
                    <button>Make in Appointment</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
