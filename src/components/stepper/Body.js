import React from 'react';
import ArriveDepart from './ArriveDepart.js'
import Success from './Success.js';
import PersonalDetails from '../Header/PersonalDetails'
import EnhancedTable from '../Header/table';
import EnhancedTable1 from '../Header/table';
import Icons from '../Header/icons';
export default function Body(props){
  switch(props.activeStep){
    case(1):
      return (
        <React.Fragment>
          <Icons/>
          
          <EnhancedTable1/>
        </React.Fragment>
      
      )
      break;
    case(0):
      return (
        <ArriveDepart {...props}/>
      )
      break;
    case(2):
      return (
        <React.Fragment>
           <PersonalDetails
            onChange={props.handleChange} 
            firstName={props.firstName}
            lastName={props.lastName}
            email={props.email}
            phoneNumber={props.phoneNumber}
            date ={props.date }
          />
        </React.Fragment>
      )
      break;
    case(3):
      return (
        <React.Fragment>
            <Success
              submitSuccess={props.submitSuccess}
              validationSuccess={props.validationSuccess}
              submitError={props.submitError}
              validationError={props.validationError}
              loading={props.loading}
              response={props.response}
              bankDetails={props.bankDetails}
              beneficiaryDetails={props.beneficiaryDetails}
              validateBankDetails={props.validateBankDetails}
              handleSubmit={props.handleSubmit}
            />
        </React.Fragment>
      )
      break;
    default:
      return <div></div>
  }
}