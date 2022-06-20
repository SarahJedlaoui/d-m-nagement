import React from 'react';
import './Appl.css';
import {LanguageSelector,  BankDeetsStepper} from './index.js'
import {BankDeets} from 'bankdeets'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ReactGA from 'react-ga';
import translation from './translation.js';
if (!window.location.href.includes('localhost')){
  ReactGA.initialize('UA-42560882-4');
  ReactGA.pageview('/'); 
}
//The react-ga package is the official JavaScript module to connect Google Analytics with React.
const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const supported_countries = [
'USA',
'AUS',
'BGD',
'SWE',
'CAN',
'CHN',
'CZE',
'HKG',
'HUN',
'BGR',
'CHE',
'DNK',
'FRO',
'GRL',
'ALA',
'AND',
'ATF',
'AUT',
'BEL',
'BLM',
'CYP',
'DEU',
'ESP',
'EST',
'FIN',
'FRA',
'GLP',
'GRC',
'GUF',
'IRL',
'ITA',
'LTU',
'LUX',
'LVA',
'MAF',
'MCO',
'MLT',
'MNE',
'MTQ',
'MYT',
'NLD',
'PRT',
'REU',
'SMR',
'SPM',
'SVK',
'SVN',
'VAT',
'GBR',
'GIB',
'HRV',
'ISL',
'BVT',
'NOR',
'SJM',
'PAK',
'POL',
'ROU',
'IND',
'ISR',
'PSE',
'MYS',
'NIU',
'NZL',
'PCN',
'TKL',
'SGP',
'SGS',
'TUR',
'TUN',
'VNM',
'ARG',
'ARE',
'BRA',
'CHL',
'THA',
'GHA',
'BGR',
'KEN',
'EGY',
'JPN',
'IDN',
'MEX',
'PHL',
'PER',
'GEO',
'NPL',
'NER',
'MAR',
'LKA',
'BWA',
'ZAF',
'CIV',
'BEN',
'BFA',
'GIN',
'MLI',
'NER',
'SEN',
'TGO',
]

const useStyles = makeStyles(theme => ({

  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    padding: theme.spacing(3, 2),
    flexDirection: 'column'
  },
  grid: {
    alignContent: 'flex-start',
    alignItems:  'flex-start',
    textColor: 'red',
    justify: 'flex-start'
  }
}));


function Appl() {
  const classes = useStyles();

  return (
    <div className="App">
      <div style={{position: 'relative', top: 30}}>
        <Container maxWidth="md">
          <CssBaseline />
          <Introduction />
          <Paper className={classes.paper}>
            <Demenage/>  
          </Paper>
        </Container>
      </div>
      <Map />
    </div>
  );
}


class Demenage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      language: 'fr'
    }
    this.setLanguage = this.setLanguage.bind(this);
  }

  setLanguage(event){
    this.setState({
      language: event.target.value
    });
  }

  render(){
    return(
      <React.Fragment>
        <Grid container direction="row" justify="flex-end">
          <LanguageSelector language={this.state.language} setLanguage={this.setLanguage}translation={translation} />
        </Grid>
        <BankDeets language={this.state.language} render={props => <BankDeetsStepper {...props}/>} />
      </React.Fragment>
    )
  }
}



function Introduction(props){
  return (
    <center>
      <h1>{"Devis Gratuit"}</h1>
       <MailingList/>
    </center>
  )
}


class MailingList extends React.Component{
  constructor(props){
    super(props);
    this.track = this.track.bind(this);
  }

  track(){
    ReactGA.event({
      category: 'User',
      action: 'Clicked mailing list link'
    });
  }

  render(){
    return (
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdy0cl-xmk9yg-bZsar8iHivwGc4MLT6Ozw6xDYhd-WuZ7W0Q/viewform?usp=sf_link" onClick={this.track}>
        Remarques form
      </a>
    )
  }
}

function Map(props){
  return (
    <div style={{position: 'fixed', left: 0, top: -100, height: `100%`, width: `100%`, zIndex:-1}}>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography key={geo.rsmKey} geography={geo} fill={supported_countries.includes(geo.properties.ISO_A3) ? "#F0F0F0" : "#F5F5F5"}/>
            )
          )}
        </Geographies>
      </ComposableMap>
    </div>

  )
}



export default Appl;
