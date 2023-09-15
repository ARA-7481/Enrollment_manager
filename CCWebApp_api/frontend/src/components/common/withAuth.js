import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import instanceAxios from '../../redux/interceptor/interceptor';

function withAuth(WrappedComponent) {
  function WithAuth(props) {
    const accessToken = localStorage.getItem('access')
    if (!props.isAuthenticated) {
      if (!accessToken){
        console.log('no token')
        return <Navigate to="/auth/admin-signin" />;
      }
      else{
        instanceAxios.get('/api/success/')
        .then((response) => {
          return <WrappedComponent {...props} />;
        })
        .catch((error) => {
          console.log('fail')
          return <Navigate to="/auth/admin-signin" />;
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