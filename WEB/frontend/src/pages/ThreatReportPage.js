import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import '../App.css';
import icon01 from '../images/sub/btn_icon01.png';
import icon02 from '../images/sub/btn_icon02.png';
import icon03 from '../images/sub/btn_icon03.png';
import Layout from '../layout';
import Sidebar from '../components/Sidebar';

function App() {

	return (
		<Layout>
			<Sidebar />
			<div id="wrap">
				<section id="sub_contents">
					<div className="sub01_wrap">
						<h2 className="h2_tit">Welcome to Risk Out, 민석.</h2>
						<h3>AI로 고퀄리티 위협 현황 보고서를 작성</h3>
						<div className="period">
							<span>기간 : </span>
							<ul className="clfix">
								<li><button>1m</button></li>
								<li><button>6m</button></li>
								<li><button>YTD</button></li>
								<li><button>1y</button></li>
								<li><button>모두</button></li>
							</ul>
						</div>
						<div className="category">
							<span>카테고리</span>
							<ul className="clfix">
								<li className="on"><button>
									<div className="img"><img src={icon01} alt="" /></div>
									<p>북한</p>
								</button></li>
								<li><button>
									<div className="img"><img src={icon02} alt="" /></div>
									<p>테러리스트</p>
								</button></li>
								<li><button>
									<div className="img"><img src={icon03} alt="" /></div>
									<p>해커</p>
								</button></li>
							</ul>
							<button className="submit">작성</button>
						</div>
					</div>
				</section>

			</div>
		</Layout>
	);
}

export default App;