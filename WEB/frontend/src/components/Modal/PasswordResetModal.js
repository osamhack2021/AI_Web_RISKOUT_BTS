import {
  Box,
  Divider,
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from '@mui/material';
import { useState } from 'react';
import { useHistory } from 'react-router';
const PasswordResetModal=(props)=>{
  let [userpassword, setUserPassword] = useState()
  let [userpasswordCheck, setUserPasswordCheck] = useState();
  let usertoken = document.URL.split("=")[1];


  const data = {password : userpassword,token : usertoken, }
  let token = localStorage.getItem("token");

  if(token!=null){
    history.push("/")
  }
const handlePassword1Change = (e) => {
  setUserPassword(e.target.value)
}

const handlePassword2Change = (e) => {
  setUserPasswordCheck(e.target.value)
}

    const history = useHistory()
 //PasswordResetPage Styling 
 const paperStyle = {
  padding: '60px 68px 40px',
  width: 450,
  height: 670,
  margin: '53px auto',
  backgroundColor: 'rgb(54,57,63)'
 };
 const avatarStyle = { backgroundColor: '#1bbd7e' };
 const btnstyle = {
  fontSize: '16px',
  margin: '10px 0',
 };
    return(
      <>
      <br></br>
      <br></br>
      <br></br>
      <Grid>
      <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
               <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
              <h2>비밀번호 찾기</h2>
          </Grid>
          <TextField label='새 비밀번호' placeholder='새 비밀번호를 입력해 주세요.' type='password' fullWidth required  onChange={handlePassword1Change}/>
          <TextField label='새 비밀번호 확인' placeholder='새 비밀번호를 다시 입력해 주세요.' type='password' fullWidth required  onChange={handlePassword2Change}/>
          <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth className="JoinLoign-button" onClick={(e)=>{
                  e.preventDefault()
                  alert(JSON.stringify(data))
                  if(userpassword !== userpasswordCheck){
                    alert("비밀번호가 서로 일치하지 않습니다!")
                  }else{
                    fetch('/api/password-reset/confirm/', {
                      method: 'POST',
                      headers:{
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(data)
                    }).then(res => res.json())
                    .then(json => {
                      if(json.status==="OK"){
                          alert("성공적으로 변경되었습니다.");
                          history.push("/");
                      }else{
                          alert("비밀번호를 다시 확인 해 주세요.")
                      }
                    })
                    .catch(error => alert(error));
                    };

                  }
                  }>전송</Button>
          <Typography >
          <br></br>
               <Link href="/login" >
                  로그인
          </Link>
          </Typography>
      </Paper>
  </Grid>
  </>
    )
}

export default PasswordResetModal