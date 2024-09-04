import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Featured.css";
import BTC from "../assets/btc-img.png";
import { FiArrowUpRight, FiArrowDownRight, FiArrowDown } from "react-icons/fi";

function Featured() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <div className="featured">
      <div className="container">
        {/* left side */}
        <div className="left">
          <h2>جستجوی ارزهای برتر مثل بیت کوین , اتریوم و دوج کوین</h2>
          <p>مشاهده همه دارایی ها , ارزها و NFT ها</p>
          <button className="btn">مشاهده ارزهای بیشتر</button>
        </div>

        {/* right side  */}
        <div className="right">
          {data.map((coin) => (
            <div className="card" key={coin.id}>
              <div className="top">
                <img src={coin.image} alt="" />
              </div>
              <div>
                <h5>{coin.name}</h5>
                <p>{coin.current_price.toLocaleString()}</p>
              </div>

              {coin.price_change_percentage_24h < 0 ? (
                <span className="red">
                  <FiArrowDown className="icon"/>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              ) : (
                <span className="green">
                  <FiArrowUpRight className="icon" />
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
