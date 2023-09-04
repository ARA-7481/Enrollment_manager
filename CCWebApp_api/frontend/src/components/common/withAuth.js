import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import instanceAxios from '../../redux/interceptor/interceptor';

function withAuth(WrappedComponent) {
  function WithAuth(props) {
    const accessToken = localStorage.getItem('access')
    if (!props.isAuthenticated) {
      console.log(accessToken)
      if (!accessToken){
        console.log('no token')
        return <Navigate to="/admin-signin" />;
      }
      else{
        instanceAxios.get('/api/success/')
        .then((response) => {
          console.log('success')
          return <WrappedComponent {...props} />;
        })
        .catch((error) => {
          console.log('fail')
          return <Navigate to="/admin-signin" />;
        })
      }
    }
    
    return <WrappedComponent {...props} />;
  }
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
  });

  return connect(mapStateToProps)(WithAuth);
}

export default withAuth;