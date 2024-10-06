import { useNavigate, useParams, useLocation } from 'react-router-dom';
import React from 'react';

export const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    return (
      <Component
        {...props}
        router={{ navigate, params, location }}
      />
    );
  }

  return ComponentWithRouterProp;
};
