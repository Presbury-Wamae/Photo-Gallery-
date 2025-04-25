import React, { useEffect, useState } from 'react';
import ImageList from './components/ImageList';
import Searchbar from './components/Searchbar';
import axios from 'axios';

const GalleryApp = ({favorites, onLike}) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const fetchImages = () => {
    setIsLoading(true);
    axios.get(`https://photo-gallery-2mcj.onrender.com/images`, {
      params: {
        _page: page,
        _limit: 6,
        _sort: 'id',
        _order: 'asc'  
      }
    })
    .then((response) => {
      setImages(prev => [...prev, ...response.data]);
      setIsLoading(false);
    })
    .catch((err) => {
      console.error('Error fetching images:', err);
      setIsLoading(false);
    });
  }; 

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.offsetHeight - 100
        && !isLoading
      ) {
        setPage(prev => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  const handleLoadMoreClick = () => {
    setPage(prev => prev + 1);
  };

  const filteredImages = images.filter(image => {
    const matchesSearch =
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedCategory === "all" ||
      image.category?.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });


  return (
    <div className="gallery-container">
      <Searchbar
        onSearch={setSearchTerm}
        onCategoryChange={setSelectedCategory}
      />

      <h1 className="gallery-title">My Photo Gallery</h1>
      <ImageList images={filteredImages}  onLike={onLike} favorites={favorites} />
      {isLoading && <p>Loading more images...</p>}
      {!isLoading && (
        <button className="load-more-btn" onClick={handleLoadMoreClick}>
          Load More
        </button>
      )}
    </div>
  );
};

export default GalleryApp;
