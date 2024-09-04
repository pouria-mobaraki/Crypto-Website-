import React from "react";
import "./Hero.css";
import Crypto from '../assets/hero-img.png'

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        {/* left side  */}
        <div className="left">
          <p>خرید و فروش ارز با استفاده از حساب بازنشستگی</p>
          <h1>سرمایه گذاری در ارزهای دیجیتال با روش شخصی</h1>
          <p>خرید , فروش و معامله انواع ارزهای دیجیتال</p>
          <div className="input-container">
            <input type="email" placeholder="ایمیل خود را وارد کنید" />
            <button className="btn">بیشتر</button>
          </div>
        </div>

        {/* right side  */}
        <div className="right">
             <div className="img-container">
                <img src={Crypto} alt="" />
             </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
