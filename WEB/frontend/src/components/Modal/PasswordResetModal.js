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
 //Edit API Request
    return(
     
    );
}

export default PasswordResetModal