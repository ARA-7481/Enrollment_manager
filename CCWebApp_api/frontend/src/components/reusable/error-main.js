import React, { useState } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { RedX, CloseButton } from '../../assets/svg/clnsmpl-icon';

import { nullErrormain } from '../../redux/actions/main';

function ErrorPopupmain (props){

  const handleClose = () => {
    props.nullErrormain();
  };

  return (
    <div className='errormain-popup'>
       <div style={{marginRight: '8px'}}>
        <RedX/>
        </div>
        <h1 className='inter-400-16px' style={{marginLeft: '16px', marginRight: '16px', marginTop:'6px', color:'black'}}>{props.errorMessage}</h1>
        <button onClick={handleClose} style={{backgroundColor:'rgba(51, 51, 51, 0.00)', borderColor:'rgba(51, 51, 51, 0.00)', paddingLeft: '0px', paddingRight:'0px', paddingBottom:'5px'}}><CloseButton/></button>
    </div>
  );
};
ErrorPopupmain.propTypes = {
    errorMessage: PropTypes.string,
    nullErrormain: PropTypes.func,
}

const mapStateToProps = (state) => ({
    errorMessage: state.main.errorMessage,
  });


export default connect(mapStateToProps, {nullErrormain})(ErrorPopupmain);