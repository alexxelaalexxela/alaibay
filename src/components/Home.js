// Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h1>Bienvenue sur notre organisme de surf</h1>
      <img src="background_image.jpg" alt="Surf Wave" />
      <div className="buttons">
        <button>Plus d'informations</button>
        <button>Espace Membre</button>
      </div>
    </div>
  );
};

export default Home;
