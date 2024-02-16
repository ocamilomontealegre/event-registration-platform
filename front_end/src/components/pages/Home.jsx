// Importing necessary modules from React and other components
import { useState, useEffect } from 'react';
import { Title } from '../common/Title.jsx'; // Assuming this component renders a title
import { Message } from '../common/Message.jsx'; // Assuming this component renders a message
import { EventSlider } from '../events/EventSlider.jsx'; // Assuming this component renders an event slider
import { getEvents } from '../../services/getEvents.js'; // Importing the function to fetch events

// Defining the Home component
export const Home = () => {
  // State to store the event data
  const [bookData, setBookData] = useState([]);

  // Fetching event data when the component mounts
  useEffect(() => {
    // Function to fetch event data asynchronously
    const fetchData = async () => {
      try {
        // Fetching event data from the service
        const result = await getEvents();
        // Updating the state with the fetched event data
        setBookData(result);  
      } catch (err) {
        // Handling errors if fetching data fails
        console.error(err);
      }
    };

    // Invoking the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once after the component mounts

  // Rendering the home page content
  return (
    <div className='erp-home'>
      {/* Rendering the title component */}
      <Title text='Welcome'/>
      {/* Rendering the message component */}
      <Message text='Looking for your next adventure?' />
      {/* Rendering the event slider component with event data */}
      <EventSlider bookData={bookData}/>
    </div>
  );
};