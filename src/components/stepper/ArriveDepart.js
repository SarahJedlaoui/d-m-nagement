import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Translate } from 'react-translated';
import useStyles from '../styles.js'
import Arrive from '../Header/Arrive.js';
import Form from '../Header/form';
export default class ArriveDepartContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: 0
    }
    this.handleTabChange = this.handleTabChange.bind(this);
    this.a11yProps = this.a11yProps.bind(this);
  }

  handleTabChange(event, newValue){
    this.setState({value: newValue})
    this.props.handleChange(
      {target: {name: 'legalType', value: newValue === 0 ? 'Depart' : 'Arrivé' }}
    )
  }

  a11yProps(index) {
    return {
      id: `beneficiary-tab-${index}`,
      'aria-controls': `beneficiary-tabpanel-${index}`,
    };
  }

  render() {
    return (
      <ArriveDepart
        value={this.state.value}
        handleTabChange={this.handleTabChange}
        a11yProps={this.a11yProps}
        {...this.props}

      />
    );
  } 
}


function ArriveDepart (props){
  const classes = useStyles();

  return(
    <React.Fragment>
        <AppBar position="static" elevation={0}>
          <Box style={{backgroundColor: 'white', dropShadow: 0}}>
            <Tabs 
              value={props.value} 
              onChange={props.handleTabChange} 
              aria-label="Adresses"
              indicatorColor="primary"
              textColor="primary" 
              variant="fullWidth"
            >
              <Tab label={<Translate text="Adresse de départ"/>} {...props.a11yProps(0)} />
              <Tab label={<Translate text="Adresse d'arrivé"/>} {...props.a11yProps(1)} />
            </Tabs>
          </Box>
        </AppBar>
        <TabPanel name="departDetails" value={props.value} index={0} className={classes.tabPanel}>
        <Form
            onChange={props.handleChange}
            city={props.beneficiaryDetails.city}
            postCode={props.beneficiaryDetails.postCode}
            addressLine={props.beneficiaryDetails.addressLine}
          />
        </TabPanel>
        <TabPanel name="arriveDetails" value={props.value} index={1} className={classes.tabPanel}>
        <Arrive
            onChange={props.handleChange}
            city={props.beneficiaryDetails.city}
            postCode={props.beneficiaryDetails.postCode}
            addressLine={props.beneficiaryDetails.addressLine}
          />
        </TabPanel>
      </React.Fragment>
  )
}


class TabPanel extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={this.props.value !== this.props.index}
        id={`beneficiary-tabpanel-${this.props.index}`}
        aria-labelledby={`beneficiary-tab-${this.props.index}`}
      >
        <Box p={3}>{this.props.children}</Box>
      </Typography>
    );
  }
}

