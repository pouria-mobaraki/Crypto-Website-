import React from 'react'
import './Signup.css'
import Crypto from '../assets/trade.png'

function Signup() {
  return (
    <div className='signup'>
      <div className='container'>
        {/* left */}
        <div className='left'>
            <img src={Crypto} alt="" />
        </div>

        {/* right */}
         <div className='right'>
            <h2>کسب سود مثبت با ارزهای دیجیتال</h2>
            <p>بهترین بازدهی در نسبت ریسک به سود و افزایش دارایی</p>
            <div className='input-container'>
                <input type="email" placeholder="ایمیل خود را وارد کنید" />
                <button className='btn'>بیشتر بدانید</button>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Signup