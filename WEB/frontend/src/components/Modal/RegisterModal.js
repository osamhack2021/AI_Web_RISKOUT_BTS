import { Grid,Paper, Avatar, TextField, Button, Typography, Link} from '@mui/material'
import Divider from '@mui/material/Divider';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from 'react';
import { useHistory } from 'react-router'
import '../../css/LoginModal.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const RegisterModal=(props)=>{
  let [JoinLoign,setJoinLogin] = useState('회원가입')
  const history = useHistory()
  
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


    const paperStyle={padding :40,height:'70vh',width:800, margin:"20px auto", sx={{background: 'rgb(54,57,63)'}}}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'10px 0', background: 'rgb(113,137,218)'}
    return(
    <ThemeProvider theme={theme}>
      <br></br>
      <br></br>
      <br></br>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
               <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
              <h2 style={{ color:'white' }}>{JoinLoign}</h2>
          </Grid>
          <TextField label='아이디' placeholder='아이디를 입력해 주세요.' fullWidth required onChange={handleNameChange}/>
          <TextField label='비밀번호' placeholder='비밀번호를 입력해 주세요.' type='password' fullWidth required onChange={handlePasswordChange}/>
          <TextField label='비밀번호 확인' placeholder='비밀번호를 다시 입력해 주세요.' type='password' fullWidth required onChange={handlePasswordCheckChange}/>
          <TextField label='이메일' placeholder='이메일을 입력해 주세요.' fullWidth required onChange={handleEmailChange}/>
          {/* onClick={(e)=>{
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
                 } */}
          <Link href="/login" sx={{ color:'white' }} ><Button type='submit' variant="contained" style={btnstyle} fullWidth className="JoinLoign-button">{JoinLoign}</Button></Link>
        <br /><br /><br /><br />
          <Divider>or</Divider>
          <Typography align="center" variant="subtitle1">
            <Link href="/login" sx={{ color:'rgb(113,137,218)' }}>
              RISKOUT 회원이세요? 지금 로그인하세요.
            </Link>
          </Typography>
        </Paper>
      </Grid>
  </ThemeProvider>
    )
}

export default RegisterModal
