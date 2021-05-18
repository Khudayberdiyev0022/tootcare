import React from "react";
import style from "./Home1.module.css";
import bg1 from "../../../assets/img/bg1.jpg";
import bg2 from "../../../assets/img/bg2.jpg";
import { BsArrowRight } from "react-icons/bs";

const Home1 = () => {
  return (
    <div className={style.main}>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className={style.opacityImg}></div>
            <div className={style.opacityText}>
              <div>
                <h3>Dentist Services that You Can Trust</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className={style.btnGroup}>
                  <button>
                    See our Services
                    <BsArrowRight />
                  </button>
                  <button>
                    View Course
                    <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div>
            <img className={style.imgCarousel} src={bg1} alt="First slide" />
            </div>
          </div>
          <div className="carousel-item" id="opacityRel">
            <div className={style.opacityImg}></div>
            <div className={style.opacityText}>
              <div>
                <h3>A Brighter Dental Experienced</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className={style.btnGroup}>
                  <button>
                    Make in appointment
                    <BsArrowRight />
                  </button>
                  <button>
                    View Course
                    <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <img className={style.imgCarousel} src={bg2} alt="Second slide" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
