import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { GreenCheck } from '../../assets/svg/clnsmpl-icon';

import { emptySuccess } from '../../redux/actions/main';

const SuccessPopupMain = (props) => {

  useEffect(() => {
    const timer = setTimeout(() =>{
        props.emptySuccess()
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='error-popup' style={{border: '2px solid #12703A'}}>
        <GreenCheck/>
        <h1 className='inter-400-16px' style={{marginLeft: '16px', marginRight: '16px', marginTop:'6px', color:'black'}}>{props.success}</h1>
    </div>
  )};

SuccessPopupMain.propTypes = {
    success: PropTypes.string,
    emptySuccess: PropTypes.func,
}

const mapStateToProps = (state) => ({
    success: state.main.success,
  });


export default connect(mapStateToProps, {emptySuccess})(SuccessPopupMain);