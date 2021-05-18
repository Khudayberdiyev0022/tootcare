import React from "react";
import style from "./Home3.module.css";
import { list as lists } from "../../extraCards/ExtraCards";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";

const Home3 = () => {
  return (
    <div className={style.main}>
      <Zoom top cascade>
        <p className={style.servicesText}>SERVICES</p>
        <h3>Toothcare Services</h3>
      </Zoom>

      <Flip left cascade>
        <div className={style.blockAll}>
          {lists.map((list, index) => {
            return (
              <div key={index} className={style.cardBox}>
                <div className={style.iconRadius}>
                  <img src={list.img} alt="#" />
                </div>
                <h4 className={style.title}>{list.title}</h4>
                <p className={style.paragraf}>{list.paragraf}</p>
              </div>
            );
          })}
        </div>
      </Flip>
    </div>
  );
}

export default Home3;
