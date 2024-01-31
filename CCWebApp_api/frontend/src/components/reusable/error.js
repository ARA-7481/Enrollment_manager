import React, { useState } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { RedX, CloseButton, AlertLogo } from '../../assets/svg/clnsmpl-icon';

import { nullError } from '../../redux/actions/auth';

const ErrorPopup = ({ errorMessage, nullError }) => {

  const handleClose = () => {
    nullError();
  };

  return (
    <div className='error-popup' style={{border: '2px solid #FF0000'}}>
        <AlertLogo/>
        <h1 className='inter-400-16px' style={{marginLeft: '16px', marginRight: '16px', marginTop:'6px', color:'black'}}>{errorMessage}</h1>
        <button onClick={handleClose} style={{backgroundColor:'rgba(51, 51, 51, 0.00)', borderColor:'rgba(51, 51, 51, 0.00)', paddingLeft: '0px', paddingRight:'0px', paddingBottom:'5px'}}><CloseButton/></button>
    </div>
  );
};
ErrorPopup.propTypes = {
    error: PropTypes.string,
    nullError: PropTypes.func,
}

const mapStateToProps = (state) => ({
    error: state.auth.error,
  });


export default connect(mapStateToProps, {nullError})(ErrorPopup);