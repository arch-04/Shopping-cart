import React from "react";
import style from "../styles/homePage.module.css"
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <div className={style.homeContent}>
      <div className={style.contentTitle}>
        <h1>Welcome to Fast Shop</h1>
        <p>Explore our latest products and deals.</p>
        <div className={style.homeBtn}>
          <Link to="/shop">
            <button>Shop</button>
          </Link>
        </div>
      </div>
    </div>
  )
}


export default HomePage;