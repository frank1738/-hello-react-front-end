import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchGreeting } from '../store/greetingsStore';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  const data = useSelector((state) => state).greeting;
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default Greeting;
