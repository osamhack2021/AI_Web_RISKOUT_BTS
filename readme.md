
# RISKOUT - Risk Management Platform for Military

<div align='center'>
<img src='https://user-images.githubusercontent.com/55467050/138043876-fcd5d91c-fc02-4941-ade1-680ddc3011eb.gif'>
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

## :book: Table of Contents
<details open="open">
  <ol>
    <li><a href="#about-the-project"> ➤ Intro</a></li>
    <li><a href="#features"> ➤ Features</a></li>
      <ul>
        <li><a href="#feature1">Risk Dashboard</a></li>
        <li><a href="#feature2">Risk Detection</a></li>
        <li><a href="#feature3">Report Generator</a></li>
      </ul>
    <li><a href="#getstarted"> ➤ Getting Started</a></li>
    <li><a href="#prerequisites"> ➤ Prequisites</a></li>
    <li><a href="#techniques"> ➤ Techniques Used</a></li>
    <li><a href="#Install"> ➤ Installation Process</a></li>
    <li><a href="#team"> ➤ Team Information</a></li>
    <li><a href="#license"> ➤ Copyleft / End User License</a></li>
  </ol>
</details>

<h2 id="about-the-project"> :monocle_face: Intro</h2>

> There are numerous threats to military. There are external threats such as spies, hackers, terrorists, but the actual threats of current well-established military are internal threats such as leaked secrets, fake news, and malicious posts. So how does military identify and manage these?
> 
> Currently, military searches and captures leaked documents and fake news 24/7 and manually cuts news from newspapers. The collected data is then read and organized by soldiers into reports, finally handing them over to the response team. Due to the long and complex process, human errors or delayed responses may occur.
>
> So we thought. Let's create an all-in-one platform that can automatically identify and manage malicious risks such as leaked secrets and fake news. That's when RISKOUT was born.

<h2 id="features"> :plate_with_cutlery: Features</h2>

**3 Main Features are**:

* [**`💀 Risk Dashboard`**](https://navycert.notion.site/4a6b066671cc44e78ca5be32b29aa72a): Dashboard that visualizes public sentiment and the current state of media coverage
* [**`😤 Risk Detection`**](https://navycert.notion.site/503f48a54cfb451a8074ed904140538d) : Threat detection page that automatically identifies and analyzes malicious posts, such as leaks of military secrets and fake articles
* [**`📰 Report Generator`**](https://navycert.notion.site/2726ca50f1ac4d0aae28792aa8ae117e) : Generates customizable threat reports with just a few clicks


<h3 id="feature1">Risk Dashboard</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/55467050/138043876-fcd5d91c-fc02-4941-ade1-680ddc3011eb.gif" />
</p>

### Keywords for Today

> You can find more details about "Keywords for Today" feature [here](https://navycert.notion.site/4a6b066671cc44e78ca5be32b29aa72a).

A word cloud that visualizes the most frequently mentioned words based on various articles, news, and various online communities.

![words](https://user-images.githubusercontent.com/55467050/137931048-52ce6c3e-ca33-4845-9af4-b282a3ecc6c5.PNG)

### Emotion Recognition Chart

> You can find more details about "Emotion Recognition Chart" feature [here](https://navycert.notion.site/4a6b066671cc44e78ca5be32b29aa72a).

Charts that analyze the sentiment of public opinion based on various social media and community sites, categorizing it into positive, neutral, and negative.

![emopies](https://user-images.githubusercontent.com/55467050/138044572-2d646ec9-1055-43df-8d68-0055744e778a.gif)

### Today's Top Trend

> You can find more details about "Today's Top Trend" feature [here](https://navycert.notion.site/4a6b066671cc44e78ca5be32b29aa72a).

Selects the most mentioned articles of the day and uses FactCheck to classify and display them as likely true, neutral, or false.

![trend](https://user-images.githubusercontent.com/55467050/137927004-f375f4ca-7548-494f-ac3d-caa087b6563d.PNG)

### Events by Country

> You can find more details about "Events by Country" feature [here](https://navycert.notion.site/4a6b066671cc44e78ca5be32b29aa72a).

A map that analyzes international articles to show event traffic by country.

![events](https://user-images.githubusercontent.com/55467050/137927295-facce426-7fab-44a5-8dc3-e7f02f850586.PNG)

### Article Variation

> You can find more details about "Article Variation" feature [here](https://navycert.notion.site/4a6b066671cc44e78ca5be32b29aa72a).

A chart that visualizes changes in the volume of articles by comparing recent article quantities.

![num_articles](https://user-images.githubusercontent.com/55467050/137926297-1c4b6417-4507-49e1-8f94-09cde4b437f4.PNG)

<h3 id="feature2">Risk Detection</h3>

> You can find more details about "Risk Detection" feature [here](https://navycert.notion.site/503f48a54cfb451a8074ed904140538d).

Using artificial intelligence, it automatically analyzes and detects malicious posts such as leaks of confidential information and fake articles. It then provides summarized content and sources to enable a quick response.

![detect](https://user-images.githubusercontent.com/55467050/137923976-61f54c5a-aa1a-4258-a27d-a95eb1620c48.gif)


### NER Filter

> You can find more details about "NER Filter" feature [here](https://navycert.notion.site/503f48a54cfb451a8074ed904140538d).

Utilizes Named Entity Recognition technology to extract types such as people, organizations, and dates, offering search filters to enable more detailed analysis.

![ner](https://user-images.githubusercontent.com/55467050/137922056-ff4942aa-feba-4a8d-b1c0-76106321b10f.gif)

<h3 id="feature3">Automated Report Generation</h3>

> You can find more details about "Automated Report Generation" feature [here](https://navycert.notion.site/2726ca50f1ac4d0aae28792aa8ae117e).

Automatically organizes and summarizes the threats identified into a report format with just a few clicks. The generated report can be exported as a PDF.
<p align="center">
</p>

![report](https://user-images.githubusercontent.com/55467050/138045273-d5312cdd-6842-492d-8bfe-c77a7a7b6f22.gif)

![report_full](https://user-images.githubusercontent.com/55467050/137937761-929347ff-c8a5-4ac1-8608-bfa8da408e5d.PNG)


<h2 id="getstarted"> :zap: Getting Started</h2>

After loggin in:

<p align="center">
  <img src="https://user-images.githubusercontent.com/55467050/137937102-0c9940bf-8b78-4a4e-9392-1376d96066cc.PNG" />
</p>

*Congratulations!* You joined *RISKOUT*!.

That's all you need to get started! 🎉
- 📺 Full video: https://www.youtube.com/watch?v=Lwg-OQIIvGA

<h2 id="prerequisites"> :fork_and_knife: Prerequisites</h2>
<h3> :earth_asia: Browser</h3>

| <img src="https://user-images.githubusercontent.com/55467050/137036906-a6c0f879-5b51-49d3-8e02-d01994f64d18.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/55467050/137036911-ccb70714-15fc-46fb-a074-19bb769727e9.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/55467050/137036913-033a988f-b9c9-4980-8540-5994cfa7e465.jpg" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/55467050/137036914-1a1f080e-9fb3-4b29-a143-517be979e78f.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/55467050/137036916-91328771-5dd5-41fb-a842-8562db3c480c.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :---------: | :---------: | :---------: | :---------: | :---------: |
| Yes | 11+ | Yes | Yes | Yes |


<h3> 💾 Versions</h3>

| <img src="https://user-images.githubusercontent.com/55467050/137045584-9bfa3e0f-eafa-49b2-b10a-6cd8bb753e66.png" alt="Pytorch" width="16px" height="16px" /> Pytorch | <img src="https://user-images.githubusercontent.com/55467050/137045573-6161819d-24b5-4130-9f96-d261eee4a723.png" alt="react" width="16px" height="16px" /> React | <img src="https://user-images.githubusercontent.com/55467050/137045575-88aa70a8-3c3d-46d4-b975-d43ffc7f1891.png" alt="Django" width="16px" height="16px" /> Django | 🍃 Mongo DB | 🐳 Docker | Ⓜ️ MUI |
| :---------: | :---------: | :---------: | :---------: | :---------: | :---------: |
| 1.9.0+ | 17.0.2+ | 3.0.7+ | 4.4+ | 20.10.x+ | 5.0.1+ |
<br/>

<h2 id="techniques"> 🧱 Technique Used</h2>

![techstack](https://user-images.githubusercontent.com/55467050/136777598-e5134090-7747-4b5a-9b08-57c111521d6b.PNG)

### AI
- [Colab](https://colab.research.google.com/)for AI model training:
  - [`KoBERT`](https://github.com/SKTBrain/KoBERT) — for sentiment analysis, fake news detection, and report summarization.
  - [`DistilKoBERT`](https://github.com/monologg/DistilKoBERT) — for Named Entity Recognition (NER).
- Datasets used:
  - [`Naver-nsmc`](https://github.com/e9t/nsmc) — Datasets used for the sentiment analysis model.
  - [`Dacon 문서요약`](https://dacon.io/competitions/official/235671/data) — Datasets used for Korean document extraction and summarization.
  - [`SNU Factcheck`](https://factcheck.snu.ac.kr/) — Datasets used for fake news detection.
  - [`Naver NLP Challenge 2018`](https://github.com/monologg/naver-nlp-challenge-2018) — Datasets used for Named Entity Recognition (NER).
- [Pytorch](https://pytorch.org/) Libraries used for deep learning build.
  - [`Transformers`](https://huggingface.co/transformers/) — Provided architecture for NLP models.
  - [`FastAPI`](https://fastapi.tiangolo.com/) — Implementing AI functionality through APIs.

### Backend

- [DRF](https://www.django-rest-framework.org/) for backend development:
  - [`Mongo DB`](https://www.mongodb.com/) — for database development.
- [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) Crawling using:
  - `Crawler` — For extracting language data from various open forums, social media platforms, and news sites.

### Frontend

- [React](https://reactjs.org/) for frontend development:
  - [`MUI`](https://mui.com/) — Utilizing the MUI (Material UI) component library.
  - `React router` — Used for component navigation.
- [Recoil](https://recoiljs.org/)for state management in React.
  - `Atom` — for separating component state units.
  - `Selector` — for generating dynamic data dependent on Atoms.

<h2 id="install"> :file_folder: Installation Process</h2>


First, download **node.js**, **yarn**, **docker**, and **docker-compose**. Ensure that **node.js** is version 14.x or higher.

**Clone** the project.
```bash
git clone https://github.com/osamhack2021/ai_web_RISKOUT_BTS
```

Create the **Secret files**.
> For information on **creating Secret files**, please refer [here](https://navycert.notion.site/851fa5b94b874ddbbd12652ad3a81542).

Build and run the project.
```bash
./run.sh
```

Access the project at[http://localhost:8002](http://localhost:8002).
<br />

You can now start using it! 🎉

<h2 id="team"> 💁🏻‍♀️💁🏻‍♂️ Team Information</h2>

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
<td width="100" align="center">Minseok Lee<br>(Team Leader)</td>
<td width="250">Product Manager,<br>Full-stack Developer</td>
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
<td width="100" align="center">Junghwan Cho</td>
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
<td width="100" align="center">Myeonggeun Seo</td>
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
<td width="100" align="center">Taewon Kim</td>
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
<td width="100" align="center">Wonbin Lee</td>
<td width="250">Frontend Engineer</td>
<td width="150" align="center">	
	<a href="https://github.com/wblee800">
	<img src="https://img.shields.io/badge/wblee800-655ced?style=social&logo=github"/>
	</a>
</td>
<td width="300" align="center">
<a href="mailto:wblee800@gmail.com"><img src="https://img.shields.io/static/v1?label=&message=wblee800@gmail.com&color=lightblue&style=flat-square&logo=gmail"></a>
</tr>
	
<tr>
<td width="100" align="center"><img src="https://user-images.githubusercontent.com/55467050/136719700-f2e9120e-1250-4d6c-9935-a89af62d3b64.png" width="60" height="60"></td>
<td width="100" align="center">Yongjun Park</td>
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
<td width="100" align="center">Jongchan Seo</td>
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

<h2 id="license"> 📜 Copyleft / End User License</h2>

The project RISKOUT follows the [GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0.en.html).

<br />
<br />

