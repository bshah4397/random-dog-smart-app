import React, { useEffect, useState } from 'react';

export function MessageListener() {
  const [messages, setMessages] = useState('');

  useEffect(() => {
    const handleMessage = (event) => {
      console.log(event);
      const info = {
        timestamp: event.timeStamp,
        data: event.data
      };
      setMessages(prev => prev + JSON.stringify(info, null, 2) + '\n\n');
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div>
      <div style={{ marginTop: '20px', padding: '20px' }}>
        <h3>Messages:</h3>
        <pre id="messages" style={{ 
          backgroundColor: '#f5f5f5', 
          padding: '10px', 
          maxHeight: '500px', 
          overflow: 'auto',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word'
        }}>
          {messages}
        </pre>
      </div>
    </div>
  );
}