import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import React, { useState } from 'react';
import { useHistory } from 'react-router'
import '../../css/LoginModal.css';
import background from '../../images/sub/modal_back.jpg'
import CssBaseline from "@mui/material/CssBaseline";
import darkScrollbar from "@mui/material/darkScrollbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const LoginModal=(props)=>{
  const history = useHistory();

  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            
          }
        }
      }
    }
  });

  let [username, setUsername] = useState()
  let [userpassword, setUserPassword] = useState()
  let [userpasswordCheck, setUserPasswordCheck] = useState();
  let [useremail, setUserEamil] = useState()
  
  const data = {username : username, password : userpassword, email : useremail}

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

    const paperStyle={padding: '60px 68px 40px' , width: 450, height: 670, margin:"98px auto", background: "rgb(54,57,63)"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={fontSize:'16px', margin:'10px 0', width: 314, height: 48, background: 'rgb(113,137,218)'}
    return(
      <ThemeProvider theme={theme}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='left'>
            {/* <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar> */}
            <h1 style={{fontSize: '32px', color: 'white'}}>로그인</h1>
          </Grid>
          <Grid align='center'>
            <Box sx={{width: 314, height: 50, marginBottom: '1.2em', marginTop: 5}}>
              <TextField label='아이디' placeholder='아이디를 입력해 주세요' fullWidth required onChange={handleNameChange} variant='outlined'/>
            </Box>
            <Box sx={{width: 314, height: 50, marginBottom: '2em'}}>
              <TextField label='비밀번호' placeholder='비밀번호를 입력해 주세요.' fullWidth required variant='outlined' onChange={handlePasswordChange}/>
            </Box>
            {/* onClick={(e)=>{
                    e.preventDefault()
                    fetch('/api/user/login/', {
                    method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(data)
                    })
                    .then(res => res.json())
                    .then(json => {
                      if (json.token) {
                        props.userHasAuthenticated(true, data.username, json.token);
                        alert("환영합니다."+username+"님.")
                        history.push("/");
                        props.setModal(true)
                        console.log(json)
                      }else{
                        alert("아이디 또는 비밀번호를 확인해주세요.")
                      }
                    })
                    .catch(error => alert(error));
                  }} */}
            <Link href="/presstrends" sx={{textDecoration: 'none'}}><Button type='submit' variant="contained" style={btnstyle}  className="JoinLoign-button">로그인</Button></Link>
            {/* <Typography>
            <br></br>
                  <Link href="/init" >
                    비밀번호 찾기
            </Link>
            </Typography>
            <Typography >
            <br></br>
                  <Link href="/register" >
                    회원가입
            </Link>
            </Typography> */}
          </Grid>
          <Box sx={{display: 'flex', marginBottom: '5em'}}>
            <Typography variant="subtitle1" sx={{ color: 'white' }}>
                <input type='checkbox' style={{marginTop: '7px'}} />로그인 정보 저장
            </Typography>
          </Box>
          <Divider sx={{color:'white'}} ><p>or</p></Divider>
          {/* <br /> */}
          <Typography align="center" variant="subtitle1">
            <Link href="/register" sx={{color: 'rgb(113,137,218)', textDecoration: 'none'}}>
              RISKOUT 회원이 아닌가요? 지금 가입하세요.
            </Link>
          </Typography>
        </Paper>
      </ThemeProvider>
    )
}

export default LoginModal