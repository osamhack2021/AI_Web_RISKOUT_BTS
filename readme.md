
# RISKOUT - 국방 리스크 관리 플랫폼 

<div align='center'>
<img src='https://user-images.githubusercontent.com/55467050/136731593-c5206924-6d2d-42dd-a470-4dd9bf0660aa.png'>
- 📺 영상: https://riskout.ithosting.repl.co/
- 📖 문서: https://riskout.ithosting.repl.co/
<p>&nbsp;</p>
<img src='https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge&logo'>
  
</a>
  
<a href='https://github.com/osamhack2021/ai_web_RISKOUT_BTS/blob/master/license.md'>
  
<img src='https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge&logo'>
  
</a>
  
</div>

<div align='center'>

---  
  
### Quick Links
  
<a href='https://riskout.ithosting.repl.co/'>
<img src='https://img.shields.io/badge/HOMEPAGE-gray?style=for-the-badge'>
</a>
  
<a href='https://riskout.ithosting.repl.co/'>
<img src='https://img.shields.io/badge/VIDEO-blue?style=for-the-badge'>
</a>
  
<a href='https://riskout.ithosting.repl.co/'>
<img src='https://img.shields.io/badge/BLOG-lightgrey?style=for-the-badge'>
</a>
</div>

---

## :book: 목차 (Table of Contents)
<details open="open">
  <ol>
    <li><a href="#about-the-project"> ➤ 프로젝트 소개 (Intro)</a></li>
    <li><a href="#features"> ➤ 기능 설명 (Features)</a></li>
      <ul>
        <li><a href="#여론 현황 대시보드">여론 현황 대시보드</a></li>
        <li><a href="#feature2">위협 탐지</a></li>
        <li><a href="#feature3">맞춤형 보고서 생성</a></li>
      </ul>
    <li><a href="#prerequisites"> ➤ 컴퓨터 구성 / 필수 조건 안내 (Prequisites)</a></li>
    <li><a href="#techniques"> ➤ 기술 스택 (Techniques Used)</a></li>
    <li><a href="#Install"> ➤ 설치 안내 (Installation Process)</a></li>
    <li><a href="#getstarted"> ➤ 프로젝트 사용법 (Getting Started)</a></li>
    <li><a href="#team"> ➤ 팀 정보 (Team Information)</a></li>
    <li><a href="#license"> ➤ 저작권 및 사용권 정보 (Copyleft / End User License)</a></li>
  </ol>
</details>

<h2 id="about-the-project"> :monocle_face: 프로젝트 소개</h2>

> 현재 군대에서는, 군 관련 허위 기사나 인터넷에 유포된 기밀글들을 추려내기 위해, 각종 신문에서 군 관련 기사들을 일일히 오려 내고, 여러 사이트들을 캡처합니다. 모은 자료들은 사람이 하나하나 읽어보면서 문제가 될 글들을 식별하고, 보고서로 정리하여 대응팀한테 넘기는 등, 번거로운 작업들을 반복하고 있습니다.
그러다보니 놓치는 사항이 발생하거나 개인적인 편향이 보고서에 포함되는 등의 문제가 발생할 수 있습니다.
> 
> 저희 BTS (방탄수병단)은 이 모든 과정을 자동화시켰습니다. RISKOUT은 인공지능으로 유출된 기밀을 찾아주고, 허위기사를 판별하는 플랫폼입니다. 찾은 문제의 글은 사용자가 커스텀 가능한 맞춤형 보고서로 출력됩니다.
이를 통해 정확도 보장, 인력 감축, 속도 향상 등의 효과 를 얻게 됩니다.

**더 자세한 부분들은 [Homepage](https://riskout.ithosting.repl.co/) 에서 확인하세요.**

<h2 id="features"> :plate_with_cutlery: 기능 설명 (Features)</h2>

**3가지 핵심기능** 은 다음과 같습니다.

* [**`💀 여론 현황 대시보드`**](https://riskout.ithosting.repl.co/) : [여론의 감정 상태](https://namu.wiki/w/%EC%97%AC%EB%A1%A0), [언론 보도](https://namu.wiki/w/%EC%96%B8%EB%A1%A0) 등을 시각화 시켜서 보여주는 대시보드입니다.
* [**`😤 위협 탐지`**](https://riskout.ithosting.repl.co/) : [군사 기밀 유출](https://namu.wiki/w/%EA%B5%B0%EC%82%AC%EA%B8%B0%EB%B0%80), [허위 기사](https://namu.wiki/w/%EA%B0%80%EC%A7%9C%20%EB%89%B4%EC%8A%A4)를 탐지하여 시각화 해줍니다.
* [**`📰 맞춤형 보고서 생성`**](https://riskout.ithosting.repl.co/) : 클릭 몇번으로 [보고서](https://namu.wiki/w/%EB%B3%B4%EA%B3%A0%EC%84%9C)를 커스텀 및 생성할 수 있습니다.


<h3 id="feature1">여론 현황 대시보드</h3>

<p align="center">
  <img src="https://user-images.githubusercontent.com/55467050/136731593-c5206924-6d2d-42dd-a470-4dd9bf0660aa.png" />
</p>

여론 현황 대시보드는 여론 및 언론의 최근 동향을 실시간으로 확인할 수 있도록 다양한 **차트**로 시각화시킨 페이지입니다. 차트는 총 5가지의 형태로 표현됩니다.

* [**`여론 현황`**](https://riskout.ithosting.repl.co) : 각종 기사글, 게시판 등의 커뮤니티 사이트들을 기반으로 언급 비중이 놓은 단어들을 보여주는 [워드 클라우드](https://riskout.ithosting.repl.co)입니다.
* [**`출처별 감정 통계`**](https://riskout.ithosting.repl.co) : 각종 SNS 및 커뮤니티 사이트들을 기반으로 여론의 감정 상태를 분석하여 positive, neutral, negative로 나누어서 표현한 [막대 차트](https://riskout.ithosting.repl.co)입니다.
* [**`통합 감정 통계`**](https://riskout.ithosting.repl.co) : 각종 기사글, 게시판 등의 커뮤니티 사이트들을 기반으로 여론의 감정 상태를 요약하여 보여주는 [파이 차트](https://riskout.ithosting.repl.co)입니다.
* [**`기사 변화량`**](https://riskout.ithosting.repl.co) : 오늘과 근 3일간의 기사량을 비교하여 시각화한 [막대 차트](https://riskout.ithosting.repl.co)입니다.
* [**`나라별 이벤트`**](https://riskout.ithosting.repl.co) : 100개 이상의 기사 및 전자 신문들을 기반으로 나라별 사건 발생도를 시각화 시킨 [맵 차트](https://riskout.ithosting.repl.co)입니다.

<h3 id="feature2">위협 탐지</h3>

<p align="center">
  <img src="https://user-images.githubusercontent.com/55467050/136731593-c5206924-6d2d-42dd-a470-4dd9bf0660aa.png" />
</p>

**기밀 유출 탐지 + 허위 기사 탐지**

[기밀 유출 현황](https://riskout.ithosting.repl.co) 및 [허위 기사](https://riskout.ithosting.repl.co)를 인공지능을 통해 분석하여 탐지해내는 페이지입니다. 인공지능은 탐지한 글들을 기반으로 2차적 검사를 실시하여 기밀어, 인물, 장소를 추출해냅니다. 추출한 항목들은 세부 분석을 위해 *커스텀 필터*로 제공됩니다.

* **기밀 유출 & 허위 기사 탐지** : 탐지한 기밀 유출, 허위 기사 요약 보드 생성.
* **개체 인식 필터** : AI 개체명 인식(Named Entity Recognition)을 통해 탐지글을 2차적으로 분석할 수 있도록 도와주는 필터.
* **검색** : 시맨틱 검색을 통한 탐지 로그 조회 기능.

<h3 id="feature3">맞춤형 보고서 생성</h3>

<p align="center">
  <img src="https://user-images.githubusercontent.com/55467050/136731593-c5206924-6d2d-42dd-a470-4dd9bf0660aa.png" />
</p>

* **기밀 유출 보고** : 기밀 유출 현황을 각종 수치로 시각화시킨 브리핑 보드.
* **허위 기사 보고** : 사용자가 선택한 허위 기사 탐지글들을 기반으로 제작된 AI 자동 요약본.
* **허위 기사 개요** : 타임라인으로 구분된 현재까지의 허위 기사 현황.

<h2 id="prerequisites"> :fork_and_knife: 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)</h2>
<h3> :earth_asia: Browser</h3>

| <img src="https://user-images.githubusercontent.com/55467050/137036906-a6c0f879-5b51-49d3-8e02-d01994f64d18.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/55467050/137036911-ccb70714-15fc-46fb-a074-19bb769727e9.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/55467050/137036913-033a988f-b9c9-4980-8540-5994cfa7e465.jpg" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/55467050/137036914-1a1f080e-9fb3-4b29-a143-517be979e78f.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/55467050/137036916-91328771-5dd5-41fb-a842-8562db3c480c.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :---------: | :---------: | :---------: | :---------: | :---------: |
| Yes | 11+ | Yes | Yes | Yes |

<h2 id="techniques"> 🧱 기술 스택 (Technique Used)</h2>

![techstack](https://user-images.githubusercontent.com/55467050/136777598-e5134090-7747-4b5a-9b08-57c111521d6b.PNG)

<br />

<h2 id="install"> :file_folder: 설치 안내 (Installation Process)</h2>

```bash
$ git clone git주소
$ yarn or npm install
$ yarn start or npm run start
```

<h2 id="getstarted"> :zap: 프로젝트 사용법 (Getting Started)</h2>

로그인 하신 후:

<p align="center">
  <img src="https://gdurl.com/YNdz" />
</p>

*축하해요!* *RISKOUT*의 유저가 되셨습니다.

이제 사용하실 수 있습니다! 🎉
- 📺 Full 영상: https://riskout.ithosting.repl.co


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

<h2 id="license"> 📜 저작권 및 사용권 정보 (Copyleft / End User License)</h2>

프로젝트 RISKOUT은 [MIT License](https://en.wikipedia.org/wiki/MIT_License) 를 따르고 있습니다.

<br />
