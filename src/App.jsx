import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import GalleryApp from './GalleryApp';
import About from './components/about';
import Contact from './components/Contact';
import Favourites from './components/Favourites';

function App() {
  const [title] = useState("PhoGalleria");
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  }); 

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleLike = (image) => {
    setFavorites(prev => {
      const exists = prev.some(img => img.id === image.id);
      return exists ? prev.filter(img => img.id !== image.id) : [...prev, image];
    });
  };

  const handleRemoveFavorite = (image) => {
    setFavorites(prev => prev.filter(img => img.id !== image.id));
  };


  return (
    <Router>      
      <Routes>
        <Route path="/" element={
          <div className="home-page">
            <Header headtext={title} />
            <GalleryApp favorites={favorites} onLike={handleLike} />
          </div>
        }/> 

        < Route path ="/about" element={<About />} />   

        < Route path ="/contact" element={<Contact />} /> 

        < Route path ="/favourites" element={<Favourites  favorites={favorites} 
            onRemove={handleRemoveFavorite} />} /> 
        </Routes>
    </Router>
  );

}

export default App
