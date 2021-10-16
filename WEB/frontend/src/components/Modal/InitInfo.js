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

const InitInfo = (props) => {
  let [useremail, setUserEamil] = useState();
  const data = { email: useremail };

  const handleEmailChange = (e) => {
    setUserEamil(e.target.value);
  };

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
  const history = useHistory();
  return (
    <Box className="loginModalBack">
      <Paper elevation={10} style={paperStyle}>
        <Grid align="left">
          {/* <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar> */}
          <h1 style={{ fontSize: '32px' }}>비밀번호 찾기</h1>
        </Grid>
        <Grid align="center">
          <Box
            sx={{ width: 314, height: 50, marginBottom: '1.2em', marginTop: 5 }}
          >
            <TextField
              label="이메일"
              placeholder="가입에 사용한 이메일을 입력 해 주세요."
              fullWidth
              required
              onChange={handleEmailChange}
              variant="outlined"
            />
          </Box>
          {/* */}
          <Link sx={{ textDecoration: 'none'}}>
            <Button
              type="submit"
              variant="contained"
              style={btnstyle}
              className="JoinLoign-button"

              onClick={(e)=>{
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
              }} 
            >
              로그인
            </Button >
          </Link>
        </Grid>
        <Box sx={{ display: 'flex', marginBottom: '5em' }}>
          <Typography variant="subtitle1" sx={{}}>
            <input type="checkbox" style={{ marginTop: '7px' }} />
            로그인 정보 저장
          </Typography>
        </Box>
        <Divider>or</Divider>
        {/* <br /> */}
        <Typography align="center" variant="subtitle1">
          <Link href="/register" sx={{ textDecoration: 'none', color: 'rgb(113,137,218)' }}>
            RISKOUT 회원이 아닌가요? 지금 가입하세요.
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default InitInfo;
