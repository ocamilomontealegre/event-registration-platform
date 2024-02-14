
import { useState } from 'react';
import Slider from 'react-slider';
import { RegisterForm } from '../forms/RegisterForm.jsx';

export const EventSlider = ({ bookData }) => {
  const [ currentIndex, setCurrentIndex ] = useState(0);

  const handleChange = (newValue) => {
    setCurrentIndex(newValue);
  };

  const images = bookData.map(book => book.picture);

  const goToPrevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return(
    <div className='erp-image-slider'>
      <button className='erp-slider-button' onClick={goToPrevSlide}>Previous</button>
      <Slider 
        value={currentIndex}
        onChange={handleChange}
        min={0}
        max={images.length - 1}
        step={1}
      />
      <img className='erp-image' src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button className='erp-slider-button' onClick={goToNextSlide}>Next</button>
      <div>
        <h3>{bookData.find(book => book.picture === images[currentIndex])?.name}</h3>
        <p>{bookData.find(book => book.picture === images[currentIndex])?.description}</p>
      </div>
      <RegisterForm eventId={bookData.find(book => book.picture === images[currentIndex])?.id}/>
    </div>
  );
};