import React from "react";
import Grid from '@material-ui/core/Grid';
import LanguageSelector from './Header/LanguageSelector.js';
import PersonalDetails from './Header/PersonalDetails.js';
import Arrive from './Header/Arrive.js';
import BankDeetsStepper from './stepper/Stepper.js';


    


class BankDeetsWrapper extends React.Component{
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
      <div>
        <Grid container direction="row" justify="flex-end">
          <LanguageSelector language={this.state.language} setLanguage={this.setLanguage} />
        </Grid>
       
      </div>
    )
  }
}

export default BankDeetsWrapper
export {
LanguageSelector,
PersonalDetails,
Arrive,
BankDeetsStepper,


}