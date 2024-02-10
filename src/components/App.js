// create your App component here

import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogImage(data.message);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={dogImage} alt="A Random Dog" />
    </div>
  );
}

export default App;
