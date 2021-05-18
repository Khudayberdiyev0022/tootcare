import React from 'react'
import style from './Home4.module.css'
import affection from '../../../assets/icons/affection.svg'
import calendar from '../../../assets/icons/calendar.svg'
import gum from '../../../assets/icons/gum.svg'
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import CountUp from 'react-countup'

const Home4 = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <Fade left>

        <div className={style.leftBlock}>
          {/* <img src={about} alt="#" /> */}
        </div>
        </Fade>
        <div className={style.rightBlock}>
        <Zoom top cascade>
          <p className={style.aquaText}>WELCOME TO OUR DENTAL CLINIC</p>
          <h3>Toothcare is a Dental Clinic and Innovative Approach to Treatment</h3>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </Zoom>
          <div className={style.countBlock}>
            <Bounce top cascade>
            <div className={style.countBox}>
                <div className={style.countGroup}>
                <img src={affection} alt="#" />
                <p>
                  <CountUp
                  end={3000}
                  duration={10}
                  separator=", "              
                  />
                </p>
                </div>
                <p>HAPPY PATIENTS</p>
            </div>
            <div className={style.countBox}>
              <div className={style.countGroup}>
              <img src={calendar} alt="#" />
                <p>
                  <CountUp 
                  end={24}
                  duration={10}
                  />
                  </p>
              </div>
                <p>YEAR OF EXPERIENCED</p>
            </div>
            <div className={style.countBox}>
                <div className={style.countGroup}>
                <img src={gum} alt="#" />
                <p>
                <CountUp
                  end={2200}
                  duration={10}
                  separator=", "              
                  />
                </p>
                </div>
                <p>PERFORMED TREATMENTS</p>
            </div>
            </Bounce>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home4

