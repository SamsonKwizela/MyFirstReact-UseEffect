import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [albums, setAlbums] = useState([]);

  // Fetch albums when the component mounts
  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.error("Error fetching albums:", error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Albums</h1>
        {albums.length > 0 ? (
          <ul>
            {albums.map((album) => (
              <li key={album.id}>{album.title}</li>
            ))}
          </ul>
        ) : (
          <p>Loading albums...</p>
        )}
      </header>
    </div>
  );
}

export default App;
