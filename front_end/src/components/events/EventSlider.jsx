// Importing necessary modules and components
import { useState } from 'react'; // Importing the useState hook for managing state
import Slider from 'react-slider'; // Importing Slider component
import { RegisterForm } from '../forms/RegisterForm.jsx'; // Importing RegisterForm component

// Defining the EventSlider component
export const EventSlider = ({ bookData }) => {
  // State to store the index of the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle slide change
  const handleChange = (newValue) => {
    setCurrentIndex(newValue);
  };

  // Array of event images
  const images = bookData.map(book => book.picture);

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to the next slide
  const goToNextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Rendering the event slider content
  return (
    <div className='erp-image-slider'>
      {/* Button to go to the previous slide */}
      <button className='erp-slider-button' onClick={goToPrevSlide}>Previous</button>
      {/* Slider component for navigating through images */}
      <Slider 
        value={currentIndex}
        onChange={handleChange}
        min={0}
        max={images.length - 1}
        step={1}
      />
      {/* Image for the current slide */}
      <img className='erp-image' src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      {/* Button to go to the next slide */}
      <button className='erp-slider-button' onClick={goToNextSlide}>Next</button>
      {/* Details of the current event */}
      <div>
        {/* Name and description of the current event */}
        <h3>{bookData.find(book => book.picture === images[currentIndex])?.name}</h3>
        <p>{bookData.find(book => book.picture === images[currentIndex])?.description}</p>
      </div>
      {/* Registration form for the current event */}
      <RegisterForm eventId={bookData.find(book => book.picture === images[currentIndex])?.id}/>
    </div>
  );
};