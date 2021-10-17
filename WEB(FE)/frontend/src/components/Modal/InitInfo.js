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
                  fetch('/api/password-reset/', {
                    method: 'POST',
                    headers:{
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                  });
                }
                } 
            >
              전송
            </Button >
          </Link>
        </Grid>
      </Paper>
    </Box>
  );
};

export default InitInfo;
