import React from 'react'
import style from './TopWrap.module.css'
import {BsClock , BsPhone , BsInfoCircle} from 'react-icons/bs'

const TopWrap = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
              <div className={style.brandName}>
              <div className={style.brandGroup}>
                    <a href="https://google.com">Toothcare</a>
                    <p>Dental Clinic Services</p>
                </div>
              </div>
                <div className={style.contactInform}>
                    <div className={style.icon}><BsClock /></div>
                <div className={style.box}>
                    <h5>Monday-Friday</h5>
                    <p>8:00AM-8:00PM</p>
                </div>
                <div className={style.icon}><BsPhone /></div>
                <div className={style.box}>
                    <h5>Call Us</h5>
                    <p>+998991234567</p>
                </div>
                <div className={style.icon}><BsInfoCircle /></div>
                <div className={style.box}>
                    <h5>Location</h5>
                    <p>Yunusabad Street, Uzbekistan</p>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default TopWrap
