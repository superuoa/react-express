import React, { useEffect, useState } from 'react';

function App() {

  const [url, setUrl] = useState('');

  useEffect(() => {

    fetch(`${process.env.REACT_APP_EXPRESS_URL}/getURL`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log('data',data);
        setUrl(data.url);
      })

  }, [])

  

  return (
    <div className="App">
      hello react {url}
    </div>
  );
}

export default App;
