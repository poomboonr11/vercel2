"use client"
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const IndexPage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const socket = io('http://localhost:8000'); // Replace with your Socket.IO server URL
    socket.on('eiei', (data) => {
      setMessage(data);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Socket.IO Client</h1>
      <p>Received message: {message}</p>
    </div>
  );
};

export default IndexPage;
