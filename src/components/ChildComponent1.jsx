import React, { useContext } from 'react';
import { AppContext } from './9. ContextAPI';

const ChildComponent = () => {
  const [state] = useContext(AppContext);

  return <div>User: {state.user}</div>;
}

export default ChildComponent;
