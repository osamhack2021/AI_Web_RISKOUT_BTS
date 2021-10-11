import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import React, { useState } from 'react';
import { useHistory } from 'react-router'

const LoginModal=(props)=>{
  const history = useHistory()


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


    const paperStyle={padding :40,height:'70vh',width:800, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'10px 0'}
    return(
      <>
      <br></br>
      <br></br>
      <br></br>
      <Grid>
      <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
               <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
              <h2>로그인</h2>
          </Grid>
          <TextField label='ID' placeholder='아이디를 입력해 주세요.' fullWidth required onChange={handleNameChange}/>
          <TextField label='비밀번호' placeholder='비밀번호를 입력해 주세요.' type='password' fullWidth required  onChange={handlePasswordChange}/>
          <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth className="JoinLoign-button" onClick={(e)=>{
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
                }}>로그인</Button>
          <Typography >
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
          </Typography>
      </Paper>
  </Grid>
  </>
    )
}

export default LoginModal