import React from "react";

export default function Sidebar() {

    return (
        <header id="sub_header">
            <h1><a href="/"><img src="../images/sub/logo_w.png" alt="" /></a></h1>
            <button className="prev_btn"><img src="../images/sub/prev_btn.png" alt="" /></button>
            <ul className="sub_menu">
                <li className="on"><a href="/">위협보고</a></li>
                <li><a href="/">기밀 유출 현황</a></li>
                <li><a href="/">허위 정보 검사</a></li>
                <li><a href="/">로그아웃</a></li>
            </ul>
            <p className="copyright">Copyright © 2021. RISKOUT All right reserved.</p>
        </header>
    )
}