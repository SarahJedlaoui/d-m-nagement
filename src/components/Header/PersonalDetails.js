import React from 'react';
import { Translate } from 'react-translated';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import useStyles from '../styles.js';
import {Box} from '@mui/material';
import {Input} from '@mui/material';
import {InputLabel} from '@mui/material';
import {InputAdornment} from '@mui/material';
//import AccountCircle from '@mui/icon-material';
import {Stack} from '@mui/material';
//import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';




export default function PersonalDetails(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <TextField
          id="firstName"
          label={<Translate text='First name'/>}
          className={classes.textField}
          value={props.firstName}
          onChange={props.onChange} 
          margin="normal"
        />
      </FormControl>

      <FormControl className={classes.formControl}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      {/*  <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
        <TextField id="input-with-sx" label="With sx" variant="standard" />
      </Box>
      </FormControl>
      
      
       {/* <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />*/}
     
      <FormControl className={classes.formControl}>
        <TextField
          id="lastName"
          label={<Translate text='Last name'/>}
          className={classes.textField}
          value={props.lastName}
          onChange={props.onChange} 
          margin="normal"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="email"
          type="email"
          label={<Translate text='Email'/>}
          className={classes.textField}
          value={props.email}
          onChange={props.onChange} 
          margin="normal"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          id="phoneNumber"
          label={<Translate text='Phone number'/>}
          className={classes.textField}
          value={props.phoneNumber}
          onChange={props.onChange} 
          margin="normal"
        />
      </FormControl>
    </React.Fragment>
  );
}    
