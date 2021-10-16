import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
// import '../../css/Header.css';
import logo from '../../images/sub/logo_w.png';
import logo_btn from '../../images/sub/prev_btn.png';

function Header(props) {

  const history = useHistory();

  return (
    <>
      <header id="sub_header">
        <Link to="/">
          <h1>
            <img src={logo} alt="logo" />
          </h1>
        </Link>
        <button
          onClick={() => {
            history.goBack();
          }}
          className="prev_btn"
        >
          <img src={logo_btn} alt="/" />
        </button>
        <ul className="sub_menu">
          <li>
            <Link to="/">언론 동향</Link>
          </li>
          <li>
            <Link to="/secret">탐지 현황</Link>
          </li>
          <li>
            <Link to="/riskreport">리포트</Link>
          </li>
          {props.modal === false ? ( // not logged in
            <li>
              <Link to="/login">로그인</Link>
            </li>
          ) : (
            <li>
              <Link onClick={localStorage.removeItem('token')} to="/">
                로그 아웃
              </Link>
            </li>
          )}
        </ul>
        <p className="copyright">
          Copyright © 2021. RISKOUT All right reserved.
        </p>
      </header>
    </>
  );
}

export default Header;
