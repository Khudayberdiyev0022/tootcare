import React from "react";
import style from "./Home2.module.css";
import booking from "../../../assets/icons/booking.svg";
import dentist from "../../../assets/icons/dentist_1.svg";
import offer from "../../../assets/icons/offer.svg";

const Home2 = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.leftBlock}>
          <div className={style.leftBox}>
            <p>We are here for you</p>
            <h3>Make An Appointment</h3>
            <form className={style.form}>
              <div className={style.inputLabel}>
                <label>Your full name</label>
                <input type="text" placeholder="Your full name" />
              </div>
              <div className={style.inputLabel}>
                <label>Your full name</label>
                <input type="text" placeholder="Your full name" />
              </div>
            </form>
            <form className={style.form}>
              <div className={style.inputLabel}>
                <label>Your full name</label>
                <input type="text" placeholder="Your full name" />
              </div>
              <div className={style.inputLabel}>
                <label>Your full name</label>
                <input type="text" placeholder="Your full name" />
              </div>
            </form>
            <form className={style.form}>
              <div className={style.inputLabel}>
                <label>Your full name</label>
                <input type="text" placeholder="Your full name" />
              </div>
              <div className={style.inputLabel}>
                <label>Your full name</label>
                <select>
                  <option>Dr.Llyod Wilson</option>
                  <option>Dr.Smith</option>
                  <option>Dr.Beknoome</option>
                  <option>Dr.Alisee Jane</option>
                </select>
              </div>
            </form>
            <form className={style.form}>
              <div className={style.inputLabel}>
                <label>Message</label>
                <textarea rows="10" placeholder="Message..."></textarea>
              </div>
            </form>
            <form className={style.form}>
              <div className={style.inputLabel}>
                <button>Send Message</button>
              </div>
            </form>
          </div>
        </div>
        <div className={style.rightBlock}>
          <div className={style.rightBox}>
            <p className={style.learnText}>Learn Anything</p>
            <h2>We Offer Best Dental Services</h2>
            <div className={style.cardsGroup}>
              <div className={style.cardBlock}>
                <div className={style.cardIcon}>
                  <img src={booking} alt="#" />
                </div>
                <div className={style.cardText}>
                  <h4>Easy Booking</h4>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>

              <div className={style.cardBlock}>
                <div className={style.cardIcon}>
                  <img src={dentist} alt="#" />
                </div>
                <div className={style.cardText}>
                  <h4>Easy Booking</h4>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              <div className={style.cardBlock}>
                <div className={style.cardIcon}>
                  <img src={offer} alt="#" />
                </div>
                <div className={style.cardText}>
                  <h4>Easy Booking</h4>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
