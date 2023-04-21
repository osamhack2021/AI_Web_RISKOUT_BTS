
# RISKOUT - 국방 리스크 관리 플랫폼 (Risk Management Platform for Military)

<div align='center'>
<img src='https://user-images.githubusercontent.com/55467050/138075451-2b49214f-5720-4fc2-9c79-6c52eaad17cc.gif'>
<p>&nbsp;</p>
<img src='https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge&logo'>
</a>
  
<a href='https://github.com/osamhack2021/ai_web_RISKOUT_BTS/blob/master/license.md'>
  
<img src='https://img.shields.io/badge/License-GPL 3.0-black?style=for-the-badge&logo'>
  
</a>

  
</div>

<div align='center'>

---  
  
### Quick Links
  
<a href='https://riskout.org'>
<img src='https://img.shields.io/badge/HOMEPAGE-gray?style=for-the-badge'>
</a>
  
<a href='https://youtu.be/Lwg-OQIIvGA'>
<img src='https://img.shields.io/badge/VIDEO-blue?style=for-the-badge'>
</a>
  
<a href='https://navycert.notion.site/RISKOUT-401be9201053401c8654592d4264b6cd'>
<img src='https://img.shields.io/badge/DOCS-00ADD8?style=for-the-badge'>
</a>
	
<a href='https://openapi.riskout.org/docs'>
<img src='https://img.shields.io/badge/OPEN API-black?style=for-the-badge'>
</a>
	
</div>

---

## :book: 목차 (Table of Contents)
<details open="open">
  <ol>
    <li><a href="#about-the-project"> ➤ 프로젝트 소개 (Intro)</a></li>
    <li><a href="#features"> ➤ 기능 설명 (Features)</a></li>
      <ul>
        <li><a href="#feature1">위협 대시보드 (Risk Dashboard)</a></li>
        <li><a href="#feature2">위협 탐지 (Risk Detection)</a></li>
        <li><a href="#feature3">보고서 생성 (Report Generator)</a></li>
      </ul>
    <li><a href="#getstarted"> ➤ 프로젝트 사용법 (Getting Started)</a></li>
    <li><a href="#prerequisites"> ➤ 컴퓨터 구성 / 필수 조건 안내 (Prequisites)</a></li>
    <li><a href="#techniques"> ➤ 기술 스택 (Techniques Used)</a></li>
    <li><a href="#Install"> ➤ 설치 안내 (Installation Process)</a></li>
    <li><a href="#team"> ➤ 팀 정보 (Team Information)</a></li>
    <li><a href="#license"> ➤ 저작권 및 사용권 정보 (Copyleft / End User License)</a></li>
  </ol>
</details>

<h2 id="about-the-project"> :monocle_face: 프로젝트 소개 (Intro)</h2>

> 군대에게는 여러 Risk(위협)이 존재합니다. 스파이, 해커, 테러리스트 등의 외부적인 위협도 존재하지만, 시스템이 잘 구축된 현재의 군대의 실질적인 위협은 군사 기밀 유출, 허위 기사, 악성 게시글 등의 내부적인 위협들입니다. 그럼 군대는 이런 내부 위협을 어떻게 식별하고 관리할까요?
> 
> 현재 군대는 인터넷에 유출된 기밀글 및 허위기사등의 악성글을 추려내기 위해 24시간동안 무한정 검색 및 캡처하고 각종 신문에서 기사를 일일히 오려냅니다. 모은 자료는 사람이 일일이 읽어보면서 문제가 될 글들을 식별하고, 보고서로 정리해서 대응팀한테 넘기는 등 번거로운 작업들을 반복하고 있습니다. 그러다보니 놓치는 일이 발생하거나, 대응이 늦어지는 일이 발생할 수 있습니다.
>
> 그래서 생각했습니다. 군사기밀 및 허위기사등의 악성글을 자동으로 식별하고 관리 할 수 있는 All-in-One 플랫폼을 만들어보자. RISKOUT이 탄생하게 된 이유입니다.

<h2 id="features"> :plate_with_cutlery: 기능 설명 (Features)</h2>

**3가지 핵심기능**은 다음과 같습니다.

* [**`💀 위협 대시보드(Risk Dashboard)`**](https://navycert.notion.site/4a6b066671cc44e78ca5be32b29aa72a): 여론의 감정 상태, 언론 보도 현황등을 시각화해주는 대시보드입니다.
* [**`😤 위협 탐지(Risk Detection)`**](https://navycert.notion.site/503f48a54cfb451a8074ed904140538d) : 군사 기밀 유출, 허위 기사 등의 악성글을 자동으로 탐지분석해주는 위협 탐지페이지 입니다.
* [**`📰 보고서 생성(Report Generator)`**](https://navycert.notion.site/2726ca50f1ac4d0aae28792aa8ae117e) : 클릭 몇번만으로 커스텀 가능한 위협 보고서를 자동으로 생성해줍니다.


<h3 id="feature1">위협 대시보드 (Risk Dashboard)</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/55467050/138043876-fcd5d91c-fc02-4941-ade1-680ddc3011eb.gif" />
</p>

### 오늘의 키워드 (Keywords for Today)

> 오늘의 키워드에 대한 세부적인 내용은 [여기](https://navycert.notion.site/4a6b066671cc44e78ca5be32b29aa72a)에서 확인하실 수 있습니다.

각종 기사글, 게시판 등의 커뮤니티 사이트들을 기반으로 언급 비중이 놓은 단어들을 시각화한 워드 클라우드입니다.

![words](https://user-images.githubusercontent.com/55467050/137931048-52ce6c3e-ca33-4845-9af4-b282a3ecc6c5.PNG)

### 감정 통계 차트 (Emotion Recognition Chart)

> 감정 통계에 대한 세부적인 내용은 [여기](https://navycert.notion.site/4a6b066671cc44e78ca5be32b29aa72a)에서 확인하실 수 있습니다.

각종 SNS 및 커뮤니티 사이트들을 기반으로 여론의 감정 상태를 분석하여 positive, neutral, negative로 나누어 표현한 차트들입니다.

![emopies](https://user-images.githubusercontent.com/55467050/138044572-2d646ec9-1055-43df-8d68-0055744e778a.gif)

### 오늘의 트렌드 (Today's Top Trend)

> 오늘의 트렌드에 대한 세부적인 내용은 [여기](https://navycert.notion.site/4a6b066671cc44e78ca5be32b29aa72a)에서 확인하실 수 있습니다.

그날 가장 많이 언급된 기사들을 선정하여 FactCheck를 통해 진실 추정, 중립 추정, 허위 추정으로 판별 및 분류하여 보여줍니다.

![trend](https://user-images.githubusercontent.com/55467050/137927004-f375f4ca-7548-494f-ac3d-caa087b6563d.PNG)

### 나라별 이벤트 (Events by Country)

> 나라별 이벤트에 대한 세부적인 내용은 [여기](https://navycert.notion.site/4a6b066671cc44e78ca5be32b29aa72a)에서 확인하실 수 있습니다.

국제 기사들을 분석해 국가별 이벤트 트래픽을 보여주는 지도입니다.

![events](https://user-images.githubusercontent.com/55467050/137927295-facce426-7fab-44a5-8dc3-e7f02f850586.PNG)

### 기사 변화량 (Article Variation)

> 기사 변화량에 대한 세부적인 내용은 [여기](https://navycert.notion.site/4a6b066671cc44e78ca5be32b29aa72a)에서 확인하실 수 있습니다.

최근 기사량들을 대조하여 기사량의 변화를 시각화한 차트입니다.

![num_articles](https://user-images.githubusercontent.com/55467050/137926297-1c4b6417-4507-49e1-8f94-09cde4b437f4.PNG)

<h3 id="feature2">위협 탐지 (Risk Detection)</h3>

> 탐지 현황에 대한 세부적인 내용은 [여기](https://navycert.notion.site/503f48a54cfb451a8074ed904140538d)에서 확인하실 수 있습니다.

기밀 유출 및 허위기사등의 악성글들을 인공지능을 통해 자동으로 분석하여 탐지합니다. 이후 빠르게 대응할수 있도록 요약된 내용 및 글의 출처 등을 제공합니다.

![detect](https://user-images.githubusercontent.com/55467050/137923976-61f54c5a-aa1a-4258-a27d-a95eb1620c48.gif)


### 개체 인식 필터 (NER Filter)

> 개체 인식 필터에 대한 세부적인 내용은 [여기](https://navycert.notion.site/503f48a54cfb451a8074ed904140538d)에서 확인하실 수 있습니다.

개체명 인식(Named Entity Recognition) 기술로 사람, 조직, 시간 등의 유형들을 추출, 보다 세부적인 분석을 할 수 있게 도와주는 검색 필터로 제공합니다.

![ner](https://user-images.githubusercontent.com/55467050/137922056-ff4942aa-feba-4a8d-b1c0-76106321b10f.gif)

<h3 id="feature3">자동 보고서 생성 (Automated Report Generation)</h3>

> 보고서 생성에 대한 세부적인 내용은 [여기](https://navycert.notion.site/2726ca50f1ac4d0aae28792aa8ae117e)에서 확인하실 수 있습니다.

사용자가 확인한 위협들을 클릭 몇번만으로 자동으로 정돈 및 요약하여 보고서의 형태로 생성해줍니다. 생성된 보고서는 PDF로 출력가능합니다.
<p align="center">
</p>

![report](https://user-images.githubusercontent.com/55467050/138045273-d5312cdd-6842-492d-8bfe-c77a7a7b6f22.gif)

![report_full](https://user-images.githubusercontent.com/55467050/137937761-929347ff-c8a5-4ac1-8608-bfa8da408e5d.PNG)


<h2 id="getstarted"> :zap: 프로젝트 사용법 (Getting Started)</h2>

로그인 하신 후:

<p align="center">
  <img src="https://user-images.githubusercontent.com/55467050/137937102-0c9940bf-8b78-4a4e-9392-1376d96066cc.PNG" />
</p>

*축하해요!* *RISKOUT*의 유저가 되셨습니다.

이제 사용하실 수 있습니다! 🎉
- 📺 Full 영상: https://www.youtube.com/watch?v=Lwg-OQIIvGA

<h2 id="prerequisites"> :fork_and_knife: 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)</h2>
<h3> :earth_asia: Browser</h3>

| <img src="https://user-images.githubusercontent.com/55467050/137036906-a6c0f879-5b51-49d3-8e02-d01994f64d18.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/55467050/137036911-ccb70714-15fc-46fb-a074-19bb769727e9.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/55467050/137036913-033a988f-b9c9-4980-8540-5994cfa7e465.jpg" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/55467050/137036914-1a1f080e-9fb3-4b29-a143-517be979e78f.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/55467050/137036916-91328771-5dd5-41fb-a842-8562db3c480c.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :---------: | :---------: | :---------: | :---------: | :---------: |
| Yes | 11+ | Yes | Yes | Yes |


<h3> 💾 Versions</h3>

| <img src="https://user-images.githubusercontent.com/55467050/137045584-9bfa3e0f-eafa-49b2-b10a-6cd8bb753e66.png" alt="Pytorch" width="16px" height="16px" /> Pytorch | <img src="https://user-images.githubusercontent.com/55467050/137045573-6161819d-24b5-4130-9f96-d261eee4a723.png" alt="react" width="16px" height="16px" /> React | <img src="https://user-images.githubusercontent.com/55467050/137045575-88aa70a8-3c3d-46d4-b975-d43ffc7f1891.png" alt="Django" width="16px" height="16px" /> Django | 🍃 Mongo DB | 🐳 Docker | Ⓜ️ MUI |
| :---------: | :---------: | :---------: | :---------: | :---------: | :---------: |
| 1.9.0+ | 17.0.2+ | 3.0.7+ | 4.4+ | 20.10.x+ | 5.0.1+ |
<br/>

<h2 id="techniques"> 🧱 기술 스택 (Technique Used)</h2>

![techstack](https://user-images.githubusercontent.com/55467050/136777598-e5134090-7747-4b5a-9b08-57c111521d6b.PNG)

### AI
- [Colab](https://colab.research.google.com/)으로 AI 모델 학습:
  - [`KoBERT`](https://github.com/SKTBrain/KoBERT) — 감성분석, 가짜뉴스판별, 보고서요약에 사용.
  - [`DistilKoBERT`](https://github.com/monologg/DistilKoBERT) — Named Entity Recognition(개체명인식)에 사용.
- 사용한 데이터셋:
  - [`Naver-nsmc`](https://github.com/e9t/nsmc) — 감성분석모델에 사용한 데이터셋.
  - [`Dacon 문서요약`](https://dacon.io/competitions/official/235671/data) — 한국어 문서 추출요약에 사용한 데이터셋.
  - [`SNU Factcheck`](https://factcheck.snu.ac.kr/) — 가짜뉴스 판별에 사용한 데이터셋.
  - [`Naver NLP Challenge 2018`](https://github.com/monologg/naver-nlp-challenge-2018) — Named Entity Recognition(개체명인식)에 사용한 데이터셋.
- [Pytorch](https://pytorch.org/) 라이브러리를 통한 딥러닝 빌드:
  - [`Transformers`](https://huggingface.co/transformers/) — NLP모델의 아키텍처 제공.
  - [`FastAPI`](https://fastapi.tiangolo.com/) — AI 기능 API 구현.

### Backend

- [DRF](https://www.django-rest-framework.org/)를 통한 백엔드 구축:
  - [`Mongo DB`](https://www.mongodb.com/) — 데이터베이스 구축.
- [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) 이용하여 크롤링:
  - `Crawler` — 각종 오픈게시판, SNS, 뉴스사이트에서 언어데이터를 추출하는데에 사용.

### Frontend

- [React](https://reactjs.org/)를 이용한 프론트엔드 구축:
  - [`MUI`](https://mui.com/) — MUI(Material UI) 컴포넌트 라이브러리 활용.
  - `React router` — 컴포넌트 네비게이션에 사용.
- [Recoil](https://recoiljs.org/)을 통한 리액트 상태 관리:
  - `Atom` — 컴포넌트 상태 단위 분리기능 사용.
  - `Selector` — Atom에 의존하는 동적인 데이터 생성 기능 사용. 

<h2 id="install"> :file_folder: 설치 안내 (Installation Process)</h2>


먼저, **node.js**, **yarn**, **docker**, 그리고 **docker-compose**를 다운로드하세요. **node.js**는 버전 `14.x`이상이어야 합니다.

프로젝트를 **Clone** 합니다.
```bash
git clone https://github.com/osamhack2021/ai_web_RISKOUT_BTS
```

**Secret 파일들**을 작성합니다.
> **Secret 파일 작성**에 관해서는 [여기서](https://navycert.notion.site/851fa5b94b874ddbbd12652ad3a81542) 확인하세요.

프로젝트를 빌드 및 실행합니다.
```bash
./run.sh
```

[http://localhost:8002](http://localhost:8002)로 접속합니다.
<br />

이제 사용하실 수 있습니다! 🎉

<h2 id="team"> 💁🏻‍♀️💁🏻‍♂️ 팀 정보 (Team Information)</h2>

<table width="900">
<thead>
<tr>
<th width="100" align="center">Profile</th>
<th width="100" align="center">Name</th>
<th width="250" align="center">Role</th>
<th width="150" align="center">Github</th>
<th width="300" align="center">E-mail</th>
</tr> 
</thead>
<tbody>
	
<tr>
<td width="100" align="center"><img src="https://user-images.githubusercontent.com/55467050/136719709-4d184f89-ba47-4db8-be91-ea50456b4bb5.png" width="60" height="60"></td>
<td width="100" align="center">이민석<br>(팀장)</td>
<td width="250">Product Manager<br>AI Developer</td>
<td width="150" align="center">	
	<a href="https://github.com/mslee300">
	<img src="https://img.shields.io/badge/mslee300-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="300" align="center">
<a href="mailto:mslee300@bu.edu"><img src="https://img.shields.io/static/v1?label=&message=mslee300@bu.edu&color=lightblue&style=flat-square&logo=gmail"></a>
</tr>
	
<tr>
<td width="100" align="center"><img src="https://user-images.githubusercontent.com/55467050/136719707-7ded6f27-5360-4f8e-bf25-f1217da6e068.png" width="60" height="60"></td>
<td width="100" align="center">조정환</td>
<td width="250">AI Developer</td>
<td width="150" align="center">	
	<a href="https://github.com/playff">
	<img src="https://img.shields.io/badge/playff-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="300" align="center">
<a href="mailto:chotnt741@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=chotnt741@gmail.com&color=lightblue&style=flat-square&logo=gmail"></a>
</tr>
	
<tr>
<td width="100" align="center"><img src="https://user-images.githubusercontent.com/55467050/136719706-de01f100-7f5b-4a9e-ad89-899764c9949f.png" width="60" height="60"></td>
<td width="100" align="center">서명근</td>
<td width="250">Frontend Engineer</td>
<td width="150" align="center">	
	<a href="https://github.com/simonseo">
	<img src="https://img.shields.io/badge/simonseo-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="300" align="center">
<a href="mailto:simonseo.doubles@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=simonseo.doubles@gmail.com&color=lightblue&style=flat-square&logo=gmail"></a>
</tr>
	
<tr>
<td width="100" align="center"><img src="https://user-images.githubusercontent.com/55467050/136719704-ea182337-b327-41c9-a7d7-9b26957ef01c.png" width="60" height="60"></td>
<td width="100" align="center">김태원</td>
<td width="250">Backend Engineer</td>
<td width="150" align="center">	
	<a href="https://github.com/dev-taewon-kim">
	<img src="https://img.shields.io/badge/devtaewonkim-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="300" align="center">
<a href="mailto:dev.taewon.kim@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=dev.taewon.kim@gmail.com&color=lightblue&style=flat-square&logo=gmail"></a>
</tr>
	
<tr>
<td width="100" align="center"><img src="https://user-images.githubusercontent.com/55467050/136719703-84288e35-1269-4dc7-a510-c65a41c09346.png" width="60" height="60"></td>
<td width="100" align="center">이원빈</td>
<td width="250">Frontend Engineer</td>
<td width="150" align="center">	
	<a href="https://github.com/liboto00">
	<img src="https://img.shields.io/badge/liboto00-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="300" align="center">
<a href="mailto:wonbinlee00@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=wonbinlee00@gmail.com&color=lightblue&style=flat-square&logo=gmail"></a>
</tr>
	
<tr>
<td width="100" align="center"><img src="https://user-images.githubusercontent.com/55467050/136719700-f2e9120e-1250-4d6c-9935-a89af62d3b64.png" width="60" height="60"></td>
<td width="100" align="center">박용준</td>
<td width="250">Backend Engineer</td>
<td width="150" align="center">	
	<a href="https://github.com/flydog98">
	<img src="https://img.shields.io/badge/flydog98-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="300" align="center">
<a href="mailto:guinnessoverflow@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=guinnessoverflow@gmail.com&color=lightblue&style=flat-square&logo=gmail"></a>
</tr>
	
<tr>
<td width="100" align="center"><img src="https://user-images.githubusercontent.com/55467050/136719708-dfea5244-8922-4c1c-879e-23aa58689de8.png" width="60" height="60"></td>
<td width="100" align="center">서종찬</td>
<td width="250">Frontend Engineer</td>
<td width="150" align="center">	
	<a href="https://github.com/Seo-Faper">
	<img src="https://img.shields.io/badge/SeoFaper-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="300" align="center">
<a href="mailto:dswhdcks@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=dswhdcks@gmail.com&color=lightblue&style=flat-square&logo=gmail"></a>
</tr>
	
</tr>
</tbody>
</table>
</br>

<h2 id="license"> 📜 저작권 및 사용권 정보 (Copyleft / End User License)</h2>

프로젝트 RISKOUT은 [GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0.en.html)를 따르고 있습니다.

<br />
<br />

