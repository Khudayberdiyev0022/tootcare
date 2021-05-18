import React from 'react'
import style from './Home5.module.css'
import doc1 from '../../../assets/img/doc1.jpg'
import doc2 from '../../../assets/img/doc2.jpg'
import doc3 from '../../../assets/img/doc3.jpg'
import doc4 from '../../../assets/img/doc4.jpg'
import {AiOutlineTwitter, AiOutlineGoogle, AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {doctors} from '../../extraCards/ExtraCards'

const Home5 = () => {
   return (
      <div className={style.main}>
         <div className={style.textTop}>
            <p>Our Doctors</p>
            <h3>Qualified Dentist</h3>
         </div>
         <div className={style.cardAll}>
          {
             doctors.map((doctor, index) => {
                return(
                  <div key={index} className={style.cardBox}>
                  <div className={style.cardImg}>
                     <img src={doctor.img} alt="#" />
                  </div>
                  <div className={style.cardBody}>
                     <p className={style.dr}>{doctor.title}</p>
                     <p className={style.aquaDr}>{doctor.paragraf}</p>
                     <div className={style.iconsGroup}>
                        <div className={style.icon}>
                           <AiOutlineTwitter />
                        </div>
                        <div className={style.icon}>
                           <FaFacebookF />
                        </div>
                        <div className={style.icon}>
                           <AiOutlineGoogle />
                        </div>
                        <div className={style.icon}>
                           <AiOutlineInstagram />
                        </div>
                     </div>
                     <p className={style.lorem}>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                  </div>
               </div>
                )
             })
          }
         </div>
      </div>
   )
}

export default Home5
