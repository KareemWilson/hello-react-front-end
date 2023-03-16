import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greeting/greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return (
    <div>
      <h1 style={{ fontFamily: 600, fontSize: '15rem', textAlign: 'center' }}>{randomGreeting}</h1>
    </div>
  );
};

export default Greeting;
