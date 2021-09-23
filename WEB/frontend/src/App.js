import React, {useState, useEffect} from 'react';
import Header from './components/Modal/Header';
import Navi from './components/Modal/Navi'
import LoginModal from './components/Modal/LoginModal';
import Profile from './components/User/Profile';
import { Route } from 'react-router-dom';
import './App.css';
import Write from './components/Board/Write';
import Detail from './components/Board/Detail';
import Update from './components/Board/Update';
import Mysite from './components/User/Mysite';
import Board from './components/Board/Board';

function App() {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState([])

  let [isAuthenticated, setisAuthenticated] = useState(localStorage.getItem('token') ? true : false)
  
  const userHasAuthenticated = (authenticated, username, token) => { 
    setisAuthenticated(authenticated)
    setUser(username)
    localStorage.setItem('token', token);
  }//회원가입이나 로그인이 성공했을 때 토큰을 저장

  const handleLogout = () => {
      setisAuthenticated(false)
      setUser("")
      localStorage.removeItem('token');
      setModal(false)
  }//로그아웃

  //회원가입이나 로그인이 성공했을 때 modal을 변경해 로그인 버튼을 없애고 글쓰기 버튼과 정보버튼을 나오게하는 setModal
  //useEffect의 두번째 인자는 모든 렌더링 후 두번째 인자가 변경될때에만 실행되라는 내용 
  useEffect(()=>{
    if(isAuthenticated){
      setModal(true)
    }
    else{
      setModal(false)
    }
  },[isAuthenticated])
  
  
  useEffect(() => {
    // 토큰(access token)이 이미 존재하는 상황이라면 서버에 GET /validate 요청하여 해당 access token이 유효한지 확인
    if (isAuthenticated) {
      // 현재 JWT 토큰 값이 타당한지 GET /validate 요청을 통해 확인하고
      // 상태 코드가 200이라면 현재 GET /user/current 요청을 통해 user정보를 받아옴
      fetch('http://localhost:8000/validate/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
      .then(res => {
        fetch('http://localhost:8000/user/current/', {
          headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
          }
        })
        .then(res => res.json())
        .then(json => {
          // 현재 유저 정보 받아왔다면, 로그인 상태로 state 업데이트 하고
          if (json.username) {
            setUser(json.username);
          }else{
            //유저가 undefined라면 로그인버튼이 나오도록 modal을 false로 항상 맞춰줌
            setModal(false)
            setisAuthenticated(false)
          }
          // Refresh Token 발급 받아 token의 만료 시간 연장
          fetch('http://localhost:8000/refresh/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              token: localStorage.getItem('token')
            })
          })
          .then(res => res.json())
          .then((json)=>{
            userHasAuthenticated(true, json.user.username, json.token);
          })
          .catch(error => {
            console.log(error);
          });;
        })
        .catch(error => {
          handleLogout();
          console.log(error)
        });
      })
      .catch(error => {
        handleLogout();
        console.log(error)
      });
    }
  },[isAuthenticated])

  return (
    <>
      <div className="App">
        <div className="auto-margin">
          <Route exact path="/">
            <Header modal={modal} handleLogout={handleLogout}/>
            <Navi/>
            <Board/>
          </Route>

          <Route exact path="/like">
            <Header modal={modal} handleLogout={handleLogout}/>
            <Navi/>
            <Board/>
          </Route>

          <Route exact path="/login">
            <LoginModal setModal={setModal} userHasAuthenticated={userHasAuthenticated}/>
          </Route>

          <Route exact path="/profile">
            <Header modal={modal} handleLogout={handleLogout}/>
            <Profile handleLogout={handleLogout}/>
          </Route>

          <Route exact path="/write">
            <Write user={user}/>
          </Route>

          <Route path="/detail">
            <Header modal={modal} handleLogout={handleLogout}/>
            <Detail user={user}/>
          </Route>

          <Route path="/update">
            <Update/>
          </Route>

          <Route path="/mysite">
            <Header modal={modal} handleLogout={handleLogout}/>
            <Mysite/>
          </Route>
      </div>
    </div>
    </>
  );
}

export default App;
