import React from "react";
import "./Footer.css";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="col col-1">
          <h2>
            دیجی <span className="primary">ارز</span>
          </h2>
        </div>
        <div className="col">
          <h5>پشتیبانی</h5>
          <span className="bar"></span>
          <a href="/">ارتباط با ما</a>
          <a href="/">چت کردن</a>
          <a href="/">پشتیبانی</a>
          <a href="/">خدمات</a>
        </div>
        <div className="col">
          <h5>توسعه دهندگان</h5>
          <span className="bar"> </span>
          <a href="/">فضای ابری</a>
          <a href="/">تجارت</a>
          <a href="/">حرفه ای</a>
          <a href="/">داده ها</a>
        </div>
        <div className="col">
          <h5>شرکت</h5>
          <span className="bar"> </span>
          <a href="/">درباره ما</a>
          <a href="/">اطلاعات</a>
          <a href="/">حقوقی</a>
          <a href="/">امنیت</a>
        </div>
        <div className="col">
          <h5>شبکه های اجتماعی</h5>
          <span className="bar"> </span>
          <a href="/">
            <FaFacebook className="icon" />
          </a>
          <a href="/">
            <FaTwitter className="icon" />
          </a>
          <a href="/">
            <FaLinkedin className="icon" />
          </a>
          <a href="/">
            <FaGithub className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
