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

const RegisterModal=(props)=>{
  const history = useHistory()
  

  let [username, setUsername] = useState()
  let [userpassword, setUserPassword] = useState()
  let [userpasswordCheck, setUserPasswordCheck] = useState();
  let [useremail, setUserEamil] = useState()
  
  const data = {username : username, password : userpassword, email : useremail}
  let token = localStorage.getItem("token");
  
  if(token!=null){
    history.push("/")
  }

  const handleNameChange = (e) => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value)
  }
  const handlePasswordCheckChange = (e) => {
    setUserPasswordCheck(e.target.value)
  }
  const handleEmailChange = (e) => {
    setUserEamil(e.target.value)
  }



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
    width: 314,
    height: 48,
    backgroundColor: '#3a8ffb',
    color: 'white'
  };
    return(
      <Box className="loginModalBack">
      <Paper elevation={10} style={paperStyle}>
        <Grid align="left">
          {/* <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar> */}
          <h1 style={{ fontSize: '32px' }}>회원가입</h1>
        </Grid>
        <Grid align="center">
          <Box
            sx={{ width: 314, height: 50, marginBottom: '1.2em', marginTop: 5 }}
          >
            <TextField
              label="아이디"
              placeholder="아이디를 입력해 주세요"
              fullWidth
              required
              onChange={handleNameChange}
              variant="outlined"
            />
          </Box>
          <Box sx={{ width: 314, height: 50, marginBottom: '2em' }}>
            <TextField
              label="비밀번호"
              placeholder="비밀번호를 입력해 주세요."
              fullWidth
              required
              variant="outlined"
              type='password'
              onChange={handlePasswordChange}
            />
          </Box>
          <Box sx={{ width: 314, height: 50, marginBottom: '2em' }}>
            <TextField
              label="비밀번호 확인"
              placeholder="비밀번호를 다시 입력해 주세요."
              fullWidth
              required
              variant="outlined"
              type='password'
              onChange={handlePasswordCheckChange}
            />
          </Box>
          <Box sx={{ width: 314, height: 50, marginBottom: '2em' }}>
            <TextField
              label="이메일"
              placeholder="이메일을 입력해 주세요."
              fullWidth
              required
              variant="outlined"
              onChange={handleEmailChange}
            />
          </Box>
          <Link  sx={{ textDecoration: 'none'}}>
            <Button
              type="submit"
              variant="contained"
              style={btnstyle}
              className="JoinLoign-button"

              onClick={(e)=>{
                e.preventDefault()
                if(!useremail.indexOf("@")){
                  alert("이메일 형식이 올바르지 않습니다.")
                }else if(userpassword !== userpasswordCheck){
                  alert("비밀번호를 확인해 주세요.")
                }else{
                  fetch('/api/user/register/', {
                    method: 'POST',
                    headers:{
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                    
                  }).then(res => res.json())
                  .then(json => {
                    console.log(json)
                    if (json.token) {
                      props.userHasAuthenticated(true, data.username, json.token);
                      history.push("/");
                      props.setModal(true)
                    }else{
                      alert("사용불가능한 아이디입니다.")
                    }
                  })
                  
                  .catch(error => alert(error));
                }
                }
               }
            >
              가입
            </Button >
          </Link>
        </Grid>
        { <br /> }
        <Typography align="center" variant="subtitle1">
          <Link href="/login" sx={{ textDecoration: 'none', color: '#3a8ffb' }}>
            RISKOUT 계정이 존재 하시나요? 로그인 하기
          </Link>
        </Typography>
      </Paper>
    </Box>
    )
}

export default RegisterModal