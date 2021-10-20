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
  backgroundColor: 'rgb(113,137,218)',
  color: 'white'
 };
    return(
      <Box className="loginModalBack">
      <Paper elevation={10} style={paperStyle}>
        <Grid align="left">
          <h1 style={{ fontSize: '32px' }}>비밀번호 초기화</h1>
        </Grid>
        <Grid align="center">
          <Box
            sx={{ width: 314, height: 50, marginBottom: '1.2em', marginTop: 5 }}
          >
            <TextField
              label="새 비밀번호"
              placeholder="비밀번호를 입력 해 주세요."
              fullWidth
              required
              onChange={ handlePassword1Change}
              variant="outlined"
            />
          </Box>
          <Box sx={{ width: 314, height: 50, marginBottom: '2em' }}>
            <TextField
              label="새 비밀번호 확인"
              placeholder="새 비밀번호를 다시 입력해 주세요."
              fullWidth
              required
              variant="outlined"
              onChange={ handlePassword2Change}
            />
          </Box>
          <Link sx={{ textDecoration: 'none'}}>
            <Button
              type="submit"
              variant="contained"
              style={btnstyle}
              className="JoinLoign-button"

              onClick={(e)=>{
                e.preventDefault()
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
                        history.push("/login");
                    }else{
                        alert("비밀번호를 다시 확인 해 주세요.")
                    }
                  })
                  .catch(error => alert(error));
                  };

                }
                }
            >
              변경
            </Button >
          </Link>
        </Grid>
        <Typography align="center" variant="subtitle1">
          <Link href="/login" sx={{ textDecoration: 'none', color: 'rgb(113,137,218)' }}>
            RISKOUT 계정 로그인 하기
          </Link>
        </Typography>
      </Paper>
    </Box>
    );
}

export default PasswordResetModal