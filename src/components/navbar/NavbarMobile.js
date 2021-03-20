import React, { useState } from "react";
import style from "./NavbarMobile.module.css";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className={style.main}>
      <div className={style.menuBar}>
        <div className={style.btnMenu}>
          <button>Make in Appointment</button>
        </div>
        <div className={style.menuIcon}>
          <h3 onClick={() => setClicked(!clicked)} >Menu</h3>
          <RiMenu2Line onClick={() => setClicked(!clicked)} />
        </div>
      </div>
      {clicked && (
        <div className={style.optionBar}>
          <Link href="#.">Home</Link>
          <Link href="#.">Dentist</Link>
          <Link href="#.">About</Link>
          <Link href="#.">Services</Link>
          <Link href="#.">Pricing</Link>
          <Link href="#.">Blog</Link>
          <Link href="#.">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
