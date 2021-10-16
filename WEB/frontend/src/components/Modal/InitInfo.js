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

  const paperStyle={padding :40,height:'70vh',width:800, margin:"20px auto"}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const btnstyle={margin:'10px 0'}
  const history = useHistory();
  return (
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
                <TextField label='이메일' placeholder='가입할 때 사용한 이메일을 입력해 주세요.' fullWidth required onChange={handleEmailChange}/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth className="JoinLoign-button" onClick={(e)=>{
                  e.preventDefault()
                  alert(JSON.stringify(data))
                    fetch('/api/password-reset/', {
                      method: 'POST',
                      headers:{
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(data)
                    });
                  }
                  }
                 
                >전송</Button>
                <Typography >
                <br></br>
                     <Link href="/login" >
                        로그인
                </Link>
                </Typography>
            </Paper>
        </Grid>
        </>
  );
};

export default InitInfo;
